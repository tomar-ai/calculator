'use scrict';

console.log("Welcome to DSA")

const arr = [2,3,4];

const a = arr[0];
const b = arr[1];
const c = arr[2];
console.log(a,b,c);

const [x,y,z]= arr; // destructing the array 
console.log(x,y,z)
console.log(arr)

console.log(arr[2])

// swapping the arry 

const reasturant = {
    name : "ankit",
    age: 30,
    places : ["Itlay", "AMS", "Seattle"],
    mainMenu : ["Pizza", "tea"]

}


// value swapping
let [main, secondary] =  reasturant.mainMenu;

console.log(main, secondary)

// const temp = main;
// main = secondary;
// secondary = temp;

// console.log(main, secondary) // we had to use let insted of const 

// [main, secondary] = [secondary, main];

// console.log(main, secondary);



// nested arry 
const nestArray = [2,3, [4,5]]
console.log(nestArray)

const [i, j, [k,l]] = nestArray;
console.log(i,j,k,l)


