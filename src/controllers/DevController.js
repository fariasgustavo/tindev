module.exports = {
    store(req,res){
        return res.json({ request: req.body });
    }
}