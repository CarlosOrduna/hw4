const express = require("express");
const app = express();
app.engine('html', require('ejs').renderFile);
app.use(express.static("public"));

var fakeData = require("faker");
 
//routes
app.get("/", function(req, res) {
    res.render("index.html");
});

app.get("/index", function(req, res) {
    res.render("index.html");
});

app.get("/security",function(req,res){
    res.render("security.ejs", {randomName:fakeData.name.findName()});
});

app.get("/networking",function(req,res){
    res.render("networking.ejs", {randomName:fakeData.name.findName()});
});

app.get("/cryptography",function(req,res){
    res.render("cryptography.ejs", {randomName:fakeData.name.findName()});
});


// //server listener
// app.listen("8080","127.0.0.1", function(){
//     console.log("Express Server is Running...");
// });

//heroku listener
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Running Express Server...");
});