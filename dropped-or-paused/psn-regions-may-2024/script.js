window.onload = function () {
	const mapContainer = document.getElementById("map-container");
	const screenWidth = window.innerWidth;
	const screenHeight = window.innerHeight;

	// Adjust image dimensions based on screen aspect ratio
	const imageWidth = 1920;
	const imageHeight = 1080;
	const aspectRatio = imageWidth / imageHeight;
	const screenAspectRatio = screenWidth / screenHeight;

	let backgroundSize;
	if (screenAspectRatio > aspectRatio) {
		backgroundSize = "auto 100%";
	} else {
		backgroundSize = "100% auto";
	}

	mapContainer.style.backgroundImage = 'url("img/world-map.png")';
	mapContainer.style.backgroundSize = backgroundSize;
};
