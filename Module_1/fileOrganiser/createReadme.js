// is folder created or not
let fs = require('fs');
let path = require("path");
let input = process.argv.slice(2);
// input handle cases 
let moduleName = input[0];
let numberOfFolder = input[1];
let modulePath = path.join(process.cwd(), "webdev", moduleName);
if (fs.existsSync(modulePath)) {
    console.log(moduleName, "already exists")
} else {
    fs.mkdirSync(modulePath);
}
// files create 
for (let i = 1; i <= numberOfFolder; i++) {
    let lectureName = "Lecture-" + i;
    // path -> string 
    let lecturePath = path.join(modulePath, lectureName);
    if (fs.existsSync(lecturePath)) {
        console.log(lectureName, "already Exists");
    }
    else {
        // actual creation directory 
        fs.mkdirSync(lecturePath);
    }
    // files wala code
    let filePath = path.join(lecturePath, "readme.md");
    if (fs.existsSync(filePath)) {
        console.log("Already Exists");
    } else {
        fs.writeFileSync(filePath,"");
    }
}