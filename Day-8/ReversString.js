function reverseWords(s) {
  const words = s.trim().split(/\s+/);

  return words.reverse().join(" ");
}

const input = "the sky is blue";
console.log(reverseWords(input)); 
