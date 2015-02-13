var genFib = function (n) {
    var fibArr = [];
    for (var i=0; i < n; ++i) {
        if (i === 0) { fibArr[i] = i }
        else if (i === 1) { fibArr[i] = i}
        else { fibArr[i] = fibArr[i-1] + fibArr[i-2] }
    }
    return fibArr;
}

var fibArr = genFib(process.argv[2] || 10);

console.log(fibArr);
