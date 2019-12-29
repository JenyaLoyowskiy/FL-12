let isBigger = (n1, n2) => {
    return n1 > n2;
}

let isSmaller = (n1, n2) => {
    return !isBigger(n1, n2);
}

isSmaller(5, -1);