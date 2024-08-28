// 'use scrict';

// console.log("Welcome to DSA")

// const arr = [2,3,4];

// const a = arr[0];
// const b = arr[1];
// const c = arr[2];
// console.log(a,b,c);

// const [x,y,z]= arr; // destructing the array 
// console.log(x,y,z)
// console.log(arr)

// console.log(arr[2])

// // swapping the arry 

// const reasturant = {
//     name : "ankit",
//     age: 30,
//     places : ["Itlay", "AMS", "Seattle"],
//     mainMenu : ["Pizza", "tea"]

// }


// // value swapping
// let [main, secondary] =  reasturant.mainMenu;

// console.log(main, secondary)

// // const temp = main;
// // main = secondary;
// // secondary = temp;

// // console.log(main, secondary) // we had to use let insted of const 

// // [main, secondary] = [secondary, main];

// // console.log(main, secondary);



// // nested arry 
// const nestArray = [2,3, [4,5]]
// console.log(nestArray)

// const [i, j, [k,l]] = nestArray;
// console.log(i,j,k,l)


const hobbies = ['dance', 'singing', "guitar"]

console.log(hobbies[0])

hobbies.push("writing")
console.log(hobbies)

// const index = hobbies.findIndex((item) => {
//     return item ==="dance";
// });

const index = hobbies.findIndex((item) => item ==="dance")

console.log(index)

const edittedHobbies = hobbies.map((item)=> item + "!");
console.log(edittedHobbies)

const userName = ['ankit', "tomar"]

const firstName = userName[0]
const secondName = userName[1]

let firstvalue, second = userName;
console.log(firstvalue,second)


// lets have two nested arrays 
const arrayOne = [1,2,3]
const arrayTwo = [3,4,5]

const thirdArray = [arrayOne, arrayTwo]

console.log(thirdArray)

// this is merged array 
const fourArray = [...arrayOne, ...arrayTwo]
console.log(fourArray)


// for loop
for (const item of hobbies){
    console.log(item)
}


function init(){
    const hobbies = "this is internally scoped";
    console.log(hobbies);

    };

}

init()

// ,map, reduce , filter to be continued here 
// will be used for project creations
// comppleted fundamentals from reactjs course, but needs to complete in detail

