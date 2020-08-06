/* Here I am using the Math library and the random function. 
I add one (1) to the output to account for the computer arithmetic of starting count from 0
*/
let num = Math.floor(Math.random() * 100) + 1;
//var guess = Number(prompt("Take a guess between 1 and 100: "));
let tries = 0;
//console.log(num)
//document.getElementById("org_num").innerHTML = num

function guess_my_number(guess) {
    while (guess !== num) {
        if (guess <= num) {
            low_guess = "Your guess is too low. Increase the guess...";
            //console.log("Your guess is too low. Increase the guess...");
            document.getElementById("msgs").innerHTML = low_guess;
        } else {
            //console.log("Your guess is too high. Lower the guess...");
            high_guess = "Your guess is too high. Lower the guess...";
            document.getElementById("msgs").innerHTML = high_guess;
        }
        //guess = Number(prompt("Take a guess between 1 and 100: "));
        tries += 1;
        return tries;
        //return guess;
    }
}

$(submit).click(function() {
    let u_number = Number($("#input").val());
    let guesses = [];
    guesses = guesses.append(u_number)
    let output = guess_my_number(u_number)
    document.getElementById("result").innerHTML = u_number;
    document.getElementById("attempts").innerHTML = output;
})

//console.log("You guessed it. The number was: ", num, " and you guessed it in ", tries, "tries");