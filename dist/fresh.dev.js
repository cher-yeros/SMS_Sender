"use strict";

var axios = require('axios');

var xlsx = require('xlsx');

var wb = xlsx.readFile("Horeb.xlsx");
var ws = wb.Sheets["fresh"];
var data = xlsx.utils.sheet_to_json(ws);
var i = 0;
var newD = data.map(function (record) {
  var phone = record.Phone;
  var name = record.Name;
  var sex = record.Gender;
  var nickname = record.Nickname;
  name = name.search(" ") > 0 ? name.substring(0, name.indexOf(" ")) : name; //name = name.toUpperCase();

  var greet = sex == "M" ? "neh" : "nesh";
  var insist = sex == "M" ? "endatker" : "endatkeri";
  var last = sex == "M" ? "lastawesek" : "lastawesesh";
  var bless = sex == "M" ? "tebarek" : "tebareki";
  var marfed = sex == "M" ? "arefedk" : "arefedsh";
  var call = sex == "M" ? "ydewelulehal" : "ydeweluleshal"; //var messege =  `Hi ${name}, endet ${greet} nege Horeb team Skill devt slalen, 03:00 lay MKC enegenagn. see you tommorow!`
  //var messege = `Hi ${name}, dena ${greet} adel? Zare Team Program slalen 11:30 lay MKC enegenagnalen. Ena Marfedem mekretem aychalem. See you`;
  //var messege =  `Hi Horebs endet nachu? Zare ke fellow buhala retreat engebalen. enam ansola, PC, bible ena mastawesha, slipper ena ye lelit lebs yzachu nu. fellow siyalk abren enhedalen. Stay Blessed!`
  //var messege = `Hi Horebs endet nachu? zare silent outreach slemenweta 11:30 lay MKC enegenegn. endatkeru eshii. tebareku!`
  //var messege = `Hi ${nickname} endet ${greet}? Nege Yalen ye Team program mihonew Bethel Mekane Eyesyus nw. Ena adis bota slehone 11:15 sihon Shell tegenagnten abren enhedalen. Begize enegenagn. Ena degmo ye Team family temedebolachual, ye family leader ${call}. ${bless}!`;
  //console.losg(nickname)

  var messege = "Hi ".concat(nickname, " endet ").concat(greet, "? Zare 3:30 lay Skill Devt slalen chefe kale hiwet enegenagnalen. mekret aychalem. ").concat(bless, " !"); //console.log(messege,messege.length, ++i)
  //setTimeout(sendIt(name, phone, messege), 300);

  sendIt(name, phone, messege);
});

function sendIt(name, phone, messege) {
  var uname = "yero";
  var pwd = "1234";
  var baseUrl = "http://192.168.43.46:8090/SendSMS";
  var url = baseUrl + "?username=".concat(uname, "&password=").concat(pwd, "&phone=").concat(phone, "&message=").concat(messege); // var messege = `Hi, Horebs endet nachu? Nege ke fellow buhala retreat slemengeba mekret aychalem. in case maymechachu kalachum asaweku. Ena le retreat yemihon ke 50 birr jemro eske zare mata le leaders endetsetu yhun. `;

  axios.get(url).then(function (response) {
    if (response.data.status == '200') {
      console.log("Messege is sent to : " + name + "\n => " + i);
    }
  })["catch"](function (error) {
    console.log(error);
  }).then(function () {});
}