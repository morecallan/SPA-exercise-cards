var textInput = document.getElementById("textInput");
var addCardButton = document.getElementById("createButton");
var cardHolder = document.getElementById("cardHolder");
cardCount = 0;

addCardButton.addEventListener("click", addCardFunction)

function addCardFunction() {
    var cardText = textInput.value

    if (cardText !== "") {
        var cardString = "<section class='card' id='card" + cardCount + "''> <p>" + cardText + "</p> <button id='delete'>Delete</button></section>"
        cardHolder.innerHTML += cardString;
        cardCount ++;
    } else {
        alert("Write something, doofus.")
    }
}

cardHolder.addEventListener("click", deleteCard);


function deleteCard(e){
    console.log("e", e);
    if (e.target.id === "delete") {
        whereAmI = e.target.parentNode;
        cardHolder.removeChild(whereAmI);
    }
    
}