//Write your pseduo code first! 

// whats the button to click
document.querySelector("#cel").addEventListener("click", convert)
// document.querySelector("#convert-back").addEventListener("click", convertback)

function convert() {
    // store the value
    let temp = document.querySelector("#cel").value 
    // convert to frah
    temp = temp * 9/5 +32
    // display the converted value
    document.querySelector("#display").innerText = temp
    document.querySelector("#far").innerText = temp
    
// convert to farhinheit
    // store the value
    let tem = temp 
    // convert to celsius
    tem = (tem  - 32 ) * 5/9 
    // display the converted value
    document.querySelector("#display-far").innerText = tem
    
}



