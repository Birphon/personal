// render.js
const SECTOR_WIDTH = 56;
const SECTOR_HEIGHT = 30;

function createGrid(rows, columns) {
	const grid = [];

	for (let i = 0; i < rows; i++) {
		const row = [];
		for (let j = 0; j < columns; j++) {
			row.push({ x: j * SECTOR_WIDTH, y: i * SECTOR_HEIGHT });
		}
		grid.push(row);
	}

	return grid;
}

function renderGrid(grid) {
	const gridContainer = document.getElementById("grid-container");

	grid.forEach((row, rowIndex) => {
		const rowDiv = document.createElement("div");
		rowDiv.classList.add("row");

		row.forEach((cell, colIndex) => {
			const cellDiv = document.createElement("div");
			cellDiv.classList.add("cell");
			cellDiv.innerText = `(${colIndex}, ${rowIndex})`;
			cellDiv.style.left = cell.x + "px";
			cellDiv.style.top = cell.y + "px";
			rowDiv.appendChild(cellDiv);
		});

		gridContainer.appendChild(rowDiv);
	});
}

const grid = createGrid(SECTOR_HEIGHT, SECTOR_WIDTH);
renderGrid(grid);
