/*
 * Programming Quiz: Build A Triangle (5-3)
 */
/*
Algorithm for this quiz
Declare and write function makeline - Already provided
Declare a function buildTriangle()
The input to buildTriangle will be the width of the triangle i.e the widest part of the triangle
The input to buildTriangle will become the length for the function makeline.
*/
// creates a line of * for a given length
function makeLine(length) {
    //console.log("length is " + length);
    var line = "";
    for (var j = 1; j <= length; j++) {
        line += "* ";
    }
    return line + "\n";
}

// your code goes here.  Make sure you call makeLine() in your own code.
function buildTriangle(base) {
    var width = "";
    for (i = 1; i <= base; i++) {
        width += makeLine(i);
    }
    return width;
}

// test your code by uncommenting the following line
console.log(buildTriangle(10));
