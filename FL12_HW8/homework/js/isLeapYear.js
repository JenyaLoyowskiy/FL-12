function isLeapYear(date){
    let year = new Date(date).getFullYear();
    if (year % 4 === year % 400 === 0) {
        return(`${year} is a leap year`);
    }else{
        return(`${year} is not a leap year`);
    }
}
isLeapYear(1213131313); // => ‘1970 is not a leap year’  