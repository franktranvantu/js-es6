'use strict';

function myFunction(name, ...params) {
  console.log(name, params);
}

myFunction('Frank', 1, 2, 3, 'Hello');