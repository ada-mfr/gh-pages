function biggerButton() {
    document.getElementById("text").style.fontSize = "24px"
}


function mooButton() {
    var moo = document.getElementById("text").value.toUpperCase();
    var mooSplit = moo.split(".");
    moo = mooSplit.join("-Moo");
    document.getElementById("text").value = moo;

}

function fancyButton() {
    if (document.getElementById("fancy").checked) {
        document.getElementById("text").style.fontWeight = "bold"
        document.getElementById("text").style.color = "blue"
        document.getElementById("text").style.textDecoration = "underline"
    }
}

function boringButton() {
    if (document.getElementById("boring").checked) {
        document.getElementById("text").style.fontWeight = "normal"
        document.getElementById("text").style.color = "black"
        document.getElementById("text").style.textDecoration = "none"
    }
}