var express = require("express");
var app = express();

app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const addNumbers = (number1, number2) => {
  var num1 = parseInt(number1);
  var num2 = parseInt(number2);
  var result = num1 + num2;
  return result;
};

const subNumbers = (number1, number2) => {
  var num1 = parseInt(number1);
  var num2 = parseInt(number2);
  var result = num1 - num2;
  return result;
};
const mulNumbers = (number1, number2) => {
  var num1 = parseInt(number1);
  var num2 = parseInt(number2);
  var result = num1 * num2;
  return result;
};
const divNumbers = (number1, number2) => {
  var num1 = parseInt(number1);
  var num2 = parseInt(number2);
  var result = num1 / num2;
  return result;
};

app.get("/addTwoNumbers", (req, res) => {
  var number1 = req.query.number1;
  var number2 = req.query.number2;
  var result = addNumbers(number1, number2);
  res.json({ statusCode: 200, data: result, message: "Success" });
});

app.get("/subTwoNumbers", (req, res) => {
  var number1 = req.query.number1;
  var number2 = req.query.number2;
  var result = subNumbers(number1, number2);
  res.json({ statusCode: 200, data: result, message: "Success" });
});
app.get("/mulTwoNumbers", (req, res) => {
  var number1 = req.query.number1;
  var number2 = req.query.number2;
  var result = mulNumbers(number1, number2);
  res.json({ statusCode: 200, data: result, message: "Success" });
});
app.get("/divTwoNumbers", (req, res) => {
  var number1 = req.query.number1;
  var number2 = req.query.number2;
  var result = divNumbers(number1, number2);
  res.json({ statusCode: 200, data: result, message: "Success" });
});

var port = process.env.port || 3000;
app.listen(port, () => {
  console.log("App running at http://localhost:" + port);
});
