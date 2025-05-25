const {argv} = require('node:process')

function add(a, b){
    let first = Number(a)
    let second = Number (b)

    if (first && second){
        console.log(first + second)
    }
    else{
        console.log(NaN)
    }
}

add(argv[2], argv[3])