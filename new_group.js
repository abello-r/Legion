chrome.runtime.onMessage.addListener( function(request, sender, sendResponse) {
	if (request.signal == "ready")
	{
		// Change <div> BlackHoleDays
		document.getElementById("bh-date").innerText = " Take it easy";
	}
});