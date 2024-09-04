document.addEventListener("DOMContentLoaded", function () {
	// Get references to the form elements
	const cookingLevelInput = document.getElementById("cookingLevel");
	const magazine1Checkbox = document.getElementById("magazine1");
	const magazine2Checkbox = document.getElementById("magazine2");
	const equipmentCheckboxes = document.querySelectorAll(
		'input[name^="equipment"]'
	);
	const tileCheckboxes = document.querySelectorAll('input[name^="tile"]');
	const submitButton = document.getElementById("submit");

	// Add an event listener for the form submission
	submitButton.addEventListener("click", function (event) {
		event.preventDefault();

		// Get the values of the form elements
		const cookingLevel = cookingLevelInput.value;
		const hasMagazine1 = magazine1Checkbox.checked;
		const hasMagazine2 = magazine2Checkbox.checked;
		const equipment = [...equipmentCheckboxes]
			.filter((checkbox) => checkbox.checked)
			.map((checkbox) => checkbox.name);
		const tiles = [...tileCheckboxes]
			.filter((checkbox) => checkbox.checked)
			.map((checkbox) => checkbox.name);

		// You can now use these values as needed, e.g., send them to a server, display them on the page, etc.
		console.log("Cooking Level: " + cookingLevel);
		console.log("Has Magazine 1: " + hasMagazine1);
		console.log("Has Magazine 2: " + hasMagazine2);
		console.log("Equipment: " + equipment.join(", "));
		console.log("Tiles: " + tiles.join(", "));
	});
});

function toggleRabbitMeat() {
	var deadRabbitCheckbox = document.getElementById("deadRabbitCheckbox");
	var rabbitMeatSection = document.getElementById("rabbitMeatSection");

	if (deadRabbitCheckbox.checked) {
		rabbitMeatSection.style.display = "block";
	} else {
		rabbitMeatSection.style.display = "none";
	}
}
