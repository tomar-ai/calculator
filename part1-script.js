/*
 this is my first code for learning JS as part of fundamental part 1

let js = "amazing you";
console.log(js);

console.log(10);

let firstName = "ankit";
console.log(firstName)

let secondName = "tomar";
// console.log(secondName);

let a = 10.5;
console.log(a)

let b = 10
// console.log(a/b)



let a = true
console.log(a)
console.log(typeof(a))

console.log(typeof 23)
console.log(typeof "ankit")
console.log(typeof 'tomar')


console.log(typeof
     "ankit");


a = false
console.log(a) // dont write const or let here so, it is variable reassign

a = "tomar"
console.log(a) // this is dynamic typing here

let year;
console.log(year)

year = "1998"
console.log(year) // you can't use let word whenever you have to reassign


// let can be mutated while const can't 
//  always u

lastName = "Ankit"
console.log(lastName)

const now = 2024
const ageAnkit = now-1991
const ageTomar = now-1995

console.log("Ankit's age = ", ageAnkit)
console.log("Tomar's age = ", ageTomar)

const firstName= "ankit"
const secondName = "tomar"
console.log("Full name : ", firstName + " " + secondName)

// operators 
let x = 10+5
console.log(x)
x+= 10
console.log(x)
x -=5
console.log(x)
x--;
console.log(x)
x = x*2
console.log(x)
// is Ankit older than tomar 
console.log("Ankit is older", ageAnkit > ageTomar)
// is Ankit older than tomar 
console.log("Ankit is older", ageAnkit < ageTomar) 



// string 

const firstName = "Ankit"
const jobProfile = "Product Manager"

const age = 2037 - 1991

const stat = `I am ${firstName}, ${age} working as ${jobProfile}`

console.log(stat)


// if -else statements

const myAge = 15

if (myAge >=19){
    console.log('you are eligible')}
    else{ 
        console.log(`you are short by ${myAge-18} years`)
    }



// Were you born in 21st century

const birthYear=2002

if (birthYear <=2000){
    let century = 20
    console.log(`I was born in ${century}`)
 }else{

    let century = 21
    console.log(`I was born in ${century}`)
    }



const birthYear = "1991"
console.log(Number(birthYear) + 18)

console.log(Number('Jonas')) // this is NaN and invalid as well

console.log(typeof String(23), 23)

console.log(`I am` + 23 + `years old`)

console.log('23'-'10'-'3') // in case of string for only numbers it will 
// consider them number even though defined as string
    

     
// 5 falsely values : 0, "", undefined, null, nan will be converted into Fasle when conversion is triggered

console.log(Boolean(0))
console.log(Boolean(5)) // this never comes in real life 

// this can come in if else or logical operators 

// here zero will be converted to falsely value hence executes else
const money = 0 

if (money) {
    console.log("Dont spend it all")
}else{
    console.log("get a job")
}


let height; // because height is empty here 

if(height) {
    console.log("YAY! we know height")
} else {
    console.log("Height is UNDEFINED")
}


// if we have triple === than you can write direct statement , it does not do type conversion 
// when comparing values, always use triple === 
const age = 18
if (age=== 18) console.log("Congrats! you are aduldt now (strict)" )

if (age== '18') console.log("Congrats! you are aduldt now (losse)" )

// we need to stor the value so use a variabnle 

const value = Number(prompt("What is your number1")) // we need to wrap it as we are using ==== and it is always string
console.log(value)

if (value===23){
    console.log("this is correct")
} else if (value === 7){
    console.log("7 is also correct")
} else {
    console.log("Invalid")
}


if (value !== 23){
    console.log("Why not 23, Enter 23")
}

// Make sure to use strict version of equal operator 
    
// switch functionality 

day = "Sun"

switch(day){
    case "monday":
        console.log("Today is Monday")
        break;
    case "tuesday":
        console.log("Today is Tuesday") 
        break;
    default :
    console.log("Not a valid day")
}
          */ 
