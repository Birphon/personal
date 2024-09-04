document.addEventListener("DOMContentLoaded", function () {
	fetch("./json/medal_data.json")
		.then((response) => response.json())
		.then((data) => {
			const container = document.getElementById("table-container");

			data.forEach((eventData) => {
				const year = eventData.event.slice(-4);
				const table = document.createElement("table");

				const headerRow = `
                    <tr>
                        <th colspan="5">${year}</th>
                    </tr>
                    <tr>
                        <th>Country</th>
                        <th>Gold</th>
                        <th>Silver</th>
                        <th>Bronze</th>
                        <th>Total</th>
                    </tr>
                `;
				table.innerHTML = headerRow;

				eventData.medals.forEach((countryData) => {
					if (typeof countryData.medals === "string") {
						const row = `
                            <tr>
                                <td colspan="5">${countryData.country}: ${countryData.medals}</td>
                            </tr>
                        `;
						table.innerHTML += row;
					} else {
						const row = `
                            <tr>
                                <td>${countryData.country}</td>
                                <td>${countryData.medals.gold}</td>
                                <td>${countryData.medals.silver}</td>
                                <td>${countryData.medals.bronze}</td>
                                <td>${countryData.medals.total}</td>
                            </tr>
                        `;
						table.innerHTML += row;
					}
				});

				container.appendChild(table);
			});
		})
		.catch((error) => console.error("Error loading JSON data:", error));
});
