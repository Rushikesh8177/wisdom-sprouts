function Anagrams(strs) {
    let map = new Map();

    for (let str of strs) {
        let key = str.split('').sort().join('');
        
        if (!map.has(key)) {
            map.set(key, []);
        }
        
        map.get(key).push(str);
    }

    return Array.from(map.values());
}

let strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagrams(strs));
