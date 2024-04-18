function filter_list(l) {
    let a = []
    for (i = 0; i < l.length; i++) {
        if (typeof l[i] === 'number') { a.push(l[i]) }
    }
    return a
}