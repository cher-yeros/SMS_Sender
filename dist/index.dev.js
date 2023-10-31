"use strict";

var axios = require('axios');

var xlsx = require('xlsx'); // var wb = xlsx.readFile("list1.xlsx")


var wb = xlsx.readFile("Horeb.xlsx");
var ws = wb.Sheets["senior_active"];
var data = xlsx.utils.sheet_to_json(ws); // console.log(data);

var i = 0;
var newD = data.map(function (record) {
  var phone = record.Phone;
  var name = record.Name;
  var sex = record.Gender;
  var nickname = record.Nickname;
  name = name.search(" ") > 0 ? name.substring(0, name.indexOf(" ")) : name;
  name = name.toUpperCase();
  var greet = sex == "M" ? "neh" : "nesh";
  var insist = sex == "M" ? "endatker" : "endatkeri";
  var last = sex == "M" ? "lastawesek" : "lastawesesh";
  var bless = sex == "M" ? "tebarek" : "tebareki";
  var marfed = sex == "M" ? "arefedk" : "arefedsh";
  var yzachu = sex == "M" ? "yizeh" : "yizesh";
  var nu = sex == "M" ? "na" : "ney";
  var remember = sex == "M" ? "endatresa" : "endatreshi"; // var messege = `Hi, ${name} endet ${greet}? Nege ke fellow buhala retreat slemengeba mekret aychalem. in case maymechachu kalachum asaweku. Ena le retreat yemihon ke 50 birr jemro eske zare mata le leaders endetsetu yhun. `;
  // var messege = `Hi, Horebs endet nachu? Ee retreat lay Skill dev't slalen PC yalachu hulachum yzachu endetmetu yhun. See you later!`;
  // var messege = `Hi horebawians endet nachu?\nEnde Horeb addis menseraw DS ale,ena hulachum slemetesatefu, Midewelulachu group leaderoch alu, enesu yawerachual. Stay Blessed!`;
  //var messege = `Hi Horeb Graduates? How are you? We are fine Thanks God. We would like to Thank you guys for being with us. Nothing could have happend without you guys supporing us. May God bless you!\nHoreb Leaders`;
  // console.log(messege, messege.length);
  // var messege = `Hi Horebians endet nachu? I hope betam dena nachu. zare skill developement endelelen endetawku nw. Tebareku!`;
  // console.log(++i, name, phone);
  // setTimeout(sendIt, 3000, name, phone, messege);
  //var messege = `Hi ${nickname} endet ${greet}? Zare Silent Outreach endalen ${last} new. ena 11:00 lay Main gibi berr lay tegenagnten,
  //ye HOREB'n alama enasketelalen. ${insist} eshii!`;
  //var messege = `Hi, ${nickname} endet ${greet}? Ereft pis nbr a? WELCOME! to gibi. Ye Horeb leaders segno eskenayachu guagtenal. demo salresaw, tlk SURPRISE alen. segno yemeta sew ysemal. Melkam ken. ${bless}!`;
  //var messege = `Hi ${nickname} dena ${greet} a? zare team slalen 11:30 lay MKC enegenagn. Demo le retreat 50 ${yzachu} memtat ${remember}. mekretem marfedem aychalem. See you later!`
  //var messege = `Hi ${nickname} endet ${greet}? nege skill development slalen 03:00 lay MKC enegenagn. ena PC ${yzachu} ${nu}. demo marfedem mekretem aychalem. See you tomorrow!`
  //var messege = `Hi ${nickname} endet ${greet}? nege skill development slalen 03:00 lay MKC enegenagn. ena PC ${yzachu} ${nu}. demo marfedem mekretem aychalem. See you tomorrow!`
  //var messege = `Hello ${name} , You're successfully Registered on #hackHawassa2021`
  //var messege =  `Hi Horebs endet nachu? Zare ke fellow buhala retreat engebalen. enam ansola, PC, bible ena mastawesha, slipper, ye lelit lebs ena 50 birrun yzachu nu. fellow siyalk abren enhedalen. Stay Blessed!`
  //console.log(messege,messege.length);
  //var messege = `Hi Horebs endet nachu? zare silent outreach slemenweta 11:30 lay MKC enegenegn. endatkeru eshii. tebareku!`

  var messege = "Hi ".concat(nickname, " endet ").concat(greet, "? zare ye Team program mihonew Bethel Mekane Eyesyus nw. Ena adis bota slehone 11:15 sihon Shell tegenagnten abren enhedalen. Begize enegenagn. ").concat(bless, "!");
  sendIt(name, phone, messege); // console.log(messege, messege.length)
  // console.log(name, phone);
});

function sendIt(name, phone, messege) {
  var uname = "yero";
  var pwd = "1234";
  var baseUrl = "http://192.168.43.46:8080/SendSMS";
  var url = baseUrl + "?username=".concat(uname, "&password=").concat(pwd, "&phone=").concat(phone, "&message=").concat(messege); // var messege = `Hi, Horebs endet nachu? Nege ke fellow buhala retreat slemengeba mekret aychalem. in case maymechachu kalachum asaweku. Ena le retreat yemihon ke 50 birr jemro eske zare mata le leaders endetsetu yhun. `;

  axios.get(url).then(function (response) {
    if (response.data.status == '200') {
      console.log("Messege is sent to : " + name + "\n");
    }
  })["catch"](function (error) {
    console.log(error);
  }).then(function () {// always executed
    // console.log("THe request has ended here")
  }); // console.log(name, phone);
  // console.log(name, "\n");
}