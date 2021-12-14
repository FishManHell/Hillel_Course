var text = 'hello MY name is JavaScript and I like your code styLe';
var test = text.split(' '); 
var testText = [];
for (var i = 0; i<test.length; i++){
  var testOne = test[i].split('');
  if(testOne < 'a') {
   for (var j = 0; j < testOne.length; j++) {
     if (testOne[j] === testOne[j].toUpperCase()) {
        testOne[j] = testOne[j].toLowerCase();     
      } else {
        testOne[j] = testOne[j].toUpperCase();
     } 
   }
  }
  testText.push(testOne.join(''));
}
console.log(testText.join(' '));
alert (testText.join(' '));