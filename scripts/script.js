function klat() {
	if (document.getElementById("ml").value != "") {
		var val = document.getElementById("ml").value;
		var sum1 = parseFloat(val, 10) * 0.133 * 3.5;
		var sum2 = parseFloat(val, 10) * 0.467 * 3.5;
								
        	var text = "";
        	text = "Det vil være mellem " + sum1 + " og " + sum2 + " kalorier!";
	        text = text.split(" ");
        	len = text.length;
	        result = [];
        
        	text[4] = '<u>' + sum1.toFixed(3) + '</u>';
	        text[6] = '<u>' + sum2.toFixed(3) + '</u>'
        
        	if (isNaN(val)) {
        		text = "Hvordan vil du konvertere " + val + " til kalorier? dumbass.";
        	} else {
        		text.forEach(Element => {
        			text = text.toString().replace(',', ' ');
        		});
        	}
        	document.getElementById("res").innerHTML = text;
	}
}
