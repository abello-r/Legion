chrome.webRequest.onCompleted.addListener(
	// Callback
	function(info) {
		chrome.tabs.sendMessage(info.tabId, {signal: "ready"});
	},

	// filters
	{
		urls: ["*://profile.intra.42.fr/users/*/goals?*"],
		types: ["xmlhttprequest"]
	},

	// extraInfoSpec
	[]
);