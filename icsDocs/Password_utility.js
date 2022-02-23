// JavaScript Document
var arr = [];

for (var i = 0; i <7; i++){
	var code = Math.floor(Math.random()* 10);
	arr.push(code);
	document.getElementById("random").innerHTML = arr.join("");
	console.log (arr);
	}
function check() {
	"use strict";
		if (document.getElementById ("input01").value == arr.join("")) {
			window.alert("Correct");
			document.getElementById ("input01").value = " ";
		} 
		else {
			window.alert("false");
		}
	}