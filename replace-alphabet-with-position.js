function alphabetPosition(text) {
  //convert text to all lowercase
  text = text.toLowerCase();
  const alphabet = "abcdefghijklmnopqrstuvwxyz"
  let alphPos = ""
  //iterate over text
  for (let i = 0; i < text.length; i++) {
    //iterate over alphabet
    for (let j = 0; j < alphabet.length; j++) {
      //if text index(i) equals alphabet index(j) then add index number 
      //(plus one because index starts at 0) to holder string (alphPos)
      if (text[i] === alphabet[j]) {
        alphPos += (j + 1) + " ";
      }
    }
  }
  //return trim whitespace at end and return alphPos
  return alphPos.trim()
}