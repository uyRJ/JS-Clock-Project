$(document).ready( function() {	

	function displayTime() {

		let currentTime = new Date();

		let hours = currentTime.getHours();

		let minutes = currentTime.getMinutes();

		let seconds = currentTime.getSeconds();
			if (seconds < 10) {
				seconds = "0" + seconds;
			}

		let clockDiv = document.getElementById('clock');

		clockDiv.innerText = hours + ":" + minutes + ":" + seconds + " " + meridiem;


		let meridiem = "AM";
			if (hours > 12) {
				hours = hours - 12;
				meridiem = "PM";	
			}

			if (hours === 0) {
				hours = 12;
			}

		setInterval(displayTime, 1000);

	}
	

	displayTime();

});