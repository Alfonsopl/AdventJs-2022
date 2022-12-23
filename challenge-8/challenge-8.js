function checkPart(part) {
    const word = [...part]
    const reversed = [...part].reverse()
    if(word.join('') == reversed.join('')){
        return true
    }
    for (let i = 0; i < word.length; i++){
        let wordToRemove = [...part]
        const index = wordToRemove.indexOf(wordToRemove[i]);
        wordToRemove.splice(index, 1);
        const wordToReverse = [...wordToRemove].reverse()
            if(wordToRemove.join('') == wordToReverse.join('')){
                return true
            }
    }
  return false
}