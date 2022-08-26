/* 97-122 */
/* 97-122 */
let letters = []
for (let i = 97; i <= 122; i++) {
  if (String.fromCharCode(i).match(/[a-z]/i)) {
    let char = String.fromCharCode(i)
    let index = i
    
    let letter = new Letter(char, index)
    letters.push(letter)

  }
}
function Letter(char, index) {
  this.char = char
  this.index = index
}

function shifted(letter, shift) {
  let isCapitalized
  if(letter==letter.toUpperCase()) isCapitalized=true
  if(letter==letter.toLowerCase()) isCapitalized=false
  newIndex = getIndex(letter.toLowerCase()) + shift
  if (newIndex < 97) {
    let gap = 97 - newIndex-1
    newIndex = 122 - gap
  }
  if(newIndex>122){
    let gap = newIndex - 122-1
    newIndex = 97 + gap
  }
  if(isCapitalized) return getLetter(newIndex).toUpperCase()
  if(!isCapitalized) return getLetter(newIndex)
}

function getLetter(ind) {
  let result
  for (let i = 0; i <=122 - 97; i++) {
    if (ind == letters[i].index) result = letters[i].char
  }
  return result
}

function getIndex(lett) {
  for (let i = 0; i <=122 - 97; i++) {
    if (lett == letters[i].char) {
      
      return letters[i].index
    }
  }
}





const caesar = function(word, shift) {
  let strAfter = ''
  for (let i = 0; i < word.length; i++) {
    if (word[i].match(/[a-z]/i)) {
      strAfter += shifted(word[i], shift)
    }
    else{
      strAfter +=word[i]
    }

  }
  return strAfter
};






// Do not edit below this line


console.log(caesar('Siemka',75))