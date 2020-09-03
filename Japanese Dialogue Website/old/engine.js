var newCounter;
var singleLine;
var title;
var dialogue;

// picks a random number
function picker(){
	var objLength = Object.keys(externalJSON).length;
	var randomNumber = Math.floor(Math.random() * objLength);
	return randomNumber;
};

// selects the conversation from the file
function selecter(){
	var selectNum = picker();
	var title = Object.getOwnPropertyNames(externalJSON)[selectNum];
	document.getElementById("title").innerHTML = "<b>Selected conversation:</b> " + title;
	var body = externalJSON[Object.keys(externalJSON)[selectNum]];
	return body;
};

// splits the dialogue up into an array
function splitter(){
	var splitDialogue = selecter().split("<br>");
	return splitDialogue;
};

// resets everything from the beginning
function dialogueInit(){
	dialogue = splitter();
	newCounter = 0;
	singleLine = dialogue[newCounter];
	printText();
};

// prints the text to the page and steps through it
function printText(){
	if (newCounter < dialogue.length) {
		document.getElementById("dialogue").innerHTML = singleLine;
		newCounter++;
		singleLine = singleLine + "<br/>" + dialogue[newCounter];
	} else {
		dialogueInit();
	}
};