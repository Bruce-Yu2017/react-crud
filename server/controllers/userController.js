let mongoose = require('mongoose');
let path = require("path");
let User = mongoose.model("User");


module.exports = {
  addName: function(req, res) {
    let user = new User();
    user.name = req.body.newname;
    user.save(function(err) {
      res.json("success");
    })
  },

  getAllName: (req, res) => {
    User.find({}, (err, user) => {
      if(err) {
        console.log('err from getallname: ', err);
      }
      else {
        // console.log(user);
        res.json(user);
      }
    })
  },

  deleteOne: (req, res) => {
    User.remove({_id: req.params.id}, (err) => {
      if(err) {
        console.log('err from delete: ', err);
      }
      else {
        res.json("success delete")
      }
    })
  },

  editName: (req, res) => {
    console.log(req.params.name);
    
    User.findByIdAndUpdate(req.params.id, { $set: { name: req.params.name}}, (err) => {
      res.json("update success");
    })
  }
}