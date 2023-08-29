// Selectors
const distanceGoalInput = document.querySelector("#distance-goal");
const intervalRunningTimeInput = document.querySelector(
  "#interval-running-time"
);
const intervalRunningSpeedInput = document.querySelector(
  "#interval-running-speed"
);
const intervalWalkingTimeInput = document.querySelector(
  "#interval-walking-time"
);
const intervalWalkingSpeedInput = document.querySelector(
  "#interval-walking-speed"
);

const calculateButton = document.querySelector("#calculate-button");

const results = {
  numberOfIntervals: document.querySelector("#number-of-intervals"),
  totalTimeMinutes: document.querySelector("#total-time-minutes"),
  totalTimeSeconds: document.querySelector("#total-time-seconds"),
  totalDistance: document.querySelector("#total-distance"),
  totalSpeed: document.querySelector("#total-speed"),
};

const resultsContainer = document.querySelector("#results");

// Event listeners
calculateButton.addEventListener("click", (e) => {
  e.preventDefault();
  calculate();
});

// Functions
function calculate() {
  // Get user input
  const distanceGoal = +distanceGoalInput.value;
  const intervalRunningTime = +intervalRunningTimeInput.value;
  const intervalRunningSpeed = +intervalRunningSpeedInput.value;
  const intervalWalkingTime = +intervalWalkingTimeInput.value;
  const intervalWalkingSpeed = +intervalWalkingSpeedInput.value;

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

  // Display results
  results.numberOfIntervals.textContent = numberOfIntervalsRounded;
  results.totalTimeMinutes.textContent = totalTimeMinutes;
  results.totalTimeSeconds.textContent = totalTimeSeconds;
  results.totalDistance.textContent = totalDistance;
  results.totalSpeed.textContent = totalSpeedRounded;

  resultsContainer.style.display = "block";
}
