(function startClock() {
	'use strict';

	var time = new Date(),
		hours = time.getHours(),
		minutes = time.getMinutes(),
		displayHour = null,
		displayMin = [],
		hourId = null,
		i = 0,
		textStrings = [
			'm5',
			'm10',
			'm15',
			'm20',
			'm30',
			'oclock',
			'past',
			'to',
			'a'
		];
	
	// Calculate relative to hour display
	if (minutes > 2 && minutes < 33) {displayMin.push('past');}
	else if (minutes > 32 && minutes < 58) {displayMin.push('to');}
	else {displayMin.push('oclock');}
	
	// Calculate minutes display
	if ((minutes > 2  && minutes < 8)  || (minutes > 52 && minutes < 58)) {displayMin.push('m5');}
	if ((minutes > 7  && minutes < 13) || (minutes > 47 && minutes < 53)) {displayMin.push('m10');}
	if ((minutes > 12 && minutes < 18) || (minutes > 42 && minutes < 48)) {displayMin.push('m15', 'a');}
	if ((minutes > 17 && minutes < 28) || (minutes > 32 && minutes < 43)) {displayMin.push('m20');}
	if ((minutes > 22 && minutes < 28) || (minutes > 32 && minutes < 38)) {displayMin.push('m5');}
	if (minutes > 27  && minutes < 33) {displayMin.push('m30');}
	
	// Reset minutes
	for (i = 0; i < textStrings.length; i++) {
		document.getElementById(textStrings[i]).className = 'span';
	}
	
	// Display minutes
	for (i = 0; i < displayMin.length; i++) {
		document.getElementById(displayMin[i]).className = 'span on';
	}
	
	// Calculate display hour
	if (hours > 12) {hours -= 12;}
	if (hours === 0) {hours = 12;}
	if (minutes < 33) {displayHour = hours;}
	else if (hours === 12) {displayHour = 1;}
	else {displayHour = hours + 1;}
	
	// Display hours
	for (i = 1; i < 13; i++) {
		hourId = document.getElementById('hour' + i);
		if (displayHour === i) {hourId.className = 'span on';}
		else {hourId.className = 'span';}
	}
	
	setTimeout(startClock, 30000);
}());