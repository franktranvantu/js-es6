class Bird {
  constructor({color = 'red'} = {}) {
    this.color = color;
  }
  static changeColor(color) {
    this.color = color;
  }
}