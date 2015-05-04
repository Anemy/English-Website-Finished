/*
@author Rhys
This is the Javascript file which holds the code behind the two demos on the webpage.
Below is the click counter code.
*/

var clickCounter = 0;

var exampleButtonClicked = function() {
	// console.log("Example button clicked.");
	clickCounter++;

	if(clickCounter == 1) {
		$('.click-counter').html(clickCounter + ' Click');
	}
	else {
		$('.click-counter').html(clickCounter + ' Clicks');
	}
}




/*
This is the code behind the mouse following demo.
*/

var c = document.getElementById("myCanvas");

var mouseX = 0;
var mouseY = 0;

var draw = function() {
	var ctx = c.getContext("2d");
	ctx.clearRect(0,0,300,200);
	ctx.beginPath();
	ctx.arc(mouseX,mouseY,20,0,2*Math.PI);
	ctx.stroke();
}

draw();

function getMousePos(canvas, evt) {
	var rect = canvas.getBoundingClientRect();
	return {
		x: evt.clientX - rect.left,
		y: evt.clientY - rect.top
	};
}

c.addEventListener('mousemove', function(evt) {
	var mousePos = getMousePos(c, evt);
	mouseX = mousePos.x;
	mouseY = mousePos.y;
	draw();
}, false);