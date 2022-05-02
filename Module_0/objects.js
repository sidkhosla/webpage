/*it non-primitve datatype that is used to represent anything and everything 
objects are collection of key:value pair
empty obj creation
let obj = {}
key : string or number & value : any valid js datatype
*/
let cap=
{
    firstName:"Steve",
    lastName:"Rogers",
    friends:["Tony","peter","bruce"],
    address:{
        city:"manhattan",
        state:"NY"
    },
    age:34,
    isAvenger:true
}
// print
// console.log(cap);
// get a keys's value using dot notation

// console.log(cap.address);
// console.log(cap.friends[1]);
// get method

// let varName = "firstName";
// console.log(cap[varName]);
// varName="lastName";

// console.log(cap[varName]);
// console.log(cap["lastName"]);

// delete, update & add
delete cap.friends;

//add

cap.movies = 
    ["winter soldier", "frist avenger", "civil war"];
let key = "comp"
cap[key] = "DCU";
// update

cap.isAvenger = false;
console.log(cap);
