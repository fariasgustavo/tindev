const dev = require('../controllers/DevController');
const axios = require('axios');
const devModel = require('../models/Dev');

console.log(process.env.ENVIRONMENT === 'test' ? './.env-test' : './.env');

describe('store', function () {
    it('should store a new Dev', async () => {
        devModel.deleteMany({});
        
        const store = await axios.post('/devs', {
            username: 'fariasgustavo'
        });
        console.log(store);
        expect();
    });
});