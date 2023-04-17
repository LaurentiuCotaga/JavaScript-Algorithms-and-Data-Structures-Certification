function truncateString(str, num) {
    let sliceStr = str.slice(0, num) + "...";

    if (str.length > num) {
        return sliceStr;
    }
    return str;
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);