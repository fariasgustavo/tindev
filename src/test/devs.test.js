const request = require('../config/axios');

require('dotenv').config({
    path: process.env.ENVIRONMENT === 'test' ? './.env-test' : './.env'
});

const devModel = require('../models/Dev');

describe('store', () => {
    beforeAll(() => {
        devModel.deleteMany({},{});
    });

    it('should store a new Dev', async () => {
        const store = await request.post('/devs', {
            username: 'fariasgustavo'
        });
    
        expect(store);
    });

    it('should store a dev id in likes list', async () => {
        const devOne = await request.post('/devs', {
            username: 'gabrielbender'
        });

        const devTwo = await request.post('/devs', {
            username: 'miguelnatus'
        });

        const newLike = await request.post(`/devs/${devOne.data._id}/likes`,null,{
            headers: {
                userid: devTwo.data._id
            }
        });

        const { likes } = newLike.data.loggedDev;

        expect(likes.indexOf(devTwo.data._id)).toBeGreaterThan(-1);
    });
});