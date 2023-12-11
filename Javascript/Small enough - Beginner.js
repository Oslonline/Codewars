function smallEnough(a, limit) {
    return a.every(function (b) {
        return b <= limit;
    })
}