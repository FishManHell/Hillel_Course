function Friends (name, age, gender) {
   this.name = name;
   this.age = age;
   this.gender = gender;
 }
 
 Friends.prototype.walk = function() {
    console.log(this.name + " " + 'ходит уже' + " " + this.age + " " + "лет");
 }
 
 Friends.prototype.talking = function(X) {
    console.log(this.name + " " + 'говорит, что у него' + " " + X + " " + "характер");
 }
 let sasha = new Friends ('Саша', 24, 'мужской');
 sasha.strong = 'сильный';
 
 let denys = new Friends ('Денис', 24, 'мужской');
 denys.weak = 'слабый'
 
 let alina = new Friends ('Алина', 24, 'женский');
 alina.strange = 'странный'
 
 sasha.walk();
 sasha.talking(sasha.strong);
 denys.talking(denys.weak);
 alina.talking(alina.strange);