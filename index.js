/* 97-122 */
let letters=[]
for(let i=97;i<=122;i++){
  if(String.fromCharCode(i).match(/[a-z]/i)){
    let char = String.fromCharCode(i)
    let index = i
    console.log(char,':',index)
    let letter= new Letter(char,index)
    letters.push(letter)

  }
}
function Letter(char,index){
  this.char = char
  this.index=index 
}

function shifted(letter,shift){
    newIndex=getIndex(letter)+shift
    if(newIndex<97){
      let gap = 97-newIndex
      newIndex = 122-gap
    }
    return getLetter(newIndex)
  }
  
  function getLetter(ind){
    for(let i=0;i<122-97;i++){
      if(ind==letters[i].index) return letters[i].char
    }
  }

  function getIndex(lett){
    for(let i=0;i<122-97;i++){
      if(lett==letters[i].char){
        console.log("XX:",letters[i].index)
        return letters[i].index
      } 
    }
  }





const caesar = function(word,shift) {
    let strAfter=''
      for(let i=0;i<word.length;i++){
          if(word[i].match(/[a-z]/i)){
            strAfter+=shifted(word[i],shift)
          }
          
      }
    return strAfter
  };


  console.log(caesar('Mjqqt, Btwqi!', -5))

