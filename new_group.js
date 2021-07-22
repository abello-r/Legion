chrome.runtime.onMessage.addListener( function(request, sender, sendResponse) {
	if (request.signal == "ready")
	{
		// Change <div> BlackHoleDays
		document.querySelector("#bh-date").innerText = " Take it easy";

		// Change coalition name
		document.querySelector("span.coalition-span").innerHTML = "Legion"

		// Add new Tittle
		document.getElementById("title-selector").innerText = "Member of the Legion";
	}
});
