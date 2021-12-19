function getProbability() {
    const number = Math.round(Math.random())
    
    if (number === 0) {
        return false
    }

    if (number === 1) {
        return true
    }
}

export default getProbability