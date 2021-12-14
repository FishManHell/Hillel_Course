const list = ['name', 'age', 'lastName'];
let obj = {};
for (var i = 0; i < list.length; i++) {
  var test = prompt ('Enter your ' + list[i]);
  if (test) {
  obj[list[i]] = test;
  
}
  
}
console.log(obj);