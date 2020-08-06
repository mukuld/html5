let myImage = document.querySelector("img")

myImage.onmouseover = function() {
    let mySrc = myImage.getAttribute("src")
    if (mySrc === "img/symbol.jpg") {
        myImage.setAttribute("src", "img/index.png")
    } else {
        myImage.setAttribute("src", "img/symbol.jpg")
    }
}