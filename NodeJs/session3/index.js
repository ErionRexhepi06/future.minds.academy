const fs = require('fs').promises;
const path = require('path');

async function main(){
    try{
        const data = await fs.readFile('fajlli.txt');
        console.log(data.toString());
    }
    catch(err){
        throw err;
    }
}

main();

//READ
//UPDATE
//DELETE
//WRITE