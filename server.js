const express = noderequire("express");
const Bodyparser = noderequire("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.sendFile(_dirname+"/index.html");
});

var n1 = req.body.num1;
var n2 = req.body.num2;

app.post("/", function(req, res){
    var n1 = Number(req.body.num1);
    var n2 = Number(req.body.num2);
    var result = n1+n2
    res.send("The answer is " + result);
});

app.listen(3000, function(){
    console.log("Server has started on port 3000");
});