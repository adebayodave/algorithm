//sum of perfect number

function durotola(start, end) {
    if (end <= start) return 0;
    let i, j, temp = 0,
        ind = 0,
        sum = 0;

    for (i = 4;; i++) {
        temp = 0;
        for (j = 1; j < i; j++) {
            if (i % j == 0) temp += j;
        }
        if (temp == i) {
            console.log("sum of perfect number " + i);
            ++ind;
            if (ind == start) sum += i;
            else if (ind == end) {
                sum += i;
                break;
            }
        }
    }

    return sum;
}

console.log("sum of perfect number (2, 3) " + durotola(2, 4));