// js/scripts.js
document.addEventListener("DOMContentLoaded", () => {
	fetch("json/heroes.json")
		.then((response) => response.json())
		.then((data) => {
			displayAllHeroes(data);
		})
		.catch((error) => console.error("Error loading hero data:", error));
});

function displayAllHeroes(heroes) {
	const heroesContainer = document.getElementById("heroes-container");
	heroes.forEach((hero) => {
		const heroElement = createHeroElement(hero);
		heroesContainer.appendChild(heroElement);
	});
}

function createHeroElement(hero) {
	const heroCard = document.createElement("div");
	heroCard.className = "hero-card";

	heroCard.innerHTML = `
        <h2>${hero.CharacterName}</h2>
        <div class="abilities-container"></div>
        <div class="hero-stats">
            <div class="stat-section weapon-stats">
                <h3>WEAPON</h3>
                <div class="stat-grid"></div>
            </div>
            <div class="stat-section vitality-stats">
                <h3>VITALITY</h3>
                <div class="stat-grid"></div>
            </div>
        </div>
    `;

	const abilitiesContainer = heroCard.querySelector(".abilities-container");
	for (let i = 1; i <= 4; i++) {
		const ability = hero.Ability[i];
		const abilityElement = createAbilityElement(ability);
		abilitiesContainer.appendChild(abilityElement);
	}

	displayWeaponStats(
		hero.Weapon,
		heroCard.querySelector(".weapon-stats .stat-grid")
	);
	displayVitalityStats(
		hero.Vitality,
		heroCard.querySelector(".vitality-stats .stat-grid")
	);

	return heroCard;
}

function createAbilityElement(ability) {
	const abilityDiv = document.createElement("div");
	abilityDiv.className = "ability";

	abilityDiv.innerHTML = `
        <div class="ability-header">
            <div class="ability-title">
                <h3>${ability.Name}</h3>
                <h5>${ability.Type}</h5>
            </div>
            <div class="ability-details">
                <span>&#9673; ${ability.Range || "N/A"}</span>
                <span>&#9654; ${ability.Duration || "N/A"}</span>
                <span>&#8635; ${ability.Cooldown || "N/A"}</span>
            </div>
        </div>
        <p class="ability-description">${ability.Desc}</p>
        <div class="ability-stats">
            ${Object.entries(ability.Details)
				.map(
					([key, value], index) => `
                <div class="ability-stat ${index === 0 ? "highlight" : ""}">
                    <div class="stat-value">${value}</div>
                    <div class="stat-label">${key}</div>
                </div>
            `
				)
				.join("")}
        </div>
        <div class="ability-levels">
            ${Object.entries(ability.Levels)
				.map(
					([key, value]) => `
                <div class="ability-level">
                    <div class="stat-value">${value}</div>
                    <div class="stat-label">Level ${key}</div>
                </div>
            `
				)
				.join("")}
        </div>
    `;

	return abilityDiv;
}

function displayWeaponStats(weapon, container) {
	const stats = [
		{ label: "DPS", value: weapon.DPS },
		{ label: "Bullet Damage", value: weapon.BulletDamage },
		{ label: "Ammo", value: weapon.Ammo },
		{ label: "Bullets per sec", value: weapon.FireRate },
		{ label: "Light Melee", value: weapon.LightMelee },
		{ label: "Heavy Melee", value: weapon.HeavyMelee },
	];

	container.innerHTML = stats
		.map(
			(stat) => `
        <div class="stat-item">
            <div class="stat-value">${stat.value}</div>
            <div class="stat-label">${stat.label}</div>
        </div>
    `
		)
		.join("");
}

function displayVitalityStats(vitality, container) {
	const stats = [
		{ label: "Max Health", value: vitality.MaxHP },
		{ label: "Health Regen", value: vitality.HealthRegen },
		{ label: "Bullet Resist", value: vitality.BulletRes + "%" },
		{ label: "Spirit Resist", value: vitality.SpritRes + "%" },
		{ label: "Move Speed", value: vitality.MoveSpeed + " m/s" },
		{ label: "Sprint Speed", value: vitality.SprintSpeed + " m/s" },
		{ label: "Stamina", value: vitality.Stamina },
	];

	container.innerHTML = stats
		.map(
			(stat) => `
        <div class="stat-item">
            <div class="stat-value">${stat.value}</div>
            <div class="stat-label">${stat.label}</div>
        </div>
    `
		)
		.join("");
}
