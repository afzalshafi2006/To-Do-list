function addTask() {
    let input = document.getElementById("taskInput");
    let taskText = input.value.trim();

    if (taskText === "") {
        alert("Please enter a task");
        return;
    }

    let li = document.createElement("li");
    li.innerHTML = `
        <span>${taskText}</span>
        <span class="delete" onclick="removeTask(this)">✖</span>
    `;

    document.getElementById("taskList").appendChild(li);
    input.value = "";
}

function removeTask(element) {
    element.parentElement.remove();
}
