const express = require('express');
const app =express();
const bodyParser = require("body-parser");
const ejs = require("ejs");
const request = require("request");
const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/clientsDB", {useNewUrlParser: true});

app.set('view engine','ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("Connected");
});
var clientschema = new mongoose.Schema({
    name: String,
    phone:String,
    email:String,
    query:String,
  });
  const Client = mongoose.model("Client",clientschema);

app.listen(3000,function(){
    console.log("Server Started");
});

app.get("/",function(req,res){
    res.render("home");
});

app.get("/aboutus",function(req,res){
    res.render("about");
});
app.get("/contactus",function(req,res){
    res.render("contact");
})

app.get("/photos",function(req,res){
    res.render("gallery");
})

app.get("/services",function(req,res){
    res.render("services");
});

app.post("/",function(req,res){
    const data= new Client({
        name: req.body.name,
        phone: req.body.phonenumber,
        email: req.body.emailaddress,
        query: req.body.subject,
    });
        data.save();
    res.redirect("/");
});

app.get("/clients",function(req,res){
    Client.find({},function(err,foundList){
        if(err){
            console.log(err);
        }
        else{
            if(!foundList){
                console.log("Empty");
            }
            else{
                res.render("clients",{toPost: foundList});
            }
        }
    });
})
app.post("/clients",function(req,res){
    Client.deleteOne({_id: req.body.btn},function(err){
        if(err){
            console.log(err);
        }
    });
    res.redirect("/clients");
});