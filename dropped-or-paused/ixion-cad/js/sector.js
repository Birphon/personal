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

console.log(grid);
