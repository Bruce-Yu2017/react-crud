let mainroutes = require('../controllers/userController');
var path = require('path');



module.exports = (app) => {
  app.post("/add", function(req, res) {
    mainroutes.addName(req, res);
  })

  app.get("/allName", function(req, res) {
    mainroutes.getAllName(req, res);
  })

  app.delete("/name/:id", function(req, res) {
    mainroutes.deleteOne(req, res);
  })

  app.put("/edit/:id/:name", function(req, res) {
    mainroutes.editName(req, res);
  })

  

}