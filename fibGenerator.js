function *fibGen() {
    var fibarr = [];
    var n = 0;
    while (true) {
        if (n == 0 || n == 1) {
            yield fibarr[n] = n;
        } else {
            yield fibarr[n] = fibarr[n - 1] + fibarr[n - 2]
        }
        n += 1;
    }
}

var fib = fibGen();
for (var i=0; i < 1000000; ++i) {
    console.log(fib.next().value);
}
