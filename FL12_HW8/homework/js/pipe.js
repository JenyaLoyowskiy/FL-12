function addOne(x) {
    console.log(x);
    return x + 1;
}

function pipe(num, ...functions) {
    for (let func of [...functions]) {
        num = func(num)
    }
    return num;
}

pipe(1, addOne, addOne); //=> 3