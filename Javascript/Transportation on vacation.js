function rentalCarCost(d) {
    let price = d * 40;
    if (d >= 3 && d < 7) {
        return price - 20;
    } else if (d >= 7) {
        return price - 50;
    } else {
        return price;
    }
}