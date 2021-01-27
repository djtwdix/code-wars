var countBits = function(n) {
  //conver number to binary
  n = n.toString(2);
  counter = 0
  //iterate over binary
  for (let i = 0; i < n.length; i++) {
    //if binary index equals "1" add 1 to counter
    if (n[i] === "1") {
      counter++
    }
  }
  return counter
};
