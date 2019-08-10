const Dev = require('../models/Dev');

module.exports = {

    async store(req,res){
        const { devId } = req.params;
        const { userid } = req.headers;

        const loggedDev = await Dev.findById(userid);
        const targetDev = await Dev.findById(devId);

        if(!targetDev)
            return res.status(400).json({ error: "Dev not found!" });
        
        if(targetDev.likes.includes(userid))
            return res.json({ message: 'Has matched' });

        loggedDev.likes.push(targetDev._id);
        await loggedDev.save();

        return res.json({ loggedDev });
    }

}