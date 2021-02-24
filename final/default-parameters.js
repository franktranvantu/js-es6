'use strict';

// function greet(name, timeOfDay) {
//   name = name || 'Frank';
//   timeOfDay = timeOfDay || 'Day';
//   console.log(`Good ${timeOfDay}, ${name}!`);
// }

function greet(name = 'Frank', timeOfDay = 'Day') {
  console.log(`Good ${timeOfDay}, ${name}!`);
}

greet(undefined, 'Afternoon');