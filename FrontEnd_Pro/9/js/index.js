var list = [10, "sashaa", 3, 29, 20, "den", 9, 113, 20];
var list2 = [15, 20, "vova", 29, "den", "sashaa", 9, 10, 2];
var list3 = [];
list.forEach(function(item) {
    if(list2.indexOf(item) !== -1){
      if( typeof item === "string" && item.length > 5){
        list3.push("FSTR");
      }else if( typeof item === "number" && item % 5 === 0){
        list3.push("FIVE");
      }else{
        list3.push(item)
      }
    }
  });
  
console.log(list3);