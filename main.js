let textInput = document.querySelector("#txt-Input")
let textoutput = document.querySelector("#txt-output")
let checkbutton = document.querySelector("#check")

checkbutton.addEventListener("click", buttonClickHandler)
function buttonClickHandler(event) {
    console.log("button clicked");
    if(textInput.value !== ""){
    var input = textInput.value.trim();
    textoutput.innerText = input.length;
    }
}