function permuteUnique(s) {
  const results = [];
  const chars = s.split('').sort(); 
  const used = new Array(chars.length).fill(false);

  function backtrack(path) {
    if (path.length === chars.length) {
      results.push(path.join(''));
      return;
    }

    for (let i = 0; i < chars.length; i++) {
      if (used[i]) continue;

      if (i > 0 && chars[i] === chars[i - 1] && !used[i - 1]) continue;

      used[i] = true;
      path.push(chars[i]);
      backtrack(path);
      path.pop();
      used[i] = false;
    }
  }

  backtrack([]);
  return results;
}

console.log(permuteUnique("abc")); 

console.log(permuteUnique("aab")); 
