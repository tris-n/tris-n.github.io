// Take the plain dialogue and reorder it depending on "ask" or "say"
// This will be the usable array for printing
var newArray = [];

// The function that sorts the dialogue into newArray
// Input "ask" or "say", and the array chosen
function numberSorter(arg, oldArray){

	// because of the pattern, you need to divide it into loops
	var numberOfLoops = oldArray.length / 2;
	var i;

	// sets the beginning value of x
	if (arg == "ask") {
		var x = -1;
	} else if (arg == "say") {
		var x = -2;
	}
	


	// The Loops that change the order of the dialogue and add "ask" or "say"
	
	// Ask Loop A
	function askA(){
		newArray.push(oldArray[x += 2]);
		newArray.push(oldArray[x += 1]);
	}
	
	// Ask Loop B
	function askB() {
		newArray.push("ask: " + oldArray[x += 2]);
		newArray.push(oldArray[x -= 1]);
	}

	// Say Loop A
	function sayA(){
		newArray.push(oldArray[x += 2]);
		newArray.push(oldArray[x += 1]);
	}
	
	// Say Loop B
	function sayB() {
		newArray.push("say: " + oldArray[x += 2]);
		newArray.push(oldArray[x -= 1]);
	}
	
	// picks which loop to run the vanilla dialogue through
	if (arg == "ask") {
		for (i = 0; i < numberOfLoops; i++) {

			if (i%2) {
				askA();
			} else {
				askB();
			}
			
		}
	} else if (arg == "say") {
		for (i = 0; i < numberOfLoops; i++) {

			if (i%2) {
				sayB();
			} else {
				sayA();
			}
			
		}
	}

	// return newArray;
	console.log(newArray);
}



// collect all conversation
var allConversations = [conversation1, conversation2];

// pick conversation from array
var chosenConversation;

// conversation Picker
function pickConversation() {
	var randomNumber = Math.floor(Math.random() * allConversations.length);
	return chosenConversation = allConversations[randomNumber];
}
pickConversation();

// pick dialogue from chosen conversation
var chosenDialogue = chosenConversation.dialogue;



// pick whether to ask or to say
var chosenPerson;

// person Picker
function pickPerson() {
	var randomNumber = Math.floor(Math.random() * 2);
	if (randomNumber == 0) {
		return chosenPerson = "say";
	} else {
		return chosenPerson = "ask";
	}
	
	// return chosenConversation = allConversations[randomNumber];
}
pickPerson();
console.log(chosenPerson, chosenConversation);



// sort the selected dialogue and speaker into an array for printing
numberSorter(chosenPerson, chosenDialogue);



// counter for cycling through the dialogue when printing
var newCounter;
// holds the text the is being printed to page line by line
var singleLine;

// resets everything from the beginning
function dialogueInit(){
	newCounter = 0;
	singleLine = newArray[newCounter];
	printText();
};

// prints the array to the page
function printText(){
	if (newCounter < newArray.length) {
		document.getElementById("dialogue").innerHTML = singleLine;
		newCounter++;
		singleLine = singleLine + "<br/>" + newArray[newCounter];
	} else {
		dialogueInit();
	}
};