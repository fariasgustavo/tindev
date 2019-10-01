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
});