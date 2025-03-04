/* General Styling */
body {
    font-family: Arial, sans-serif;
    text-align: center;
    background-color: #f4f4f4;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh; /* Full height */
    margin: 0;
}

/* Main Container */
.container {
    width: 400px; /* Adjusted for better visibility */
    background: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}

/* Input Box and Button */
.input-container {
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
}

input {
    flex: 1;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

button {
    padding: 10px 15px;
    font-size: 16px;
    background-color: blue;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

button:hover {
    background-color: darkblue;
}

/* Task List */
ul {
    list-style: none;
    padding: 0;
    max-height: 300px; /* Keeps tasks within the box */
    overflow-y: auto; /* Scroll when too many tasks */
}

/* Task Items */
li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #eee;
    padding: 10px;
    margin: 5px 0;
    border-radius: 5px;
    font-size: 16px;
}

/* Completed Tasks */
.completed {
    text-decoration: line-through;
    color: gray;
}

/* Delete Button */
.deleteBtn {
    background-color: red;
    color: white;
    border: none;
    padding: 5px 10px;
    cursor: pointer;
    border-radius: 5px;
}

.deleteBtn:hover {
    background-color: darkred;
}
