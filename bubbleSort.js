// tpye "npm start" to run this code

const chalk = require('chalk');

const swap = (e) => {
    let x = e[1];
    let y = e[2];
    
    return [x, y] = [y, x]
}

const asc = (arr) => {
    let before = arr.join(' ')
    console.log(`Before Sorted: ${chalk.yellow(before)}`)

    let compare = (arr.length - 1) * (arr.length - 1);

    for(let i = 0; i < arr.length - 1; i++){

        for(let j = 0; j < arr.length - 1; j++){

            if(arr[j] > arr[j + 1]){
                [ arr[j], arr[j + 1] ] = [ arr[j + 1], arr[j] ];
            }

        }
        
    }
    let after = arr.join(' ')
    console.log(`After Sorted: ${chalk.green(after)}`)
}

asc([7, 3, 4, 9]);