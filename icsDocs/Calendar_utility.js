// JavaScript Document
function startTime() {
    "use strict";
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('display').innerHTML =
    h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
    
    var d = new Date();
    var date = d.getDate();
    document.getElementById(date).style.backgroundColor = "dimgrey";
    document.getElementById(date).style.color = "orange";
    
    var day = d.getDay() + 100;
    document.getElementById(day).style.backgroundColor = "dimgrey";
    document.getElementById(day).style.color = "orange";
    
    var month = d.getMonth() + 1000;
    document.getElementById(month).style.backgroundColor = "dimgrey";
    document.getElementById(month).style.color = "orange";
	
	if (month == 1001) {
		document.getElementById(29).style.color = "orange";
		document.getElementById(30).style.color = "orange";
		document.getElementById(31).style.color = "orange";
		document.getElementById(29).style.borderColor = "orange";
		document.getElementById(30).style.borderColor = "orange";
		document.getElementById(31).style.borderColor = "orange";
	}
	
	if (month == 1003) {
		document.getElementById(31).style.color = "orange";
		document.getElementById(31).style.borderColor = "orange";
	}
	
	if (month == 1005) {
		document.getElementById(31).style.color = "orange";
		document.getElementById(31).style.borderColor = "orange";
	}
	
	if (month == 1008) {
		document.getElementById(31).style.color = "orange";
		document.getElementById(31).style.borderColor = "orange";
	}
	
	if (month == 1010) {
		document.getElementById(31).style.color = "orange";
		document.getElementById(31).style.borderColor = "orange";
	}
}

function checkTime(i) {
	"use strict";
    if (i < 10) {i = "0" + i;}
    return i;
}