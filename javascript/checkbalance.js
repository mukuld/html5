/*
 * Programming Quiz - Checking Your Balance (3-5)
 */

// change the values of `balance`, `checkBalance`, and `isActive` to test your code
var balance = 0.00;
var checkBalance = true;
var isActive = true;

// your code goes here
if (!checkBalance) {
    console.log("Thank you. Have a nice day!");
} else if (isActive && balance > 0) {
    console.log("Your balance is $" + balance + ".");
} else if (!isActive) {
    console.log("Your account is no longer active.");
} else if (balance === 0) {
    console.log("Your account is empty.");
}else if (balance <= 0) {
    console.log("Your balance is negative. Please contact bank.");
}
