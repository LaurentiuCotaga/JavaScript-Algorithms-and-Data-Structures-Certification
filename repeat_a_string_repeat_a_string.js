function repeatStringNumTimes(str, num) {
    let accStr = '';
    for(let i = 0; i < num ; i++) {
        accStr += str
    }
    return accStr;
}

repeatStringNumTimes("abc", 3);