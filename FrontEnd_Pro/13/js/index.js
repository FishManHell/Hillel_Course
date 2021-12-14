
class Denys {
  run() {
     console.log("бежит");
  }
  go() {
    console.log("идёт");
  }
  say() {
    console.log("говорит");
  }
}
class Sasha extends Denys {
  run() {
    super.run();
    console.log("тикать");
  }
  go() {
    super.go();
    console.log("идет по другому");
  }
}
class Fabrika {
 static create (type)
  {
    if (type == Denys){
      return new Denys();
    }
    if (type == Sasha){
      return new Sasha();
    }
 }
 }

let denys = Fabrika.create(Denys);
let sasha = Fabrika.create(Sasha);

denys.run();
denys.go();
sasha.go();
sasha.run();

