//array
let a = [1, 2, 3, 4, 5, 6]
// //add
// console.log(arr);

// //add in the back
// arr.push("5");

// //add in the front
// arr.unshift("0")
// console.log(arr);

// // remove from front
// arr.shift()
// arr.push("0");
// console.log(arr);

// //remove from back
// arr.pop();
// console.log(arr);

// // remove dupes from 2 arrays and combine them 
// firstArry= [1, 2, 3]
// scndArr= [100, 2, 1,10]
// outArray = [...new Set([...firstArry, ...scndArr])];
// console.log(outArray);
// // Output: [1,2,3,100,10]

// // slicing array
// let slicedArray = a.slice(1, 4);

// console.log("Sliced array " + slicedArray);
// console.log("Normal Array " + a);

// // indexOf = idx/ -1
// let idx = a.indexOf(4);

// //includes = true or false
// let ans = a.includes(3);
// console.log("4 is " + ans + " at " + idx);

//spilce 
let splicedArray = a.splice(1 /*cut from here*/ , 3 /*to here*/);
console.log("splicedArray: ", splicedArray);
console.log("OriginalArray: ", a); // deletes the spliced part from the original array