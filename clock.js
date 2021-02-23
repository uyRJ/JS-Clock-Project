$(document).ready( function() {	

	function displayTime() {

		let currentTime = new Date();

		let hours = currentTime.getHours();

		let minutes = currentTime.getMinutes();

		let seconds = currentTime.getSeconds();

		let clockDiv = document.getElementById('clock');

		clockDiv.innerText = hours + ":" + minutes + ":" + seconds;

		setInterval(displayTime, 1000);


	}
	

	displayTime();

});