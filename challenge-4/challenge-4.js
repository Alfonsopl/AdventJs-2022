function fitsInOneBox(boxes) {
    const whereDoesFitEach = [];
    boxes.forEach( box => {
        let boxFixInX = 0;
        boxes.forEach( b => {
            if (b.l > box.l && b.w > box.w && b.h > box.h) {
                boxFixInX ++;
            }
        })
        whereDoesFitEach.push(boxFixInX);
    })
    
    let boxIsTaken = [];
  
    for (let i = 0; i < whereDoesFitEach.length; i++) {
      let value = whereDoesFitEach[i];
      if (boxIsTaken.indexOf(value) !== -1) {
        return false
      }
      boxIsTaken.push(value);
    }
    
    return true
  }  