
let arr=[1,2,3,4,5];

console.log(arr);
for(let i = 0; i < arr.length; i++){
    for(let j = 0; j<arr.length; j++){
        if(arr[i]>arr[j]){
            let a = arr[i];
            arr[i]=arr[j];
            arr[j] = a;
        }
    }
}

console.log(arr);