// primecount //

function tobi(start, end) {
    let count = 0,
        i, j, flag;
    if (start < 2) start = 2;

    for (i = start; i <= end; i++) {
        if (i == 2) {
            ++count;
            continue;
        }
        flag = 1;
        for (j = 2; j < i; j++) {
            if (i % j == 0) {
                flag = 0;
                break;
            }
        }
        if (flag == 1) ++count;
    }

    return count;
}

console.log("Prime numbers count between 15 & 29 is: " + tobi(15, 29));
console.log("Prime numbers count between 11 & 30 is: " + tobi(11, 30));
console.log("Prime numbers count between 20 & 22 is: " + tobi(20, 22));
console.log("Prime numbers count between 1 & 1 is: " + tobi(1, 1));
console.log("Prime numbers count between 5 & 5 is: " + tobi(5, 5));
console.log("Prime numbers count between 6 & 2 is: " + tobi(6, 2));
console.log("Prime numbers count between -10 & 6 is: " + tobi(-10, 6));