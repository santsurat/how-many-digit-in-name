let textInput = document.querySelector("#txt-Input")
let textoutput = document.querySelector("#txt-output")
let checkbutton = document.querySelector("#check")
let resetButton = document.querySelector("#reset-button");


checkbutton.addEventListener("click", buttonClickHandler)
function buttonClickHandler(event) {
    console.log("button clicked");
    if(textInput.value !== ""){
    var input = textInput.value.trim();
    textoutput.innerText = input.length;
    }
}
resetButton.addEventListener("click", function ResetButton() {
    console.log("click");
    textInput.value ="";
        textoutput.innerText ="";
            
});