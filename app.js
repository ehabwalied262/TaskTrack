// Selecting elements from the webpage
const taskInput = document.getElementById("taskInput"); // Get the input field where you type a new task
const addTaskButton = document.getElementById("addTaskButton"); // Get the button to add a new task
const taskList = document.getElementById("taskList"); // Get the list where tasks will be displayed

// Function to add a new task to the list
function addTask() {
    const taskText = taskInput.value.trim(); // Get the text you typed for the task and remove extra spaces

    // Check if you typed something for the task
    if (taskText !== "") {
        const taskItem = document.createElement("li"); // Create a new item for the task
        const taskTextSpan = document.createElement("span"); // Create a span element to display the task text
        taskTextSpan.innerText = taskText; // Set the text of the task

        taskItem.appendChild(taskTextSpan); // Add the task text to the task item

        // Event listener for clicking to edit the task
        taskTextSpan.addEventListener("click", function() {
            const editText = prompt("Edit Task:", taskTextSpan.innerText); // Prompt to edit the task text
            if (editText !== null && editText.trim() !== "") {
                taskTextSpan.innerText = editText.trim(); // Update the task text if edited
            }
        });

        // Create a button to mark a task as completed
        const completeButton = document.createElement("button"); 
        completeButton.innerHTML = '<span class="material-icons">done</span>'; // Add a checkmark icon
        completeButton.classList.add("complete-button"); // Assign a class for styling the button
        completeButton.addEventListener("click", function() {
            taskItem.classList.toggle("completed"); // Toggle the completed class when the button is clicked
        });

        // Create a button to delete a task
        const deleteButton = document.createElement("button");
        deleteButton.innerHTML = '<span class="material-icons delete-button">delete</span>'; // Add a trash can icon
        deleteButton.classList.add("delete-button"); // Assign a class for styling the button
        deleteButton.addEventListener("click", function() {
            taskItem.remove(); // Remove the task item when the button is clicked
        });

        // Add buttons and task item to the task list
        taskItem.appendChild(completeButton); // Add the complete button to the task item
        taskItem.appendChild(deleteButton); // Add the delete button to the task item
        taskList.appendChild(taskItem); // Add the task item to the list

        taskInput.value = ""; // Clear the input field for entering a new task
    } else {
        alert("Please add a task"); // Show an alert if no task text is entered
    }
}

// Event listener for clicking the "Add Task" button
addTaskButton.addEventListener("click", addTask);

// Event listener to handle pressing the "Enter" key inside the input field
taskInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        addTask(); // Call the addTask function when the "Enter" key is pressed
    }
});