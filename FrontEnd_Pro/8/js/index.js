var str =('lorem ipsum dolor sit amet consectetur adipisicing elit');
function alphabetize(str) {
 return str.split('').sort().join('');
}
alert(alphabetize(str));
console.log(alphabetize(str));


var text =('hello javascript hello css hello httml');
function firstLetterBig(text) {
 return text.replace(/(^|\s)\S/g, function(big) {return big.toUpperCase()})
}
alert(firstLetterBig(text));
console.log(firstLetterBig(text));