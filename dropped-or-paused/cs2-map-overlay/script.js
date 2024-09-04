// Initialize the map
var map = L.map("map").setView([0, 0], 2);

// Add a tile layer (OpenStreetMap as an example)
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
	attribution: "© OpenStreetMap contributors",
}).addTo(map);

// Add a marker at a specific location and make it draggable
var marker = L.marker([0, 0], {
	draggable: true,
}).addTo(map);

// Add a rectangular box of 1000m by 1000m in size
var box = L.rectangle(
	[
		[0, 0],
		[0.008983, 0.008983],
	],
	{
		color: "red",
		weight: 2,
	}
).addTo(map);

// define rectangle geographical bounds
var bounds = [
	[0, 1000],
	[0.008983, 0.008983],
];

// create an orange rectangle
L.rectangle(bounds, { color: "#ff7800", weight: 1 }).addTo(map);

// zoom the map to the rectangle bounds
map.fitBounds(bounds);

// Enable marker dragging with the Leaflet Path Drag library
L.DomEvent.on(marker._icon, "mousedown", L.DomEvent.stopPropagation);
L.DomEvent.on(marker._icon, "click", L.DomEvent.stopPropagation);
L.DomEvent.on(marker._icon, "dblclick", L.DomEvent.stopPropagation);
L.DomEvent.on(marker._icon, "contextmenu", L.DomEvent.stopPropagation);
L.Path.Draggable.addHooks(marker);

// Add a scale control to the map
L.control.scale().addTo(map);
