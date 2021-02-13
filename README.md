# p5.play-boilerplate
Boiler plate for p5.play
//Calculating time using predefined func from p5.js
let h = hour();
text('Current hour:\n' + h, 5, 50);
let m = minute();
text('Current minute: \n' + m, 5, 50);
let s = second();
text('Current second: \n' + s, 5, 50);
angleMode(DEGREES);