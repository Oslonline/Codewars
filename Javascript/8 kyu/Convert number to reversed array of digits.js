function digitize(n) {
    result = String(n).split("").reverse().map(Number);
    return result;
}