let userName = prompt('enter your name');

class View {
  showLetters(letters){
    letters.forEach(letter => console.log (letter));
  }
}

class Model {
  constructor(view) {
    this.letters = [];
    this.view = view;
  }
  
  convertString(string) {
    this.letters =string.split("").reverse();
    this.view.showLetters(this.letters);
  }
}
class Controller {
  constructor(model) {
    this.model = model;
  }
  
  handle() {
    this.model.convertString(userName);
  }
}

const view = new View();
const model = new Model(view);
const controller = new Controller(model);


controller.handle();

