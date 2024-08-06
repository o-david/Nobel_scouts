import sum, {sumUp as ben, square } from "./test.js";
console.log(sum(5));
console.log(ben());
// console.log(sumUp());


let student = { address: { city: 'New York', country: 'USA' } }

let address = student.address
// let {address} = student

let arr = [5,6,7,8]
let arr2 = [6,7,8]

arr = [...arr, ...arr2, 7,8,]
console.log(arr);

let details ={
    name:"Samuel Jackson",
    age:25,
    grade:95
}


details ={...details, country:"America"}

console.log(details);