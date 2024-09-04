// Your data array
var data = [];

// Function to populate the table with data
function populateTable() {
	var tableBody = document
		.getElementById("dataTable")
		.getElementsByTagName("tbody")[0];

	// Clear existing rows
	tableBody.innerHTML = "";

	data.forEach(function (rowData) {
		var row = tableBody.insertRow();

		for (var i = 0; i < rowData.length; i++) {
			var cell = row.insertCell();
			cell.appendChild(document.createTextNode(rowData[i]));

			// Add a class to style cells with data
			if (rowData[i] !== "") {
				cell.classList.add("data-cell");
			}
		}
	});
}

// Function to search the table based on user input
function searchTable() {
	var input, filter, table, tr, td, i, txtValue;
	input = document.getElementById("searchInput");
	filter = input.value.toUpperCase();
	table = document.getElementById("dataTable");
	tr = table.getElementsByTagName("tr");

	for (i = 0; i < tr.length; i++) {
		td = tr[i].getElementsByTagName("td")[1]; // Change index to the column you want to search

		if (td) {
			txtValue = td.textContent || td.innerText;
			if (txtValue.toUpperCase().indexOf(filter) > -1) {
				tr[i].style.display = "";
			} else {
				tr[i].style.display = "none";
			}
		}
	}
}

// Fetch data from external JSON file
fetch("./src/data.json")
	.then((response) => response.json())
	.then((jsonData) => {
		data = jsonData;
		populateTable(); // Call the function to populate the table inside the 'then' block
	})
	.catch((error) => console.error("Error fetching data:", error));
