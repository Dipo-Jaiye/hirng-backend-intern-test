// server.js
// where your node app starts
//Work in Progress

var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.json());
app.post((req,res)=>{
  if(Object.entries(req.body).length === 0 || !req.body.csv){
    res.json({
      error:true,
      message:"Wrong payload"
    })
  }
});
app.post((req,res)=>{
  let csv_file = open(req.body.csv.url); //open url and confirm valid csv
  let csv_json = JSON.parse(csv_file,()=>{req.body.csv.select_fields}); //convert csv to JSON
  let rand_id = 99; //generate random identifier
  res.json({
    conversion_key:rand_id,
    json:csv_json
  })
})


// listen for requests :)
const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});

