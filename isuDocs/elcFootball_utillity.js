// JavaScript Document
function onLoad() {

}

var playerCx;
var playerCy;
var QBCX
var QBCY
var oponentCx;
var oponentCy;
var player = ["C", "G_L", "G_R", "T_L", "T_R", "QB", "WB", "FB", "SB_L", "SB_R", "WR_L", "WR_R"];
var oponent = ["N", "T_L", "T_R", "E_L", "E_R", "S", "L_L", "L_R", "L_LL", "L_RR", "C_L", "C_R"];
var playerScore;
var oponentScore;
var contact;

function runPlay() { //throttle
    var contact = false;
	document.getElementById("runPlay").style.visibility = "hidden";    
	throttle = setInterval(movement, .10);
		
    if (contact == true)
    clearInterval(throttle);
}

function movement() {   
    for (var i = 0; i < player.length; i++) { //array loop 
		
		var randomX = Math.floor(Math.random() * 10) - 2; //get random coordinates
		var randomY = Math.floor(Math.random() * 30) - 14.5;
		
        playerCx = document.getElementById(player[i]).style.cx; //x alterations
        playerCx = parseFloat(playerCx) + randomX / 1000;
        playerCx = playerCx + '%';
		document.getElementById(player[i]).style.cx = playerCx;

        playerCy = document.getElementById(player[i]).style.cy; //y alterations
        playerCy = parseFloat(playerCy) + randomY / 200;
        playerCy = playerCy +'%';
        document.getElementById(player[i]).style.cy = playerCy;
    }
	
	for (var i = 0; i < oponent.length; i++) { //array loop
		
		var randomX = Math.floor(Math.random() * 10) - 8; //get random coordinates
		var randomY = Math.floor(Math.random() * 30) - 14.5;
		
        oponentCx = document.getElementById(oponent[i]).style.cx; //x alterations
        oponentCx = parseFloat(oponentCx) + randomX / 1000;
        oponentCx = oponentCx + '%';
        document.getElementById(oponent[i]).style.cx = oponentCx;

        oponentCy = document.getElementById(oponent[i]).style.cy; //y alterations
        oponentCy = parseFloat(oponentCy) + randomY / 200;
        oponentCy = oponentCy +'%';
        document.getElementById(oponent[i]).style.cy = oponentCy;
    }
	
	QBCX = document.getElementById('QB').style.cx; //QB coordinates
	QBCX = parseInt(QBCX);
	QBCY = document.getElementById('QB').style.cx;
	QBCY = parseInt(QBCY);
}