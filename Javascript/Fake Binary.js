function fakeBin(x) {
    result = "";
    console.log(result)
    for (let i = 0; i < x.length; i++) {
        x[i] < 5 ? result += "0" : result += "1";
    }
    return result;
}