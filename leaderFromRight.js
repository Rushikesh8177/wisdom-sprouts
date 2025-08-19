 function leader(arr){
    let array =[];
    let max = arr[arr.length -1];

    array.push(max);
    for(let i=arr.length -2; i>=0; i--){
        if(arr[i] > max){
            max = arr[i];
            array.push(max);
        }
    }

    return array.reverse();
 }
 let arr = [16, 17, 4, 3, 5, 2];
console.log("Leaders:",leader(arr));