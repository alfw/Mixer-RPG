////////////////////
// General / Helper
///////////////////

// Array Shuffler
// Shuffles an array.
function shuffle(array) {
	var currentIndex = array.length, temporaryValue, randomIndex;

	// While there remain elements to shuffle...
	while (0 !== currentIndex) {

		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		// And swap it with the current element.
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}

	return array;
}

// Parse Trivia HTML Nonsense
// Parses trival stuff.
function parseHtml(safe) {
	return safe.replace(/&amp;/g, "&")
		.replace(/&lt;/g, "<")
		.replace(/&gt;/g, ">")
		.replace(/&quot;/g, "'")
		.replace(/&#039;/g, '"');
}

// Millisecond to Human Converter
// Convers millisconds into a timestamp people can read.
function msToTime(duration) {
	var milliseconds = parseInt((duration % 1000) / 100)
		, seconds = parseInt((duration / 1000) % 60)
		, minutes = parseInt((duration / (1000 * 60)) % 60)
		, hours = parseInt((duration / (1000 * 60 * 60)) % 24);

	hours = (hours < 10) ? "0" + hours : hours;
	minutes = (minutes < 10) ? "0" + minutes : minutes;
	seconds = (seconds < 10) ? "0" + seconds : seconds;

	return hours + " hours and " + minutes + " minutes.";
};

// Array Searcher
// Used in conjunction with item balancer.
function search(nameKey, myArray) {
	for (var i = 0; i < myArray.length; i++) {
		if (myArray[i].name === nameKey) {
			return myArray[i];
		}
	}
}


module.exports = {
  search,
  msToTime,
  parseHtml,
  shuffle
}