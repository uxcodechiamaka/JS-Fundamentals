const {argv} = require('node:process')

let num = Number(argv[2])

if (!num){
    console.log("Missing size")
}else{
    if (num > 0){
        for (let i = 0; i < num; i++){
            let result = ""
            for (let j = 0; j < num; j++){
                result+= "X"
            }
            console.log(result)
        }
    }
}