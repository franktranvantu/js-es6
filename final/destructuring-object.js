'use strict';

let toybox = { item1: 'car', item2: 'ball', item3: 'frisbee' };

// let {item1, item2} = toybox;
// console.log(item1, item2);

let {item1: disc} = toybox;
console.log(disc);