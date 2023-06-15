// var button = document.getElementsByTagName("button")[0]
// button.addEventListener("mouseenter", function()
// {
//     console.log("Click!!");
// })

var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputlength(){
    return input.value.Length;
}
function createListElement() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
}

function addListAfterClick(){
    if (inputlength() > 0);{
        createListElement();
    }
}

function addListAfterkeypress(event){
    if (inputlength() > 0 && event.keycode === 13){
        createListElement();
    }
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterkeypress);