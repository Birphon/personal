var $ = go.GraphObject.make;

var diagram;

function init() {
	diagram = $(go.Diagram, "breedingDiagram", {
		"undoManager.isEnabled": true,
	});

	// Define node templates
	diagram.nodeTemplateMap.add(
		"Lamball",
		$(
			go.Node,
			"Auto",
			{ selectable: true },
			$(go.Shape, "RoundedRectangle", { fill: "white", stroke: "black" }),
			$(go.TextBlock, "Lamball", { margin: 5 })
		)
	);
	diagram.nodeTemplateMap.add(
		"Cattiva",
		$(
			go.Node,
			"Auto",
			{ selectable: true },
			$(go.Shape, "RoundedRectangle", { fill: "white", stroke: "black" }),
			$(go.TextBlock, "Cattiva", { margin: 5 })
		)
	);
	diagram.nodeTemplateMap.add(
		"Chikipi",
		$(
			go.Node,
			"Auto",
			{ selectable: true },
			$(go.Shape, "RoundedRectangle", { fill: "white", stroke: "black" }),
			$(go.TextBlock, "Chikipi", { margin: 5 })
		)
	);
	diagram.nodeTemplateMap.add(
		"Lifmunk",
		$(
			go.Node,
			"Auto",
			{ selectable: true },
			$(go.Shape, "RoundedRectangle", { fill: "white", stroke: "black" }),
			$(go.TextBlock, "Lifmunk", { margin: 5 })
		)
	);
	diagram.nodeTemplateMap.add(
		"Foxparks",
		$(
			go.Node,
			"Auto",
			{ selectable: true },
			$(go.Shape, "RoundedRectangle", { fill: "white", stroke: "black" }),
			$(go.TextBlock, "Foxparks", { margin: 5 })
		)
	);
	diagram.nodeTemplateMap.add(
		"Fuack",
		$(
			go.Node,
			"Auto",
			{ selectable: true },
			$(go.Shape, "RoundedRectangle", { fill: "white", stroke: "black" }),
			$(go.TextBlock, "Fuack", { margin: 5 })
		)
	);
	diagram.nodeTemplateMap.add(
		"Sparkit",
		$(
			go.Node,
			"Auto",
			{ selectable: true },
			$(go.Shape, "RoundedRectangle", { fill: "white", stroke: "black" }),
			$(go.TextBlock, "Sparkit", { margin: 5 })
		)
	);

	diagram.nodeTemplateMap.add(
		"Tanzee",
		$(
			go.Node,
			"Auto",
			{ selectable: true },
			$(go.Shape, "RoundedRectangle", { fill: "white", stroke: "black" }),
			$(go.TextBlock, "Tanzee", { margin: 5 })
		)
	);
	// diagram.nodeTemplateMap.add(
	// 	"Rooby",
	// 	$(
	// 		go.Node,
	// 		"Auto",
	// 		{ selectable: true },
	// 		$(go.Shape, "RoundedRectangle", { fill: "white", stroke: "black" }),
	// 		$(go.TextBlock, "Rooby", { margin: 5 })
	// 	)
	// );
	// diagram.nodeTemplateMap.add(
	// 	"Pengullet",
	// 	$(
	// 		go.Node,
	// 		"Auto",
	// 		{ selectable: true },
	// 		$(go.Shape, "RoundedRectangle", { fill: "white", stroke: "black" }),
	// 		$(go.TextBlock, "Pengullet", { margin: 5 })
	// 	)
	// );
	// diagram.nodeTemplateMap.add(
	// 	"Penking",
	// 	$(
	// 		go.Node,
	// 		"Auto",
	// 		{ selectable: true },
	// 		$(go.Shape, "RoundedRectangle", { fill: "white", stroke: "black" }),
	// 		$(go.TextBlock, "Penking", { margin: 5 })
	// 	)
	// );
	// diagram.nodeTemplateMap.add(
	// 	"Jolthog",
	// 	$(
	// 		go.Node,
	// 		"Auto",
	// 		{ selectable: true },
	// 		$(go.Shape, "RoundedRectangle", { fill: "white", stroke: "black" }),
	// 		$(go.TextBlock, "Jolthog", { margin: 5 })
	// 	)
	// );
	// diagram.nodeTemplateMap.add(
	// 	"Jolthog-Cryst",
	// 	$(
	// 		go.Node,
	// 		"Auto",
	// 		{ selectable: true },
	// 		$(go.Shape, "RoundedRectangle", { fill: "white", stroke: "black" }),
	// 		$(go.TextBlock, "Jolthog Cryst", { margin: 5 })
	// 	)
	// );
	// diagram.nodeTemplateMap.add(
	// 	"gumoss",
	// 	$(
	// 		go.Node,
	// 		"Auto",
	// 		{ selectable: true },
	// 		$(go.Shape, "RoundedRectangle", { fill: "white", stroke: "black" }),
	// 		$(go.TextBlock, "Gumoss", { margin: 5 })
	// 	)
	// );
	// diagram.nodeTemplateMap.add(
	// 	"gumossSpecial",
	// 	$(
	// 		go.Node,
	// 		"Auto",
	// 		{ selectable: true },
	// 		$(go.Shape, "RoundedRectangle", { fill: "white", stroke: "black" }),
	// 		$(go.TextBlock, "Gumoss-Special", { margin: 5 })
	// 	)
	// );
	// diagram.nodeTemplateMap.add(
	// 	"vixy",
	// 	$(
	// 		go.Node,
	// 		"Auto",
	// 		{ selectable: true },
	// 		$(go.Shape, "RoundedRectangle", { fill: "white", stroke: "black" }),
	// 		$(go.TextBlock, "Vixy", { margin: 5 })
	// 	)
	// );
	// diagram.nodeTemplateMap.add(
	// 	"hoocrates",
	// 	$(
	// 		go.Node,
	// 		"Auto",
	// 		{ selectable: true },
	// 		$(go.Shape, "RoundedRectangle", { fill: "white", stroke: "black" }),
	// 		$(go.TextBlock, "Hoocrates", { margin: 5 })
	// 	)
	// );
	// diagram.nodeTemplateMap.add(
	// 	"teafant",
	// 	$(
	// 		go.Node,
	// 		"Auto",
	// 		{ selectable: true },
	// 		$(go.Shape, "RoundedRectangle", { fill: "white", stroke: "black" }),
	// 		$(go.TextBlock, "Teafant", { margin: 5 })
	// 	)
	// );
	// diagram.nodeTemplateMap.add(
	// 	"depresso",
	// 	$(
	// 		go.Node,
	// 		"Auto",
	// 		{ selectable: true },
	// 		$(go.Shape, "RoundedRectangle", { fill: "white", stroke: "black" }),
	// 		$(go.TextBlock, "Depresso", { margin: 5 })
	// 	)
	// );
	// diagram.nodeTemplateMap.add(
	// 	"cremis",
	// 	$(
	// 		go.Node,
	// 		"Auto",
	// 		{ selectable: true },
	// 		$(go.Shape, "RoundedRectangle", { fill: "white", stroke: "black" }),
	// 		$(go.TextBlock, "Cremis", { margin: 5 })
	// 	)
	// );
	// diagram.nodeTemplateMap.add(
	// 	"daedream",
	// 	$(
	// 		go.Node,
	// 		"Auto",
	// 		{ selectable: true },
	// 		$(go.Shape, "RoundedRectangle", { fill: "white", stroke: "black" }),
	// 		$(go.TextBlock, "Daedream", { margin: 5 })
	// 	)
	// );
	// diagram.nodeTemplateMap.add(
	// 	"rushoar",
	// 	$(
	// 		go.Node,
	// 		"Auto",
	// 		{ selectable: true },
	// 		$(go.Shape, "RoundedRectangle", { fill: "white", stroke: "black" }),
	// 		$(go.TextBlock, "Rushoar", { margin: 5 })
	// 	)
	// );
	// diagram.nodeTemplateMap.add(
	// 	"nox",
	// 	$(
	// 		go.Node,
	// 		"Auto",
	// 		{ selectable: true },
	// 		$(go.Shape, "RoundedRectangle", { fill: "white", stroke: "black" }),
	// 		$(go.TextBlock, "Nox", { margin: 5 })
	// 	)
	// );
	// diagram.nodeTemplateMap.add(
	// 	"fuddler",
	// 	$(
	// 		go.Node,
	// 		"Auto",
	// 		{ selectable: true },
	// 		$(go.Shape, "RoundedRectangle", { fill: "white", stroke: "black" }),
	// 		$(go.TextBlock, "Fuddler", { margin: 5 })
	// 	)
	// );
	// diagram.nodeTemplateMap.add(
	// 	"killamari",
	// 	$(
	// 		go.Node,
	// 		"Auto",
	// 		{ selectable: true },
	// 		$(go.Shape, "RoundedRectangle", { fill: "white", stroke: "black" }),
	// 		$(go.TextBlock, "Killamari", { margin: 5 })
	// 	)
	// );
	// diagram.nodeTemplateMap.add(
	// 	"mau",
	// 	$(
	// 		go.Node,
	// 		"Auto",
	// 		{ selectable: true },
	// 		$(go.Shape, "RoundedRectangle", { fill: "white", stroke: "black" }),
	// 		$(go.TextBlock, "Mau", { margin: 5 })
	// 	)
	// );
	// diagram.nodeTemplateMap.add(
	// 	"maucryst",
	// 	$(
	// 		go.Node,
	// 		"Auto",
	// 		{ selectable: true },
	// 		$(go.Shape, "RoundedRectangle", { fill: "white", stroke: "black" }),
	// 		$(go.TextBlock, "Mau-Cryst", { margin: 5 })
	// 	)
	// );
	// diagram.nodeTemplateMap.add(
	// 	"celaray",
	// 	$(
	// 		go.Node,
	// 		"Auto",
	// 		{ selectable: true },
	// 		$(go.Shape, "RoundedRectangle", { fill: "white", stroke: "black" }),
	// 		$(go.TextBlock, "Celaray", { margin: 5 })
	// 	)
	// );
	// diagram.nodeTemplateMap.add(
	// 	"direhowl",
	// 	$(
	// 		go.Node,
	// 		"Auto",
	// 		{ selectable: true },
	// 		$(go.Shape, "RoundedRectangle", { fill: "white", stroke: "black" }),
	// 		$(go.TextBlock, "Direhowl", { margin: 5 })
	// 	)
	// );
	// diagram.nodeTemplateMap.add(
	// 	"tocotoco",
	// 	$(
	// 		go.Node,
	// 		"Auto",
	// 		{ selectable: true },
	// 		$(go.Shape, "RoundedRectangle", { fill: "white", stroke: "black" }),
	// 		$(go.TextBlock, "Tocotoco", { margin: 5 })
	// 	)
	// );
	// diagram.nodeTemplateMap.add(
	// 	"flopie",
	// 	$(
	// 		go.Node,
	// 		"Auto",
	// 		{ selectable: true },
	// 		$(go.Shape, "RoundedRectangle", { fill: "white", stroke: "black" }),
	// 		$(go.TextBlock, "Flopie", { margin: 5 })
	// 	)
	// );
	// diagram.nodeTemplateMap.add(
	// 	"mozzarina",
	// 	$(
	// 		go.Node,
	// 		"Auto",
	// 		{ selectable: true },
	// 		$(go.Shape, "RoundedRectangle", { fill: "white", stroke: "black" }),
	// 		$(go.TextBlock, "Mozzarina", { margin: 5 })
	// 	)
	// );
	// diagram.nodeTemplateMap.add(
	// 	"bristla",
	// 	$(
	// 		go.Node,
	// 		"Auto",
	// 		{ selectable: true },
	// 		$(go.Shape, "RoundedRectangle", { fill: "white", stroke: "black" }),
	// 		$(go.TextBlock, "Bristla", { margin: 5 })
	// 	)
	// );
	// diagram.nodeTemplateMap.add(
	// 	"gobfin",
	// 	$(
	// 		go.Node,
	// 		"Auto",
	// 		{ selectable: true },
	// 		$(go.Shape, "RoundedRectangle", { fill: "white", stroke: "black" }),
	// 		$(go.TextBlock, "Gobfin", { margin: 5 })
	// 	)
	// );
	// diagram.nodeTemplateMap.add(
	// 	"gobfinignis",
	// 	$(
	// 		go.Node,
	// 		"Auto",
	// 		{ selectable: true },
	// 		$(go.Shape, "RoundedRectangle", { fill: "white", stroke: "black" }),
	// 		$(go.TextBlock, "Gobfin-Ignis", { margin: 5 })
	// 	)
	// );
	// diagram.nodeTemplateMap.add(
	// 	"hangyu",
	// 	$(
	// 		go.Node,
	// 		"Auto",
	// 		{ selectable: true },
	// 		$(go.Shape, "RoundedRectangle", { fill: "white", stroke: "black" }),
	// 		$(go.TextBlock, "Hangyu", { margin: 5 })
	// 	)
	// );
	// diagram.nodeTemplateMap.add(
	// 	"hangyucryst",
	// 	$(
	// 		go.Node,
	// 		"Auto",
	// 		{ selectable: true },
	// 		$(go.Shape, "RoundedRectangle", { fill: "white", stroke: "black" }),
	// 		$(go.TextBlock, "Hangyu-Cryst", { margin: 5 })
	// 	)
	// );
	// diagram.nodeTemplateMap.add(
	// 	"mossanda",
	// 	$(
	// 		go.Node,
	// 		"Auto",
	// 		{ selectable: true },
	// 		$(go.Shape, "RoundedRectangle", { fill: "white", stroke: "black" }),
	// 		$(go.TextBlock, "Mossanda", { margin: 5 })
	// 	)
	// );
	// diagram.nodeTemplateMap.add(
	// 	"mossandalux",
	// 	$(
	// 		go.Node,
	// 		"Auto",
	// 		{ selectable: true },
	// 		$(go.Shape, "RoundedRectangle", { fill: "white", stroke: "black" }),
	// 		$(go.TextBlock, "Mossandalux", { margin: 5 })
	// 	)
	// );
	// diagram.nodeTemplateMap.add(
	// 	"woolipop",
	// 	$(
	// 		go.Node,
	// 		"Auto",
	// 		{ selectable: true },
	// 		$(go.Shape, "RoundedRectangle", { fill: "white", stroke: "black" }),
	// 		$(go.TextBlock, "Woolipop", { margin: 5 })
	// 	)
	// );
	// diagram.nodeTemplateMap.add(
	// 	"caprity",
	// 	$(
	// 		go.Node,
	// 		"Auto",
	// 		{ selectable: true },
	// 		$(go.Shape, "RoundedRectangle", { fill: "white", stroke: "black" }),
	// 		$(go.TextBlock, "Caprity", { margin: 5 })
	// 	)
	// );
	// diagram.nodeTemplateMap.add(
	// 	"melpaca",
	// 	$(
	// 		go.Node,
	// 		"Auto",
	// 		{ selectable: true },
	// 		$(go.Shape, "RoundedRectangle", { fill: "white", stroke: "black" }),
	// 		$(go.TextBlock, "Melpaca", { margin: 5 })
	// 	)
	// );
	// diagram.nodeTemplateMap.add(
	// 	"eikthyrdeer",
	// 	$(
	// 		go.Node,
	// 		"Auto",
	// 		{ selectable: true },
	// 		$(go.Shape, "RoundedRectangle", { fill: "white", stroke: "black" }),
	// 		$(go.TextBlock, "Eikthyrdeer", { margin: 5 })
	// 	)
	// );
	// diagram.nodeTemplateMap.add(
	// 	"eikthyrdeerterra",
	// 	$(
	// 		go.Node,
	// 		"Auto",
	// 		{ selectable: true },
	// 		$(go.Shape, "RoundedRectangle", { fill: "white", stroke: "black" }),
	// 		$(go.TextBlock, "Eikthyrdeer-Terra", { margin: 5 })
	// 	)
	// );
	// diagram.nodeTemplateMap.add(
	// 	"nitewing",
	// 	$(
	// 		go.Node,
	// 		"Auto",
	// 		{ selectable: true },
	// 		$(go.Shape, "RoundedRectangle", { fill: "white", stroke: "black" }),
	// 		$(go.TextBlock, "Nitewing", { margin: 5 })
	// 	)
	// );
	// diagram.nodeTemplateMap.add(
	// 	"ribunny",
	// 	$(
	// 		go.Node,
	// 		"Auto",
	// 		{ selectable: true },
	// 		$(go.Shape, "RoundedRectangle", { fill: "white", stroke: "black" }),
	// 		$(go.TextBlock, "Ribunny", { margin: 5 })
	// 	)
	// );
	// diagram.nodeTemplateMap.add(
	// 	"incineram",
	// 	$(
	// 		go.Node,
	// 		"Auto",
	// 		{ selectable: true },
	// 		$(go.Shape, "RoundedRectangle", { fill: "white", stroke: "black" }),
	// 		$(go.TextBlock, "Incineram", { margin: 5 })
	// 	)
	// );
	// diagram.nodeTemplateMap.add(
	// 	"incineramnoct",
	// 	$(
	// 		go.Node,
	// 		"Auto",
	// 		{ selectable: true },
	// 		$(go.Shape, "RoundedRectangle", { fill: "white", stroke: "black" }),
	// 		$(go.TextBlock, "Incineram-Noct", { margin: 5 })
	// 	)
	// );
	// diagram.nodeTemplateMap.add(
	// 	"cinnamoth",
	// 	$(
	// 		go.Node,
	// 		"Auto",
	// 		{ selectable: true },
	// 		$(go.Shape, "RoundedRectangle", { fill: "white", stroke: "black" }),
	// 		$(go.TextBlock, "Cinnamoth", { margin: 5 })
	// 	)
	// );
	// diagram.nodeTemplateMap.add(
	// 	"arsox",
	// 	$(
	// 		go.Node,
	// 		"Auto",
	// 		{ selectable: true },
	// 		$(go.Shape, "RoundedRectangle", { fill: "white", stroke: "black" }),
	// 		$(go.TextBlock, "Arsox", { margin: 5 })
	// 	)
	// );
	// diagram.nodeTemplateMap.add(
	// 	"dumud",
	// 	$(
	// 		go.Node,
	// 		"Auto",
	// 		{ selectable: true },
	// 		$(go.Shape, "RoundedRectangle", { fill: "white", stroke: "black" }),
	// 		$(go.TextBlock, "Dumud", { margin: 5 })
	// 	)
	// );
	// diagram.nodeTemplateMap.add(
	// 	"cawgnito",
	// 	$(
	// 		go.Node,
	// 		"Auto",
	// 		{ selectable: true },
	// 		$(go.Shape, "RoundedRectangle", { fill: "white", stroke: "black" }),
	// 		$(go.TextBlock, "Cawgnito", { margin: 5 })
	// 	)
	// );
	// diagram.nodeTemplateMap.add(
	// 	"leezpunk",
	// 	$(
	// 		go.Node,
	// 		"Auto",
	// 		{ selectable: true },
	// 		$(go.Shape, "RoundedRectangle", { fill: "white", stroke: "black" }),
	// 		$(go.TextBlock, "Leezpunk", { margin: 5 })
	// 	)
	// );
	// diagram.nodeTemplateMap.add(
	// 	"leezpunkignis",
	// 	$(
	// 		go.Node,
	// 		"Auto",
	// 		{ selectable: true },
	// 		$(go.Shape, "RoundedRectangle", { fill: "white", stroke: "black" }),
	// 		$(go.TextBlock, "Leezpunk-Ignis", { margin: 5 })
	// 	)
	// );
	// diagram.nodeTemplateMap.add(
	// 	"loupmoon",
	// 	$(
	// 		go.Node,
	// 		"Auto",
	// 		{ selectable: true },
	// 		$(go.Shape, "RoundedRectangle", { fill: "white", stroke: "black" }),
	// 		$(go.TextBlock, "Loupmoon", { margin: 5 })
	// 	)
	// );
	// diagram.nodeTemplateMap.add(
	// 	"galeclaw",
	// 	$(
	// 		go.Node,
	// 		"Auto",
	// 		{ selectable: true },
	// 		$(go.Shape, "RoundedRectangle", { fill: "white", stroke: "black" }),
	// 		$(go.TextBlock, "Galeclaw", { margin: 5 })
	// 	)
	// );
	// diagram.nodeTemplateMap.add(
	// 	"robinquill",
	// 	$(
	// 		go.Node,
	// 		"Auto",
	// 		{ selectable: true },
	// 		$(go.Shape, "RoundedRectangle", { fill: "white", stroke: "black" }),
	// 		$(go.TextBlock, "Robinquill", { margin: 5 })
	// 	)
	// );
	// diagram.nodeTemplateMap.add(
	// 	"robinquillterra",
	// 	$(
	// 		go.Node,
	// 		"Auto",
	// 		{ selectable: true },
	// 		$(go.Shape, "RoundedRectangle", { fill: "white", stroke: "black" }),
	// 		$(go.TextBlock, "Robinquill-Terra", { margin: 5 })
	// 	)
	// );
	// diagram.nodeTemplateMap.add(
	// 	"gorirat",
	// 	$(
	// 		go.Node,
	// 		"Auto",
	// 		{ selectable: true },
	// 		$(go.Shape, "RoundedRectangle", { fill: "white", stroke: "black" }),
	// 		$(go.TextBlock, "Gorirat", { margin: 5 })
	// 	)
	// );
	// diagram.nodeTemplateMap.add(
	// 	"beegarde",
	// 	$(
	// 		go.Node,
	// 		"Auto",
	// 		{ selectable: true },
	// 		$(go.Shape, "RoundedRectangle", { fill: "white", stroke: "black" }),
	// 		$(go.TextBlock, "Beegarde", { margin: 5 })
	// 	)
	// );
	// diagram.nodeTemplateMap.add(
	// 	"elizabee",
	// 	$(
	// 		go.Node,
	// 		"Auto",
	// 		{ selectable: true },
	// 		$(go.Shape, "RoundedRectangle", { fill: "white", stroke: "black" }),
	// 		$(go.TextBlock, "Elizabee", { margin: 5 })
	// 	)
	// );
	// diagram.nodeTemplateMap.add(
	// 	"grintale",
	// 	$(
	// 		go.Node,
	// 		"Auto",
	// 		{ selectable: true },
	// 		$(go.Shape, "RoundedRectangle", { fill: "white", stroke: "black" }),
	// 		$(go.TextBlock, "Grintale", { margin: 5 })
	// 	)
	// );
	// diagram.nodeTemplateMap.add(
	// 	"swee",
	// 	$(
	// 		go.Node,
	// 		"Auto",
	// 		{ selectable: true },
	// 		$(go.Shape, "RoundedRectangle", { fill: "white", stroke: "black" }),
	// 		$(go.TextBlock, "Swee", { margin: 5 })
	// 	)
	// );
	// diagram.nodeTemplateMap.add(
	// 	"sweepa",
	// 	$(
	// 		go.Node,
	// 		"Auto",
	// 		{ selectable: true },
	// 		$(go.Shape, "RoundedRectangle", { fill: "white", stroke: "black" }),
	// 		$(go.TextBlock, "Sweepa", { margin: 5 })
	// 	)
	// );
	// diagram.nodeTemplateMap.add(
	// 	"chillet",
	// 	$(
	// 		go.Node,
	// 		"Auto",
	// 		{ selectable: true },
	// 		$(go.Shape, "RoundedRectangle", { fill: "white", stroke: "black" }),
	// 		$(go.TextBlock, "Chillet", { margin: 5 })
	// 	)
	// );
	// diagram.nodeTemplateMap.add(
	// 	"univolt",
	// 	$(
	// 		go.Node,
	// 		"Auto",
	// 		{ selectable: true },
	// 		$(go.Shape, "RoundedRectangle", { fill: "white", stroke: "black" }),
	// 		$(go.TextBlock, "Univolt", { margin: 5 })
	// 	)
	// );
	// diagram.nodeTemplateMap.add(
	// 	"foxcicle",
	// 	$(
	// 		go.Node,
	// 		"Auto",
	// 		{ selectable: true },
	// 		$(go.Shape, "RoundedRectangle", { fill: "white", stroke: "black" }),
	// 		$(go.TextBlock, "Foxcicle", { margin: 5 })
	// 	)
	// );
	// diagram.nodeTemplateMap.add(
	// 	"pyrin",
	// 	$(
	// 		go.Node,
	// 		"Auto",
	// 		{ selectable: true },
	// 		$(go.Shape, "RoundedRectangle", { fill: "white", stroke: "black" }),
	// 		$(go.TextBlock, "Pyrin", { margin: 5 })
	// 	)
	// );
	// diagram.nodeTemplateMap.add(
	// 	"pyrinnoct",
	// 	$(
	// 		go.Node,
	// 		"Auto",
	// 		{ selectable: true },
	// 		$(go.Shape, "RoundedRectangle", { fill: "white", stroke: "black" }),
	// 		$(go.TextBlock, "Pyrin-Noct", { margin: 5 })
	// 	)
	// );
	// diagram.nodeTemplateMap.add(
	// 	"reindrix",
	// 	$(
	// 		go.Node,
	// 		"Auto",
	// 		{ selectable: true },
	// 		$(go.Shape, "RoundedRectangle", { fill: "white", stroke: "black" }),
	// 		$(go.TextBlock, "Reindrix", { margin: 5 })
	// 	)
	// );
	// diagram.nodeTemplateMap.add(
	// 	"rayhound",
	// 	$(
	// 		go.Node,
	// 		"Auto",
	// 		{ selectable: true },
	// 		$(go.Shape, "RoundedRectangle", { fill: "white", stroke: "black" }),
	// 		$(go.TextBlock, "Rayhound", { margin: 5 })
	// 	)
	// );
	// diagram.nodeTemplateMap.add(
	// 	"kitsun",
	// 	$(
	// 		go.Node,
	// 		"Auto",
	// 		{ selectable: true },
	// 		$(go.Shape, "RoundedRectangle", { fill: "white", stroke: "black" }),
	// 		$(go.TextBlock, "Kitsun", { margin: 5 })
	// 	)
	// );
	// diagram.nodeTemplateMap.add(
	// 	"dazzi",
	// 	$(
	// 		go.Node,
	// 		"Auto",
	// 		{ selectable: true },
	// 		$(go.Shape, "RoundedRectangle", { fill: "white", stroke: "black" }),
	// 		$(go.TextBlock, "Dazzi", { margin: 5 })
	// 	)
	// );
	// diagram.nodeTemplateMap.add(
	// 	"lunaris",
	// 	$(
	// 		go.Node,
	// 		"Auto",
	// 		{ selectable: true },
	// 		$(go.Shape, "RoundedRectangle", { fill: "white", stroke: "black" }),
	// 		$(go.TextBlock, "Lunaris", { margin: 5 })
	// 	)
	// );
	// diagram.nodeTemplateMap.add(
	// 	"dinossom",
	// 	$(
	// 		go.Node,
	// 		"Auto",
	// 		{ selectable: true },
	// 		$(go.Shape, "RoundedRectangle", { fill: "white", stroke: "black" }),
	// 		$(go.TextBlock, "Dinossom", { margin: 5 })
	// 	)
	// );
	// diagram.nodeTemplateMap.add(
	// 	"dinossomlux",
	// 	$(
	// 		go.Node,
	// 		"Auto",
	// 		{ selectable: true },
	// 		$(go.Shape, "RoundedRectangle", { fill: "white", stroke: "black" }),
	// 		$(go.TextBlock, "Dinossomlux", { margin: 5 })
	// 	)
	// );
	// diagram.nodeTemplateMap.add(
	// 	"surfent",
	// 	$(
	// 		go.Node,
	// 		"Auto",
	// 		{ selectable: true },
	// 		$(go.Shape, "RoundedRectangle", { fill: "white", stroke: "black" }),
	// 		$(go.TextBlock, "Surfent", { margin: 5 })
	// 	)
	// );
	// diagram.nodeTemplateMap.add(
	// 	"surfentterra",
	// 	$(
	// 		go.Node,
	// 		"Auto",
	// 		{ selectable: true },
	// 		$(go.Shape, "RoundedRectangle", { fill: "white", stroke: "black" }),
	// 		$(go.TextBlock, "Surfent-Terra", { margin: 5 })
	// 	)
	// );
	// diagram.nodeTemplateMap.add(
	// 	"maraith",
	// 	$(
	// 		go.Node,
	// 		"Auto",
	// 		{ selectable: true },
	// 		$(go.Shape, "RoundedRectangle", { fill: "white", stroke: "black" }),
	// 		$(go.TextBlock, "Maraith", { margin: 5 })
	// 	)
	// );
	// diagram.nodeTemplateMap.add(
	// 	"digtoise",
	// 	$(
	// 		go.Node,
	// 		"Auto",
	// 		{ selectable: true },
	// 		$(go.Shape, "RoundedRectangle", { fill: "white", stroke: "black" }),
	// 		$(go.TextBlock, "Digtoise", { margin: 5 })
	// 	)
	// );
	// diagram.nodeTemplateMap.add(
	// 	"tombat",
	// 	$(
	// 		go.Node,
	// 		"Auto",
	// 		{ selectable: true },
	// 		$(go.Shape, "RoundedRectangle", { fill: "white", stroke: "black" }),
	// 		$(go.TextBlock, "Tombat", { margin: 5 })
	// 	)
	// );
	// diagram.nodeTemplateMap.add(
	// 	"lovander",
	// 	$(
	// 		go.Node,
	// 		"Auto",
	// 		{ selectable: true },
	// 		$(go.Shape, "RoundedRectangle", { fill: "white", stroke: "black" }),
	// 		$(go.TextBlock, "Lovander", { margin: 5 })
	// 	)
	// );
	// diagram.nodeTemplateMap.add(
	// 	"flambelle",
	// 	$(
	// 		go.Node,
	// 		"Auto",
	// 		{ selectable: true },
	// 		$(go.Shape, "RoundedRectangle", { fill: "white", stroke: "black" }),
	// 		$(go.TextBlock, "Flambelle", { margin: 5 })
	// 	)
	// );
	// diagram.nodeTemplateMap.add(
	// 	"vanwyrm",
	// 	$(
	// 		go.Node,
	// 		"Auto",
	// 		{ selectable: true },
	// 		$(go.Shape, "RoundedRectangle", { fill: "white", stroke: "black" }),
	// 		$(go.TextBlock, "Vanwyrm", { margin: 5 })
	// 	)
	// );
	// diagram.nodeTemplateMap.add(
	// 	"vanwyrmcryst",
	// 	$(
	// 		go.Node,
	// 		"Auto",
	// 		{ selectable: true },
	// 		$(go.Shape, "RoundedRectangle", { fill: "white", stroke: "black" }),
	// 		$(go.TextBlock, "Vanwyrm-Cryst", { margin: 5 })
	// 	)
	// );
	// diagram.nodeTemplateMap.add(
	// 	"bushi",
	// 	$(
	// 		go.Node,
	// 		"Auto",
	// 		{ selectable: true },
	// 		$(go.Shape, "RoundedRectangle", { fill: "white", stroke: "black" }),
	// 		$(go.TextBlock, "Bushi", { margin: 5 })
	// 	)
	// );
	// diagram.nodeTemplateMap.add(
	// 	"beakon",
	// 	$(
	// 		go.Node,
	// 		"Auto",
	// 		{ selectable: true },
	// 		$(go.Shape, "RoundedRectangle", { fill: "white", stroke: "black" }),
	// 		$(go.TextBlock, "Beakon", { margin: 5 })
	// 	)
	// );
	// diagram.nodeTemplateMap.add(
	// 	"ragnahawk",
	// 	$(
	// 		go.Node,
	// 		"Auto",
	// 		{ selectable: true },
	// 		$(go.Shape, "RoundedRectangle", { fill: "white", stroke: "black" }),
	// 		$(go.TextBlock, "Ragnahawk", { margin: 5 })
	// 	)
	// );
	// diagram.nodeTemplateMap.add(
	// 	"katress",
	// 	$(
	// 		go.Node,
	// 		"Auto",
	// 		{ selectable: true },
	// 		$(go.Shape, "RoundedRectangle", { fill: "white", stroke: "black" }),
	// 		$(go.TextBlock, "Katress", { margin: 5 })
	// 	)
	// );
	// diagram.nodeTemplateMap.add(
	// 	"wixen",
	// 	$(
	// 		go.Node,
	// 		"Auto",
	// 		{ selectable: true },
	// 		$(go.Shape, "RoundedRectangle", { fill: "white", stroke: "black" }),
	// 		$(go.TextBlock, "Wixen", { margin: 5 })
	// 	)
	// );
	// diagram.nodeTemplateMap.add(
	// 	"verdash",
	// 	$(
	// 		go.Node,
	// 		"Auto",
	// 		{ selectable: true },
	// 		$(go.Shape, "RoundedRectangle", { fill: "white", stroke: "black" }),
	// 		$(go.TextBlock, "Verdash", { margin: 5 })
	// 	)
	// );
	// diagram.nodeTemplateMap.add(
	// 	"vaelet",
	// 	$(
	// 		go.Node,
	// 		"Auto",
	// 		{ selectable: true },
	// 		$(go.Shape, "RoundedRectangle", { fill: "white", stroke: "black" }),
	// 		$(go.TextBlock, "Vaelet", { margin: 5 })
	// 	)
	// );
	// diagram.nodeTemplateMap.add(
	// 	"sibelyx",
	// 	$(
	// 		go.Node,
	// 		"Auto",
	// 		{ selectable: true },
	// 		$(go.Shape, "RoundedRectangle", { fill: "white", stroke: "black" }),
	// 		$(go.TextBlock, "Sibelyx", { margin: 5 })
	// 	)
	// );
	// diagram.nodeTemplateMap.add(
	// 	"elphidran",
	// 	$(
	// 		go.Node,
	// 		"Auto",
	// 		{ selectable: true },
	// 		$(go.Shape, "RoundedRectangle", { fill: "white", stroke: "black" }),
	// 		$(go.TextBlock, "Elphidran", { margin: 5 })
	// 	)
	// );
	// diagram.nodeTemplateMap.add(
	// 	"elphidranaqua",
	// 	$(
	// 		go.Node,
	// 		"Auto",
	// 		{ selectable: true },
	// 		$(go.Shape, "RoundedRectangle", { fill: "white", stroke: "black" }),
	// 		$(go.TextBlock, "Elphidran-Aqua", { margin: 5 })
	// 	)
	// );
	// diagram.nodeTemplateMap.add(
	// 	"kelpsea",
	// 	$(
	// 		go.Node,
	// 		"Auto",
	// 		{ selectable: true },
	// 		$(go.Shape, "RoundedRectangle", { fill: "white", stroke: "black" }),
	// 		$(go.TextBlock, "Kelpsea", { margin: 5 })
	// 	)
	// );
	// diagram.nodeTemplateMap.add(
	// 	"kelpseaignis",
	// 	$(
	// 		go.Node,
	// 		"Auto",
	// 		{ selectable: true },
	// 		$(go.Shape, "RoundedRectangle", { fill: "white", stroke: "black" }),
	// 		$(go.TextBlock, "Kelpsea-Ignis", { margin: 5 })
	// 	)
	// );
	// diagram.nodeTemplateMap.add(
	// 	"azurobe",
	// 	$(
	// 		go.Node,
	// 		"Auto",
	// 		{ selectable: true },
	// 		$(go.Shape, "RoundedRectangle", { fill: "white", stroke: "black" }),
	// 		$(go.TextBlock, "Azurobe", { margin: 5 })
	// 	)
	// );
	// diagram.nodeTemplateMap.add(
	// 	"cryolinx",
	// 	$(
	// 		go.Node,
	// 		"Auto",
	// 		{ selectable: true },
	// 		$(go.Shape, "RoundedRectangle", { fill: "white", stroke: "black" }),
	// 		$(go.TextBlock, "Cryolinx", { margin: 5 })
	// 	)
	// );
	// diagram.nodeTemplateMap.add(
	// 	"blazehowl",
	// 	$(
	// 		go.Node,
	// 		"Auto",
	// 		{ selectable: true },
	// 		$(go.Shape, "RoundedRectangle", { fill: "white", stroke: "black" }),
	// 		$(go.TextBlock, "Blazehowl", { margin: 5 })
	// 	)
	// );
	// diagram.nodeTemplateMap.add(
	// 	"blazehowlnoct",
	// 	$(
	// 		go.Node,
	// 		"Auto",
	// 		{ selectable: true },
	// 		$(go.Shape, "RoundedRectangle", { fill: "white", stroke: "black" }),
	// 		$(go.TextBlock, "Blazehowl-Noct", { margin: 5 })
	// 	)
	// );
	// diagram.nodeTemplateMap.add(
	// 	"relaxaurus",
	// 	$(
	// 		go.Node,
	// 		"Auto",
	// 		{ selectable: true },
	// 		$(go.Shape, "RoundedRectangle", { fill: "white", stroke: "black" }),
	// 		$(go.TextBlock, "Relaxaurus", { margin: 5 })
	// 	)
	// );
	// diagram.nodeTemplateMap.add(
	// 	"relaxauruslux",
	// 	$(
	// 		go.Node,
	// 		"Auto",
	// 		{ selectable: true },
	// 		$(go.Shape, "RoundedRectangle", { fill: "white", stroke: "black" }),
	// 		$(go.TextBlock, "Relaxauruslux", { margin: 5 })
	// 	)
	// );
	// diagram.nodeTemplateMap.add(
	// 	"broncherry",
	// 	$(
	// 		go.Node,
	// 		"Auto",
	// 		{ selectable: true },
	// 		$(go.Shape, "RoundedRectangle", { fill: "white", stroke: "black" }),
	// 		$(go.TextBlock, "Broncherry", { margin: 5 })
	// 	)
	// );
	// diagram.nodeTemplateMap.add(
	// 	"broncherryaqua",
	// 	$(
	// 		go.Node,
	// 		"Auto",
	// 		{ selectable: true },
	// 		$(go.Shape, "RoundedRectangle", { fill: "white", stroke: "black" }),
	// 		$(go.TextBlock, "Broncherry-Aqua", { margin: 5 })
	// 	)
	// );
	// diagram.nodeTemplateMap.add(
	// 	"petallia",
	// 	$(
	// 		go.Node,
	// 		"Auto",
	// 		{ selectable: true },
	// 		$(go.Shape, "RoundedRectangle", { fill: "white", stroke: "black" }),
	// 		$(go.TextBlock, "Petallia", { margin: 5 })
	// 	)
	// );
	// diagram.nodeTemplateMap.add(
	// 	"reptyro",
	// 	$(
	// 		go.Node,
	// 		"Auto",
	// 		{ selectable: true },
	// 		$(go.Shape, "RoundedRectangle", { fill: "white", stroke: "black" }),
	// 		$(go.TextBlock, "Reptyro", { margin: 5 })
	// 	)
	// );
	// diagram.nodeTemplateMap.add(
	// 	"icereptyro",
	// 	$(
	// 		go.Node,
	// 		"Auto",
	// 		{ selectable: true },
	// 		$(go.Shape, "RoundedRectangle", { fill: "white", stroke: "black" }),
	// 		$(go.TextBlock, "Icereptyro", { margin: 5 })
	// 	)
	// );
	// diagram.nodeTemplateMap.add(
	// 	"kingpaca",
	// 	$(
	// 		go.Node,
	// 		"Auto",
	// 		{ selectable: true },
	// 		$(go.Shape, "RoundedRectangle", { fill: "white", stroke: "black" }),
	// 		$(go.TextBlock, "Kingpaca", { margin: 5 })
	// 	)
	// );
	// diagram.nodeTemplateMap.add(
	// 	"icekingpaca",
	// 	$(
	// 		go.Node,
	// 		"Auto",
	// 		{ selectable: true },
	// 		$(go.Shape, "RoundedRectangle", { fill: "white", stroke: "black" }),
	// 		$(go.TextBlock, "Icekingpaca", { margin: 5 })
	// 	)
	// );
	// diagram.nodeTemplateMap.add(
	// 	"mammorest",
	// 	$(
	// 		go.Node,
	// 		"Auto",
	// 		{ selectable: true },
	// 		$(go.Shape, "RoundedRectangle", { fill: "white", stroke: "black" }),
	// 		$(go.TextBlock, "Mammorest", { margin: 5 })
	// 	)
	// );
	// diagram.nodeTemplateMap.add(
	// 	"mammorestcryst",
	// 	$(
	// 		go.Node,
	// 		"Auto",
	// 		{ selectable: true },
	// 		$(go.Shape, "RoundedRectangle", { fill: "white", stroke: "black" }),
	// 		$(go.TextBlock, "Mammorest-Cryst", { margin: 5 })
	// 	)
	// );
	// diagram.nodeTemplateMap.add(
	// 	"wumpo",
	// 	$(
	// 		go.Node,
	// 		"Auto",
	// 		{ selectable: true },
	// 		$(go.Shape, "RoundedRectangle", { fill: "white", stroke: "black" }),
	// 		$(go.TextBlock, "Wumpo", { margin: 5 })
	// 	)
	// );
	// diagram.nodeTemplateMap.add(
	// 	"wumpobotan",
	// 	$(
	// 		go.Node,
	// 		"Auto",
	// 		{ selectable: true },
	// 		$(go.Shape, "RoundedRectangle", { fill: "white", stroke: "black" }),
	// 		$(go.TextBlock, "Wumpobotan", { margin: 5 })
	// 	)
	// );
	// diagram.nodeTemplateMap.add(
	// 	"warsect",
	// 	$(
	// 		go.Node,
	// 		"Auto",
	// 		{ selectable: true },
	// 		$(go.Shape, "RoundedRectangle", { fill: "white", stroke: "black" }),
	// 		$(go.TextBlock, "Warsect", { margin: 5 })
	// 	)
	// );
	// diagram.nodeTemplateMap.add(
	// 	"fenglope",
	// 	$(
	// 		go.Node,
	// 		"Auto",
	// 		{ selectable: true },
	// 		$(go.Shape, "RoundedRectangle", { fill: "white", stroke: "black" }),
	// 		$(go.TextBlock, "Fenglope", { margin: 5 })
	// 	)
	// );
	// diagram.nodeTemplateMap.add(
	// 	"felbat",
	// 	$(
	// 		go.Node,
	// 		"Auto",
	// 		{ selectable: true },
	// 		$(go.Shape, "RoundedRectangle", { fill: "white", stroke: "black" }),
	// 		$(go.TextBlock, "Felbat", { margin: 5 })
	// 	)
	// );
	// diagram.nodeTemplateMap.add(
	// 	"quivern",
	// 	$(
	// 		go.Node,
	// 		"Auto",
	// 		{ selectable: true },
	// 		$(go.Shape, "RoundedRectangle", { fill: "white", stroke: "black" }),
	// 		$(go.TextBlock, "Quivern", { margin: 5 })
	// 	)
	// );
	// diagram.nodeTemplateMap.add(
	// 	"blazamut",
	// 	$(
	// 		go.Node,
	// 		"Auto",
	// 		{ selectable: true },
	// 		$(go.Shape, "RoundedRectangle", { fill: "white", stroke: "black" }),
	// 		$(go.TextBlock, "Blazamut", { margin: 5 })
	// 	)
	// );
	// diagram.nodeTemplateMap.add(
	// 	"helzephyr",
	// 	$(
	// 		go.Node,
	// 		"Auto",
	// 		{ selectable: true },
	// 		$(go.Shape, "RoundedRectangle", { fill: "white", stroke: "black" }),
	// 		$(go.TextBlock, "Helzephyr", { margin: 5 })
	// 	)
	// );
	// diagram.nodeTemplateMap.add(
	// 	"astegon",
	// 	$(
	// 		go.Node,
	// 		"Auto",
	// 		{ selectable: true },
	// 		$(go.Shape, "RoundedRectangle", { fill: "white", stroke: "black" }),
	// 		$(go.TextBlock, "Astegon", { margin: 5 })
	// 	)
	// );
	// diagram.nodeTemplateMap.add(
	// 	"menasting",
	// 	$(
	// 		go.Node,
	// 		"Auto",
	// 		{ selectable: true },
	// 		$(go.Shape, "RoundedRectangle", { fill: "white", stroke: "black" }),
	// 		$(go.TextBlock, "Menasting", { margin: 5 })
	// 	)
	// );
	// diagram.nodeTemplateMap.add(
	// 	"anubis",
	// 	$(
	// 		go.Node,
	// 		"Auto",
	// 		{ selectable: true },
	// 		$(go.Shape, "RoundedRectangle", { fill: "white", stroke: "black" }),
	// 		$(go.TextBlock, "Anubis", { margin: 5 })
	// 	)
	// );
	// diagram.nodeTemplateMap.add(
	// 	"jormuntide",
	// 	$(
	// 		go.Node,
	// 		"Auto",
	// 		{ selectable: true },
	// 		$(go.Shape, "RoundedRectangle", { fill: "white", stroke: "black" }),
	// 		$(go.TextBlock, "Jormuntide", { margin: 5 })
	// 	)
	// );
	// diagram.nodeTemplateMap.add(
	// 	"jormuntideignis",
	// 	$(
	// 		go.Node,
	// 		"Auto",
	// 		{ selectable: true },
	// 		$(go.Shape, "RoundedRectangle", { fill: "white", stroke: "black" }),
	// 		$(go.TextBlock, "Jormuntide-Ignis", { margin: 5 })
	// 	)
	// );
	// diagram.nodeTemplateMap.add(
	// 	"suzaku",
	// 	$(
	// 		go.Node,
	// 		"Auto",
	// 		{ selectable: true },
	// 		$(go.Shape, "RoundedRectangle", { fill: "white", stroke: "black" }),
	// 		$(go.TextBlock, "Suzaku", { margin: 5 })
	// 	)
	// );
	// diagram.nodeTemplateMap.add(
	// 	"suzakuaqua",
	// 	$(
	// 		go.Node,
	// 		"Auto",
	// 		{ selectable: true },
	// 		$(go.Shape, "RoundedRectangle", { fill: "white", stroke: "black" }),
	// 		$(go.TextBlock, "Suzaku-Aqua", { margin: 5 })
	// 	)
	// );
	// diagram.nodeTemplateMap.add(
	// 	"grizzbolt",
	// 	$(
	// 		go.Node,
	// 		"Auto",
	// 		{ selectable: true },
	// 		$(go.Shape, "RoundedRectangle", { fill: "white", stroke: "black" }),
	// 		$(go.TextBlock, "Grizzbolt", { margin: 5 })
	// 	)
	// );
	// diagram.nodeTemplateMap.add(
	// 	"lyleen",
	// 	$(
	// 		go.Node,
	// 		"Auto",
	// 		{ selectable: true },
	// 		$(go.Shape, "RoundedRectangle", { fill: "white", stroke: "black" }),
	// 		$(go.TextBlock, "Lyleen", { margin: 5 })
	// 	)
	// );
	// diagram.nodeTemplateMap.add(
	// 	"lyleennoct",
	// 	$(
	// 		go.Node,
	// 		"Auto",
	// 		{ selectable: true },
	// 		$(go.Shape, "RoundedRectangle", { fill: "white", stroke: "black" }),
	// 		$(go.TextBlock, "Lyleen-Noct", { margin: 5 })
	// 	)
	// );
	// diagram.nodeTemplateMap.add(
	// 	"faleris",
	// 	$(
	// 		go.Node,
	// 		"Auto",
	// 		{ selectable: true },
	// 		$(go.Shape, "RoundedRectangle", { fill: "white", stroke: "black" }),
	// 		$(go.TextBlock, "Faleris", { margin: 5 })
	// 	)
	// );
	// diagram.nodeTemplateMap.add(
	// 	"orserk",
	// 	$(
	// 		go.Node,
	// 		"Auto",
	// 		{ selectable: true },
	// 		$(go.Shape, "RoundedRectangle", { fill: "white", stroke: "black" }),
	// 		$(go.TextBlock, "Orserk", { margin: 5 })
	// 	)
	// );
	// diagram.nodeTemplateMap.add(
	// 	"shadowbeak",
	// 	$(
	// 		go.Node,
	// 		"Auto",
	// 		{ selectable: true },
	// 		$(go.Shape, "RoundedRectangle", { fill: "white", stroke: "black" }),
	// 		$(go.TextBlock, "Shadowbeak", { margin: 5 })
	// 	)
	// );
	// diagram.nodeTemplateMap.add(
	// 	"paladius",
	// 	$(
	// 		go.Node,
	// 		"Auto",
	// 		{ selectable: true },
	// 		$(go.Shape, "RoundedRectangle", { fill: "white", stroke: "black" }),
	// 		$(go.TextBlock, "Paladius", { margin: 5 })
	// 	)
	// );
	// diagram.nodeTemplateMap.add(
	// 	"necromus",
	// 	$(
	// 		go.Node,
	// 		"Auto",
	// 		{ selectable: true },
	// 		$(go.Shape, "RoundedRectangle", { fill: "white", stroke: "black" }),
	// 		$(go.TextBlock, "Necromus", { margin: 5 })
	// 	)
	// );
	// diagram.nodeTemplateMap.add(
	// 	"frostallion",
	// 	$(
	// 		go.Node,
	// 		"Auto",
	// 		{ selectable: true },
	// 		$(go.Shape, "RoundedRectangle", { fill: "white", stroke: "black" }),
	// 		$(go.TextBlock, "Frostallion", { margin: 5 })
	// 	)
	// );
	// diagram.nodeTemplateMap.add(
	// 	"frostallionnoct",
	// 	$(
	// 		go.Node,
	// 		"Auto",
	// 		{ selectable: true },
	// 		$(go.Shape, "RoundedRectangle", { fill: "white", stroke: "black" }),
	// 		$(go.TextBlock, "Frostallion-Noct", { margin: 5 })
	// 	)
	// );
	// diagram.nodeTemplateMap.add(
	// 	"jetragon",
	// 	$(
	// 		go.Node,
	// 		"Auto",
	// 		{ selectable: true },
	// 		$(go.Shape, "RoundedRectangle", { fill: "white", stroke: "black" }),
	// 		$(go.TextBlock, "Jetragon", { margin: 5 })
	// 	)
	// );
	// Define link template
	diagram.linkTemplate = $(
		go.Link,
		{ routing: go.Link.AvoidsNodes, curve: go.Link.JumpOver, corner: 5 },
		$(go.Shape),
		$(go.Shape, { toArrow: "Standard" })
	);

	// Call function to initialize diagram with some initial animals
	initializeDiagram();
}

function initializeDiagram() {
	// Add initial animals to the diagram
	diagram.model.addNodeData({ key: "1", category: "Lamball" });
	diagram.model.addNodeData({ key: "1-1", category: "Lamball" });
	diagram.model.addNodeData({ key: "1-2", category: "Lamball" });
	diagram.model.addNodeData({ key: "1-3", category: "Lamball" });
	diagram.model.addNodeData({ key: "2", category: "Cattiva" });
	diagram.model.addNodeData({ key: "3", category: "Chikipi" });
	diagram.model.addNodeData({ key: "4", category: "Lifmunk" });
	diagram.model.addNodeData({ key: "5", category: "Foxparks" });
	diagram.model.addNodeData({ key: "6", category: "Fuack" });
	diagram.model.addNodeData({ key: "7", category: "Sparkit" });
	diagram.model.addNodeData({ key: "8", category: "Tanzee" });
	diagram.model.addNodeData({ key: "9", category: "Tanzee" });
	// diagram.model.addNodeData({ key: "10", category: "Rooby" });
	// diagram.model.addNodeData({ key: "11", category: "Pengullet" });
	// diagram.model.addNodeData({ key: "12", category: "Penking" });
	// diagram.model.addNodeData({ key: "13", category: "Jolthog" });
	// diagram.model.addNodeData({ key: "14", category: "Jolthog-cryst" });
	// diagram.model.addNodeData({ key: "15", category: "Gumoss" });
	// diagram.model.addNodeData({ key: "16", category: "Gumoss-special" });
	// diagram.model.addNodeData({ key: "17", category: "Vixy" });
	// diagram.model.addNodeData({ key: "18", category: "Hoocrates" });
	// diagram.model.addNodeData({ key: "19", category: "Teafant" });
	// diagram.model.addNodeData({ key: "20", category: "Depresso" });
	// diagram.model.addNodeData({ key: "21", category: "Cremis" });
	// diagram.model.addNodeData({ key: "22", category: "Daedream" });
	// diagram.model.addNodeData({ key: "23", category: "Rushoar" });
	// diagram.model.addNodeData({ key: "24", category: "Nox" });
	// diagram.model.addNodeData({ key: "25", category: "Fuddler" });
	// diagram.model.addNodeData({ key: "26", category: "Killamari" });
	// diagram.model.addNodeData({ key: "27", category: "Mau" });
	// diagram.model.addNodeData({ key: "28", category: "Mau-cryst" });
	// diagram.model.addNodeData({ key: "29", category: "Celaray" });
	// diagram.model.addNodeData({ key: "30", category: "Direhowl" });
	// diagram.model.addNodeData({ key: "31", category: "Tocotoco" });
	// diagram.model.addNodeData({ key: "32", category: "Flopie" });
	// diagram.model.addNodeData({ key: "33", category: "Mozzarina" });
	// diagram.model.addNodeData({ key: "34", category: "Bristla" });
	// diagram.model.addNodeData({ key: "35", category: "Gobfin" });
	// diagram.model.addNodeData({ key: "36", category: "Gobfin-ignis" });
	// diagram.model.addNodeData({ key: "37", category: "Hangyu" });
	// diagram.model.addNodeData({ key: "38", category: "Hangyu-cryst" });
	// diagram.model.addNodeData({ key: "39", category: "Mossanda" });
	// diagram.model.addNodeData({ key: "40", category: "Mossandalux" });
	// diagram.model.addNodeData({ key: "41", category: "Woolipop" });
	// diagram.model.addNodeData({ key: "42", category: "Caprity" });
	// diagram.model.addNodeData({ key: "43", category: "Melpaca" });
	// diagram.model.addNodeData({ key: "44", category: "Eikthyrdeer" });
	// diagram.model.addNodeData({ key: "45", category: "Eikthyrdeer-terra" });
	// diagram.model.addNodeData({ key: "46", category: "Nitewing" });
	// diagram.model.addNodeData({ key: "47", category: "Ribunny" });
	// diagram.model.addNodeData({ key: "48", category: "Incineram" });
	// diagram.model.addNodeData({ key: "49", category: "Incineram-noct" });
	// diagram.model.addNodeData({ key: "50", category: "Cinnamoth" });
	// diagram.model.addNodeData({ key: "51", category: "Arsox" });
	// diagram.model.addNodeData({ key: "52", category: "Dumud" });
	// diagram.model.addNodeData({ key: "53", category: "Cawgnito" });
	// diagram.model.addNodeData({ key: "54", category: "Leezpunk" });
	// diagram.model.addNodeData({ key: "55", category: "Leezpunk-ignis" });
	// diagram.model.addNodeData({ key: "56", category: "Loupmoon" });
	// diagram.model.addNodeData({ key: "57", category: "Galeclaw" });
	// diagram.model.addNodeData({ key: "58", category: "Robinquill" });
	// diagram.model.addNodeData({ key: "59", category: "Robinquill-terra" });
	// diagram.model.addNodeData({ key: "60", category: "Gorirat" });
	// diagram.model.addNodeData({ key: "61", category: "Beegarde" });
	// diagram.model.addNodeData({ key: "62", category: "Elizabee" });
	// diagram.model.addNodeData({ key: "63", category: "Grintale" });
	// diagram.model.addNodeData({ key: "64", category: "Swee" });
	// diagram.model.addNodeData({ key: "65", category: "Sweepa" });
	// diagram.model.addNodeData({ key: "66", category: "Chillet" });
	// diagram.model.addNodeData({ key: "67", category: "Univolt" });
	// diagram.model.addNodeData({ key: "68", category: "Foxcicle" });
	// diagram.model.addNodeData({ key: "69", category: "Pyrin" });
	// diagram.model.addNodeData({ key: "70", category: "Pyrin-noct" });
	// diagram.model.addNodeData({ key: "71", category: "Reindrix" });
	// diagram.model.addNodeData({ key: "72", category: "Rayhound" });
	// diagram.model.addNodeData({ key: "73", category: "Kitsun" });
	// diagram.model.addNodeData({ key: "74", category: "Dazzi" });
	// diagram.model.addNodeData({ key: "75", category: "Lunaris" });
	// diagram.model.addNodeData({ key: "76", category: "Dinossom" });
	// diagram.model.addNodeData({ key: "77", category: "Dinossomlux" });
	// diagram.model.addNodeData({ key: "78", category: "Surfent" });
	// diagram.model.addNodeData({ key: "79", category: "Surfent-terra" });
	// diagram.model.addNodeData({ key: "80", category: "Maraith" });
	// diagram.model.addNodeData({ key: "81", category: "Digtoise" });
	// diagram.model.addNodeData({ key: "82", category: "Tombat" });
	// diagram.model.addNodeData({ key: "83", category: "Lovander" });
	// diagram.model.addNodeData({ key: "84", category: "Flambelle" });
	// diagram.model.addNodeData({ key: "85", category: "Vanwyrm" });
	// diagram.model.addNodeData({ key: "86", category: "Vanwyrm-cryst" });
	// diagram.model.addNodeData({ key: "87", category: "Bushi" });
	// diagram.model.addNodeData({ key: "88", category: "Beakon" });
	// diagram.model.addNodeData({ key: "89", category: "Ragnahawk" });
	// diagram.model.addNodeData({ key: "90", category: "Katress" });
	// diagram.model.addNodeData({ key: "91", category: "Wixen" });
	// diagram.model.addNodeData({ key: "92", category: "Verdash" });
	// diagram.model.addNodeData({ key: "93", category: "Vaelet" });
	// diagram.model.addNodeData({ key: "94", category: "Sibelyx" });
	// diagram.model.addNodeData({ key: "95", category: "Elphidran" });
	// diagram.model.addNodeData({ key: "96", category: "Elphidran-aqua" });
	// diagram.model.addNodeData({ key: "97", category: "Kelpsea" });
	// diagram.model.addNodeData({ key: "98", category: "Kelpsea-ignis" });
	// diagram.model.addNodeData({ key: "99", category: "Azurobe" });
	// diagram.model.addNodeData({ key: "100", category: "Cryolinx" });
	// diagram.model.addNodeData({ key: "101", category: "Blazehowl" });
	// diagram.model.addNodeData({ key: "102", category: "Blazehowl-noct" });
	// diagram.model.addNodeData({ key: "103", category: "Relaxaurus" });
	// diagram.model.addNodeData({ key: "104", category: "Relaxauruslux" });
	// diagram.model.addNodeData({ key: "105", category: "Broncherry" });
	// diagram.model.addNodeData({ key: "106", category: "Broncherry-aqua" });
	// diagram.model.addNodeData({ key: "107", category: "Petallia" });
	// diagram.model.addNodeData({ key: "108", category: "Reptyro" });
	// diagram.model.addNodeData({ key: "109", category: "Icereptyro" });
	// diagram.model.addNodeData({ key: "110", category: "Kingpaca" });
	// diagram.model.addNodeData({ key: "111", category: "Icekingpaca" });
	// diagram.model.addNodeData({ key: "112", category: "Mammorest" });
	// diagram.model.addNodeData({ key: "113", category: "Mammorest-cryst" });
	// diagram.model.addNodeData({ key: "114", category: "Wumpo" });
	// diagram.model.addNodeData({ key: "115", category: "Wumpobotan" });
	// diagram.model.addNodeData({ key: "116", category: "Warsect" });
	// diagram.model.addNodeData({ key: "117", category: "Fenglope" });
	// diagram.model.addNodeData({ key: "118", category: "Felbat" });
	// diagram.model.addNodeData({ key: "119", category: "Quivern" });
	// diagram.model.addNodeData({ key: "120", category: "Blazamut" });
	// diagram.model.addNodeData({ key: "121", category: "Helzephyr" });
	// diagram.model.addNodeData({ key: "122", category: "Astegon" });
	// diagram.model.addNodeData({ key: "123", category: "Menasting" });
	// diagram.model.addNodeData({ key: "124", category: "Anubis" });
	// diagram.model.addNodeData({ key: "125", category: "Jormuntide" });
	// diagram.model.addNodeData({ key: "126", category: "Jormuntide-ignis" });
	// diagram.model.addNodeData({ key: "127", category: "Suzaku" });
	// diagram.model.addNodeData({ key: "128", category: "Suzaku-aqua" });
	// diagram.model.addNodeData({ key: "129", category: "Grizzbolt" });
	// diagram.model.addNodeData({ key: "130", category: "Lyleen" });
	// diagram.model.addNodeData({ key: "131", category: "Lyleen-noct" });
	// diagram.model.addNodeData({ key: "132", category: "Faleris" });
	// diagram.model.addNodeData({ key: "133", category: "Orserk" });
	// diagram.model.addNodeData({ key: "134", category: "Shadowbeak" });
	// diagram.model.addNodeData({ key: "135", category: "Paladius" });
	// diagram.model.addNodeData({ key: "136", category: "Necromus" });
	// diagram.model.addNodeData({ key: "137", category: "Frostallion" });
	// diagram.model.addNodeData({ key: "138", category: "Frostallion-noct" });
	// diagram.model.addNodeData({ key: "139", category: "Jetragon" });

	// Create links between parent animals
	diagram.model.addLinkData({ from: "1", to: "1-1" });
	diagram.model.addLinkData({ from: "1-2", to: "1-1" });
	diagram.model.addLinkData({ from: "1", to: "4" });
	diagram.model.addLinkData({ from: "7", to: "4" });
	diagram.model.addLinkData({ from: "1-2", to: "1-3" });
	diagram.model.addLinkData({ from: "2", to: "1-3" });
}

function breed(parent1, parent2) {
	var offspringType;

	// Determine the offspring type based on the parent types
	if (
		(parent1 === "Lamball" && parent2 === "Lamball") ||
		(parent1 === "Lamball" && parent2 === "Cattiva") ||
		(parent1 === "Lamball" && parent2 === "Fuack") ||
		(parent1 === "Cattiva" && parent2 === "Lamball")
	) {
		offspringType = "Lamball";
	} else if (
		(parent1 === "Lamball" && parent2 === "Chikipi") ||
		(parent1 === "Lamball" && parent2 === "Lifmunk") ||
		(parent1 === "Cattiva" && parent2 === "Chikipi") ||
		(parent1 === "Cattiva" && parent2 === "Lifmunk")
	) {
		offspringType = "Mau";
	} else if (
		(parent1 === "Lamball" && parent2 === "Foxparks") ||
		(parent1 === "Cattiva" && parent2 === "Foxparks") ||
		(parent1 === "Lifmunk" && parent2 === "Lamball") ||
		(parent1 === "Lifmunk" && parent2 === "Cattiva")
	) {
		offspringType = "Chikipi";
	} else if (
		(parent1 === "Lamball" && parent2 === "Fuack") ||
		(parent1 === "Cattiva" && parent2 === "Fuack")
	) {
		offspringType = "Foxparks";
	} else if (parent1 === "Foxparks" && parent2 === "Lamball") {
		offspringType = "Lifmunk";
	} else {
		// Default case
		offspringType = "Unknown";
	}

	// Create new node and link in the diagram to represent the offspring
	if (offspringType !== "Unknown") {
		var newOffspringKey = offspringType + diagram.nodes.count;
		diagram.model.addNodeData({
			key: newOffspringKey,
			category: offspringType,
		});
		diagram.model.addLinkData({ from: parent1, to: newOffspringKey });
		diagram.model.addLinkData({ from: parent2, to: newOffspringKey });
	}
}

// Initialize the diagram when the DOM is loaded
document.addEventListener("DOMContentLoaded", init);
