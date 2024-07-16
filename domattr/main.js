let el = document.querySelector('h1')
let btn = document.querySelector('button')
let bulb = document.querySelector('img')
let pressed = document.getElementById("pressed")
// let odiv = document.querySelector('div')
// odiv.innerText = odiv.innerText + "<p> cool stuff</p>"
// console.log(odiv.innerHTML)
btn.addEventListener("click", function() {
    
})

bulb.addEventListener("click", switchIt)

function switchIt(){
    console.log()
    if(bulb.getAttribute("src") === "./Assets/off.png"){
        bulb.setAttribute("src", "./Assets/on.png")
    } else {
        bulb.setAttribute("src", "./Assets/off.png")
    }
}

function cool(params) {
    el.style.color= "pink"
    el.style.fontSize= "100px"    
}

document.addEventListener("keydown", logkey)

function logkey(e) {
    pressed.textContent += " " + e.code
}

