const prompt = require("prompt-sync")();

// Define variables
let distanceGoal = 5; // Distance in km
let intervalRunningTime = 3.5; // Time in minutes
let intervalRunningSpeed = 9; // Speed in km/h
let intervalWalkingTime = 1.5; // Time in minutes
let intervalWalkingSpeed = 5; // Speed in km/h

// Get user input
while (true) {
  distanceGoal = +prompt("Enter your distance goal in kilometers: ");
  if (distanceGoal > 0) {
    break;
  }
  console.log("Invalid input. Please enter a positive number.");
}

while (true) {
  intervalRunningTime = +prompt(
    "Enter your interval running time in minutes: "
  );
  if (intervalRunningTime > 0) {
    break;
  }
  console.log("Invalid input. Please enter a positive number.");
}

while (true) {
  intervalRunningSpeed = +prompt("Enter your interval running speed in km/h: ");
  if (intervalRunningSpeed > 0) {
    break;
  }
  console.log("Invalid input. Please enter a positive number.");
}

while (true) {
  intervalWalkingTime = +prompt(
    "Enter your interval walking time in minutes: "
  );
  if (intervalWalkingTime > 0) {
    break;
  }
  console.log("Invalid input. Please enter a positive number.");
}

while (true) {
  intervalWalkingSpeed = +prompt("Enter your interval walking speed in km/h: ");
  if (intervalWalkingSpeed > 0) {
    break;
  }
  console.log("Invalid input. Please enter a positive number.");
}

// Calculate interval distance
const intervalRunningDistance =
  intervalRunningSpeed * (intervalRunningTime / 60);
const intervalWalkingDistance =
  intervalWalkingSpeed * (intervalWalkingTime / 60);
const intervalDistance = intervalRunningDistance + intervalWalkingDistance;

// Calculate total time, distance, and speed
const numberOfIntervals = distanceGoal / intervalDistance;
const totalTime =
  numberOfIntervals * (intervalRunningTime + intervalWalkingTime);
const totalDistance = numberOfIntervals * intervalDistance;
const totalSpeed = totalDistance / (totalTime / 60);

// Format results
const numberOfIntervalsRounded = Math.ceil(numberOfIntervals);
const totalTimeMinutes = Math.floor(totalTime);
const totalTimeSeconds = Math.round((totalTime - totalTimeMinutes) * 60);
const totalSpeedRounded = Math.round(totalSpeed * 10) / 10;

// Output results
console.log(
  `You will need to run ${numberOfIntervalsRounded} intervals to reach your goal.`
);
console.log(
  `You will be running for ${totalTimeMinutes} minutes and ${totalTimeSeconds} seconds.`
);
console.log(`You will be running ${totalDistance} kilometers.`);
console.log(`Your average speed will be ${totalSpeedRounded} km/h.`);
