//Create a dog object that has four properties and three methods
const dog = []

dog.name = 'scobby'
dog.heght = '13 inche tall'
dog.color = 'black'
dog.weight = '100 pound'

dog.sayHowHeavy = function() {
    console.log(`my ${dog.name} is ${dog.weight}`)
}
dog.saycolor = function() {
    console.log(`my ${dog.name} is ${dog.color}`)
}
dog.sayheight = function() {
    console.log(`my ${dog.name} is ${dog.heght}`)
}