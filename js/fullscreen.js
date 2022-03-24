/* Get the element you want displayed in fullscreen */
var elem = document.getElementById("game");

/* Function to open fullscreen mode */
function openFullscreen() {
	/* If fullscreen mode is available, show the element in fullscreen */
	if (
		document.fullscreenEnabled || /* Standard syntax */
		document.webkitFullscreenEnabled || /* Safari */
		document.msFullscreenEnabled /* IE11 */
	) {

		/* Show the element in fullscreen */
		if (elem.requestFullscreen) {
			elem.requestFullscreen(); /* Standard syntax */
		} else if (elem.webkitRequestFullscreen) { /* Safari */
			elem.webkitRequestFullscreen();
		} else if (elem.msRequestFullscreen) { /* IE11 */
			elem.msRequestFullscreen();
		}
	}
}