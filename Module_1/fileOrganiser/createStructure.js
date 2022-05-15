let path = require("path");
let fs = require("fs");
let modules = ["Javascript", "Browser", "React", "Backend", "Git"];

// path build
let webDevFolderPath = path.join(process.cwd(), "webdev");

// checking if the path exsist

if (fs.existsSync(webDevFolderPath)){
    //then i dont have to make it
    console.log(webDevFolderPath);
}

// create all the modules inside your web dev directory

for(let i = 0; i < modules.length; i++){
    let 
}