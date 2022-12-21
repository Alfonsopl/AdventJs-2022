function createCube(size) {
    let cube = ''
    const height = size * 2
    for (let i = 0; i < height; i++) {
        if (i < size) {
            cube += (' ').repeat(size - i - 1) 
            + '/\\'.repeat(i + 1) 
            + ('_\\').repeat(size) 
            + '\n'
        } else {
            cube += (' ').repeat(i - size) 
            + '\\/'.repeat(height - i) 
            + ('_/').repeat(size) 
            + (height === i + 1 ? '' : '\n')
        }
    }
    return cube
}