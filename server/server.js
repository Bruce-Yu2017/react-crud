const express = require("express");
const app = express();
const path = require("path");
var bodyParser = require('body-parser');


app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extends: true }));


require('./config/mongoose.js');

require('./config/routes.js')(app);


const publicPath = path.join(__dirname, "..", "public");
app.use(express.static(publicPath));



app.get("*", (req, res) => {
  res.sendFile(path.join(publicPath, "index.html"));
})

app.listen(8080, () => {
  console.log("server is up");
})