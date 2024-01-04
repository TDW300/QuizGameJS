const prompt = require("prompt-sync")();

console.log("Welcome to the Computer Hardware Quiz!");

let correctAnswers = 0;
const totalQuestions = 8;

// Question 1
const answer1 = prompt("What is the brain of the computer?");
const correctAnswer1 = "CPU";

if (answer1.toUpperCase() === correctAnswer1.toUpperCase()) {
  console.log("Correct!");
  correctAnswers++;
} else {
  console.log("Incorrect :(");
}

// Question 2
const answer2 = prompt("What does RAM stand for?");
const correctAnswer2 = "RANDOM ACCESS MEMORY";

if (answer2.toUpperCase() === correctAnswer2.toUpperCase()) {
  console.log("Correct!");
  correctAnswers++;
} else {
  console.log("Incorrect :(");
}

// Question 3
const answer3 = prompt("Which is better: a 3090ti or a 4060?");
const correctAnswer3 = "3090TI";

if (answer3.toUpperCase() === correctAnswer3.toUpperCase()) {
  console.log("Correct!");
  correctAnswers++;
} else {
  console.log("Incorrect :(");
}

// Question 4
const answer4 = prompt("Where are files permanently saved when you save them?");
const correctAnswer4 = "HARD DRIVE";

if (answer4.toUpperCase() === correctAnswer4.toUpperCase()) {
  console.log("Correct!");
  correctAnswers++;
} else {
  console.log("Incorrect :(");
}

// New Question 5
const answer5 = prompt("What connects the CPU, RAM, and other hardware in a computer?");
const correctAnswer5 = "MOTHERBOARD";

if (answer5.toUpperCase() === correctAnswer5.toUpperCase()) {
  console.log("Correct!");
  correctAnswers++;
} else {
  console.log("Incorrect :(");
}

// New Question 6
const answer6 = prompt("What does GPU stand for?");
const correctAnswer6 = "GRAPHICS PROCESSING UNIT";

if (answer6.toUpperCase() === correctAnswer6.toUpperCase()) {
  console.log("Correct!");
  correctAnswers++;
} else {
  console.log("Incorrect :(");
}

// New Question 7
const answer7 = prompt("What is the primary function of an operating system?");
const correctAnswer7 = "MANAGE COMPUTER HARDWARE AND SOFTWARE";

if (answer7.toUpperCase() === correctAnswer7.toUpperCase()) {
  console.log("Correct!");
  correctAnswers++;
} else {
  console.log("Incorrect :(");
}

// New Question 8
const answer8 = prompt("What is the purpose of a power supply unit in a computer?");
const correctAnswer8 = "CONVERT ELECTRICAL POWER INTO A USABLE FORM";

if (answer8.toUpperCase() === correctAnswer8.toUpperCase()) {
  console.log("Correct!");
  correctAnswers++;
} else {
  console.log("Incorrect :(");
}

console.log("You got", correctAnswers, "questions correct!");
console.log("You scored", (correctAnswers / totalQuestions) * 100, "percent");
