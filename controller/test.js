exports.helloworld = function list(req, res){
    let name = req.query.name;
    if (!name){
        return res.send("Hello world");
    }else{
        return res.send("Hello " + name); 
    }
  
}