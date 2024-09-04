var select = document.getElementById("weapon-type");
var tableContainer = document.getElementById("table-container");

// Function to reset the website to its initial state
function resetWebsite() {
	tableContainer.innerHTML = "";
}

// Function to load table data
function loadTableData(url, table) {
	Papa.parse(url, {
		download: true,
		header: true,
		complete: function (results) {
			var data = results.data;
			var thead = document.createElement("thead");
			var tbody = document.createElement("tbody");
			var headerRow = document.createElement("tr");

			Object.keys(data[0]).forEach(function (key) {
				var th = document.createElement("th");
				th.textContent = key;
				headerRow.appendChild(th);
			});

			thead.appendChild(headerRow);

			data.forEach(function (rowData) {
				var row = document.createElement("tr");

				Object.values(rowData).forEach(function (value) {
					var cell = document.createElement("td");
					cell.textContent = value;
					row.appendChild(cell);
				});

				tbody.appendChild(row);
			});

			table.appendChild(thead);
			table.appendChild(tbody);
		},
		error: function (error) {
			var errorMessage = document.createElement("p");
			errorMessage.textContent =
				"Sorry! Either this page is under construction or this CSV doesn't exist.";
			tableContainer.appendChild(errorMessage);
			console.error(error);
		},
	});
}

// Event listener for the dropdown change event
select.addEventListener("change", function () {
	var selectedValue = select.value;

	if (selectedValue === "blank") {
		resetWebsite();
	} else {
		resetWebsite();

		if (selectedValue === "assault-carbine") {
			var table1 = document.createElement("table");
			table1.innerHTML = "<caption>Automatic Rifles</caption>";
			tableContainer.appendChild(table1);
			loadTableData("csv/automatic-rifles.csv", table1);

			var table2 = document.createElement("table");
			table2.innerHTML = "<caption>Carbines</caption>";
			tableContainer.appendChild(table2);
			loadTableData("csv/carbines.csv", table2);
		} else if (selectedValue === "pdw-smg") {
			var table1 = document.createElement("table");
			table1.innerHTML = "<caption>PDW</caption>";
			tableContainer.appendChild(table1);
			loadTableData("csv/pdw.csv", table1);

			var table2 = document.createElement("table");
			table2.innerHTML = "<caption>SMG</caption>";
			tableContainer.appendChild(table2);
			loadTableData("csv/smg.csv", table2);
		} else if (selectedValue === "lsg-lmg") {
			var table1 = document.createElement("table");
			table1.innerHTML = "<caption>LSG</caption>";
			tableContainer.appendChild(table1);
			loadTableData("csv/lsg.csv", table1);

			var table2 = document.createElement("table");
			table2.innerHTML = "<caption>LMG</caption>";
			tableContainer.appendChild(table2);
			loadTableData("csv/lmg.csv", table2);
		} else if (selectedValue === "dmr-sniper") {
			var table1 = document.createElement("table");
			table1.innerHTML = "<caption>DMR</caption>";
			tableContainer.appendChild(table1);
			loadTableData("csv/dmr.csv", table1);

			var table2 = document.createElement("table");
			table2.innerHTML = "<caption>Sniper</caption>";
			tableContainer.appendChild(table2);
			loadTableData("csv/sniper.csv", table2);
		} else if (selectedValue === "pistols") {
			var table1 = document.createElement("table");
			table1.innerHTML = "<caption>Pistol</caption>";
			tableContainer.appendChild(table1);
			loadTableData("csv/pistol.csv", table1);

			var table2 = document.createElement("table");
			table2.innerHTML = "<caption>Auto Pistol</caption>";
			tableContainer.appendChild(table2);
			loadTableData("csv/auto-pistol.csv", table2);

			var table3 = document.createElement("table");
			table3.innerHTML = "<caption>Heavy Pistol</caption>";
			tableContainer.appendChild(table3);
			loadTableData("csv/heavy-pistol.csv", table3);
		}
	}
});

// Set the default value to "blank" when the page loads
window.addEventListener("load", function () {
	select.value = "blank";
});
