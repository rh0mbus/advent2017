const fs = require('fs')

// Read file in, split on newline and pass the string to be processed
fs.readFile('./input.txt', (err, data) => {
    text = data.toString('utf-8').split('\n');
    console.log(`This is the total: ${process(text)}`);
});

const findPos = (current, size) => {
    if(current < (size / 2)){
        return Math.abs(current + (size / 2));
    } else {
        return Math.abs((size / 2) - current);
    }
}

// Processes the array
const process = (text) => {
    let charArr = text[0];
    let numArr = []

    // Convert to int\
    for(let i = 0; i < charArr.length; i++){
        numArr[i] = parseInt(charArr[i]);
    }

    // Process the array
    let total = 0;
    for(let i = 0; i < numArr.length - 1; i ++){
        if(numArr[i] === numArr[findPos(i, numArr.length)]){
            total += numArr[i];
        }
    }
    return total;
};
