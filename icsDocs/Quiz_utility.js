// JavaScript Document
var a;
var b;
var c;
var d;
var e;
var f;
var g;
var grade;
function button01() {
	"use strict";
	a = "correct01";
	if (document.getElementById("correct01").checked) {
		a = 1;
		document.getElementById("button01").style.visibility = "hidden";
		document.getElementById("li01").style.color = "#7ccf92";
		document.getElementById("lable01").style.color = "#7ccf92";
	}
	else {
		a = 0;
		document.getElementById("button01").style.visibility = "hidden";
		document.getElementById("li01").style.color = "tomato";
		document.getElementById("lable01").style.color = "#7ccf92";
	}
}

function button02() {
	"use strict";
	b = "correct02";
	if (document.getElementById("correct02").checked) {
		b = 1;
		document.getElementById("button02").style.visibility = "hidden";
		document.getElementById("li02").style.color = "#7ccf92";
		document.getElementById("lable02").style.color = "#7ccf92";
	}
	else {
		b = 0;
		document.getElementById("button02").style.visibility = "hidden";
		document.getElementById("li02").style.color = "tomato";
		document.getElementById("lable02").style.color = "#7ccf92";
	}
}

function button03() {
	"use strict";
	c = "correct03";
	if (document.getElementById("correct03").checked) {
		c = 1;
		document.getElementById("button03").style.visibility = "hidden";
		document.getElementById("li03").style.color = "#7ccf92";
		document.getElementById("lable03").style.color = "#7ccf92";
	}
	else {
		c = 0;
		document.getElementById("button03").style.visibility = "hidden";
		document.getElementById("li03").style.color = "tomato";
		document.getElementById("lable03").style.color = "#7ccf92";
	}
}

function button04() {
	"use strict";
	d = "correct04";
	if (document.getElementById("correct04").checked) {
		d = 1;
		document.getElementById("button04").style.visibility = "hidden";
		document.getElementById("li04").style.color = "#7ccf92";
		document.getElementById("lable04").style.color = "#7ccf92";
	}
	else {
		d = 0;
		document.getElementById("button04").style.visibility = "hidden";
		document.getElementById("li04").style.color = "tomato";
		document.getElementById("lable04").style.color = "#7ccf92";
	}
}

function button05() {
	"use strict";
	e = "correct05";
	if (document.getElementById("correct05").checked) {
		e = 1;
		document.getElementById("button05").style.visibility = "hidden";
		document.getElementById("li05").style.color = "#7ccf92";
		document.getElementById("lable05").style.color = "#7ccf92";
	}
	else {
		e = 0;
		document.getElementById("button05").style.visibility = "hidden";
		document.getElementById("li05").style.color = "tomato";
		document.getElementById("lable05").style.color = "#7ccf92";
	}
}

function button06() {
	"use strict";
	f = "correct06";
	if (document.getElementById("correct06").checked) {
		f = 1;
		document.getElementById("button06").style.visibility = "hidden";
		document.getElementById("li06").style.color = "#7ccf92";
		document.getElementById("lable06").style.color = "#7ccf92";
	}
	else {
		f = 0;
		document.getElementById("button06").style.visibility = "hidden";
		document.getElementById("li06").style.color = "tomato";
		document.getElementById("lable06").style.color = "#7ccf92";
	}
}

function button07() {
	"use strict";
	g = "correct07";
	if (document.getElementById("correct07").checked) {
		g = 1;
		document.getElementById("button07").style.visibility = "hidden";
		document.getElementById("li07").style.color = "#7ccf92";
		document.getElementById("lable07").style.color = "#7ccf92";
	}
	else {
		g = 0;
		document.getElementById("button07").style.visibility = "hidden";
		document.getElementById("li07").style.color = "tomato";
		document.getElementById("lable07").style.color = "#7ccf92";
	}
}

function buttonCheck() {
	"use strict";
	grade = (a + b + c + d + e + f + g) / 7 * 100;
	document.getElementById("grade").innerHTML = grade + "%";
}
		