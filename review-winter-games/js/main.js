//Create a function that takes in an array of numbers. Return a new array containing every even number from the original array (do not use map or filter)
let newarr = []
function evenNum(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            newarr.push(arr[i])
            
        }
} console.log(newarr)
}

evenNum([11,22,30])