'use strict';

let classroom = new Map();

const frankA = {
    name: 'Frank',
    age: 29
  },
  henry = {
    name: 'Henry',
    age: 34
  },
  frankB = {
    name: 'Frank',
    age: 29
  };

classroom.set('franka', frankA);
classroom.set('henry', henry);
classroom.set('frankb', frankB);

console.log(`classroom size: ${classroom.size}`);
if (classroom.has('franka')) {
  console.log('franka is in the classroom');
}
if (classroom.has('henry')) {
  console.log('henry is in the classroom');
}
if (classroom.has('frankb')) {
  console.log('frankb is in the classroom');
}

console.log('henry:', classroom.get('henry'));
classroom.delete('henry');
console.log('henry:', classroom.get('henry'));

// classroom.clear();
// console.log(`classroom size: ${classroom.size}`);

for (const student of classroom) {
  console.log(`${student[0]}: ${student[1].name} is ${student[1].age} years old.`);
}