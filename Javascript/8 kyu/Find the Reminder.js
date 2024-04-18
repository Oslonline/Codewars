function remainder(n, m) {
    return Math.min(n, m) === 0 ? NaN : Math.max(n, m) % Math.min(n, m);
}