function getAverage(marks) {
    sum = 0;
    for (i = 0; i < marks.length; i++) {
        sum = sum + marks[i];
    }
    console.log(sum)
    return Math.floor(sum / marks.length);
}