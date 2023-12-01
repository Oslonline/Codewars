function sameCase(a, b) {
    if (!a.match(/^[A-Za-z]$/) || !b.match(/^[A-Za-z]$/)) {
        return -1
    } else if ((a.match(/^[A-Z]$/) && b.match(/^[A-Z]$/)) || (a.match(/^[a-z]$/) && b.match(/^[a-z]$/))) {
        return 1
    } else {
        return 0
    }
}