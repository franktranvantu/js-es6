'use strict';

let classroom = new Set();

const frankA = {
  name: 'Frank',
  age: 29
},
henry = {
  name: 'Henry',
  age: 34
},
frankB = {
  name: 'Bean',
  age: 34
};

classroom.add(frankA);
classroom.add(henry);
classroom.add(frankA);

if (classroom.has(frankA)) {
  console.log('frankA is in the classroom');
}

if (classroom.has(henry)) {
  console.log('Henry is in the classroom');
}

if (classroom.has(frankB)) {
  console.log('frankB is in the classroom');
}

console.log(`classroom size: ${classroom.size}`);

classroom.delete(frankA);
console.log(`classroom size: ${classroom.size}`);

// Create an array of students from the classroom set
const arrayOfStudents = Array.from(classroom);
console.log(arrayOfStudents);

// Create a set from existing array
const setOfStudents = new Set(arrayOfStudents);
console.log(setOfStudents);