function fetchDate(callback){
    setTimeout(()=>{
        callback("Data recived");
    },10000);
}


console.log("fetching data...");

fetchDate((data)=>{
    console.log(data);
});


console.log("Other code running");