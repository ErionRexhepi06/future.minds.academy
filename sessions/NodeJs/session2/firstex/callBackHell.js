async function getUser() {
    return new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            resolve(`User  fetched`);
        }, 1000);
    })
  }
  
async function getPosts() {
    return new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            resolve(`Posts for user  fetched`);
        }, 1000);
    })
  }
  
async function getComments() {
    return new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            resolve(`Comments for post  fetched`);
        }, 1000);
    })
  }
  
  
  const user = await getUser();
  const posts = await getPosts();
  const comments = await getComments();

console.log(user);
console.log(posts);
console.log(comments);