// make the drop down menu
function printMenu() {

	function printLesson() {
		var selectList = document.getElementById("menuLesson");
		
		// reset the menu
		for (i = selectList.length-1; i >= 0; i--) {
			selectList.options[i] = null;
		}

		for (var i = 0; i < allConversations.length; i++) {
			// console.log("ac topic: " + allConversations[i].topic);
			// console.log("ct topic: " + chosenTopic.topic);

			// so its going to run twice
			var option = document.createElement("option");
			// option.value = allConversations[i].lesson;
			option.value = [i];
			option.text = allConversations[i].lesson;

			if (option.text == chosenTopic.lesson) {
				// console.log(option.value + "==" + chosenTopic.topic);
				option.selected = "selected";
			} 

			selectList.appendChild(option);
		}		
	}

	printLesson();
	
}

// get the selected value from the drop down menu
function menuSelected() {
	var x = document.getElementById("menuLesson").value;
	console.log("You selected: " + x + " " + allConversations[x].lesson);
	// document.getElementById("demo").innerHTML = "You selected: " + x;
	chosenTopic = allConversations[x];
	newArray = [];
	// console.log(chosenTopic);
	pickConversation();
	pickPerson();
	chosenDialogue = chosenConversation.dialogue;
	numberSorter(chosenPerson, chosenDialogue);
	newCounter = 0;
	singleLine = newArray[newCounter];
	printText();
	printTitle();
	printMenu();
}



// window.addEventListener("keyup",printText);

document.body.onkeyup = function(e){
    if(e.keyCode == 32){
        printText();
    }
}