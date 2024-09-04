// Function to fetch JSON data
async function fetchJSON(url) {
	const response = await fetch(url);
	return response.json();
}

// Function to populate a dropdown
function populateDropdown(selectElement, options, placeholder) {
	selectElement.innerHTML = `<option value="">${placeholder}</option>`;
	options.forEach((option) => {
		const optionElement = document.createElement("option");
		optionElement.value = option.name;
		optionElement.textContent = option.name;
		selectElement.appendChild(optionElement);
	});
}

// Function to populate mod dropdowns
async function populateModDropdown(
	selectElement,
	genericModsUrl,
	specificModsUrl
) {
	const genericMods = await fetchJSON(genericModsUrl);
	const specificMods = await fetchJSON(specificModsUrl);
	const allMods = [...genericMods, ...specificMods];
	populateDropdown(selectElement, allMods, "Select Mod");
}

// Function to toggle collapsible sections
function setupCollapsibleSections() {
	const collapsibles = document.querySelectorAll(".collapsible-section h2");
	collapsibles.forEach((collapsible) => {
		collapsible.addEventListener("click", function () {
			this.classList.toggle("active");
			const content = this.nextElementSibling;
			if (content.style.display === "block") {
				content.style.display = "none";
			} else {
				content.style.display = "block";
			}
		});
	});
}

// Main function to initialize the page
async function init() {
	const weaponTypes = [
		"pistols",
		"shotguns",
		"smgs",
		"assault-rifles",
		"sniper-rifles",
		"lmgs",
		"crossbows",
		"heavy-artillery",
	];
	let allWeapons = [];

	// Fetch all weapon data
	for (const type of weaponTypes) {
		const data = await fetchJSON(`json/${type}.json`);
		allWeapons = allWeapons.concat(data[Object.keys(data)[0]]);
	}

	// Fetch melee weapons
	const meleeData = await fetchJSON("json/melee-weapons.json");
	const meleeWeapons = meleeData.MeleeWeapons;

	// Populate weapon dropdowns
	const weaponBox1 = document.getElementById("weapon-box-1");
	const weaponBox2 = document.getElementById("weapon-box-2");
	populateDropdown(weaponBox1, allWeapons, "Select Weapon 1");
	populateDropdown(weaponBox2, allWeapons, "Select Weapon 2");

	// Populate melee dropdown
	const meleeBox = document.getElementById("melee-box");
	populateDropdown(meleeBox, meleeWeapons, "Select Melee Weapon");

	// Populate mod dropdowns
	const modBoxes = document.querySelectorAll(".mod-box");
	modBoxes.forEach((box) => {
		const gearType = box.classList[1].split("-")[0];
		populateModDropdown(box, "mods/generic.json", `mods/${gearType}.json`);
	});

	// Populate attachment dropdowns (left empty for now)
	const aBoxes = document.querySelectorAll(".a-box");
	aBoxes.forEach((box) => populateDropdown(box, [], "Attachment"));

	// Setup collapsible sections
	setupCollapsibleSections();
}

// Initialize the page when the DOM is loaded
document.addEventListener("DOMContentLoaded", init);
