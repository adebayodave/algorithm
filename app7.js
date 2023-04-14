// same factor 

function tomi(n1, n2) {
    if (n1 < 0 || n2 < 0) return -1;
    let i, result, len, fact1 = 0,
        fact2 = 0;
    len = n1 > n2 ? n1 : n2;
    for (i = 1; i <= len; i++) {
        if (n1 % i == 0) ++fact1;
        if (n2 % i == 0) ++fact2;
    }
    if (fact1 == fact2) result = 1;
    else result = 0;
    return result;
}

console.log(tomi(-6, 21));
console.log(tomi(6, 21));
console.log(tomi(8, 12));
console.log(tomi(23, 97));
console.log(tomi(5, 7));