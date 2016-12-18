$(window).ready(function() {
	updated_day_night_animation_run();
});

function updated_day_night_animation_run() {
	console.log("updated animation started");
	var counter = 0;
	var animation = setInterval(function() {
		if (counter == 24) {
			console.log("reset");
			if ($('#fullpage').hasClass("morning"))
				$("#fullpage").removeClass("morning");
			counter = 0;
		}
		else if (counter==4) {
			console.log("evening");
	        $("#fullpage").addClass("evening");
	        $("#switch").addClass("switched");
		}
		else if (counter==8) {
			console.log("night");
			$('#fullpage').removeClass("evening");
	        $("#fullpage").addClass("night");
	        $("#switch").removeClass("switched");
		}
		else if (counter==12) {
			console.log("pre-early morning");
			$('#fullpage').removeClass("night");
	        $("#fullpage").addClass("late-night");
	        $("#switch").addClass("switched");
		}
		else if (counter==16) {
			console.log("early morning");
			$('#fullpage').removeClass("late-night");
	        $("#fullpage").addClass("early-morning");
	        $("#switch").removeClass("switched");
		}
		else if (counter==20) {
			console.log("morning");
			$('#fullpage').removeClass("early-morning");
	        $("#fullpage").addClass("morning");
	        $("#switch").addClass("switched");
		}
		counter += 1;
	}, 1000);
}
