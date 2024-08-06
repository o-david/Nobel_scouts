let arr = [32,55,12,88,11,9]
for (let j = arr.length -1; j > 0; j--) {
    
    for (let i = 0; i < j; i++) {
        if (arr[i]>arr[i+1]) {
            let a = arr[i]
            let b = arr[i+1]
            arr[i]= b
            arr[i+1]= a       
        }
    }
    
    console.log(arr);
}
