function doubleChar(str) {
    let result = '';
    for (i = 0; i < str.length; i++) {
        result += str[i] + str[i];
    }
    return result;
}
