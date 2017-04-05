
var hello = require("../hello-world.js");

module.exports = function(app)
{
     app.get('/',function(req,res){
        res.send(hello.phrase);
     });
}


