// get all elements with with .box class
let boxes = document.querySelectorAll('.link');
let touchActive = false;
boxes.forEach(el => {
	// set initial bg to color attribute
	el.style.backgroundColor = el.attributes.color.value;
	// el.style.setProperty('background', el.attributes.color.value, 'important');
	
	// change bg to "img" attribute on mouse enter
	el.addEventListener('mouseenter', event => {
		let baseBG = event.target.attributes.img.value; 
		event.target.style.backgroundImage = 'url("' + baseBG + '")';
	});
	
	
	el.addEventListener('mouseleave', event => {
		// change bg to "color" attribute on mouse leave 
		let color = event.target.attributes.color.value; 
		event.target.style.backgroundImage = "";
		event.target.style.backgroundColor = color;
	
		// set click ready of el to false
		event.target.clickReady = false;
	});

	el.addEventListener('click', event => {

		// if user is using touch, show image at first
		if(touchActive) {
			let clickReady = event.target.clickReady;

			if(clickReady === true)
				window.location.href = event.target.attributes.href.value;	
			else
				event.target.clickReady = true; 
		
		// otherwise open link instantly
		} else {
			window.location.href = event.target.attributes.href.value;
		}
	});

	// detect tap
	el.addEventListener('touchstart', event => {
		touchActive = true;
	});
});


//--------------------
//  Popup Page  
//--------------------

// get all elements with a [toggle] attribute
let toggles = document.querySelectorAll('[toggle]');
let lastToggle = '';
toggles.forEach(el => {
	// add an event listener and toggle the .hide class on the target element
	el.addEventListener('click', event => {
		let targetDiv = document.getElementById(event.target.attributes.toggle.value);
		let targetName = event.target.attributes.toggle.value;

		if(targetDiv.classList.contains('hide')) {
			window.history.pushState({action: 'window opened'}, 'windowOpened: ' + targetName, targetName);
			lastToggle = targetName;
			targetDiv.classList.toggle('hide');
		} else {
			window.history.go(-1);
		}

	});
}) 

window.onpopstate = function(event) {
	document.getElementById(lastToggle).classList.toggle('hide');
}

//---------------------------------------------
//  Resize viewport
//	because 100vh is behaving weird on mobile
//---------------------------------------------
function calcVH () {
	var targets = ['body', '.main', '.about'];
	var vH = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
	targets.forEach(element => {
		document.querySelector(element).setAttribute("style", "height:" + vH + "px;");
	});
};
window.onload = calcVH();
window.addEventListener('onorientationchange', calcVH, true);
window.addEventListener('resize', calcVH, true);