// console.time("timerGuy")
// function insertionSort(arr) {
//     for (let i = 1; i < arr.length; i++) {
//       let currentValue = arr[i]
//       let j
//       for (j = i - 1; j >= 0 && arr[j] > currentValue; j--) {
//         arr[j + 1] = arr[j]
//       }
//       arr[j + 1] = currentValue
//     }
//     console.log(arr);
//     return arr
//   }
// insertionSort([23, 1, 10, 5, 2, 231, 34, 43, 123,21341,345,2,21,4,6,456,23,342,12,423,12,4])

// console.timeEnd("timerGuy")

// let sce = 35

// switch (sce) {
//     default:
//         console.log("default")
//         break;
//     case 1:
//         console.log("i am 100")
//         break;
//     case 100:
//         console.log("i am 100")
//         break;
//     case 35:
//         console.log("i am 35")
//     case 42:
//         console.log("i am 42")
// }


// function factorial(n) {
//     if (n === 0 || n === 1) {
//         return 1;
//     } else {
//         return n * factorial(n + 1);
//     }
// }



function pow(x, n) {
    let total = 1
    for (let i = 0; i < n; i++) {
        total *= x;
    }
    return total
}

let stuff=
{
   0: {
    name:"",
    email:""
    },
   0: {
    name:3434,
    email:""
    },

}

console.log(pow(10,5));

// 5* fact4
// 4* fact3
// 3* fact2
// 2* fact1
// 1


// console.log(factorial(20)); // Output: 120 (5! = 5 * 4 * 3 * 2 * 1)