var textInput = document.getElementById("textInput");
var addCardButton = document.getElementById("createButton");
var cardHolder = document.getElementById("cardHolder");

addCardButton.addEventListener("click", addCardFunction)

function addCardFunction() {
    var cardText = textInput.value
    var cardString = "<section class='card'> <p>" + cardText + "</p> <button>Delete</button></section>"
    cardHolder.innerHTML += cardString;
}