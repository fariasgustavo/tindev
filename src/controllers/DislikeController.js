const Dev = require('../models/Dev');

module.exports = {
    async store(req,res){
        const { devId } = req.params;
        const { userid } = req.headers;

        const loggedDev = await Dev.findById(devId);
        const targetDev = await Dev.findById(userid);

        if(!targetDev)
            return res.status(400).json({ error: "Dev not found!" });
        
        loggedDev.dislikes.push(targetDev._id);
        await loggedDev.save();

        return res.json({ loggedDev });
    }
}