// function areaOfCircle(radius) {
//     return 3.142 * radius *radius
// }
// function areaOfRectangle(l, b) {
//     let area = l*b
//     return area
// }
// areaOfCircle(5)


// console.log(areaOfRectangle(221,2));

function ticketPrice(age) {
    let price 
    if(age<18){
        price ="$5"
    }
    else if(age<30){
        price ="$90"
    }
    else {
        price = "$20"
    }
    return price
}

let letter = "o"
switch (code) {
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
        console.log("it is a vowel")        
        break;
    default:
        console.log("Unknown code")
        break;
}