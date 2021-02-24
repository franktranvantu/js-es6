class Bird {
  constructor({color = 'red'} = {}) {
    this.color = color;
  }
  // static changeColor(color) {
  //   this.color = color;
  // }
  static changeColor(bird, color) {
    bird.color = color;
  }
}

const redBird = new Bird();
console.log(redBird.color);
// Bird.changeColor.call(redBird, 'blue');
Bird.changeColor(redBird, 'blue');
console.log(redBird.color);