// Define the game board as an object
const gameBoard = {
	width: 10,
	height: 10,
	tiles: [],

	initialize() {
		// Generate the game board tiles
		this.generateTiles();

		// Initialize the game state
		this.initializeGameState();

		// Place initial settlements and roads for players
		this.placeInitialSettlementsAndRoads();

		// Add any other game initialization logic here
	},
	initializeGameState() {
		// Initialize the game state object
		this.gameState = {
			currentPlayer: 0, // Index of the current player
			players: [], // Array to store player objects
			resources: {
				// Object to store available resources
				wood: 19, // Number of wood resources available
				brick: 19, // Number of brick resources available
				ore: 19, // Number of ore resources available
				wheat: 19, // Number of wheat resources available
				sheep: 19, // Number of sheep resources available
			},
			// Add other game state properties as needed
		};

		// Create and add player objects to the gameState
		this.createPlayers();
	},
	createPlayers() {
		// Define the number of players (adjust as needed)
		const numPlayers = 4;

		const playerColors = ["red", "blue", "green", "yellow"]; // Define player colors

		for (let i = 0; i < numPlayers; i++) {
			const player = {
				id: i,
				color: playerColors[i], // Assign player colors based on the order
				settlements: [], // Array to store player settlements
				roads: [], // Array to store player roads
				resources: {
					// Object to store player resources
					wood: 0,
					brick: 0,
					ore: 0,
					wheat: 0,
					sheep: 0,
				},
				// Add other player properties here
			};

			// Add the player to the gameState's players array
			this.gameState.players.push(player);
		}
	},

	generateTiles() {
		const directions = [
			{ dx: 0, dy: -1 },
			{ dx: 1, dy: -1 },
			{ dx: 1, dy: 0 },
			{ dx: 0, dy: 1 },
			{ dx: -1, dy: 1 },
			{ dx: -1, dy: 0 },
		];

		const centerX = Math.floor(this.width / 2);
		const centerY = Math.floor(this.height / 2);

		for (let y = 0; y < this.height; y++) {
			for (let x = 0; x < this.width; x++) {
				const q = x - centerX;
				const r = y - centerY;
				if (Math.abs(q) <= centerX && Math.abs(r) <= centerY) {
					const pixelX = this.calculatePixelX(q, r);
					const pixelY = this.calculatePixelY(q, r);

					const tile = {
						x,
						y,
						q,
						r,
						pixelX,
						pixelY,
						terrain: null,
						resource: null,
						numberToken: null,
					};

					tile.terrain = this.randomTerrainType();
					tile.resource = this.randomResourceType();
					tile.numberToken = this.assignNumberToken(tile.terrain);

					this.tiles.push(tile);
				}
			}
		}
	},

	calculatePixelX(q, r) {
		const hexSize = 100; // Adjust as needed
		const pixelX = (3 / 2) * hexSize * q;
		return pixelX;
	},

	calculatePixelY(q, r) {
		const hexSize = 100; // Adjust as needed
		const pixelY = (Math.sqrt(3) / 2) * hexSize * (q + r);
		return pixelY;
	},

	randomTerrainType() {
		const terrainTypes = [
			"forest",
			"hill",
			"mountain",
			"field",
			"pasture",
			"desert",
		];
		return terrainTypes[Math.floor(Math.random() * terrainTypes.length)];
	},

	randomResourceType() {
		const resourceTypes = ["wood", "brick", "ore", "wheat", "sheep"];
		return resourceTypes[Math.floor(Math.random() * resourceTypes.length)];
	},

	assignNumberToken(terrain) {
		// Define the list of possible number tokens
		const numberTokens = [
			2, 3, 3, 4, 4, 5, 5, 6, 6, 8, 8, 9, 9, 10, 10, 11, 11, 12,
		];

		// Shuffle the number tokens randomly
		for (let i = numberTokens.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[numberTokens[i], numberTokens[j]] = [
				numberTokens[j],
				numberTokens[i],
			];
		}

		// Check if the terrain is 'desert'; if so, it should not have a number token
		if (terrain === "desert") {
			return null;
		}

		// Pop a number token from the shuffled list and return it
		return numberTokens.pop();
	},
};

// Initialize the game board
gameBoard.initialize();

// Export the game board object
export default gameBoard;
