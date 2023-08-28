document.querySelector('button').addEventListener('click', check)

fetch('https://restcountries.com/v3.1/name/Afghanistan')
        .then(res => res.json())
        .then(data => {
            console.log(data[0])
            document.querySelector('h2').innerText = data[0].name.official
            document.querySelector('h3').innerText = data[0].capital
            document.querySelector('img').src = data[0].flags.png
            document.querySelector('span').innerText = data[0].flags.alt
            document.querySelector('h1').innerText = data[0].continents
            document.querySelector('p').innerText = data[0].subregion
            document.querySelector('h4').innerText = data[0].population
            document.querySelector('h5').innerText = data[0].timezones
        })
function check() {
    let country = document.querySelector('select').value
    console.log(country)
    fetch('https://restcountries.com/v3.1/name/'+country)
        .then(res => res.json())
        .then(data => {
            console.log(data[0])
            document.querySelector('h2').innerText = data[0].name.official
            document.querySelector('h3').innerText = data[0].capital
            document.querySelector('img').src = data[0].flags.png
            document.querySelector('span').innerText = data[0].flags.alt
            document.querySelector('h1').innerText = data[0].continents
            document.querySelector('p').innerText = data[0].subregion
            document.querySelector('h4').innerText = data[0].population
            document.querySelector('h5').innerText = data[0].timezones
            if (data[0].currencies.independent = true) {
                document.querySelector('h6').innerText = `${data[0].name.official} is an independent country `
            } else {
                document.querySelector('h6').innerText = `${data[0].name.official} is not an independent country `
            }
            if (data[0].unMember = true) {
                document.querySelector('h6').innerText += ` and also a member of United Nations.`
            } else {
                document.querySelector('h6').innerText += ` and also not a member of United Nations.`
            }
        })
        .catch(err => {
            console.log(`error ${err}`)
        })
    
};