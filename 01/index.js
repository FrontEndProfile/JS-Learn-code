

let addConsole = document.getElementById("clickMe").addEventListener("click", numLog);

let splitText = document.getElementById("split").textContent;

let newSplitText = splitText.split('').map(letter => `<span style="padding:2px">${letter}</span>`).join('');



function numLog() {
    console.log("click me" + " " + Math.floor(Math.random() * 1000));
}

// If you want to update the content of the element, you need to set innerHTML
document.getElementById("split").innerHTML = newSplitText;

console.log(newSplitText);

