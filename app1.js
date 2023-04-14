//upcount//

function upcount(a, len, n) {
    let i, sum = 0,
        count = 0,
        flag = 0;
    for (i = 0; i < len; i++) {
        sum += a[i];
        if (sum > n && flag == 0) {
            ++count;
            flag = 1;
        }
        if (sum <= n) flag = 0;
    }
    return count;
}

console.log("The upcount is " + upcount([2, 3, 1, -6, 8, -3, -1, 2], 8, 5));
console.log("The upcount is " + upcount([6, 3, 1], 3, 6));