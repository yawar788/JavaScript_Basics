// Selecting elements
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

// Function to add a new task
function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    // Creating new list item
    const li = document.createElement("li");
    li.innerHTML = `
        <span>${taskText}</span>
        <button class="deleteBtn">X</button>
    `;

    // Mark as completed when clicked
    li.addEventListener("click", function () {
        li.classList.toggle("completed");
    });

    // Delete task when clicking 'X' button
    li.querySelector(".deleteBtn").addEventListener("click", function () {
        li.remove();
    });

    // Add task to the list
    taskList.appendChild(li);

    // Clear input field
    taskInput.value = "";
}

// Event listener for add button
addTaskBtn.addEventListener("click", addTask);

// Pressing "Enter" should also add a task
taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});
