var col1 = document.getElementById("column1");
var col2 = document.getElementById("column2");
var col3 = document.getElementById("column3");

var col1Count = 0;
var col2Count = 0;
var col3Count = 0;

var list;
updateList();

function showBlocks() {
    for (var i = 0; i < list.length; i++) {
        var postBody = document.createElement("div");
        postBody.setAttribute("class", "block");
        var postTitle = document.createElement("h2");
        var postDetails = document.createElement("p");

        var image = document.createElement("img");
        image.setAttribute("id", `image${i}`)
        image.setAttribute("class", "postImage");
        image.src = list[i].src;

        postTitle.textContent = list[i].imageName;
        postDetails.textContent = "By " + list[i].author + " | Posted " + list[i].datePosted;
        postBody.appendChild(postTitle);
        postBody.appendChild(postDetails);

        var postMeaning = document.createElement("p");
        postMeaning.setAttribute("id", "postText");
        postMeaning.textContent = list[i].flipSide;

        var doubleImage = document.createElement("div");
        doubleImage.setAttribute("class", "doubleImage");
        doubleImage.appendChild(image);
        doubleImage.appendChild(postMeaning);

        postBody.appendChild(doubleImage);

        if (col1Count <= col2Count && col1Count <= col3Count) {
            col1.appendChild(postBody);
            col1Count++;
        } else if (col2Count < col1Count && col2Count <= col3Count) {
            col2.appendChild(postBody);
            col2Count++;
        } else {
            col3.appendChild(postBody);
            col3Count++;
        }
    }
}

function updateList(_callback) {
    console.log("Refreshed List")
    fetch('data.json')
        .then(response => response.json())
        .then(locations => {
            locations = locations.sort(
                (p1, p2) => (p1.datePosted > p2.datePosted) ? 1 : (p1.datePosted < p2.datePosted) ? -1 : 0);
            list = locations;
            showBlocks();
        });
}