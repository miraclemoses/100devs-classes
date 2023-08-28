document.querySelector('#button').addEventListener('click', check)
document.querySelector('#button').addEventListener('click', checkagain)
document.querySelector('#btn').addEventListener('click', answer)
const next = document.querySelector("#button")
// const click = document.getElementById("#btn")
let id = 1

if (!localStorage.getItem('number')) {
    localStorage.setItem('number', id)
}
fetch('https://finalspaceapi.com/api/v0/character/'+id)
.then(res => res.json())
.then(data => {
    console.log(data)
    if (id <= 46 ) {
        document.querySelector('img').src = data.img_url
        document.querySelector('h2').innerHTML = data.name
        document.querySelector('h3').innerHTML = data.status
        document.querySelector('h4').innerHTML = data.species
        document.querySelector('h5').innerHTML = data.origin
        document.querySelector('h6').innerHTML = data.gender
        document.querySelector('.hair').innerHTML = data.hair
        document.querySelector('.able').innerHTML = data.abilities
        document.querySelector('p').innerHTML = data.alias
    }
})
// alert('click the next button to see characters')
    
function check() {
    fetch('https://finalspaceapi.com/api/v0/character/'+id)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if (id <= 46 ) {
                document.querySelector('img').src = data.img_url
                document.querySelector('h2').innerHTML = data.name
                document.querySelector('h3').innerHTML = data.status
                document.querySelector('h4').innerHTML = data.species
                document.querySelector('h5').innerHTML = data.origin
                document.querySelector('h6').innerHTML = data.gender
                document.querySelector('.hair').innerHTML = data.hair
                document.querySelector('.able').innerHTML = data.abilities
                document.querySelector('p').innerHTML = data.alias
                
                localStorage.setItem('number', id++)
            }else if (id == 47) {
            localStorage.removeItem('number')
            
            checkagain()
        }
        
            
        })
        
        .catch(err => {
            console.log(`error ${err}`)
        })
    
};
let i = 0;
if (!localStorage.getItem('id')) {
    localStorage.setItem('id', i) 
}



function checkagain() {
    document.querySelector('h2').innerHTML = ""
    document.querySelector('img').src = ""
    
    if (!localStorage.getItem('number')) {
        fetch('https://finalspaceapi.com/api/v0/quote/?sort='+i)
        .then(res => res.json())
        .then(datas => {
            console.log(datas)
         if (i < 51) {
            document.querySelector('h1').innerHTML = `who said this: ${datas[i].quote}`
            document.querySelector('h3').innerHTML = ""
            document.querySelector('h4').innerHTML = ""
            document.querySelector('h5').innerHTML = ""
            document.querySelector('h6').innerHTML = ""
            document.querySelector('.hair').innerHTM = ""
            document.querySelector('.able').innerHTML = ""
            document.querySelector('p').innerHTML = ""
            localStorage.setItem('id', i++)
            next.innerHTML = 'Question'
            
            
        } else if (i == 51) {
            checkagain()
            i = 0
            localStorage.setItem('id', i)
           

        }
    })
      
    
}

}


let score = 0
function answer() {
    document.querySelector('h2').innerHTML = ""
    document.querySelector('img').src = ""
let quoteReply = document.querySelector('input').value.toUpperCase()
    
    if (!localStorage.getItem('number')) {
        fetch('https://finalspaceapi.com/api/v0/quote/?sort='+i)
        .then(res => res.json())
        .then(datas => {
            console.log(datas)
        if (i < 51) {
            document.querySelector('h2').innerHTML = datas[i].by
            document.querySelector('img').src = datas[i].image
            document.querySelector('h3').innerHTML = ""
            document.querySelector('h4').innerHTML = ""
            document.querySelector('h5').innerHTML = ""
            document.querySelector('h6').innerHTML = ""
            document.querySelector('.hair').innerHTM = ""
            document.querySelector('.able').innerHTML = ""
            document.querySelector('p').innerHTML = ""
            localStorage.setItem('id', i++)
            let com = datas[i].by
            let real = com.toUpperCase()
            console.log(real)
            if (quoteReply === real) {
                score += 1
            } else {
                score += 0
            }
            
            console.log(quoteReply)
            
        } else if (i >= 51) {
            alert(`you got ${score} out of 51`)
            next.innerHTML =     'Play again'
            
            
            
            
        }
    })
    
    
    }
}

