// smallest //


function sam(n) {
    let i, j, temp, flag;

    for (i = 1;; i++) {
        for (j = 1; j <= n; j++) {
            flag = 0;
            temp = i * j;
            while (temp > 0) {
                if (temp % 10 == 2) {
                    flag = 1;
                    break;
                }
                temp = Math.floor(temp / 10);
            }
            if (flag == 0) break;
        }
        if (flag == 1) break;
    }

    return i;
}

console.log("The smallest number for 1 is: " + sam(7));