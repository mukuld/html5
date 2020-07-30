var num = Math.floor(Math.random() * 101) + 1;
var guess = Number(prompt("Take a guess between 1 and 100: "));
var tries = 1;
console.log(num)

while (guess !== num) {
    if (guess <= num) {
        console.log("Your guess is too low. Increase the guess...");
    } else {
        console.log("Your guess is too high. Lower the guess...");
    }
    guess = Number(prompt("Take a guess between 1 and 100: "));
    tries += 1;
}
console.log("You guessed it. The number was: ", num, " and you guessed it in ", tries, "tries");