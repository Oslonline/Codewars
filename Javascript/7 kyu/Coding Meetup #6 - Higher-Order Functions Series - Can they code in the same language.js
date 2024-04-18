function isSameLanguage(list) {
    let lang = list[0].language;
    for (let i = 1; i < list.length; i++) {
        if (list[i].language !== lang) {
            return false;
        }
    }
    return true;
}