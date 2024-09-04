function embedVideo() {
	var videoUrl = document.getElementById("videoUrl").value;
	var videoId = extractVideoId(videoUrl);
	var watchUrl = "watch.html?v=" + videoId;
	window.location.href = watchUrl;
}

function extractVideoId(url) {
	var videoId = url.split("v=")[1];
	var ampersandPosition = videoId.indexOf("&");
	if (ampersandPosition !== -1) {
		videoId = videoId.substring(0, ampersandPosition);
	}
	return videoId;
}

function newStream() {
	window.location.href = "index.html";
}
