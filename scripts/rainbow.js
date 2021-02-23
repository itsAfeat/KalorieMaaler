var colNum = 0;

function changeCol() {
	var elm = document.getElementById("flash");
	if (colNum == 0) {
		colNum = 1;
		elm.style.color = "#ff0000";
	} else if (colNum == 1) {
		colNum = 2;
		elm.style.color = "#ff4000";
	} else if (colNum == 2) {
		colNum = 3;
		elm.style.color = "#ff8000";
	} else if (colNum == 3) {
		colNum = 4;
		elm.style.color = "#ffbf00";
	} else if (colNum == 4) {
		colNum = 5;
		elm.style.color = "#ffff00";
	} else if (colNum == 5) {
		colNum = 6;
		elm.style.color = "#bfff00";
	} else if (colNum == 6) {
		colNum = 7;
		elm.style.color = "#80ff00";
	} else if (colNum == 7) {
		colNum = 8;
		elm.style.color = "#40ff00";
	} else if (colNum == 8) {
		colNum = 9;
		elm.style.color = "#00ff00";
	} else if (colNum == 9) {
		colNum = 10;
		elm.style.color = "#00ff40";
	} else if (colNum == 10) {
		colNum = 11;
		elm.style.color = "#00ff80";
	} else if (colNum == 11) {
		colNum = 12;
		elm.style.color = "#00ffbf";
	} else if (colNum == 12) {
		colNum = 13;
		elm.style.color = "#00ffff";
	} else if (colNum == 13) {
		colNum = 14;
		elm.style.color = "#00bfff";
	} else if (colNum == 14) {
		colNum = 15;
		elm.style.color = "#0080ff";
	} else if (colNum == 15) {
		colNum = 16;
		elm.style.color = "#0040ff";
	} else if (colNum == 16) {
		colNum = 17;
		elm.style.color = "#0000ff";
	} else if (colNum == 17) {
		colNum = 18;
		elm.style.color = "#4000ff";
	} else if (colNum == 18) {
		colNum = 19;
		elm.style.color = "#8000ff";
	} else if (colNum == 19) {
		colNum = 20;
		elm.style.color = "#bf00ff";
	} else if (colNum == 20) {
		colNum = 21;
		elm.style.color = "#ff00ff";
	} else if (colNum == 21) {
		colNum = 22;
		elm.style.color = "#ff00bf";
	} else if (colNum == 22) {
		colNum = 23;
		elm.style.color = "#ff0080";
	} else if (colNum == 23) {
		colNum = 0;
		elm.style.color = "#ff0040";
	}
}

window.setInterval(changeCol, 100);
