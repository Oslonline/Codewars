function countSheeps(sheep) {
    let a = 0;
    for (i = 0; i < sheep.length; i++) {
        if (sheep[i] == true) {
            a++;
        }
    } return a;
}