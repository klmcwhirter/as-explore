
export function fibonacciJs(num) {
    // set initial values
    var fibn = 0;
    var fibn1 = 1;
    var fibn2 = 0;
    var n = num;

    // loop ... while n > 0
    while (n > 0) {
        fibn2 = fibn1;
        fibn1 = fibn;
        fibn = fibn1 + fibn2;
        n--;
    }

    return fibn;
}

export function fibRecurseJs(num) {
    if (num <= 1) return num;

    return fibRecurseJs(num - 1) + fibRecurseJs(num - 2);
}
