function getGiftsToRefill(a1, a2, a3) {
    const stores = [...new Set(a1), ...new Set(a2), ...new Set(a3)]
    const onlyOneGift = [];
    
    [...stores].forEach( x => {
      let appears = 0
      stores.forEach( a => {
        a === x && appears++
      })
      appears === 1 && onlyOneGift.push(x)
    })
  return onlyOneGift
}