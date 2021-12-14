var testLink1 = "http://example.com/";

var testLink2 = "11http://example.com/";

var testLink3 = "http://example.com/lol";

var testLink4 = "example.com";

var testLink5 = "гилель.нет";

var reg =/^http[s]?:\/\/[a-z0-9-]{1,63}\.[a-z]{2,4}\/$/i;

console.log(reg.test(testLink1));

console.log(reg.test(testLink2));

console.log(reg.test(testLink3));

console.log(reg.test(testLink4));

console.log(reg.test(testLink5));