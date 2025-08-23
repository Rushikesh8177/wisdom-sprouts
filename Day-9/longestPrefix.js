function logestPrefix(strs) {
    if (!strs || strs.length === 0) return "";

    let prefix = strs[0];

    for (let i = 1; i < strs.length; i++) {
        while (strs[i].indexOf(prefix) !== 0) {
            prefix = prefix.slice(0, -1);
            if (prefix === "") return "";
        }
    }

    return prefix;
}

// Example usage:
const strs = ["flower", "flow", "flight"];
console.log(logestPrefix(strs)); 
