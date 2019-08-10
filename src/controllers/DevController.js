const axios = require('axios');
const Dev = require('../models/Dev');

module.exports = {
    async index(req,res){
        const { userid } = req.headers;

        const loggedDev = await Dev.findById(userid);
        const users = await Dev.find({
            $and: [
                {_id: { $ne: userid }},
                {_id: { $nin: loggedDev.dislikes }},
                {_id: { $nin: loggedDev.likes }}
            ]
        });

        return res.json(users);
    },

    async store(req,res){
        const { username } = req.body;

        let userExists = await Dev.findOne({ user: username });

        if(userExists){
            return res.json({ message: 'User has exists!' });
        }

        const response = await axios.get(`https://api.github.com/users/${username}`);
        const { name, bio, avatar_url: avatar } = response.data;

        const stored = await Dev.create({
            name,
            user: username,
            bio,
            avatar
        });

        return res.json({ message: stored });
    }
}