/*First I created a muliplication function for parameters called one & two*/
function multiplication(one, two) {
    /*Create an const variable called example. When the function is executed the parameters will be multiplied together*/
    const example = one * two;
    /*You use the return keyword to return the example varible with the result of the execution*/
    return example;
}
/*These arguments will be passed into the function */
multiplication(2, 3);

/*Create a function called concatOdds with two parameters so that way two arrays can be passed in */
function concatOdds(arr1, arr2) {
    /*Add an if statement which will determine if the numbers in the array are odd or even by using modulo. Number that are odd will have a remainder of 1*/
    if (concatOdds % 2 === 1) {
        return concatOdds.sort()
    } else {
        console.log("BROKEN")
    }
}
/*These arrays are therefore passed in individually to return a new array of numbers*/
concatOdds([3, 2, 1], [9, 1, 1, 1, 4, 15, -1])
/*const example = (color,delay) => {
    return new Promise ((resolve,reject) => {
        setTimeout (() => {
            document.body.style.backgroundColor = color;
        },delay)
    })
}
example ('red', 1000)
    .then(() => example ('pink',1000))*/