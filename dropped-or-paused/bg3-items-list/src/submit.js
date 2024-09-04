function addRowIfLastCell(element) {
	// Check if the user is in the last cell (Description)
	if (
		element.cellIndex === 4 &&
		element.parentElement.nextElementSibling === null
	) {
		// Add a new row
		var newRow = document.createElement("tr");
		newRow.innerHTML = `
            <td contenteditable="true"></td>
            <td contenteditable="true"></td>
            <td contenteditable="true"></td>
            <td contenteditable="true"></td>
            <td contenteditable="true" onblur="addRowIfLastCell(this)"></td>
        `;

		document
			.getElementById("dataTable")
			.getElementsByTagName("tbody")[0]
			.appendChild(newRow);
	}
}

// You can also add a function to submit the data when needed
function submitData() {
	var tableRows = document
		.getElementById("dataTable")
		.getElementsByTagName("tbody")[0]
		.getElementsByTagName("tr");

	var data = [];

	// Iterate through rows and cells to collect data
	for (var i = 0; i < tableRows.length; i++) {
		var rowData = [];
		var cells = tableRows[i].getElementsByTagName("td");

		for (var j = 0; j < cells.length; j++) {
			rowData.push(cells[j].innerText.trim());
		}

		data.push(rowData);
	}

	// Use the data array for further processing or submission
	console.log(data);
}
