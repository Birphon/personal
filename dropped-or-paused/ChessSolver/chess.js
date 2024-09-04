function generateChessboard(csvData) {
	const rows = csvData.split("\n");
	const chessboard = document.getElementById("chessboard");

	for (let i = 0; i < rows.length; i++) {
		const cells = rows[i].split(",");

		const row = document.createElement("tr");
		for (let j = 0; j < cells.length; j++) {
			const cell = document.createElement("td");
			cell.textContent = cells[j];

			if (i === 0 || j === 0) {
				cell.className = "grey";
			} else {
				cell.className = (i + j) % 2 === 0 ? "white" : "black";
			}

			row.appendChild(cell);
		}

		chessboard.appendChild(row);
	}
}

function handleFileUpload(event) {
	const file = event.target.files[0];
	const reader = new FileReader();

	reader.onload = function (e) {
		const csvData = e.target.result;
		const csvSection = document.getElementById("csvdata");
		csvSection.textContent = csvData;
		generateChessboard(csvData);

		// Ask for the color
		const color = prompt("What color is moving? (Black or White)");
		if (color !== null && color.trim() !== "") {
			const move = findBestMove(csvData, color);
			displayMove(move);
		}
	};

	reader.readAsText(file);
}

function findBestMove(csvData, color) {
	const rows = csvData.split("\n");
	const pieceColor = color.toLowerCase() === "black" ? "b" : "w";

	for (let i = 1; i < rows.length; i++) {
		const cells = rows[i].split(",");

		for (let j = 1; j < cells.length; j++) {
			const cell = cells[j];

			if (cell.startsWith(pieceColor)) {
				const piece = cell.substring(1);
				const startLocation = String.fromCharCode(64 + j) + i;
				const endLocation = findEmptyCell(csvData, i, j);
				return { piece, startLocation, endLocation };
			}
		}
	}

	return null;
}

function findEmptyCell(csvData, rowIndex, columnIndex) {
	const rows = csvData.split("\n");

	for (let i = rowIndex; i < rows.length; i++) {
		const cells = rows[i].split(",");

		for (let j = columnIndex; j < cells.length; j++) {
			if (cells[j] === "") {
				return String.fromCharCode(64 + j) + i;
			}
		}
	}

	return null;
}

function displayMove(move) {
	const answerSection = document.getElementById("answer");

	if (move) {
		const { piece, startLocation, endLocation } = move;

		const table = document.createElement("table");
		const row = document.createElement("tr");

		const pieceCell = document.createElement("td");
		pieceCell.textContent = piece;
		row.appendChild(pieceCell);

		const moveCell = document.createElement("td");
		moveCell.textContent = `${piece} ${startLocation} -> ${endLocation}`;
		row.appendChild(moveCell);

		table.appendChild(row);
		answerSection.appendChild(table);
	} else {
		answerSection.textContent =
			"No valid move found for the specified color.";
	}
}

function handleFileUpload(event) {
	const file = event.target.files[0];
	const reader = new FileReader();

	reader.onload = function (e) {
		const csvData = e.target.result;
		generateChessboard(csvData);
	};

	reader.readAsText(file);
}

const fileInput = document.getElementById("fileInput");
fileInput.addEventListener("change", handleFileUpload);
