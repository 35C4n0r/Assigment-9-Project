var squares = document.querySelectorAll(".color-box");
console.log(squares);

// Function to create a random integer in a given range
function getRGB(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function newGame(easy, hard) {

    // Checking if the game is on Hard or Easy Mode
    if (easy === true) {
        var j = 3;
    }
    else {
        var j = 6;
    }

    var colors = [];

    // Creating 6 or 3 more random values
    for (var i = 0; i < j; i++) {
        var r = getRGB(0, 255);
        var g = getRGB(0, 255);
        var b = getRGB(0, 255);
        colors.push([r, g, b]);
    }

    // Getting a random index to get a random answer from the list
    var randomIndex = getRGB(0, j-1);
    var answer = colors[randomIndex];
    var heading = document.querySelector("#color-display");
    heading.textContent = "RGB " + "(" + answer[0] + ", " + answer[1] + ", " + answer[2] + ")";


    // Setting up the Squares
    for (var i = 0; i < j; i++){
        console.log("rgb(" + colors[i][0] + ", " + colors[i][1] + ", " + colors[i][2] + ")")
        squares[i].style.backgroundColor = "rgb(" + colors[i][0] + ", " + colors[i][1] + ", " + colors[i][2] + ")";
    }    
    
}

start();

function start() {
    newGame(false, true);

}

