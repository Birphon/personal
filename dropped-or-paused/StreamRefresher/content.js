chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
	if (message.action === "refreshPlayer") {
		var playerFrame = document.querySelector("[data-a-player-type='site']");
		if (playerFrame) {
			playerFrame.contentWindow.location.reload();
		}
	}
});
