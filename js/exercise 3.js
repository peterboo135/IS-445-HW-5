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

const cLastNameResults = studentList.filter(name => name.lastName.toLowerCase().startsWith("c"))
  .map(name => {
    return {
      firstName: name.firstName,
      lastName: name.lastName,
      minScore: name.scores.reduce((min,score) => {return Math.min(min,score)}),
      avgScore: name.scores.reduce((sum, score) => sum+score,0) / name.scores.length,
      maxScore: name.scores.reduce((max,score) => {return Math.min(max,score)}),
      

    }
  });

  console.log(cLastNameResults)