"use strict";

//npm init -y
//install axios and xlsx packages by npm install axios xlsx
var axios = require('axios');

var xlsx = require('xlsx'); // var wb = xlsx.readFile("list1.xlsx") 


var wb = xlsx.readFile("file/example.xlsx"); //read excel file

var ws = wb.Sheets["exampleSheetName"]; //sheet name you want to read 

var data = xlsx.utils.sheet_to_json(ws); //change the data to json
// console.log(data);

var i = 0;
var newD = data.map(function (record) {
  //loop through the excel list
  var phone = record.Phone; //reading data by attribute

  var name = record.Name;
  var sex = record.Gender;
  var nickname = record.Nickname;
  var messege = "Hi ".concat(nickname, " How are yout? I am fine."); //messege to be sent
  //console.log(messege,messege.length);

  sendIt(name, phone, messege);
});

function sendIt(name, phone, messege) {
  var uname = "yero"; //set up this on the app under user option

  var pwd = "1234"; //this too

  var baseUrl = "http://192.168.43.46:8080/SendSMS"; //base url the app gonna give you

  var url = baseUrl + "?username=".concat(uname, "&password=").concat(pwd, "&phone=").concat(phone, "&message=").concat(messege); //url to send SMS ; see on the app for more

  axios.get(url) //send the actual messege request
  .then(function (response) {
    //this executes when the messege is sent
    if (response.data.status == '200') {
      console.log("Messege is sent to : " + name + "\n");
    }
  })["catch"](function (error) {
    console.log(error);
  }).then(function () {// always executed
    // console.log("THe request has ended here")
  });
}