//SMART Goal: Refactor my code so after an hour of coding/debugging I have the dice emoji and their sum in the proper DOM element and the ul element will only be appended after the second click and appears under History


//set variable that equals the the number of dice the user wants to roll
//get user input
//based on numer of dice i want to get a random number between 1 and 6 x OR "input" amount of times =>.value
    //assign dice image that equals the random numbers value and make it appear on screen
        // use map OR forEach callback and use if statements to reassign each number to a possible dice image
        //another method is to make an object that assigns each number in the array to a corresponding object position => roll1: &#9856 or roll1: "&#9856"
//i want to add dice values and make the value appear onscreen
//i want to create a variable that stores the entire roll which equals the dice and their sum
//each time i roll i want to store the dice rolls in paragraph
//append each roll to history
    //check number of clicks 
        //only append roll when number of clicks is greater than 1
            //add a second event listener to trigger after clicking
        //get the dice roll and the sum and make a variable to represent them both as 1
            //element must be li

const myDice = {
    rollOne: "&#9856",
    rollTwo: "&#9857",
    rollThree: "&#9858",
    rollFour: "&#9859",
    rollFive: "&#9860",
    rollSix: "&#9861",
}
document.addEventListener("DOMContentLoaded", () => {
let form = document.querySelector('form')
form.addEventListener("submit", (event) => {
    event.preventDefault()

let userRoll = document.getElementById('user-dice').value
let diceList =[]
let viewList =[]
// let diceShow = rollDice()
// console.log(diceShow)
while (userRoll > 0) {
    //make an array that will contain the random number of each dice roll
    newDice = rollDice()
    const makeDice = function (die) {
        //convert all numbers to html entities using if statements
        if (die === 1) {
            return myDice.rollOne 
        } else if (die === 2) {
            return myDice.rollTwo
        } else if (die === 3) {
            return myDice.rollThree 
        } else if (die === 4) {
            return myDice.rollFour
        } else if (die === 5) {
            return myDice.rollFive
        } else if (die === 6) {
            return myDice.rollSix
        }
    }
        viewList.push(makeDice(newDice))

    diceList.push(newDice)
    userRoll--
    // console.log(diceList)
    //i want to take the number value of each element in the object/array and change it to the right html entity value
    let view = document.getElementById('dice-para')

    view.innerHTML = viewList.join('')

    let diceSum = diceList.reduce((acc,el) => {
        return acc + el
    })
    
    let screenSum =document.getElementById('sum-para')
    screenSum.textContent = `Sum= ${diceSum}`
    if( userRoll ===0){
//creating dice history list item
// let historyDice = document.getElementById
//add eventlistener on the p element in history so that the dicehistory is appended there and only after click
        //probably need to use target to get the dice history to appear after second click

let diceHistory = document.createElement('li')

diceHistory.innerHTML = `${viewList} Sum= ${diceSum}`

// let dicePara = document.querySelector('#roll-history')

form.appendChild(diceHistory)
// makeDieHistory() SMART goal change*
    }
}

function makeDieHistory() {
    let newHistory = document.querySelector('#roll-history')
    roll-history.addEventListener('click', (event) =>{
        let diceHistory = document.createElement('li')

diceHistory.innerHTML = `${viewList} Sum= ${diceSum}`

// let dicePara = document.querySelector('#roll-history')

form.appendChild(diceHistory)
    })
}

function rollDice(){
    let roll = Math.floor((Math.random() * 6 ) + 1)
    return roll
}

})

})
