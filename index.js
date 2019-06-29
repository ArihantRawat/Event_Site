const express = require('express');
const app =express();
const bodyParser = require("body-parser");
const ejs = require("ejs");
const request = require("request");

app.set('view engine','ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.listen(3000,function(){
    console.log("Server Started");
});

app.get("/",function(req,res){
    res.render("home");
});

