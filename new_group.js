chrome.runtime.onMessage.addListener( function(request, sender, sendResponse) {
	if (request.signal == "ready")
	{
		// Change <div> BlackHoleDays
		document.getElementById("bh-date").innerText = " Take it easy";

		// Change coalition name
		document.getElementsByClassName("note-title").innerHtml = "Legion"

		// Add new Tittle
		document.getElementById("title-selector").innerText = "Member of the Legion";

	}
});
