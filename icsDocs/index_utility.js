// JavaScript Document
function openPage(pageName, elmnt, color) {
    "use strict";
    var i, stuff, tabs;
    stuff = document.getElementsByClassName("stuff");
    for (i = 0; i < stuff.length; i++) {
    stuff[i].style.display = "none";
  }
    tabs = document.getElementsByClassName("tabs");
    for (i = 0; i < tabs.length; i++) {
    tabs[i].style.backgroundColor = "";
  }
    document.getElementById(pageName).style.display = "block";
    elmnt.style.backgroundColor = color;
}

    document.getElementById("defaultOpen").click();
