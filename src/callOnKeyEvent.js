/*
 * Key event listener that looks for a key event for a specific key and executes the callback
 * when encountered. The calllback is passeed the event object.
 */
export default function callOnKeyEvent(key, callback) {
	return function(event) {
		if (event.keyCode == key) {
			callback(event)
		}
	}
}

