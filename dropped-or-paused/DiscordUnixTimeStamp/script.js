document
	.getElementById("timestamp-form")
	.addEventListener("submit", function (event) {
		event.preventDefault();

		var dayInput = document.getElementById("day-input").value;
		var monthInput = document.getElementById("month-input").value;
		var yearInput = document.getElementById("year-input").value;
		var hourInput = document.getElementById("hour-input").value;
		var minuteInput = document.getElementById("minute-input").value;
		var ampmInput = document.getElementById("ampm-input").value;

		// Adjust the hour based on the AM/PM selection
		if (ampmInput === "pm") {
			hourInput = parseInt(hourInput, 10) + 12;
		}

		// Create a new Date object with the specified components
		var dateObj = new Date(
			yearInput,
			monthInput - 1,
			dayInput,
			hourInput,
			minuteInput
		);

		// Convert the input date to Unix timestamp
		var unixTimestamp = Math.floor(dateObj.getTime() / 1000);

		// Display the Unix timestamp
		document.getElementById("unix-timestamp").innerText =
			"Unix Timestamp: " + unixTimestamp;

		// Display the formatted timestamps
		var formattedTimestamps = [
			"<t:" + unixTimestamp + ">",
			"<t:" + unixTimestamp + ":d>",
			"<t:" + unixTimestamp + ":f>",
			"<t:" + unixTimestamp + ":F>",
			"<t:" + unixTimestamp + ":R>",
		];

		// Adjust single-digit minutes to include a leading zero
		if (minuteInput.length === 1) {
			formattedTimestamps.splice(2, 0, "<t:" + unixTimestamp + ":m>");
		}

		var formattedTimestampsHTML = formattedTimestamps
			.map(function (timestamp) {
				return "<p>" + timestamp + "</p>";
			})
			.join("");

		document.getElementById("formatted-timestamp").innerHTML =
			"Formatted Timestamps: " + formattedTimestampsHTML;
	});
