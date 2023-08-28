//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.
let arr = [1,2,4,90]
console.log(arr.reduce((acc, c) => acc+c))

//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared
function numbers(arr) {
    let newarr = arr.map((x) => Math.pow(x, 2))
    console.log(newarr)
}
numbers(arr)
//Create a function that takes string
//Print the reverse of that string to the console
function reverseString(str) {
    return str.split('').reverse().join('')
}
console.log(reverseString('miracle'))
//Create a function that takes in a string
//Alert if the string is a palindrome or not
const palindromeCheck = str => alert(str === reverseString(str))

palindromeCheck('rackcar')