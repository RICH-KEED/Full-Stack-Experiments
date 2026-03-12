const button = document.getElementById("Click-me-button");

button.addEventListener("click",function()
{
    const p = document.getElementById("Inner-p-text");
    if(p.innerHTML=="Hello")
    {
        p.innerHTML="Bye";
    }
    else if(p.innerHTML=="Bye")
    {
        p.innerHTML="Hello";
    }
});

const redb=document.getElementById("Red-button");
const blueb=document.getElementById("Blue-button");
const greenb=document.getElementById("Green-button");

redb.addEventListener("click",function()
{
    document.getElementById("color-div").style.backgroundColor="red";
});
blueb.addEventListener("click",function()
{
    document.getElementById("color-div").style.backgroundColor="blue";
});
greenb.addEventListener("click",function()
{
    document.getElementById("color-div").style.backgroundColor="green";
});

var count = 0;
const add = document.getElementById("add");
const sub = document.getElementById("sub");

add.addEventListener("click",function()
{
    count=count+1;
    document.getElementById("space-count").innerText=count;
})
sub.addEventListener("click",function()
{
    if(count>0) count=count-1;
    document.getElementById("space-count").innerText=count;
})

let text = document.getElementById("maintext")

document.getElementById("print").addEventListener("click",function() {document.getElementById("output").innerText=text.value});

const input = document.getElementById("text-input");
const preview = document.getElementById("preview");

input.addEventListener("input", function(){
    preview.innerText = input.value.toUpperCase();
});

