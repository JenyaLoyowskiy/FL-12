let makeNumber = string => {
    let result = '';
    for (let i = 0; i < string.length; i++) {
        if (!isNaN(parseInt(string[i]))) {
            result += string[i];
        }
    }
    return result;
}
let countNumbers = string => {
    let newObj = {};
    makeNumber(string).split('').forEach(el => {
        newObj[el] ? newObj[el]++ : newObj[el] = 1;
    });
    return newObj;
}
countNumbers('erer384jj4444666888jfd123');