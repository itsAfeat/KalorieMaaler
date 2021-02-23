var input = document.getElementById("ml");
var unit  = 0; // 0 = klat | 1 = kalorier

input.addEventListener("keyup", function(event) {
	if (event.key == 'Enter') {
		event.preventDefault();
		document.getElementById("btn").click();
	}
});

function Klat() {
	if (document.getElementById("ml").value != "") {
		var val = input.value;	
		var text = "";

		if (unit == 0) {
			var sum1 = parseFloat(val, 10) * 0.133 * 3.5;
			var sum2 = parseFloat(val, 10) * 0.467 * 3.5;
        
        	if (isNaN(val)) {
				document.getElementById("ml").value = "";
       			text = "Hvordan vil du konvertere <i>" + val + "</i> til kalorier? dumbass.";
       		} else {
				text = "Det vil være mellem " + sum1 + " og " + sum2 + " kalorier!";
				text = text.split(" ");
				len = text.length;
			
				text[4] = '<u>' + sum1.toFixed(3) + '</u>';
				text[6] = '<u>' + sum2.toFixed(3) + '</u>'

   	    		text.forEach(() => {
        			text = text.toString().replace(',', ' ');
       			});
       		}
		} else {
			var sum1 = parseFloat(val, 10) / 0.133 / 3.5;
			var sum2 = parseFloat(val, 10) / 0.467 / 3.5;

			if (isNaN(val)) {
				document.getElementById("ml").value = "";
				text = "Hvordan vil du konvertere <i>" + val + "</i> til klatter? idiot.";
			} else {
				text = "Det vil være mellem " + sum1 + " og " + sum2 + " klatter!";
				text = text.split(" ");
				len = text.length;

				text[4] = '<u>' + sum1.toFixed(3) + '</u>';
				text[6] = '<u>' + sum2.toFixed(3) + '</u>';

				text.forEach(() => {
					text = text.toString().replace(',', ' ');
				});
			}
		}
		
		document.getElementById("res").innerHTML = text;
	}
}

function SwitchUnit() {
	var tmpText = document.getElementById("unit");

	document.getElementById("ml").value = "";
	document.getElementById("res").innerHTML = "";

	switch (unit) {
		case 0:
			unit = 1;
			tmpText.innerHTML = "Kalorier (cal): ";
			break;
		case 1:
			unit = 0;
			tmpText.innerHTML = "Sæd (klt): ";
			break;
	}
}
