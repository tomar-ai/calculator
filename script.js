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

// calling function in function

const getAge = birthyear =>{
    const age = 2024 - birthyear;
    return age;
}

// get the retirement age -- multiple parameters
const yearsUntillRetirementstFunc = (birthyear, firstName) => {
    age = getAge(birthyear)
    const retirement_age = 60- age;
    return `${firstName} will be retiring in ${retirement_age} years.`
}
console.log(yearsUntillRetirementstat(1995, "Chitra"))
console.log(yearsUntillRetirementstat(2000, "Jena"))

// get the avg of three numbers 

const avgThree = (a,b,c)=>{
    const avg = (a+b+c)/3;
    return avg; 
}

// arrays 
const friend = ['ankit', 'tomar', "amsterdam", "netherlands"]

console.log(friend)
console.log(`accessing first name`, friend[0])
console.log(`accessing last name`, friend[1])
const years = new Array(1991, 1984, 2090, 1909)
console.log("how many elements", years.length)

const mixYear = new Array(1991, "ankit", 2090, 1909)
console.log("how many elements", mixYear)

// update the value 
friend[2] = "John"
console.log(`accessing last name`, friend[2])

// Array is not primitive value so we can still manipulate even we did it with const
// you can not change whole array in one go but always can update the elements

const nextArray = ['John', friend]
console.log(nextArray)

// array is close to list of python

// array methods 
const friends = ['John', 'bob', 'steve']
friends.push("Jay") // add the element
const lenArray = friends.push("test")
console.log(friends, lenArray)

friends.unshift("Jay")

friends.pop();
console.log(friends)
friends.pop();
console.log(friends)
const popped = friends.pop();
console.log(popped) // shows the name of removed data

friends.shift()
console.log(friends)

console.log(friends.indexOf("John"))
console.log(friends.indexOf("tomar"))  // returns -1 as no tomar was found

// include key word 
console.log(friends.includes("John")) // true/false

// objects