const User = require("../models/user");

exports.createUser = function list(req, res){
    let user = new User({
        username: "panda",
        password: "123456"
    });
    user.save();
    return res.send("ok");
}

exports.helloworld = function list(req, res){
    let name = req.query.name;
    if (!name){
        return res.send("Hello world");
    }else{
        return res.send("Hello " + name); 
    }
  
}