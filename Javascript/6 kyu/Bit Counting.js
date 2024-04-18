var countBits = function (n) {
    let bits = n.toString(2)
    let result = 0
    for (let i = 0; i < bits.length; i++) {
        if (bits[i] === "1") {
            result++;
        }
    }
    return result
};