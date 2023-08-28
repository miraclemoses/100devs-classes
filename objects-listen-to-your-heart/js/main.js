//Create a stopwatch object that has four properties and three methods
let stopwatch = {
    brand: 'Nike',
    color: 'yellow',
    shape: 'round',
    size: 'big'
}

stopwatch.start = function() {
    console.log('startiiiinnnngggg')
}

stopwatch.stop = function() {
    console.log('stop')
}

stopwatch.saybrand = function() {
    console.log(stopwatch.brand)
}