function changeColor() {
    let box = document.getElementById("box");
    box.style.backgroundColor = box.style.backgroundColor === "lightblue" ? "lightcoral" : "lightblue";
}

document.getElementById("hoverBox").addEventListener("mouseover", function() {
    this.style.backgroundColor = "yellow";
});

document.getElementById("hoverBox").addEventListener("mouseout", function() {
    this.style.backgroundColor = "lightgreen";
});

let originalText = "This is a paragraph.";

document.getElementById("changeTextButton").addEventListener("click", function() {
    let textElement = document.getElementById("textElement");
    if (textElement.textContent === originalText) {
        textElement.textContent = "The text has been changed!";
    } else {
        textElement.textContent = originalText;
    }
});


document.getElementById("toggleBox").addEventListener("click", function() {
    this.style.backgroundColor = this.style.backgroundColor === "lightblue" ? "lightcoral" : "lightblue";
});
