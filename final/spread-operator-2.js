'use strict';

function myFunction (name, iceCreamFlavor) {
  console.log(`${name} really likes ${iceCreamFlavor} ice cream.`)
}

const args = ['Frank', 'Vanilla'];
myFunction(...args);