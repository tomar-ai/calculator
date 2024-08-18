// function 

// function logger(props) {
//     console.log(`My name is ${props}`);
// }

// logger("ankit")
// logger("tomar")

// function sumTwo(a, b){

//     const x =  a + b;
//     console.log("sum of value", x);

//     return x;
// }

// y = sumTwo(2,3)
// console.log(y) // 5

'use strict';

// arrow function // function camn worka as a value 
const calcAge3  = birthyear => 2037 - birthyear;
console.log(calcAge3)
// function definition

// function invoked 
const age3 = calcAge3(1995)
console.log(age3);


// get the retirement age -- single parameter
const yearsUntillRetirement = birthyear => {
    const age = 2024 - birthyear;
    const retirement = 60- age;
    return retirement
}

console.log(yearsUntillRetirement(1991))

// get the retirement age -- multiple parameters
const yearsUntillRetirementstat = (birthyear, firstName) => {
    const age = 2024 - birthyear;
    const retirement_age = 60- age;
    return `${firstName} will be retiring in ${retirement_age} years.`
}
console.log(yearsUntillRetirementstat(1995, "Ankit"))
console.log(yearsUntillRetirementstat(2000, "Tomar"))