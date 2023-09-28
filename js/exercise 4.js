const studentList = [
  {
  firstName: "Allan",
  lastName: "Able",
  scores: [95, 85, 92, 98]
  },
  {
  firstName: "Amy",
  lastName: "Alexander",
  scores: [80, 88, 100]
  },
  {
  firstName: "Betty",
  lastName: "Barns",
  scores: [70, 80, 90, 100]
  },
  {
  firstName: "Bob",
  lastName: "Bones",
  scores: [75, 85, 95, 85]
  },
  {
  firstName: "Cindy",
  lastName: "Chase",
  scores: [95, 90, 92, 98]
  },
  {
  firstName: "Charles",
  lastName: "Chips",
  scores: [88, 99, 90]
  },
];

const display = studentList => {
  studentList.forEach(student => {
    console.log(`Full name(last, first): ${student.lastName}, ${student.firstName}`);
    console.log (`New scores are: ${student.scores}`);

  })
}

studentList.forEach(student=> {
  student.scores = student.scores.map((score=> score+5))



});

studentList.forEach(student=>{

  student.scores.push(student.scores.reduce((sum, score) => sum+score,0) / student.scores.length).toFixed(2)


})






display(studentList);