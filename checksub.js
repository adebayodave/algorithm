function f(str, sub) {
    if (str.length < sub.length || str.length === 0 || sub.length === 0) {
        return 0;
    }

    const len1 = str.length;
    const len2 = sub.length;

    let flag = 0;

    for (let i = 0; i <= len1 - len2; i++) {
        flag = 1;
        for (let j = 0; j < len2; j++) {
            if (str.charAt(i + j) !== sub.charAt(j)) {
                flag = 0;
                break;
            }
        }
        if (flag === 1) {
            break;
        }
    }

    return flag;
}

console.log(f("bikramismyname", "ismy"));