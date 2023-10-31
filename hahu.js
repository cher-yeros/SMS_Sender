const axios = require('axios');
const xlsx = require('xlsx');

var wb = xlsx.readFile("hahu.xlsx");

var ws = wb.Sheets["Sheet1"];

var data = xlsx.utils.sheet_to_json(ws);

var i = 0;

let horebs = []

var newD = data.map(function(record) {
    var phone = record.Phone;
    //var name = record.Name;
    var sex = record.Gender;
    var nickname = record.Nickname;

    //name = name.search(" ") > 0 ? name.substring(0, name.indexOf(" ")) : name;
    //name = name.toUpperCase();


    var greet = sex == "M" ? "neh" : "nesh";
    var insist = sex == "M" ? "endatker" : "endatkeri";
    var last = sex == "M" ? "lastawesek" : "lastawesesh";
    var bless = sex == "M" ? "tebarek" : "tebareki";
    var marfed = sex == "M" ? "arefedk" : "arefedsh";

    var message = `Hi ${nickname} endet ${greet}? ene dena negn. How was the week? I hope arif endeneber. Zare 11:30 team endalen ${last} nw. so, Bethel Mekane Iyesus begize enegenagn. See you later. ${bless} !`;
    
    //sendIt(name, phone, messege);
    
    
    let newPhone;
    if (phone[0] == "0") {
        //console.log(phone);
        newPhone = "251" + phone.substring(1, phone.length)
    }
    //if (phone[0] == "9") {
    //    console.log(phone)
    //    newPhone = "251" + phone
    //}
    const horeb = {
        Phone: newPhone,
        Sim: 2,
        Priority: 0,
        Message: message
    } 
    //const ws = reader.utils.json_to_sheet(student_data)

    horebs.push(horeb)

});

var file = xlsx.readFile("test1.xlsx");

const wsTest = xlsx.utils.json_to_sheet(horebs)
xlsx.utils.book_append_sheet(file, wsTest, "messege")
//xlsx.utils.add


// Writing to our file
xlsx.writeFile(file, './test1.xlsx')


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