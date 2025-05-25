const {argv} = require('node:process')

let num = Number(argv[2])

if (!num){
    console.log("Missing number of occurrences")
}else{
    if (num > 0){
        for (let i = 0; i < num; i++){
            console.log("C is fun")
        }
    }
}