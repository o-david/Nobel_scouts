// // let count = 22
// // // while(count<=20){
// // //     console.log(count + '. I am sorry ')
// // //     count++
// // // }


// // // do {
// // //     console.log(count + '. I am sorry ')
// // //     count++
    
// // // } while (count<=20);

// // // let ans= false

// // //  do{   
// // //     alert("i am a cool message")
// // //     ans = confirm("do you want to see this again?")
// // // }while(ans==true)

// // // alert("i have left the loop")
// // // console.log()






// // // for (let i =1; i<=20; i++) {    
// // //     console.log(`${i}. I am sorry`)
// // // }


// // let students=["barn", "bash", "blaise", "beth", "bolt"]
// // // console.log(students[2]);

// // for (const KOLA in students) {
// //     if (KOLA==2) {
// //         break;
// //     }
// //     console.log(students[KOLA]);
// // }
// // // for (const KOLA of students) {
// // //     console.log(KOLA);
// // // }


// function addUp(num) {
// 	let total =0
// 	while(num>0){
// 		total+=num
// 		num--
// 	}
// 	return total
// }

// console.log(addUp(5))



function getPrice(age) {
    return 200*age
}

getPrice(30)


let grades = [["sam", "john", "jones"],83,["kelvin", "hart"],85,["durant", "kevin"],93,72]
console.log(`${grades[4][1]} ${grades[2][1]} plays better than ${grades[2][0]} ${grades[4][0]}`)
// kevin hart plays better than kelvin durant 
grades.pop()
let removed = grades.pop()
grades.push("i am the new guy oin town")
console.log(grades);
//jones is not sam but kevin john is 85 years old

console.log(`i was ${removed}`);

["john", 20, 85 ]
let student = {
    name: "john",
    age: 20,
    grade: 85
}
student.namestudent[0]