function centered15(a) {
    if (a.length < 3) return 0;
    let i, j, sum, center, left = 1;

    for (i = 1; i < a.length - 1; i++, left++) {
        sum = 0;
        for (j = i; j < a.length - i; j++) {
            sum += a[j];
            if (sum > 15) break;
        }
        if (sum === 15) return 1;
    }
    return 0;
}

console.log("{3, 2, 10, 4, 1, 6, 9} centered15 status: " + centered15([3, 2, 10, 4, 1, 6, 9]));
console.log("{2, 10, 4, 1, 6, 9} centered15 status: " + centered15([2, 10, 4, 1, 6, 9]));
console.log("{3, 2, 10, 4, 1, 6}  centered15 status: " + centered15([3, 2, 10, 4, 1, 6]));
console.log("{1,1,8, 3, 1, 1} centered15 status: " + centered15([1, 1, 8, 3, 1, 1]));
console.log("{9, 15, 6}  centered15 status: " + centered15([9, 15, 6]));
console.log("{1, 1, 2, 2, 1, 1}  centered15 status: " + centered15([1, 1, 2, 2, 1, 1]));
console.log("{1, 1, 15, -1,-1}  centered15 status: " + centered15([1, 1, 15, -1, -1]));
console.log("{1, 1, 14, 1, 1,-1}  centered15 status: " + centered15([1, 1, 14, 1, 1, -1]));