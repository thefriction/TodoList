const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();
app.use(express.static("public"));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));

var list = [] ;


app.get("/", function(req, res){
var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
var today  = new Date();
var date = today.toLocaleDateString("en-US", options);

res.render("list", {
    kindOfDay:date,
        items:list 
});

});

app.post("/",function(req,res){
    var tmp = 
    {
        listBody:req.body.todoItem
    }
    list.push(tmp);
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    var today  = new Date();
    var date = today.toLocaleDateString("en-US", options);
    res.render("list",
      {
        kindOfDay:date,
        items:list        
      });
    
    
   

});
app.listen( 3000,function(){
    console.log("LISTENING ON 3000");
});
