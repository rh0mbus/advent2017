const fs = require('fs');

fs.readFile('./input.txt', 'utf-8', (err, data) => {
    let numArray = split(data);
    console.log(`Checksum: ${calculate(numArray)}`);
});

const split = (data) => {
    let lines = data.split('\n');
    let nums = [];

    lines.forEach(line => {
        nums.push(line.trim().split('\t'));
    });

    for(let i = 0; i < nums.length; i++){
        for(let j = 0; j < nums[i].length; j++){
            nums[i][j] = parseInt(nums[i][j]);
        }
    }
    return nums;
};

// Ineligant but it works
const calculate = (nums) => {
    accumulator = 0;

    nums.forEach(line => {
        for(let i = 0; i < line.length; i++){
            for(let j = 0; j < line.length; j++){
                if(i === j){
                    continue;
                } else {
                    if((line[i] % line[j]) === 0){
                        accumulator += (line[i] / line[j]);
                    }
                }
            }
        }
    });

    return accumulator;
};