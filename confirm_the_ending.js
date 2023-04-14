function confirmEnding(str, target) {
    let substr = str.substr(str.length - target.length)

    if(substr === target) {
        return true
    }
    return false;
}

confirmEnding("Bastian", "n");