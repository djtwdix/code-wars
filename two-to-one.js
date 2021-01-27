function longest(s1, s2) {
  let holdArray = [];
  //iterate over s1 and push non repeating characters to holdArray
  for (let i = 0; i < s1.length; i++) {
    if (holdArray.includes(s1[i]) === false) {
      holdArray.push(s1[i]);
    }
  }
  //iterate over s2 and push non repeating characters to holdArray
  for (let i = 0; i < s2.length; i++) {
    if (holdArray.includes(s2[i]) === false) {
      holdArray.push(s2[i]);
    }
  }
  //sort holdArray alphabetically and then join it and assign to longest variable
  let longest = holdArray.sort(function(a, b) {
    return a.charCodeAt() - b.charCodeAt();
  }).join("");
  //return longest
  return longest;
}
