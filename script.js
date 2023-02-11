/** @format */

let arr = [
  { id: 1, name: "john", age: "18", marks: 80 },
  { id: 2, name: "jack", age: "20", marks: 85 },
  { id: 3, name: "karen", age: "19", marks: 35 },
];

function PrintStudentswithMap() {
  arr.map(student => {
    if (student.marks > 50) {
      console.log(student);
    }
  });
}

function PrintStudentsbyForEach() {
  arr.forEach(student => {
    if (student.marks > 50) {
      console.log(student);
    }
  });
}

function addData() {
  const newStudent = { id: 4, name: "susan", age: "20", marks: 45 };
  arr.push(newStudent);
  console.log(arr);
}

function removeFailedStudent() {
  arr.forEach((student, index) => {
    if (student.marks < 50) {
      arr.splice(index, 1);
    }
  });
  console.log(arr);
}

function concatenateArray() {
  const newArr = [    { id: 5, name: "mike", age: "19", marks: 60 },    { id: 6, name: "jane", age: "20", marks: 75 },    { id: 7, name: "bob", age: "18", marks: 40 },  ];
  const concatenatedArray = arr.concat(newArr);
  console.log(concatenatedArray);
}
