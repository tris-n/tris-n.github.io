// THIS IS GOOD TO GO
// 2.07pm 10th of June 2020

var newArray = [];
var allConversations = [lesson03, lesson04, lesson05, lesson07];
var chosenTopic;
var chosenConversation;
var chosenPerson;
var newCounter;
var singleLine;


// topic Picker
function pickTopic() {

	var x = document.getElementById("menuLesson").value;

	if (x == "Random") {
		var randomNumber = Math.floor(Math.random() * allConversations.length);
		console.log("You selected Random " + allConversations[randomNumber].lesson);
		return chosenTopic = allConversations[randomNumber];
	} else {
		console.log("You selected: " + x + " " + allConversations[x].lesson);
		return chosenTopic = allConversations[x];
	}
	
	// console.log(allConversations[randomNumber]);
	// set the chosen topic
	// for (var i = 0; i < allConversations.length; i++) {
	// 	console.log(allConversations[i].topic);
	// }
	// console.log(lesson03.topic + " " + topic03.topic);
	
} // returns chosenTopic

// conversation Picker
function pickConversation() {	
	// console.log("chosen topic length is: " + Object.values(chosenTopic).length);

	// added -1 and +1 to avoid the issue of the 'name' field in the object
	var randomNumber = Math.floor(Math.random() * 
		(Object.values(chosenTopic).length-2)) + 2;
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
// the thing that runs the page
// so... maybe i just 
function dialogueInit(){

	newArray = [];
	// creating the conversation to sort

	pickTopic();
	// picks the topic from a list at random
	// so this is the bit i need to redo
	// maybe set it so it doesn't pick a topic at first
	// it just checks the current value of the drop down menu
	// and if it _is_ random, then it runs the pickTopic function

	pickConversation();
	// counts how many conversations are in the topic
	// then picks one at random

	pickPerson();
	// selects whether i'll be answering or asking
	// sets a value of 'say' or 'ask'

	chosenDialogue = chosenConversation.dialogue;
	console.log(chosenConversation.audio + ".mp3");
	// loads the dialogue from the chosen conversation

	numberSorter(chosenPerson, chosenDialogue);
	// passes 'say' or 'ask', and the chosen dialogue
	// then sorts the it into the correct format
	// and pastes it into 'newArray'

	newCounter = 0;
	// a counter for printing the dialogue to the page
	// used in printTitle

	singleLine = newArray[newCounter];
	// picks the first line of the sorted dialogue

	printText();
	// cycles through the newArray dialogue and prints it to page

	printTitle();
	// then prints the title to the page

	// printMenu();
	// creates the menu
	// turned off for the time being 1.15pm

	// playAudio();

	printAudio();

};

var audioPlayed;
// prints the array to the page
function printText(){

	if (newCounter < newArray.length) {
		document.getElementById("dialogue").innerHTML = singleLine;
		newCounter++;
		singleLine = singleLine + "<br/>" + newArray[newCounter];
	} else {
		if (audioPlayed == "true") {
			audioPlayed = "false";
			// on spacebar... check to see if the audio has ended
			dialogueInit();
		} else {
			playAudio();
			audioPlayed = "true";
		}
	}
};

// print the selected conversation title
function printTitle() {
	document.getElementById("title").innerHTML = 
		"Topic: " +
		chosenTopic.topic + " » Lesson: " +
		chosenTopic.lesson + " » Conversation: " + 
		chosenConversation.title + " » Partner: " +
		chosenConversation.person + " » Role: " + 
		chosenPerson;
}


// load audio into page
function printAudio(argument) {
	var x = document.getElementById("myAudio");
	x.src = "audio/" + chosenConversation.audio + ".mp3"
}

// play audio
function playAudio() {
	var x = document.getElementById("myAudio");
	x.play();
}