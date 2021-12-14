var userName =prompt ('Enter your login');

var reg1 = /^[A-Z]{1}[a-zA-Z0-9]*[0-9]{2}$/;

var test;

if(userName === null) {
  console.log ("Canceled");
} else if((reg1).test(userName)){
  test = true;
  console.log(test);
} else if (userName) {
  alert ('You entered an invalid name');
  test = false;
  console.log(test);
} else {
  console.log('Whoa Whoa Easy');
}

 var userPassword =prompt ('Enter your password');

 var reg2 = /^[A-Z]{1,5}$/;

if(userPassword === null) {
  console.log ("Canceled");
} else if ((reg2).test(userPassword)) {
  test = true;
  console.log(test);
} else if (userPassword ) {
  alert ('You entered an incorrect password');
  test = false;
  console.log(test);
} else {
  console.log('Whoa Whoa Easy');
}