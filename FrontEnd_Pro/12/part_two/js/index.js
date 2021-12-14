function Friends (name, age, gender) {
  this.name = name;
  this.age = age;
  this.gender = gender;
}
Friends.prototype.walk = function() {
   console.log(this.name + " " + 'ходит уже' + " " + this.age + " " + "лет");
}

let sasha = new Friends ('Саша', 24, 'мужской');
let denys = new Friends ('Денис', 24, 'мужской');
let alina = new Friends ('Настя', 24, 'женский');

alina.strange = 'странный'
denys.weak = 'слабый'
sasha.strong = 'сильный';

alina.talking = function() {
console.log(this.name + " " + 'говорит, что у него' + " " + this.strange + " " + this.gender + " " + "характер" );
}
denys.talking = function() {
console.log(this.name + " " + 'говорит, что у него' + " " + this.weak + " " + this.gender + " " + "характер" );
}
sasha.talking = function() {
console.log(this.name + " " + 'говорит, что у него' + " " + this.strong + " " + this.gender + " " + "характер");
}
sasha.walk();
denys.talking();