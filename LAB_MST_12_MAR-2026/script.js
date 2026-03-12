const add = document.getElementById("add");
const list = document.getElementById("task-list");
const input = document.getElementById("task");
const priority = document.getElementById("priority");
const search = document.getElementById("search");
const searchbtn = document.getElementById("search-btn");
const showCompleted = document.getElementById("show-completed");
const showAll = document.getElementById("show-all");
const showPending = document.getElementById("show-pending");
const priorityFilter = document.getElementById("filter");

add.addEventListener("click",function()
{
    const li = document.createElement("li");
    const text = document.createElement("span");
    const pri = document.createElement("span");
    text.innerText = input.value.toUpperCase();

    const del = document.createElement("button");
    del.innerText="Delete"
    del.addEventListener("click",function()
    {
        li.remove()
    });

    const complete = document.createElement("button");
    complete.innerText="Mark Complete"
    complete.addEventListener("click",function()
    {
        li.style.textDecoration = "line-through";
        li.style.opacity = "0.6";
        li.setAttribute("task-completed", "true");
        complete.disabled = true;
        complete.style.opacity = "0.5";
    });
    
    pri.innerText = priority.value;
    pri.style.marginLeft = "10px";
    pri.style.padding = "4px 8px";
    pri.style.backgroundColor = "grey";
    pri.style.borderRadius = "3px";
    pri.style.fontWeight = "bold";
    
    if(input.value.trim() !== "")
    {
        li.setAttribute("task-priority", priority.value);
        li.append(text," "," ",pri," ",complete," ",del);
        list.append(li);
        input.value = "";
    }

})

searchbtn.addEventListener("click",function()
{
    const searchTask = search.value.toUpperCase().trim();
    const tasks = list.querySelectorAll("li");
    
    tasks.forEach(function(task) {
        const taskText = task.innerText;
        if(taskText.includes(searchTask)) {
            task.style.display = "block";
        } else {
            task.style.display = "none";
        }
    });
})

showCompleted.addEventListener("click",function()
{
    const tasks = list.querySelectorAll("li");
    tasks.forEach(function(task) {
        if(task.getAttribute("task-completed") === "true") {
            task.style.display = "block";
        } else {
            task.style.display = "none";
        }
    });
})

showAll.addEventListener("click",function()
{
    const tasks = list.querySelectorAll("li");
    tasks.forEach(function(task) {
        task.style.display = "block";
    });
})

showPending.addEventListener("click",function()
{
    const tasks = list.querySelectorAll("li");
    tasks.forEach(function(task) {
        if(task.getAttribute("task-completed") === "true") {
            task.style.display = "none";
        } else {
            task.style.display = "block";
        }
    });
})

priorityFilter.addEventListener("change",function()
{
    const selectedPriority = priorityFilter.value;
    const tasks = list.querySelectorAll("li");
    
    tasks.forEach(function(task) {
        if(selectedPriority === "all") {
            task.style.display = "block";
        } else {
            const taskPriority = task.getAttribute("task-priority");
            if(taskPriority === selectedPriority) {
                task.style.display = "block";
            } else {
                task.style.display = "none";
            }
        }
    });
})







