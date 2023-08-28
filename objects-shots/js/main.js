//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
document.querySelector('button').addEventListener('click', checkCocktail)

function checkCocktail() {
    let cocktail = document.querySelector('input').value
    console.log(cocktail)
    fetch("https://api.nasa.gov")
        .then(res => res.json())
        .then(data => {
            console.log(data)
            document.querySelector('img').src = data.image
            document.querySelector('h2').src = data.name
            document.querySelector('h3').src = data.description
        })
        .catch(err => {
            console.log(`error ${err}`)
        })

}