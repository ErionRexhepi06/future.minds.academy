const eventEmitter = require('events');
const fs=require('fs')

const myEmiter = new eventEmitter();

function writeFile(title,data){
    fs.writeFileSync(`${title}.txt`, data, 'utf8', (error) => {
        if (err) {
            console.error("diqka spo bon");
        }
        console.log("File written sucesfully")
    });
}

myEmiter.on("krijofile", ()=>{
    console.log("Po krijohet nje file");
    writeFile("bota", "sillet rreth dillit");
});

myEmiter.emit("krijofile");