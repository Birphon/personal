document.addEventListener("DOMContentLoaded", function () {
	const raceSelect = document.getElementById("race-select");
	const subraceSelect = document.getElementById("subrace-select");
	const backgroundSelect = document.getElementById("background-select");
	const proficienciesList = document.getElementById("proficiencies-list");
	const classSelect = document.getElementById("class-select");
	const subclassSelect = document.getElementById("subclass-select");

	raceSelect.addEventListener("change", function () {
		const selectedRace = raceSelect.value;
		populateSubraces(selectedRace);
	});

	backgroundSelect.addEventListener("change", function () {
		const selectedBackground = backgroundSelect.value;
		populateProficiencies(selectedBackground);
	});

	classSelect.addEventListener("change", function () {
		const selectedSubClass = classSelect.value;
		populateSubclasses(selectedSubClass);
	});

	function populateSubraces(race) {
		// Clear existing subrace options
		subraceSelect.innerHTML = "";

		switch (race) {
			case "human":
				subraceSelect.style.display = "none";
				break;
			case "elf":
				const elfSubraces = ["High", "Wood"];
				elfSubraces.forEach((subrace) => {
					const option = document.createElement("option");
					option.value = subrace.toLowerCase().replace(" ", "-");
					option.textContent = subrace;
					subraceSelect.appendChild(option);
				});
				subraceSelect.style.display = "";

				break;
			case "dwarf":
				const dwarfSubraces = ["Gold", "Sheild", "Duergar"];
				dwarfSubraces.forEach((subrace) => {
					const option = document.createElement("option");
					option.value = subrace.toLowerCase().replace(" ", "-");
					option.textContent = subrace;
					subraceSelect.appendChild(option);
				});
				subraceSelect.style.display = "";

				break;
			case "dragonborn":
				const dragonbornSubrace = [
					"Black",
					"Blue",
					"Brass",
					"Bronze",
					"Copper",
					"Gold",
					"Green",
					"Red",
					"Silver",
					"White",
				];
				dragonbornSubrace.forEach((subrace) => {
					const option = document.createElement("option");
					option.value = subrace.toLowerCase();
					option.textContent = subrace;
					subraceSelect.appendChild(option);
				});
				subraceSelect.style.display = "";

				break;
			case "drow":
				const drowSubrace = ["Loth-sworn", "Seldarine"];
				drowSubrace.forEach((subrace) => {
					const option = document.createElement("option");
					option.value = subrace.toLowerCase();
					option.textContent = subrace;
					subraceSelect.appendChild(option);
				});
				subraceSelect.style.display = "";

				break;
			case "githyanki":
				subraceSelect.style.display = "none";
				break;
			case "gnome":
				const gnomeSubrace = ["Deep", "Forest", "Rock"];
				tieflingSgnomeSubraceubclasses.forEach((subrace) => {
					const option = document.createElement("option");
					option.value = subrace.toLowerCase();
					option.textContent = subrace;
					subraceSelect.appendChild(option);
				});
				subraceSelect.style.display = "";

				break;
			case "half-elf":
				const halfElfSubrace = ["High", "Wood", "Drow"];
				halfElfSubrace.forEach((subrace) => {
					const option = document.createElement("option");
					option.value = subrace.toLowerCase();
					option.textContent = subrace;
					subraceSelect.appendChild(option);
				});
				subraceSelect.style.display = "";

				break;
			case "half-orc":
				subraceSelect.style.display = "none";

				break;
			case "halfling":
				const halflingSubrace = ["Lightfoot", "Strongheart"];
				halflingSubrace.forEach((subrace) => {
					const option = document.createElement("option");
					option.value = subrace.toLowerCase();
					option.textContent = subrace;
					subraceSelect.appendChild(option);
				});
				subraceSelect.style.display = "";

				break;
			case "tiefling":
				const tieflingSubrace = [
					"Asmodeus",
					"Mephistopheles",
					"Zariel",
				];
				tieflingSubrace.forEach((subrace) => {
					const option = document.createElement("option");
					option.value = subrace.toLowerCase();
					option.textContent = subrace;
					subraceSelect.appendChild(option);
				});
				subraceSelect.style.display = "";

				break;
			default:
				// Handle unsupported races
				subraceSelect.style.display = "none";

				break;
		}
	}

	function populateProficiencies(background) {
		// Clear existing proficiencies
		proficienciesList.innerHTML = "";

		switch (background) {
			case "acolyte":
				const acolyteProficiencies = ["Religion", "Insight"];
				acolyteProficiencies.forEach((proficiency) => {
					const li = document.createElement("li");
					li.textContent = proficiency;
					proficienciesList.appendChild(li);
				});
				break;
			case "charlatan":
				const charlatanProficiencies = ["Deception", "Sleight of Hand"];
				charlatanProficiencies.forEach((proficiency) => {
					const li = document.createElement("li");
					li.textContent = proficiency;
					proficienciesList.appendChild(li);
				});
				break;
			case "criminal":
				const criminalProficiencies = ["Deception", "Stealth"];
				criminalProficiencies.forEach((proficiency) => {
					const li = document.createElement("li");
					li.textContent = proficiency;
					proficienciesList.appendChild(li);
				});
				break;
			case "entertainer":
				const entertainerProficiencies = ["Acrobatics", "Performance"];
				entertainerProficiencies.forEach((proficiency) => {
					const li = document.createElement("li");
					li.textContent = proficiency;
					proficienciesList.appendChild(li);
				});
				break;
			case "folk-hero":
				const folkHeroProficiencies = ["Animal Handling", "Survival"];
				folkHeroProficiencies.forEach((proficiency) => {
					const li = document.createElement("li");
					li.textContent = proficiency;
					proficienciesList.appendChild(li);
				});
				break;
			case "guild-artisan":
				const guildArtisanProficiencies = ["Insight", "Persuasion"];
				guildArtisanProficiencies.forEach((proficiency) => {
					const li = document.createElement("li");
					li.textContent = proficiency;
					proficienciesList.appendChild(li);
				});
				break;
			case "noble":
				const nobleProficiencies = ["History", "Persuasion"];
				nobleProficiencies.forEach((proficiency) => {
					const li = document.createElement("li");
					li.textContent = proficiency;
					proficienciesList.appendChild(li);
				});
				break;
			case "hermit":
				const hermitProficiencies = ["Medicine", "Religion"];
				hermitProficiencies.forEach((proficiency) => {
					const li = document.createElement("li");
					li.textContent = proficiency;
					proficienciesList.appendChild(li);
				});
				break;
			case "outlander":
				const outlanderHeroProficiencies = ["Athletics", "Survival"];
				outlanderHeroProficiencies.forEach((proficiency) => {
					const li = document.createElement("li");
					li.textContent = proficiency;
					proficienciesList.appendChild(li);
				});
				break;
			case "sage":
				const sageHeroProficiencies = ["Arcana", "History"];
				sageHeroProficiencies.forEach((proficiency) => {
					const li = document.createElement("li");
					li.textContent = proficiency;
					proficienciesList.appendChild(li);
				});
				break;
			case "soldier":
				const soldierProficiencies = ["Athletics", "Intimidation"];
				soldierProficiencies.forEach((proficiency) => {
					const li = document.createElement("li");
					li.textContent = proficiency;
					proficienciesList.appendChild(li);
				});
				break;
			default:
				break;
		}
	}

	function populateSubclasses(subclass) {
		subclassSelect.innerHTML = "";
		switch (subclass) {
			case "barbarian":
				const barbarianSubclass = [
					"Beserker",
					"Wildheart",
					"Wild Magic",
				];
				barbarianSubclass.forEach((subclass) => {
					const option = document.createElement("option");
					option.value = subclass.toLowerCase().replace(" ", "-");
					option.textContent = subclass;
					subclassSelect.appendChild(option);
				});
				subclassSelect.style.display = "";
				break;
			case "bard":
				const bardSubclass = [
					"Collage of Love",
					"Collage of Valor",
					"Collage of Swords",
				];
				bardSubclass.forEach((subclass) => {
					const option = document.createElement("option");
					option.value = subclass.toLowerCase().replace(" ", "-");
					option.textContent = subclass;
					subclassSelect.appendChild(option);
				});

				subclassSelect.style.display = "";
				break;
			case "cleric":
				const clericSubclass = [
					"Life Domain",
					"Light Domain",
					"Trickery Domain",
					"Knowledge Domain",
					"Nature Domain",
					"Tempest Domain",
					"War Domain",
				];
				clericSubclass.forEach((subclass) => {
					const option = document.createElement("option");
					option.value = subclass.toLowerCase().replace(" ", "-");
					option.textContent = subclass;
					subclassSelect.appendChild(option);
				});

				subclassSelect.style.display = "";
				break;
			default:
				subclassSelect.innerHTML = "";
				break;
		}
	}
});
