// dataExporter.js

const fs = require("fs");

// Export the function that writes data to a JSON file
module.exports = function exportDataToJSON(data, filename) {
	// Convert the data array to JSON format
	const jsonData = JSON.stringify(data, null, 2);

	// Write the JSON data to the specified filename
	fs.writeFileSync(filename, jsonData, "utf-8");

	console.log(`Data exported to ${filename}`);
};
