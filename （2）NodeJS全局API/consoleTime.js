/**
 * console.time(计时标识)
 */
console.time("test"); //加一标识

function loopTimer() {
    var sum = 0;
    for (var i = 0; i < 10000; i++) {
        for (var j = 0; j < 100; j++) {
            sum += i * j;
        }
    }
    return sum;
}

loopTimer();
console.timeEnd("test");