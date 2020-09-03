// Create an array from the dialogue
var newArray = [];

function numberSorter(arg, theArray){
	var numberOfLoops = theArray.length / 2;
	// = 4
	var i;
	if (arg == "ask") {
		var x = -1;
		console.log("A: 2a,1,3,4,6a,5,7,8");
	} else if (arg == "say") {
		var x = -2;
		console.log("B: 1,2,4,3,5,6,8,7");
	}
	
	// var newArray = [];
	
	function askA(){
		newArray.push(theArray[x += 2]);
		newArray.push(theArray[x += 1]);
	}
	
	function askB() {
		newArray.push("ask: " + theArray[x += 2]);
		newArray.push(theArray[x -= 1]);
	}

	function sayA(){
		newArray.push(theArray[x += 2]);
		newArray.push(theArray[x += 1]);
	}
	
	function sayB() {
		newArray.push("say: " + theArray[x += 2]);
		newArray.push(theArray[x -= 1]);
	}
	
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

numberSorter("say", conversation1.dialogue);
// console.log("this is the dialogue array: " + conversation1.dialogue);



var newCounter;
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