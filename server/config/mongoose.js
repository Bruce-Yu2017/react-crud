let mongoose = require('mongoose');
let path = require('path');

let fs = require('fs');

mongoose.connect('mongodb://localhost/author');
// let uristring =
//   process.env.MONGOLAB_URI ||
//   process.env.MONGOHQ_URL ||
//   'mongodb://bruce:bruce@ds261917.mlab.com:61917/food'
// mongoose.connect(uristring);

let models_path = path.join(__dirname, '../models');

fs.readdirSync(models_path).forEach(function (file) {
  if (file.indexOf('.js') >= 0) {
    // require the file (this runs the model file which registers the schema)
    require(models_path + '/' + file);
  }
})