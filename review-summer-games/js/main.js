//Create a function that takes in an array of numbers. Multiply each number together and alert the product. 

function multinum(arr) {
    product = 1
    arr.forEach(element => product *= element)
    alert(product)
}

multinum([1,2,3])