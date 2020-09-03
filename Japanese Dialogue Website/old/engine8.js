// THIS IS GOOD TO GO
// 11.57am 5th of June 2020

// https://www.kanjidatabase.com/japanese_developer_tips.php
// https://wanakana.com/

// Take the plain dialogue and reorder it depending on "ask" or "say"
// This will be the usable array for printing
var newArray = [];
var allConversations = [topic03];
var chosenTopic;
var chosenConversation;
var chosenPerson;
var newCounter;
var singleLine;


// topic Picker
function pickTopic() {
	// get the number of topics in allConversations, then pick one at random
	var randomNumber = Math.floor(Math.random() * allConversations.length);
	// console.log(allConversations[randomNumber]);
	// set the chosen topic
	return chosenTopic = allConversations[randomNumber];
}

// conversation Picker
function pickConversation() {	
	// console.log("chosen topic length is: " + Object.values(chosenTopic).length);

	// added -1 and +1 to avoid the issue of the 'name' field in the object
	var randomNumber = Math.floor(Math.random() * (Object.values(chosenTopic).length-1)) + 1;
	// console.log(randomNumber);
	// console.log(Object.keys(chosenTopic)[randomNumber]);
	// console.log(chosenTopic.conversation01.dialogue[03]);
	var pickedConversation = Object.keys(chosenTopic)[randomNumber];
	return chosenConversation = chosenTopic[pickedConversation];
}

// person Picker
function pickPerson() {
	var randomNumber = Math.floor(Math.random() * 2);
	// console.log(randomNumber);
	if (randomNumber == 0) {
		return chosenPerson = "say";
	} else {
		return chosenPerson = "ask";
	}
	
	// return chosenConversation = allConversations[randomNumber];
}

// The function that sorts the dialogue into newArray
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

	// this will return the new sorted array
	console.log(newArray);
}


// resets everything from the beginning
function dialogueInit(){
	newArray = [];
	pickTopic();
		console.log("\n\n\ntopic chosen: " + chosenTopic.name);
	pickConversation();
		console.log("conversation chosen: " + chosenConversation.title);
	pickPerson();
		console.log("person chosen: " + chosenPerson);
	chosenDialogue = chosenConversation.dialogue;
		console.log("the chosen dialogue is: " + chosenDialogue);
	numberSorter(chosenPerson, chosenDialogue);
	newCounter = 0;
	singleLine = newArray[newCounter];
	printText();
	printTitle();
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

// print the selected conversation title
function printTitle() {
	document.getElementById("title").innerHTML = 
		chosenConversation.topic + " " + 
		chosenConversation.title + " " +
		chosenPerson + " " + 
		chosenConversation.person;
}