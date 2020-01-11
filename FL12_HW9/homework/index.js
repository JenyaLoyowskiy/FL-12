// Your code goes here
let two = 2,
    three = 3,
    five = 5,
    seven = 7,
    eight = 8,
    year = 2019,
    a = 31,
    b = 29;

    
function convert(){
    let result = [];
    for(let element in arguments){
        if (arguments.hasOwnProperty(element)) {
            result.push(typeof arguments[element] === 'number' ? `${arguments[element]}` : +arguments[element]);
        }
    }
    return result; 
}
convert('1', two, three, '4');


function executeforEach(array, callback){
    for(let element in array){
        if (array.hasOwnProperty(element)) {
            callback(array[element], element);   
        }
    }
}
executeforEach([1,two,three], function(el) {
 console.log(el * two) 
});


function mapArray(array, callback){
    executeforEach(array, (element, index) => {
        array[index] = callback(+element);
    })
    return array;
}
mapArray([two, '5', eight], function(el) {
 return el + three 
});


function filterArray(array, callback){
    executeforEach(array, (element, index) => {
        !callback(element) && array.splice(index, 1);
    })
    return array;
}
filterArray([two, five, eight], function(el) {
 return el % two === 0 
});


function flipOver(string){
    let result = '';
    for (let i = string.length - 1; i >= 0; i--) {
        result += string[i];
    }
    return result;  
}
flipOver('hey world');


function makeListFromRange(array){
    let result = [];
    for(let i = array[0]; i <= array[1]; i++){
        result.push(i);
    }
    return result;
}
makeListFromRange([two, seven]);


function getArrayOfKeys(array, key){
    let result = [];
    executeforEach(array, (element) => {
        element[key] && result.push(element[key])
    })
    return result;
}
const actors = [
    { name: 'tommy', age: 36 },
    { name: 'lee', age: 28 }
];
getArrayOfKeys(actors, 'name');


function substitute(array){
    let result = [],
        numbLimit = 30;
    mapArray(array, element => {
        element > numbLimit ? result.push(element) : result.push('*');
    })
    return result;
}
substitute([a,b]);


function getPastDay(date, numb){
    let newDate = new Date(date.getFullYear(), date.getMonth(), date.getDate() - numb);
    return newDate.getDate();
}
const date = new Date(year, 0, two);
getPastDay(date, 1);


function formatDate(date){
    return `${date.getFullYear()}/${date.getMonth()}/${date.getDate()} ${date.getHours()}:${date.getMinutes()}`;
}
formatDate(new Date('6/15/2018 09:15:00'));