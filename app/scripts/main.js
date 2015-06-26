/* jshint devel:true */

document.addEventListener('DOMContentLoaded',function(){
	'use strict';
	var container = document.getElementsByClassName('half-upper')[0];
	var pattern = new Trianglify({
		width: window.innerWidth,
		height: window.innerHeight,
		x_colors: ['#216464', '#A63636']
	});
	container.appendChild(pattern.canvas());

	var shine1 = new Shine(document.getElementsByClassName('js-shine')[0]);
	var shine2 = new Shine(document.getElementsByClassName('js-shine')[1]);
	var shine3 = new Shine(document.getElementsByClassName('js-shine')[2]);

	shine1.config.opacity = 0.3;
	shine1.config.blur = 60;
	shine1.light.position.x = window.innerWidth / 2;
	shine1.light.position.y = window.innerHeight / 4;
	shine1.draw();

	shine2.config.opacity = 0.3;
	shine2.config.blur = 60;
	shine2.light.position.x = window.innerWidth / 2;
	shine2.light.position.y = window.innerHeight / 4;
	shine2.draw();

	shine3.config.opacity = 0.3;
	shine3.config.blur = 60;
	shine3.light.position.x = window.innerWidth / 2;
	shine3.light.position.y = window.innerHeight / 4;
	shine3.draw();
});
