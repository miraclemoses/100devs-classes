//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/
document.querySelector('button').addEventListener('click', checkDate)

function checkDate() {
    let date = document.querySelector('input').value
    console.log(date)
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

