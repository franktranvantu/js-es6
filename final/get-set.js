'use strict';

class Student {
  constructor({ firstName, lastName, age, interestLevel = 5 } = {}) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.interestLevel = interestLevel;
  }
  get name() {
    return `${this.firstName} ${this.lastName}`;
  }
  set name(input) {
    const name = input.split(' ');
    this.firstName = name[0];
    this.lastName = name[1];
  }
}

const stevenJ = new Student({firstName: 'Steven', lastName: 'Jones', age: 22});
console.log(stevenJ.name);
stevenJ.name = 'Frank Tran';
console.log(stevenJ.name);