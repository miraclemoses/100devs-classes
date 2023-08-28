// *Variables*
// Declare a variable, reassign it to your favorite food, and alert the value
let favorite = 'beans'
favorite = 'stew'
alert(favorite)
//Declare a variable, assign it a string, alert the second character in the string (Use your google-fu and the MDN)
let str = 'miracle'
alert(str[1])
alert(str.charAt(1))

// *Functions*
// Create a function that takes in 3 numbers. Divide the first two numbers and multiply the last. Alert the product. Call the function.
function threenum(n1, n2, n3) {
    divide = n1/n2
    product = divide * n3
    alert(product)
}

threenum(10, 20, 5)

// Create a func9tion that takes in 1 number. Console log the cube root of the number. Call the function.
function onenum(n) {
    c = Math.cbrt(n)
    console.log(c.toFixed(4))
}
onenum(9)

// *Conditionals*
//Create a function that takes in a month. If it is a summer month alert "YAY". If another other month, alert "Booo"
const m = prompt('type any month')
function checkmonth() {
        if (m === 'june' || m === 'july' || m === 'august' ) {
            alert('YAY')
        } else {
            alert('Booo')
        }
    }
checkmonth()

//*Loops*
//Create a function that takes in a number. Console log every number from 1 to that number while skipping multiples of 5.
const num = Number(prompt("type your number"))
function takeskip() {
    for (let i = 1; i <= num; i++) {
        if (i % 5 !== 0) {
            console.log(i)
        } 

}
}

takeskip()