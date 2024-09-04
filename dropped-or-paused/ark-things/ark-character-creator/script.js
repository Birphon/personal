// Define stat information
const stats = {
	health: { baseValue: 100.0, multiplier: 10.0, pointsAdded: 0 },
	stamina: { baseValue: 100.0, multiplier: 10.0, pointsAdded: 0 },
	oxygen: { baseValue: 100.0, multiplier: 20.0, pointsAdded: 0 },
	food: { baseValue: 100.0, multiplier: 10.0, pointsAdded: 0 },
	weight: { baseValue: 100.0, multiplier: 10.0, pointsAdded: 0 },
	"melee-damage": { baseValue: 100.0, multiplier: 5.0, pointsAdded: 0 },
	fortitude: { baseValue: 0, multiplier: 2, pointsAdded: 0 },
	"crafting-skill": { baseValue: 100.0, multiplier: 10.0, pointsAdded: 0 },
};

let totalPoints = 0;
let unusedPoints = 100;

// Function to adjust the stat value
function adjustStat(statName, action) {
	const stat = stats[statName];

	if (action === "add" && totalPointsUsed() < 100) {
		stat.pointsAdded++;
	} else if (action === "subtract" && stat.pointsAdded > 0) {
		stat.pointsAdded--;
	}

	updateStatValue(statName);
	updateButtonsState();
	updateTotalPoints();
}

// Function to update the displayed stat value
function updateStatValue(statName) {
	const statElement = document.getElementById(`${statName}-value`);
	const stat = stats[statName];

	let totalValue = stat.baseValue + stat.multiplier * stat.pointsAdded;
	if (statName === "melee-damage" || statName === "crafting-skill") {
		totalValue = totalValue.toFixed(1) + "%";
	} else {
		totalValue = totalValue.toFixed(1);
	}

	statElement.textContent = totalValue;
}

// Function to calculate the total points used
function totalPointsUsed() {
	for (const statName in stats) {
		totalPoints += stats[statName].pointsAdded;
	}
	return totalPoints;
}

// Function to update the state of the buttons
function updateButtonsState() {
	const totalPoints = totalPointsUsed();
	console.log("Total Points:", totalPoints); // Added console.log

	for (const statName in stats) {
		const stat = stats[statName];
		const addButton = document.querySelector(
			`#${statName} button:first-child`
		);
		const subtractButton = document.querySelector(
			`#${statName} button:last-child`
		);

		addButton.disabled = totalPoints === 100;
		subtractButton.disabled = stat.pointsAdded === 0;
	}
}

// Function to update total points and display the unused points
function updateTotalPoints() {
	// Your existing logic to calculate total points

	// Calculate unused points
	unusedPoints = 100 - totalPoints;

	// Ensure unused points are within the valid range
	unusedPoints = Math.max(0, Math.min(100, unusedPoints));

	// Display unused points
	document.getElementById("unused-points-value").innerText = unusedPoints;
}

// Initialize stat values on page load
for (const statName in stats) {
	updateStatValue(statName);
}

// Update button state on page load
updateButtonsState();
updateTotalPoints();
