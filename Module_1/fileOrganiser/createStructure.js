let path = require("path");
let fs = require("fs");
let modules = ["Javascript", "Browser", "React", "Backend", "Git"];

// path build
let webDevDirPath = path.join(process.cwd(), "webdev");

// checking if the path exsist

if (fs.existsSync(webDevDirPath)){
    //then i dont have to make it
    console.log(webDevDirPath, " already exsists!");
} else {
    fs.mkdirSync(webDevDirPath);
}

// create all the modules inside your web dev directory

for(let i = 0; i < modules.length; i++){
    let modulePath = path.join(webDevDirPath, modules[i]);

    if(fs.existsSync(modulePath)){
        console.log(modules[i], " already exsists");
    }else {
        fs.mkdirSync(modulePath)
    }
}