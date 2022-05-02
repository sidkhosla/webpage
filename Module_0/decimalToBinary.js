function decimalToBinary(decimalNumber){
    let power = 1;
    let bin = 0;
    while (decimalNumber != 0) {
        let fv = decimalNumber % 2;
        bin = bin + fv * power;

        power = power * 10;

        decimalNumber = Math.floor(decimalNumber/2);

    }
    return bin;
}
let binaryNumber = decimalToBinary(13);
console.log("Binary Number:", binaryNumber);