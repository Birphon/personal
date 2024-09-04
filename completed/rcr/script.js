// List 1
const list1 = [
	"dumb",
	"scum",
	"douche",
	"shit",
	"dick",
	"fuck",
	"dip",
	"ass",
	"lib",
	"cock",
	"butt",
	"dirt",
	"trump",
	"twat",
	"piss",
	"wank",
	"bum",
	"poop",
];

// List 2
const list2 = [
	"ass",
	"bag",
	"head",
	"shit",
	"hat",
	"tard",
	"lord",
	"wit",
	"face",
	"wad",
	"sucker",
	"boy",
	"stain",
	"stick",
	"nozzle",
	"clown",
	"waffle",
	"goblin",
];

// Get references to the output elements
const output1 = document.getElementById("output1");
const output2 = document.getElementById("output2");

// Get reference to the button
const button = document.getElementById("myButton");

// Add click event listener to the button
button.addEventListener("click", () => {
	// Get random items from the lists
	const randomItem1 = list1[Math.floor(Math.random() * list1.length)];
	const randomItem2 = list2[Math.floor(Math.random() * list2.length)];

	// Update the output elements
	output1.textContent = randomItem1;
	output2.textContent = randomItem2;
});
