var isSquare = function(n) {
  //if square root of number is even divisible by 1 return true, if not return false
  if (Math.sqrt(n) % 1 === 0) {
    return true
  } else {
    return false;
  }
}
