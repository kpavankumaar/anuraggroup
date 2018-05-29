// when user clicks on addbutton 
	// create div -> inputcheckbox, inputtypetext, label, editbutton,deletebutton

// when user clicks on editbutton , 
	// show input type text ,and hide lable element 
	// and copy the label value into the input type text

// when user clicks on deletebutton 
	// remove complete Div element
// when user check or uncheck the inputcheckbox
	// move parentDiv element from completeSection to incompleteSection
	// or move parentDiv element fomr incompletesection to complete section 
var addTaskBtn =  document.getElementsByTagName('button')[0];
var userEnteredField = document.getElementsByName('AddTask')[0];
var commentElement =  document.getElementById('comment');
var toDoList = document.getElementById('todolist');
var completedList = document.getElementById('completedlist');
addTaskBtn.onclick = function(){
	//create div , inputcheckbox, inputtext, label,edit and deletebutton

	var parentElementForTask = document.createElement('div');
	var checkBox = document.createElement('input');
	var inputTypeText = document.createElement('input');
	var contentHolder = document.createElement('label');
	var editButton = document.createElement('button');
	var deleteButton = document.createElement('button');

	checkBox.setAttribute('type','checkbox');
	inputTypeText.setAttribute('type','text');
	contentHolder.innerText = userEnteredField.value;
	editButton.innerText = 'Edit';
	deleteButton.innerText = 'Delete';

	parentElementForTask.appendChild(checkBox);
	parentElementForTask.appendChild(inputTypeText);
	parentElementForTask.appendChild(contentHolder);
	parentElementForTask.appendChild(editButton);
	parentElementForTask.appendChild(deleteButton);

	toDoList.appendChild(parentElementForTask);

	checkBox.onchange = function(){
		var parentDivEl = this.parentNode;
		var section = parentDivEl.parentNode;
		var idValue = section.getAttribute('id');
		console.log(idValue);
		if(idValue === 'todolist'){
			completedList.appendChild(parentDivEl);
		}else{
			toDoList.appendChild(parentDivEl);
		}
	}
}








