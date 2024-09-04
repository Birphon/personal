document
	.getElementById("characterForm")
	.addEventListener("submit", function (event) {
		event.preventDefault();
		var character = {
			name: document.getElementById("name").value,
			race: document.getElementById("race").value,
			subRace: document.getElementById("subRace").value,
			class: document.getElementById("class").value,
			subClass: document.getElementById("subClass").value,
			strength: document.getElementById("strength").value,
			dexterity: document.getElementById("dexterity").value,
			constitution: document.getElementById("constitution").value,
			intelligence: document.getElementById("intelligence").value,
			wisdom: document.getElementById("wisdom").value,
			charisma: document.getElementById("charisma").value,
		};
		document.getElementById("characterDisplay").innerHTML = JSON.stringify(
			character,
			null,
			2
		);
	});
