// Load occupations from CSV
const occupationsCSV = `Name,Skills,Bonus Perk,Points,
	Unemployed, -, -, 8,
	Fire Officer, "+1 Axe, +1 Fitness, +1 Sprinting, +1 Strength", -, 0,
	Police Officer, "+3 Aiming, +1 Nimble, +2 Reloading", -, -4,
	Park Ranger, "+1 Axe, +1 Carpentry, +2 Foraging, +2 Trapping", -, -4,
	Construction Worker, "+1 Carpentry, +3 Short Blunt", -, -2,
	Security Guard, "+1 Lightfooted, +2 Sprinting", Night Owl, -2,
	Carpenter, "+3 Carpentry, +1 Short Blunt", -, 2,
	Burglar, "+2 Lightfooted, +2 Nimble, +2 Sneaking", Burglar, -6,
	Chef, "+3 Cooking, +1 Maintenance, +1 Short Blade", Cook, -4,
	Repairman, "+1 Carpentry, +2 Maintenance, +1 Short Blunt", -, -4,
	Farmer, "+3 Farming", -, 2,
	Fisherman, "+3 Fishing, +1 Foraging", -, -2,
	Doctor, "+3 First Aid, +1 Short Blade", -, 2,
	Veteran, "+2 Aiming, +2 Reloading", Desensitized, -8,
	Nurse, "+2 First Aid, +1 Lightfooted", -, 2,
	Lumberjack, "+2 Axe, +1 Strength", Axe Man, 0,
	Fitness Instructor, "+3 Fitness, +2 Sprinting", Nutritionist, -6,
	Burger Flipper, "+2 Cooking, +1 Maintenance, +1 Short Blade", Cook, 2,
	Electrician, "+3 Electrical", -, -4,
	Engineer, "+1 Carpentry, +1 Electrical", -, -4,
	Metalworker, "+3 Metalworking", -, -6,
	Mechanic, "+3 Mechanics, +1 Short Blunt", Amateur Mechanic, -4,`;
const occupations = parseCSV(occupationsCSV);

// Load positive traits from CSV
const posTraitsCSV = `Name,Mutually exclusive,Points,Description,Effect,
Adrenaline Junkie, "Agoraphobic, Claustrophobic, Cowardly, Desensitized", -8, "Moves faster when highly panicked.", "Adds a flat bonus of 0.20 or 0.25 for the character's base speed at Strong or Extreme Panic, which increases walking, running, and sprinting speed."
Athletic, "Fit, Out of Shape, Obese, Overweight, Unfit, Very Underweight", -10, "Can run faster and longer without tiring.", +4 Fitness. +20% running/sprinting speed . -20% running/sprinting endurance loss from the trait itself.
...`;
const posTraits = parseCSV(posTraitsCSV);

// Load negative traits from CSV
const negTraitsCSV = `Name,Mutually exclusive,Points,Description,Effect,
Agoraphobic, "Adrenaline Junkie, Claustrophobic, Desensitized", 4, Gets panicked when outdoors, Enters in Panic when outdoors and affects search mode.",
All Thumbs, Dextrous, 2, Transfers inventory items slowly, 400% inventory transferring time.,
Asthmatic, -, 5, "Faster endurance loss", 140% running/sprinting endurance loss. 130% increase in swing endurance lost.,
Claustrophobic, "Adrenaline Junkie, Agoraphobic, Desensitized", 4, "Gets panicked when indoors", Enters in Panic when indoors.,
Clumsy Graceful, 2, "Makes more noise when moving", 120% footsteps sound radius, 110% chance to trip while run/sprint vaulting a low fence or lunging zombies.,
Conspicuous Inconspicuous, -, 4, "More likely to be spotted by zombies.", 200% chance of getting spotted by zombies.,
Cowardly, "Adrenaline Junkie, Brave, Desensitized", 2, "Especially prone to becoming panicked", 200% panic except for night terrors and phobias.,
Deaf, "Hard of Hearing, Keen Hearing", 12, "Smaller perception radius and hearing range", "Can't hear sound. Radio chatter will not appear above the radio, however, they can see/read a TV due to closed captions.",
Disorganized, Organized, 4, "Decreased container inventory capacity", 70% capacity for all containers - including boxes and cupboards.,
Emaciated, -, -, "Low strength and low endurance and prone to injury", Is only present at weight 50 and less and will begin taking damage at weight 35. 40% melee damage. 75% chance to fail to climb a tall fence. 30% endurance regeneration. 20 more fall damage.,
Feeble, "Strong, Stout, Weak", 6, "Less knockback from melee weapons. Decreased carrying weight.", -2 Strength,
Hard of Hearing, "Deaf, Keen Hearing", 4, "Smaller perception radius. Smaller hearing range.", "Besides the decreased perception radius, the range of sound will be decreased and the sound effects will be muffled.",
Hearty Appetite, "Light Eater, Very Underweight", 4, "Needs to eat more regularly", "150% hunger. Gives a +3% bonus to packaged foods, mushrooms, berries, and animals for foraging.",
Fear of Blood, Desensitized, 5, "Panic when performing first aid on self, cannot perform first aid on others, gets stressed when bloody", -,
High Thirst, Low Thirst, 6, "Needs more water to survive", 200% thirst,
Illiterate, "Fast Reader, Slow Reader", 8 "Cannot read books", Unable to get a mood boost by reading leisure books, "learning new recipes by reading recipe magazines, or getting an XP multiplier by reading skill books.",
Out of Shape, "Athletic, Fit, Unfit", 6 "Low endurance, low endurance regeneration.", -2 Fitness,
Obese, "Athletic, Fit, Out of Shape, Overweight, Underweight, Very Underweight", 10, "Reduced running speed, very low endurance and prone to injury.", -2 Fitness. Max Fitness of 8. The trait itself reduce run speed and endurance. Starting weight is 105 and is only present at weights 100 and above. 120% chance to trip while run/sprint vaulting a low fence. 90% chance to trip from lunging zombies. 75% chance to climb a tall fence. 40% endurance regeneration. 20 more fall damage.,
Overweight, "Athletic, Fit, Out of Shape, Obese, Underweight, Very Underweight", 6, "Reduced running speed, low endurance and prone to injury.", "Max Fitness of 9. Starting weight is 90 and is only present between weights 85 and 100. 1% slower running speed, 200% endurance loss. 110% chance to trip while run/sprint vaulting a low fence. 95% chance to trip by lunging zombies. 85% chance to climb a tall fence. 70% endurance regeneration.",
Pacifist, -, 4, "Less effective with weapons", "75% of skill EXP for Short Blade, Long Blade, Small Blunt, Long Blunt, Axe, Spear, Maintenance and Aiming.",
Prone to Illness, Resilient, 4, "More prone to disease. Faster rate of zombification.", "125% progression rate of zombification. 170% chance of catching a cold, 120% cold strength, and 150% cold progression speed.",
Restless Sleeper, -, 6, "Slow loss of tiredness while sleeping", "Sleep for fewer hours each time, and slower loss of tiredness when sleeping.",
Short Sighted, Eagle Eyed, 2, "Small view distance. Slower visibility fade.", -2 foraging radius in search mode. Can be negated with glasses and reading glasses.,
Sleepyhead, Wakeful, 4, "Needs more sleep", "+30% Fatigue increase rate, -10% Sleep efficiency.",
Smoker, -, 4, "Stress and unhappiness decrease after smoking tobacco. Unhappiness rises when tobacco is not smoked.", Stress will constantly slowly rise. Smoking Cigarettes will lower the stress level.
Slow Healer, Fast Healer, 6, "Recovers slowly from injuries and illness", "Does not apply to exercise fatigue. Recently inflicted injuries have more severity. Including Scratches, Lacerations, Lodged Bullets, Deep wounds (with/without glass), Bites, and Fractures. (Check Health for more details.)",
Slow Learner, Fast Learner, 6, "Decreased XP gains", 70% XP in all skills except Strength and Fitness.,
Slow Reader, "Fast Reader, Illiterate", 2, "Takes longer to read books", 70% reading speed.,
Sunday driver, Speed Demon, 1, "The very slow driver", Accelerates vehicles 40% slower. Has a max speed of 30 km/h.,
Thin-skinned, Thick Skinned, 8, "Increased chance of scratches, lacerations, or bites breaking the skin.", "Multiplies the chance of not being injured by a zombie attack by 0.7 (base 15% chance, modified by character's weapon skill). Additionally, alters the chance of clothes being damaged by walking through trees to 1 in 3.",
Underweight, "Obese, Overweight, Very Underweight", 6, "Low strength, low endurance and prone to injury.", -1 Fitness. Starting weight is 70 and is only present between weights 65 and 75. 80%x melee damage. +10% chance to trip by while run/sprint vaulting a low fence or from lunging zombies. 85%x chance to fail a tall fence climb.,
Unfit, "Athletic, Fit, Out of Shape", 10, "Very low endurance, very low endurance regeneration. ", -4 Fitness,
Unlucky, Lucky, 4, "What could go wrong for you, often does.", -10% chance of finding rare loot. +5% chance of failing item repairs. Affects search mode. Not available in multiplayer.,
Very Underweight, "Athletic, Hearty Appetite, Obese, Overweight, Underweight", 10, "Very low strength, very low endurance and prone to injury.", -2 Fitness. Starting weight is 60 and is only present between weights 50 and 65. 60% melee damage. 20% higher chance to trip by while run/sprint vaulting a low fence or from lunging zombies. 75% chance to fail a tall fence climb. 10% more fall damage.,
Weak, "Feeble, Strong, Stout", 10, "Less knockback from melee weapons. Decreased carrying weight.", "-5 Strength,-40% knockback power (damage does not decrease).",
Weak Stomach, Iron Gut, 3, "Higher chance to have food illness.", 200% chance of food illness. Food illness lasts longer. Check Health for more details.
,`;
const negTraits = parseCSV(negTraitsCSV);

// Parse CSV data
function parseCSV(csv) {
	const rows = csv.trim().split("\n");
	const headers = rows.shift().split(",");
	const data = rows.map((row) =>
		row.split(",").reduce((obj, val, i) => {
			obj[headers[i]] = val;
			return obj;
		}, {})
	);
	return data;
}

// Populate occupation radios
const occupationRadiosDiv = document.getElementById("occupationRadios");
occupations.forEach((occupation) => {
	const radioDiv = document.createElement("div");
	const radio = document.createElement("input");
	radio.type = "radio";
	radio.name = "occupation";
	radio.value = occupation.Name;
	radio.id = `occupation-${occupation.Name}`;
	const label = document.createElement("label");
	label.textContent = occupation.Name;
	label.htmlFor = `occupation-${occupation.Name}`;
	radioDiv.appendChild(radio);
	radioDiv.appendChild(label);
	occupationRadiosDiv.appendChild(radioDiv);
});

// Populate positive and negative trait selects
const posTraitsSelect = document.getElementById("posTraits");
const negTraitsSelect = document.getElementById("negTraits");

posTraits.forEach((trait) => {
	const option = document.createElement("option");
	option.value = trait.Name;
	option.textContent = `${trait.Name} (${trait.Points})`;
	posTraitsSelect.appendChild(option);
});

negTraits.forEach((trait) => {
	const option = document.createElement("option");
	option.value = trait.Name;
	option.textContent = `${trait.Name} (${trait.Points})`;
	negTraitsSelect.appendChild(option);
});

// Initialize character points and stats
let characterPoints = 0;
const stats = {
	Axe: 0,
	Aiming: 0,
	Nimble: 0,
	Reloading: 0,
	Carpentry: 0,
	"Short Blunt": 0,
	Lightfooted: 0,
	Sprinting: 0,
	Sneaking: 0,
	Cooking: 0,
	Maintenance: 0,
	"Short Blade": 0,
	"First Aid": 0,
	Strength: 0,
	Fitness: 0,
	Electrical: 0,
	Metalworking: 0,
	Mechanics: 0,
	Tailoring: 0,
	Foraging: 0,
	Trapping: 0,
	Farming: 0,
	Fishing: 0,
};

// Update character points and stats when occupation or traits change
const occupationRadios = document.querySelectorAll('input[name="occupation"]');
occupationRadios.forEach((radio) => {
	radio.addEventListener("change", updateCharacterPoints);
});
posTraitsSelect.addEventListener("change", updateCharacterPoints);
negTraitsSelect.addEventListener("change", updateCharacterPoints);

function updateCharacterPoints() {
	characterPoints = 0;

	// Add occupation points
	const selectedOccupation = occupations.find(
		(o) =>
			o.Name ===
			document.querySelector('input[name="occupation"]:checked').value
	);
	if (selectedOccupation) {
		characterPoints += parseInt(selectedOccupation.Points);
	}

	// Add positive trait points
	const selectedPosTraits = Array.from(posTraitsSelect.selectedOptions).map(
		(option) => option.value
	);
	selectedPosTraits.forEach((traitName) => {
		const trait = posTraits.find((t) => t.Name === traitName);
		if (trait) {
			characterPoints += parseInt(trait.Points);
		}
	});

	// Add negative trait points
	const selectedNegTraits = Array.from(negTraitsSelect.selectedOptions).map(
		(option) => option.value
	);
	selectedNegTraits.forEach((traitName) => {
		const trait = negTraits.find((t) => t.Name === traitName);
		if (trait) {
			characterPoints += parseInt(trait.Points);
		}
	});

	// Reset stats
	Object.keys(stats).forEach((skill) => {
		stats[skill] = 0;
	});

	// Apply occupation bonuses
	if (selectedOccupation) {
		const skills = selectedOccupation.Skills.slice(1, -1).split(", ");
		skills.forEach((skill) => {
			const [value, ...skillName] = skill.split(" ");
			const skillKey = skillName.join(" ");
			stats[skillKey] += parseInt(value);
		});
	}

	// Apply positive trait bonuses
	selectedPosTraits.forEach((traitName) => {
		const trait = posTraits.find((t) => t.Name === traitName);
		if (trait) {
			const effect = trait.Effect;
			if (effect.includes("+")) {
				const bonuses = effect.match(/\+\d+ [\w\s]+/g);
				bonuses.forEach((bonus) => {
					const [value, skillName] = bonus.split(" ");
					stats[skillName] += parseInt(value);
				});
			}
		}
	});

	// Apply negative trait penalties
	selectedNegTraits.forEach((traitName) => {
		const trait = negTraits.find((t) => t.Name === traitName);
		if (trait) {
			const effect = trait.Effect;
			if (effect.includes("-")) {
				const penalties = effect.match(/-\d+ [\w\s]+/g);
				penalties.forEach((penalty) => {
					const [value, skillName] = penalty.split(" ");
					stats[skillName] -= parseInt(value);
				});
			}
		}
	});

	// Display character points
	const characterPointsDiv = document.getElementById("characterPoints");
	characterPointsDiv.textContent = `Character Points: ${characterPoints}`;

	// Display stats
	const statsDiv = document.getElementById("stats");
	statsDiv.innerHTML = "";
	Object.entries(stats).forEach(([skill, value]) => {
		if (value !== 0) {
			const statDiv = document.createElement("div");
			statDiv.textContent = `${skill}: ${value}/10`;
			statsDiv.appendChild(statDiv);
		}
	});
}
