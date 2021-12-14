var userName =prompt ('Enter your login');

var reg1 = /^[A-Z]{1}[a-zA-Z0-9]*[0-9]{2}$/;

var userPassword =prompt ('Enter your password');

var reg2 = /^[A-Z]{1,5}$/;

console.log ((reg1).test(userName));

console.log ((reg2).test(userPassword));

