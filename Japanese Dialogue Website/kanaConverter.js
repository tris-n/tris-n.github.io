var kanaToggle = "off";

function convertToKana() {
	var theText = document.getElementById("dialogue").innerHTML;

	if (kanaToggle == "off") {
		document.getElementById("dialogue").innerHTML = wanakana.toRomaji(theText);
		kanaToggle = "on";
	} else {
		document.getElementById("dialogue").innerHTML = singleLine;
		kanaToggle = "off";
	}

	// var theText = document.getElementById("dialogue").innerHTML;
	// alert(wanakana.toRomaji(theText));

	// document.getElementById("dialogue").innerHTML = wanakana.toRomaji(theText);
}