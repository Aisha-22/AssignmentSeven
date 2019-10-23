divChild1 = '<div class="square"> <img class="myImage" src="./images/asteroid-01.svg"> </div>';
imgSpace1 = '<div class="square"> <img class="myImage" src="./images/space-03.svg"> </div>'
var h = document.getElementById("boar");


var maze = [
    [1, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 1, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 1, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 1, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 1, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
];

var totalAstroids = 0;
var maximumValue = 0;
var astroidsFound = 0;

function greaterThanZ() {
    return 1;
}

for (var i = 0; i < maze.length; i++) {
    //    console.log(maze[i]);
    for (var j = 0; j < maze[i].length; j++) {
        totalAstroids++;
        if (maze[i][j] === 1) {
            maximumValue++;
            //insert astroid
            h.insertAdjacentHTML("afterbegin", divChild1);
        } else {
            //insert space
            h.insertAdjacentHTML("afterbegin", imgSpace1);
        }

    }
}


var clickableSquares = document.querySelectorAll(".square").length;
for(var i = 0; i < clickableSquares; i++) {
//add click event to each individual swuare
    document.querySelectorAll(".square")[i].addEventListener('click', function() {

        console.log(this)
        this.style.color = "aquamarine"
        // document.querySelector('.myImage').style.visibility = "visible";
        //find the parent element and only change the visibility for the clicked child
             this.firstElementChild.style.visibility = "visible";
            // console.log(maze[i][j]);
        
    });

}



console.log(maximumValue);
console.log(totalAstroids);