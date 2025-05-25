const {argv} = require("node:process")

let first = Number(argv[2])

if (!first){
    console.log("Not a number")
}
else{
    console.log("My number: " + first)
}