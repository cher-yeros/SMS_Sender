const axios = require('axios');
const xlsx = require('xlsx');

var wb = xlsx.readFile("Horeb.xlsx");

var ws = wb.Sheets["my"];

var data = xlsx.utils.sheet_to_json(ws);

var i = 0;

var newD = data.map(function(record) {
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

    //var messege =  `Hi ${name}, endet ${greet} nege Horeb team Skill devt slalen, 03:00 lay MKC enegenagn. see you tommorow!`
    
    //var messege = `Hi ${name}, dena ${greet} adel? Zare Team Program slalen 11:30 lay MKC enegenagnalen. Ena Marfedem mekretem aychalem. See you`;
    //var messege =  `Hi Horebs endet nachu? Zare ke fellow buhala retreat engebalen. enam ansola, PC, bible ena mastawesha, slipper ena ye lelit lebs yzachu nu. fellow siyalk abren enhedalen. Stay Blessed!`
    //var messege = `Hi Horebs endaet nachu? zare silent outreach slemenweta 11:30 lay MKC enegenegn. endatkeru eshii. tebareku!`
    //var messege = `Hi Horebs endet nachu? Koyta konjo nw? I hope arif nw. Zare Skill Development endemaynor lemasawek nw. Segno Team Program lay enegenagnalen tebareku!`
    //var messege = `Hi Horebs endet nachu? Zare 3:30 lay Skill Devt slalen Chefe kale hiwet enegenagn. PC yalachu hulachum yzachu nu. Tebareku!`;
    //var messege = `Hi Horebs endet nachu? Zare team program slalen, 11:30 lay Bethel Mekane Eyesus enegenagn. ena ye movie night 30 birr yzachu nu. please endatarefdu. tebareku.`;
    //var messege = `Hi ${nickname} endet ${greet}? Zare team slalen, 11:30 lay Bethel Mekane Eyesus enegenagn. Mkretm marfedm aychalem. ${bless} !`;
    //var messege = `Hi ${nickname} endet ${greet}? Zare 3:30 lay Skill Devt slalen chefe kale hiwet enegenagnalen. mekret aychalem. ${bless} !`;
    //var messege = `Hi ${nickname} endet ${greet}? Zare 3:30 lay Skill Devt slalen chefe kale hiwet enegenagnalen. mekret aychalem. ${bless} !`;
    var messege = `Hi ${nickname} endet ${greet}? ene dena negn. Zare 11:30 team endalen ${last} nw. begize enegenagn. ${bless} !`;
    console.log(messege,messege.length, ++i)
    sendIt(name, phone, messege);
    //console.log(nickname)

});

function sendIt(name, phone, messege) {

    var uname = "yero";
    var pwd = "1234";

    var baseUrl = "http://192.168.43.46:8090/SendSMS";
    //var baseUrl = "http://192.168.137.149:8090/SendSMS";

    var url = baseUrl + `?username=${uname}&password=${pwd}&phone=${phone}&message=${messege}`;


    // var messege = `Hi, Horebs endet nachu? Nege ke fellow buhala retreat slemengeba mekret aychalem. in case maymechachu kalachum asaweku. Ena le retreat yemihon ke 50 birr jemro eske zare mata le leaders endetsetu yhun. `;

    axios.get(url)
        .then(function(response) {
            if (response.data.status == '200') {
                console.log("Messege is sent to : " + name)
            }
        })
        .catch(function(error) {
            console.log(error);
        })
        .then(function() {

        });
}