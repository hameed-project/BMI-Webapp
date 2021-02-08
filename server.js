const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));

app.get("/", function (req, res) {
    console.log(res.body);
    res.sendFile(__dirname + "/index.html");
});



app.post("/", function (req, res) {
    var weight = parseFloat(req.body.num1);
    var height = parseFloat(req.body.num2);
    var result = weight / (height * height);
    res.send("Your BMI Value :" + result);
});

app.listen(3000, function () {
    console.log("Server start");
})