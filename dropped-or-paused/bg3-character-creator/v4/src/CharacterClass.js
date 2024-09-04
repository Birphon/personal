class CharacterClass {
	constructor(name, subclasses) {
		this.name = name;
		this.subclasses = subclasses;
	}
}

const classes = [
	new CharacterClass("Barbarian", ["Berserker", "Totem Warrior"]),
	new CharacterClass("Bard", ["College of Lore", "College of Valor"]),
	new CharacterClass("Cleric", ["Life Domain", "War Domain"]),
	new CharacterClass("Druid", ["Circle of the Land", "Circle of the Moon"]),
	new CharacterClass("Fighter", [
		"Champion",
		"Battle Master",
		"Eldritch Knight",
	]),
	new CharacterClass("Monk", [
		"Way of the Open Hand",
		"Way of Shadow",
		"Way of the Four Elements",
	]),
	new CharacterClass("Paladin", [
		"Oath of Devotion",
		"Oath of the Ancients",
		"Oath of Vengeance",
	]),
	new CharacterClass("Ranger", ["Hunter", "Beast Master"]),
	new CharacterClass("Rogue", ["Thief", "Assassin", "Arcane Trickster"]),
	new CharacterClass("Sorcerer", ["Draconic Bloodline", "Wild Magic"]),
	new CharacterClass("Warlock", [
		"The Archfey",
		"The Fiend",
		"The Great Old One",
	]),
	new CharacterClass("Wizard", [
		"School of Evocation",
		"School of Abjuration",
	]),
];

export default classes;
