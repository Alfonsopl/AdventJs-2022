function distributeGifts(packOfGifts, reindeers) {
    let giftsWeigth = 0;
    packOfGifts.forEach( g => giftsWeigth += g.length)
    let reindeersCapability = 0;
    reindeers.forEach(r => {reindeersCapability += 2 * r.length})
    let gifsCanBeCarried = 0;
    while (reindeersCapability > 0){
        reindeersCapability -= giftsWeigth;
        if (reindeersCapability >= 0) {
            gifsCanBeCarried++
        }
    }
  return gifsCanBeCarried
}