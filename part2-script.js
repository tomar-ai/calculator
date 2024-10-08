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

// objects -- extension of the array so that we can add keys
// this is the object - with object literal 
// order does not matter here
const jonas = {
    firstName : "Jonas",
    lastName : "Tomar", 
    age : 23,
    friends : ["ankit", "tomar", "value"]
};

console.log(jonas)
console.log(jonas.lastName) // dot 
console.log(jonas['age']) // add property name

const nameKey = "Name";
console.log(jonas['first' + nameKey]) // creating the property name properly 


// const interaction = prompt("What do you want to know about Jonas");

// if(jonas[interaction]){
//         // console.log(jonas.interaction) // this will not work as user inout 
//     console.log(`this is how take input from box`, jonas[interaction])
// } else {
//     console.log("invalid")
// }


jonas.location ="Amsterdam";
jonas['school'] = "BITS";

console.log(jonas)

// object methods

const myObject = {
    firstName : "Jonas",
    lastName : "Tomar", 
    age : 23,
    friends : ["ankit", "tomar", "value"],
    calcAge : function(birthyear){
        return 2038 - birthyear;
    }
};
console.log(myObject.calcAge(2000))
console.log(myObject['calcAge'](1990));
console.log(myObject.age)

// getSummary 
// getSummary : function(){
//     return `${this.firstName} is ${this.age} years old`;
// }
// console.log(myObject.getSummary());


// loops for iteration tasks 
// for loops keep running untill condition is true
for (let rep = 1; rep <=10; rep++){
    console.log(`lifting wts rep`, rep);
}

const jonasArray = [
    'Jonas',
    "tomar",
    2037-1995,
    ["ankit", "tomar", "value"],
    true,
];

const types = []

// for (let i = 0; i<jonasArray.length; i++){
//     if(typeof jonasArray[i] !== 'string') continue; // // continue and break


//     // console.log(jonasArray[i]);
//     types.push(jonasArray[i]);
//     console.log(types); 
    
// }


for (let i = 0; i<jonasArray.length; i++){
    if(typeof jonasArray[i] === 'number') break; // // continue and break

    // console.log(jonasArray[i]);
    types.push(jonasArray[i]);
    console.log(types); 
    
}


const nextValue = [
    'Jonas',
    "tomar",
    2037-1995,
    ["ankit", "tomar", "value"],
    true,
    'start'
];

// backwards

for(let i = nextValue.length - 1; i>0; i-- ){
    console.log(nextValue[i])
}

// loop inside loop


for(let e = 1; e<5; e--){
    console.log("----start-----");
    for (let a =0; a <3; a++){
        console.log(`hello ${e} ${a}`);
        if (a===3) break;

    if (e===4) break;
        
    }
}