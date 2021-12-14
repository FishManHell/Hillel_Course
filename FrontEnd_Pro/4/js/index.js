var userName = prompt ("enter your name");

var userLastName = prompt ("enter your name");

var userSurname = prompt ("enter your name");

var test = [];

test.push(userName, userLastName, userSurname);

var myArr = ["text4", "text5", "text6"];

var str = myArr.concat(test);

console.log(str.join("").length, str);