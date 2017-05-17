module.exports = function(app) {
     app.get('/',function(req,res){
          var message = "Hello!";
          res.send(message);
     });
}