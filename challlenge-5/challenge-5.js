function getMaxGifts(giftsCities, maxGifts, maxCities) {

    let cityCombinations = [];
    const firstCity = giftsCities.shift()
    cityCombinations.push([], [firstCity]);
    
    giftsCities.map(x => {
      const newList = cityCombinations.map(combination => {
        let _combination = [...combination]
        if(combination.length < maxCities) {
          _combination.push(x)
        }
        return _combination
      })
      cityCombinations = cityCombinations.concat(newList)
    })
  
    cityCombinations.shift()
  
    const cityCombinationsMax = cityCombinations.map(x => {
        let sum = x.reduce((total, num) => total + num)
        return sum > maxGifts ? 0 : sum
      })
  
    return Math.max(...cityCombinationsMax)  
}