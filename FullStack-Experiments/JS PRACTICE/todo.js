
function addtask() {
    let taskInput = document.querySelector("#task");
    let taskValue = taskInput.value;
    let list = document.querySelector("#list");

    if (taskValue === "") {
        alert("Please enter a task")
    }
    else {
        let li = document.createElement("li")
        li.innerHTML = taskValue
        list.appendChild(li)
        taskInput.value = ""
    }
}
