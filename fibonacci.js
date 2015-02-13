var fib = function (n) {
    var fibArr = [];

    for (var i=0; i < n; ++i) {
        if (i == 0 || i == 1) {
            fibArr.push(i)
        } else {
            var temp = fibArr[i-1] + fibArr[i-2]
            fibArr.push(temp)
        }
    }

    console.log(fibArr);
}

fib(100);
