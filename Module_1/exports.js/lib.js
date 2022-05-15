function LibFn(){
    console.log("I am Lib fn");
}
let a = 10;
/*in js we can only send funtions, variabkle to another file
we cant send ther whole node js

you need to use module.exports

*/
module.exports = {
    fn: LibFn,
    varName: a
}