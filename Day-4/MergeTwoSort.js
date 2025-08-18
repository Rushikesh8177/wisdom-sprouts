function meargeSort(arr1 , arr2){
  let m = arr1.length;
  let n = arr2.length;


  for(let i=0; i<m ; i++){

    if(arr1[i] > arr2[0]){
      let temp = arr1[i];
      arr1[i] = arr2[0];
      arr2[0] = temp;

      let j= arr2[0];
      let k=1;

      while(k< n && arr2[k] < j){
        arr2[k-1] = arr2[k];
        k++;

      }
      arr2[k-1] =j;

    }
  }

}

let arr1 = [1, 3, 5, 7];
let arr2 = [2, 4, 6, 8];

let  arr3 = [10, 12, 14];
let   arr4 = [1, 3, 5];

meargeSort(arr1, arr2);
meargeSort(arr3, arr4);

console.log("arr1:", arr1);
console.log("arr2:", arr2);

console.log("arr1:", arr3);
console.log("arr2:", arr4)