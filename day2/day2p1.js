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
}

const calculate = (nums) => {
    let rowResult = 0;

    nums.forEach(row => {
        rowResult += Math.max(...row) - Math.min(...row);
    });
    return rowResult;
}