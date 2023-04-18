function titleCase(str) {
    const lowerStr = str.toLowerCase().split(' ')
    return lowerStr.map(word => word.replace(word.charAt(0), word.charAt(0).toUpperCase())).join(' ');
}

titleCase("I'm a little tea pot");

/*The task
* Return the provided string with the first letter of each word capitalized.Make sure the rest of the word is in lower case.
*
* For the purpose of this exercise, you should also capitalize connecting words like the and of.
*/