// *Variables*
// Create a variable and console log the value

    const variable = "hello"
    console.log(variable)

// Create a variable, add 10 to it, and alert the value
    let value = 0
    value = value+10
    alert(value);

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function sub4nums(n1, n2, n3, n4){
    const difference = n1-n2-n3-n4
    alert(difference);
}
sub4nums(10,9,8,7)


// Create a function that divides one number by another and returns the remainder
function div2nums(n5,n6){
    const remainder = n5%n6
    return(remainder)
}
console.log(div2nums(10,3));


// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function add2nums(n7, n8){
    const sum = n7+n8
    if (sum > 50){
        alert("Jumanji");
    }
    else
        console.log(sum)
}
add2nums(20,40);
add2nums(12,10);

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function multi3nums(n9, n10, n11) {
    const product = n9*n10*n11
    if ((product%3) == 0) {
        alert("ZEBRA");
    }
    else
        console.log(product)
        console.log(product%3)
}
multi3nums(7,2,2);