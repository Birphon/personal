document.addEventListener("DOMContentLoaded", () => {
	const charactersContainer = document.getElementById("characters");
	const characterDetails = document.getElementById("character-details");
	const characterName = document.getElementById("character-name");
	const statsContainer = document.getElementById("stats");
	const itemSlots = {
		weapon: document.querySelector("#weapon-slots .slots"),
		health: document.querySelector("#health-slots .slots"),
		magic: document.querySelector("#magic-slots .slots"),
		wildcard: document.querySelector("#wildcard-slots .slots"),
	};
	const shopItems = {
		weapon: document.querySelector("#shop-weapons .shop-items"),
		health: document.querySelector("#shop-health .shop-items"),
		magic: document.querySelector("#shop-magic .shop-items"),
	};

	let selectedCharacter = null;
	let selectedItems = [];

	// Load JSON data
	Promise.all([
		fetch("Characters.json").then((res) => res.json()),
		fetch("Weapon.json").then((res) => res.json()),
		fetch("Health.json").then((res) => res.json()),
		fetch("Magic.json").then((res) => res.json()),
	]).then(([characters, weapons, healths, magics]) => {
		displayCharacters(characters);
		setupShop(weapons, healths, magics);
	});

	function displayCharacters(characters) {
		characters.forEach((character) => {
			const characterDiv = document.createElement("div");
			characterDiv.className = "character";
			characterDiv.textContent = character.name;
			characterDiv.addEventListener("click", () =>
				selectCharacter(character)
			);
			charactersContainer.appendChild(characterDiv);
		});
	}

	function selectCharacter(character) {
		selectedCharacter = character;
		characterName.textContent = character.name;
		displayStats(character);
		characterDetails.style.display = "block";
	}

	function displayStats(character) {
		statsContainer.innerHTML = "";
		for (const [key, value] of Object.entries(character.stats)) {
			const statDiv = document.createElement("div");
			statDiv.textContent = `${key}: ${value}`;
			statsContainer.appendChild(statDiv);
		}
	}

	function setupShop(weapons, healths, magics) {
		setupShopItems(weapons, "weapon");
		setupShopItems(healths, "health");
		setupShopItems(magics, "magic");
	}

	function setupShopItems(items, type) {
		items.forEach((item) => {
			const itemDiv = document.createElement("div");
			itemDiv.className = "shop-item";
			itemDiv.textContent = item.name;
			itemDiv.addEventListener("click", () =>
				addItemToInventory(item, type, itemDiv)
			);
			shopItems[type].appendChild(itemDiv);
		});
	}

	function addItemToInventory(item, type, itemDiv) {
		if (selectedItems.length >= 16) {
			alert("You can only select up to 16 items.");
			return;
		}

		if (itemDiv.classList.contains("locked")) {
			return;
		}

		selectedItems.push(item);
		itemDiv.classList.add("locked");

		const inventorySlot = document.createElement("div");
		inventorySlot.className = "slot-item";
		inventorySlot.textContent = item.name;
		inventorySlot.addEventListener("contextmenu", (e) => {
			e.preventDefault();
			removeItemFromInventory(item, type, itemDiv, inventorySlot);
		});

		if (type === "weapon") {
			itemSlots.weapon.appendChild(inventorySlot);
		} else if (type === "health") {
			itemSlots.health.appendChild(inventorySlot);
		} else if (type === "magic") {
			itemSlots.magic.appendChild(inventorySlot);
		} else {
			itemSlots.wildcard.appendChild(inventorySlot);
		}

		updateStats(item);
	}

	function removeItemFromInventory(item, type, itemDiv, inventorySlot) {
		selectedItems = selectedItems.filter(
			(selectedItem) => selectedItem !== item
		);
		itemDiv.classList.remove("locked");
		inventorySlot.remove();
		updateStats(item, true);
	}

	function updateStats(item, isRemoving = false) {
		for (const [key, value] of Object.entries(item.effects)) {
			const statDiv = Array.from(statsContainer.children).find((div) =>
				div.textContent.startsWith(key)
			);
			if (statDiv) {
				const baseValue = parseFloat(
					statDiv.textContent.split(": ")[1]
				);
				const newValue = isRemoving
					? baseValue - value
					: baseValue + value;
				statDiv.textContent = `${key}: ${newValue}`;
			}
		}
	}
});
