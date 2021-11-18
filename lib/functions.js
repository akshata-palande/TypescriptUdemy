"use strict";
/* Function add takes 2 numbers
and returns a number */
function add(a, b) {
    return a + b;
}
/* Function log takes 1 string
and returns void */
function log(message) {
    console.log("LOG:", message);
}
/* Function sum takes any number of parameters
and returns the sum of parameters
type number[] has to be specified
or else it gives compile time error
'Rest parameter 'values' implicitly has an 'any[]' type.' */
function sum(...values) {
    return values.reduce((previous, current) => {
        return previous + current;
    });
}
console.log("Sum of 1,2 numbers", sum(1, 2));
console.log("Sum of 1,2,3,4 numbers", sum(1, 2, 3, 4));
/* We can pass optional parameter to a function
optional parameter should always come at last
we can pass any number of optional parameter
*/
function multiply(num1, num2) {
    if (num2)
        return num1 * num2;
    return num1;
}
console.log("Passing optional parameters to function multiply(3) ", multiply(3));
console.log("Passing optional parameters to function multiply(3,2)", multiply(3, 2));
/*We can pass defualt parameter to a function
default parameter should be on right of declaration
 */
function concat(num3, string1 = "I am", string2 = "years old") {
    return `${string1} ${num3} ${string2}`;
}
console.log("Concat with default parameters to function ", concat(30));
