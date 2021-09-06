const diceImages = [
    imageOne = {image: "images/dice1.png", value: 1},
    imageTwo = {image: "images/dice2.png", value: 2}, 
    imageThree = {image: "images/dice3.png", value: 3}, 
    imageFour = {image: "images/dice4.png", value: 4},
    imageFive = {image: "images/dice5.png", value: 5}, 
    imageSix = {image: "images/dice6.png", value: 6} 
]


let diceRollOne = Math.floor(Math.random() * diceImages.length)
let diceRollTwo = Math.floor(Math.random() * diceImages.length)

const diceOne = document.querySelector(".img1").setAttribute("src", diceImages[diceRollOne].image)
const diceTwo = document.querySelector(".img2").setAttribute("src", diceImages[diceRollTwo].image)


if (diceImages[diceRollOne].value > diceImages[diceRollTwo].value) {
    document.querySelector(".container h1").innerHTML = "Player one wins!!"
} else if (diceImages[diceRollOne].value < diceImages[diceRollTwo].value) {
    document.querySelector(".container h1").innerHTML = "Player two wins!!"
} else {
        document.querySelector(".container h1").innerHTML = "Draw!"
}

