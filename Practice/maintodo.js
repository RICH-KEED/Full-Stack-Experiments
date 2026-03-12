const list = document.getElementById("main-list");
const add = document.getElementById("add");
const input = document.getElementById("Todo");

add.addEventListener("click",function(){
    const li = document.createElement("li");
    const text = document.createElement("span");
    text.innerText = input.value;

    const del = document.createElement("button");
    del.innerText="Delete"
    del.addEventListener("click",function()
    {
        li.remove()
    });

    const mark = document.createElement("button");
    mark.innerText="Mark As Complete";
    
    mark.addEventListener("click",function()
    {
        text.style.textDecoration="line-through";
    });

    const pin = document.createElement("button");
    pin.innerText="Pin";

    pin.addEventListener("click",function()
    {
        list.prepend(li);
        text.style.background = "#fff3cd";
        pin.innerText = "Pinned";
    });

    if(input.value.trim() !== "")
    {   

        li.append(text," ",mark," ",pin," ",del);
        list.appendChild(li);
        input.value="";
    }
});