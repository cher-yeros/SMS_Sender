const axios = require('axios');
const xlsx = require('xlsx');

// var wb = xlsx.readFile("list1.xlsx")
var wb = xlsx.readFile("Horeb.xlsx");

var ws = wb.Sheets["#hack"];

var data = xlsx.utils.sheet_to_json(ws);

// console.log(data);
var i = 0;

var newD = data.map(function(record) {
    var phone = record.Phone;
    var name = record.Name;
    var sex = record.Gender;
    var nickname = record.Nickname;
    name = name.search(" ") > 0 ? name.substring(0, name.indexOf(" ")) : name;
    name = name.toUpperCase();

    // console.log(record);

    var greet = sex == "M" ? "neh" : "nesh";
    var insist = sex == "M" ? "endatker" : "endatkeri";
    var last = sex == "M" ? "lastawesek" : "lastawesesh";
    var bless = sex == "M" ? "tebarek" : "tebareki";
    var marfed = sex == "M" ? "arefedk" : "arefedsh";


    // var messege = `Hi, ${name} endet ${greet}? Nege ke fellow buhala retreat slemengeba mekret aychalem. in case maymechachu kalachum asaweku. Ena le retreat yemihon ke 50 birr jemro eske zare mata le leaders endetsetu yhun. `;
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

    //var messege = `Hi ${nickname} endet ${marfed}? Hulu selam nw a? zare 11:30 lay team slalen MKC alen. Aykerem. demo surprise'um endale nw. See you later!`
    //var messege = `Hello ${name} you're successfully registered on hackHawassa2021. It will be held from the upcoming friday to sunday. For more: contact Horeb DS leaders.`
    var messege = `Hi ${nickname} endet ${greet}? as we all know zare hack engebalen. So, mata ke fellow bohala abren enhedalen. bring your PC and ansola . See you all! Horeb Leaders`;
    //console.log(messege,messege.length);
    sendIt(name, phone, messege);


    // console.log(messege.length)

    // console.log(name, phone);
});

function sendIt(name, phone, messege) {

    var uname = "yero";
    var pwd = "1234";

    var baseUrl = "http://192.168.43.46:8080/SendSMS";

    var url = baseUrl + `?username=${uname}&password=${pwd}&phone=${phone}&message=${messege}`;


    // var messege = `Hi, Horebs endet nachu? Nege ke fellow buhala retreat slemengeba mekret aychalem. in case maymechachu kalachum asaweku. Ena le retreat yemihon ke 50 birr jemro eske zare mata le leaders endetsetu yhun. `;

    axios.get(url)
        .then(function(response) {
            if (response.data.status == '200') {
                console.log("Messege is sent to : " + name + "\n")
            }
        })
        .catch(function(error) {

            console.log(error);
        })
        .then(function() {
            // always executed
            // console.log("THe request has ended here")
        });

    // console.log(name, phone);
    // console.log(name, "\n");

}