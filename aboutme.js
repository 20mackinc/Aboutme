alert("Welcome to my website! Enjoy!");
function makeimagebig(x) {
    x.style.width = "500px"
}

function makeimageogsize(x) {
    x.style.width = "200px"
}

function showHideSection(section) {
    var showHideSection = document.getElementById(section)
    if (showHideSection.style.display == "none") {
        showHideSection.style.display = "block";
        document.getElementById("brags").innerHTML = "HIDE";
    } else {
        showHideSection.style.display = "none";
        document.getElementById("brags").innerHTML = "Why I'm cool";
    }
}