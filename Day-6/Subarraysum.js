function subarray(arr) {
    const result = [];
    const map = new Map();
    let sum = 0;

   
    map.set(0, [-1]);

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];

        if (map.has(sum)) {
            for (let start of map.get(sum)) {
                result.push([start + 1, i]);
            }
            map.get(sum).push(i);
        } else {
            map.set(sum, [i]);
        }
    }

    return result;
}

// Example
let arr = [1, 2, -3, 3, -1, 2];
console.log(subarray(arr));

