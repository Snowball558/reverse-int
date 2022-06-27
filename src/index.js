module.exports = function reverse(n) {
    let listDigitsArray = [...(String(n))]
    if (listDigitsArray[0] === '-') {
        listDigitsArray.shift(0)
    }
    const reverseNumber = Number(listDigitsArray.reverse().join(''))
    return reverseNumber
}
