//Create a function that takes in a number. The function should return an array that contains every number from 1 to that number as seperate elements
const lists = [Number(prompt('type any integer'))]
const num = [];
function pop() {
    let i = 0;
    while (i <= lists) {
    num.push(i)
    i++;
    }
};
pop();
console.log(num)