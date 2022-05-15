// folders and files deal
let fs=require("fs");
console.log("before");
// file -> read,write,create,delete, append, copy
// create -> crud
// read
// update
// delete
// let content=fs.readFileSync("readme.txt", "utf8");
// console.log(content)
// creation
fs.writeFileSync("newFile.txt", "");
// write -> createafile write the content into it
// if file already exist -> replace content
// fs.writeFileSync(newFile.txt", "I have done something");
fs.writeFileSync("newFile.txt", "I have done something more");
// append
fs.appendFileSync("newFile.txt"," Ihave added some content later");
// delete
fs.unlinkSync("readme.txt");
console.log("After");

// create
fs.mkdirSync("newFolder");
// delete
fs.rmdirSync("toberemove");
// files and folder -> get
let content = fs.readdirSync("/Users/sid/Developer/Personal projects/Java_Script/Module_1/app_with-js")
console.log(content);