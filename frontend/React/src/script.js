const { log } = require('node:console');
const fs = require('node:fs');
fs.writeFile("harsh.txt", "i am harshal", function(err){
    if(err){ console.log("problem")}
    else{ console.log("done");
    }
})