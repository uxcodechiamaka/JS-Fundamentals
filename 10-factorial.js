const {argv} = require("node:process")



function factorial(num){
    if (num == 0 || num == 1){
        return(1)
    }else{
        return(num * factorial(num - 1))
    }
    
}

let first = Number(argv[2])

if (first){
    console.log(factorial(first))
}
