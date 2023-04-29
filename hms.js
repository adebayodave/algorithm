function f(seconds) {
    const time = [0, 0, 0];
    let pow = 3600,
        pos = 0;

    while (seconds > 0) {
        time[pos++] = Math.floor(seconds / pow);
        seconds %= pow;
        pow /= 60;
    }

    return time;
}

console.log(f(3735));
console.log(f(380));