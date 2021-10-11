// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest


// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// Reminder: The test will call your function

// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

// a) Create a test with expect statements using the variables provided.

// we want to replace all a,e,i, and o's with their respective numbers to form l33t code.
// we need to turn the string into an array  so we can get a for loop to itterate through it. .split
// we set up a for loop to run thorugh the array and find and replace everything that needs too be replaced.
// we try to use .replace to replace what we need with numbers but first we need to set up a regex
// we then return the array back into a string using .join

var secretCodeWord1 = "Lackadaisical"
// Expected output: "L4ck4d41s1c4l"
var secretCodeWord2 = "Gobbledygook"
// Expected output: "G0bbl3dyg00k"
var secretCodeWord3 = "Eccentric"
// Expected output: "3cc3ntr1c"

describe('replaces string with l33k code', (string) => {
    test('replaces vowels with numbers', () => {
        expect(leetCode(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
        expect(leetCode(secretCodeWord2)).toEqual("G0bbl3dyg00k")
        expect(leetCode(secretCodeWord3)).toEqual("3cc3ntr1c")
    })
})
// sick. i failed.
// b) Create the function that makes the test pass.

// const leetCode = (string) => {
    const regex = /"a","4" | "e","3" | "i","1" | "o","0"/g
//     let newArr = string.split("")
//     // console.log("hey this is the new array",newArr)
//     //  hey this is the new array [
//     //   'L', 'a', 'c', 'k',
//     //   'a', 'd', 'a', 'i',
//     //   's', 'i', 'c', 'a',
//     //   'l'
//     // ]
//     // this is what the array is logging as in jest
//     // for loop starts at the begennning of the array
//     for(let i=0; i<newArr.length; i++){
//         if (newArr[i].includes("a" || "e" || "i" || "o"))
//         var newArr2 = newArr[i].replace(regex)
//     }
//     return newArr2
// }
// console.log(secretCodeWord1.split(""))
// i wasnt able to get the code completed. i always ran into teh error if my l33tcode not changing. i believe my regex variable was set up wrong even though i looked it up and watched multiple videos on how to set it up.
// i tried to leave the string as a string instead of going for the array method. 
// i got the code to work by checking if the string contains certain letters, and if they do they would replace said letters with 
const leetCode = (string) => {
    if (string.includes("a") || ("e") || ("i") || ("o")){
    var newstring = string.replace(/[aA]/g, '4').replace(/[eE]/g, '3').replace(/[iI]/g, '1').replace(/[oO]/g, '0')
}
return newstring
}
// --------------------2) Create a function that takes in an array of words and a single letter and returns all the words that contain that particular letter.

// a) Create a test with expects statement using the variable provided.

var arrayOfWords1 = ["Apple", "Banana", "Plum", "Orange", "Kiwi"]
var letterA = "a"
// Expected output: ["Apple", "Banana", "Orange"]
var arrayOfWords2 = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach"]
var letterE = "e"
// Expected output: ["Cherry", "Blueberry", "Peach"]

describe('letter selector', (array) => {
    test('takes the variable and and reuturns all the words in the array that contains the letter', () =>{
        expect(selecter(arrayOfWords1,letterA)).toEqual(["Apple", "Banana", "Orange"])
        expect(selecter(arrayOfWords2,letterE)).toEqual(["Cherry", "Blueberry", "Peach"])
    })
})
// sick. i failed.
// b) Create the function that makes the test pass.
// we set up and function that takes in an array and a string. array and variable letter.
// we nest a function within the function to filter throught the array to find if the variable string.
// we then return the array of the words taht contain the value of the string.
const selecter = (array, string) => {
    const answer = array.filter(value => {
        return value.includes(string) ||
        value.includes(string.toUpperCase())
    })
    return answer
}

// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.

var hand1 = [5, 5, 5, 3, 3]
// Expected output: true
var hand2 = [5, 5, 3, 3, 4]
// Expected output: false
var hand3 = [5, 5, 5, 5, 4]
// Expected output: false

describe('checks if the hand has a full house or not', (array) =>{
    test('checks the hands', () => {
        expect(handChecker(hand1)).toEqual(true)
        expect(handChecker(hand2)).toEqual(false)
        expect(handChecker(hand3)).toEqual(false)
    })
})
// Sick. i failed
// b) Create the function that makes the test pass.
//we want check if their are 3 and 2 matching set of cards in a hand. 
// we want to do this by setting up a for lop to run through the array and check if there is a full house
// i got stuck on this one and tried diffrent things but i couldnt come to a solution. in my head i know i want to have the for loop run through and itterate throguh and check but i dont know the logic for it. 
// i asked a few classmates and i got a few results includeing .includes, .map, .value, but i dont know how i could use those in this instance.
const handChecker = (array) => {
    let newArray = []
    for(let i=0; i<array.length; i++){
        if (array[i] === array[i], array[i], array[i]){
            
        }
    }
}

