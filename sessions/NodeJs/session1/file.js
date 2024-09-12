const fs = require("fs");



const data = "hello world";

fs.writeFileSync("example.txt", data, 'utf8', (error) => {
    if (err) {
        console.error("diqka spo bon");
    }
    console.log("File written sucesfully")
});