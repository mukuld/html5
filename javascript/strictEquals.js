function strictEquals(a, b) {
    if (Object.is(a, b)) {
        if (Object.is(a, NaN)) {
            console.log("A and B are not same")
        } else {
            console.log("A and B are same")
        }
    } else {
        console.log("A and B are not the same")
    }
}