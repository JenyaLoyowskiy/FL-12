let makeNumber = string => {
    let result = '';
    for (let i = 0; i < string.length; i++) {
        if (!isNaN(parseInt(string[i]))) {
            result += string[i];
        }
    }
    return result;
}

makeNumber('erer384jjjfd123'); //=>384123
makeNumber('123098h76gfdd'); //=>12309876
makeNumber('ijifjgdj'); //=> should return empty string ->''