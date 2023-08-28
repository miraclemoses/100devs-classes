document.querySelector('button').addEventListener('click', check)
let index = 0
const key = '45845af8523b43d09bd2a3bed23374c3'
const lang = 'en'
fetch(`https://newsapi.org/v2/everything?qInTitle=us election&sortBy=publishedAt&apiKey=${key}&language=${lang}`)
        .then(res => res.json())
        .then(data => {
            console.log(data.articles)
            
            document.querySelector('#text').value = 'us election'
            
            
            document.querySelector('h2').innerHTML = data.articles[0].title
            document.querySelector('span').innerHTML = data.articles[0].author
            document.querySelector('p').innerHTML = data.articles[0].description
            document.querySelector('img').src = data.articles[0].urlToImage
            document.querySelector('h4').innerHTML = data.articles[0].publishedAt
            document.querySelector('a').href = data.articles[0].url
        })

function check(slidenumber) {
    let quote = document.querySelector('#text').value.toLowerCase()
    let date = document.querySelector('#date').value
    fetch(`https://newsapi.org/v2/everything?qInTitle=${quote}&from=${date}&sortBy=publishedAt&apiKey=${key}&language=${lang}`)
        .then(res => res.json())
        .then(data => {
            console.log(data.articles)
            
                data.articles.forEach((item, i) => {
                    console.log(item)
                    if (i === slidenumber) {
                        document.querySelector('h2').innerHTML = item.title
                        document.querySelector('span').innerHTML = item.author
                        document.querySelector('p').innerHTML = item.description
                        document.querySelector('img').src = item.urlToImage
                        document.querySelector('h4').innerHTML = item.publishedAt
                        document.querySelector('a').href = item.url
                    }
                })
                index++;
                if (index >= data.articles.length) {
                    index = 0
                }
            
            
        })
        .catch(err => {
            console.log(`error ${err}`)
        })
    
};

setInterval(() => check(index), 15000)