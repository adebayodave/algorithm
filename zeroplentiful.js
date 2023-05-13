function f(a) {
    if (a.length < 4) return 0;

    let zeroCount = 0;
    let plentyCount = 0;

    for (let i = 0; i < a.length; i++) {
        if (a[i] === 0) {
            zeroCount++;
        } else {
            if (zeroCount > 0 && zeroCount < 4) {
                return 0;
            } else if (zeroCount >= 4) {
                plentyCount++;
                zeroCount = 0;
            }
        }
    }

    if (zeroCount > 0 && zeroCount < 4) {
        return 0;
    }

    plentyCount += Math.floor(zeroCount / 4);

    return plentyCount;
}