function sumIntervals(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
    let totalLength = 0;
    let currentStart = intervals[0][0];
    let currentEnd = intervals[0][1];
    for (let i = 1; i < intervals.length; i++) {
        const nextStart = intervals[i][0];
        const nextEnd = intervals[i][1];
        if (nextStart <= currentEnd) {
            currentEnd = Math.max(currentEnd, nextEnd);
        } else {
            totalLength += currentEnd - currentStart;
            currentStart = nextStart;
            currentEnd = nextEnd;
        }
    }
    totalLength += currentEnd - currentStart;

    return totalLength;
}