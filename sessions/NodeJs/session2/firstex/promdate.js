function fetchData(){
    return new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            resolve("u bo buka");
        }, 2000);
    })
}

fetchData()
.then((data)=>{
    console.log(data);
    
}).catch((error)=>{
    console.log("Error", error);
});