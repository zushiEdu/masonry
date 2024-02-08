console.log("Working.")

var col1 = document.getElementById("column1");
var col2 = document.getElementById("column2");
var col3 = document.getElementById("column3");

var list;
updateList();
console.log(list);
showBlocks();

for (var i = 0; i <= 5; i++) {
    var newBlock = document.createElement("div");
    newBlock.setAttribute("class", "block");
    newBlock.setAttribute("style", `height:${(i + 1) * 100}px`)
    var newText = document.createElement("p");
    newText.textContent = "world"
    newBlock.appendChild(newText);
    col1.appendChild(newBlock);
}

for (var i = 5; i >= 0; i--) {
    var newBlock = document.createElement("div");
    newBlock.setAttribute("class", "block");
    newBlock.setAttribute("style", `height:${(i + 1) * 100}px`)
    var newText = document.createElement("p");
    newText.textContent = "world"
    newBlock.appendChild(newText);
    col2.appendChild(newBlock);
}

for (var i = 0; i <= 5; i++) {
    var newBlock = document.createElement("div");
    newBlock.setAttribute("class", "block");
    newBlock.setAttribute("style", `height:${(i + 1) * 100}px`)
    var newText = document.createElement("p");
    newText.textContent = "world"
    newBlock.appendChild(newText);
    col3.appendChild(newBlock);
}

function showBlocks() {
    for (var i = 0; i < list.length; i++) {
        var newBlock = document.createElement("div");
        newBlock.setAttribute("class", "block");
        newBlock.setAttribute("style", `height:${(i + 1) * 100}px`)
        var newText = document.createElement("p");
        var newImage = document.createElement("img");
        newImage.src = list[i].src;
        newText.textContent = "world"
        newBlock.appendChild(newText);
        newBlock.appendChild(newImage)
        col3.appendChild(newBlock);
    }
}

function updateList() {
    console.log("Refreshed List")
    fetch('data.json')
        .then(response => response.json())
        .then(locations => {
            locations = locations.sort(
                (p1, p2) => (p1.datePosted > p2.datePosted) ? 1 : (p1.datePosted < p2.datePosted) ? -1 : 0);
            list = locations;
        });
}