function sevetoDb(data){
    return new Promise((resolve,reject)=>{
    let internatespeed = Math.floor(Math.random()*10)+1;
    if (internatespeed>4){
        resolve("data saved succesfully"+data);
    }else{
        reject("weeak connection");
    }
    });
}
sevetoDb("gaurav")
.then((result)=>{
    console.log("success",result);
})
.catch((error)=>{
    console.log("error weak connection form",error)
});
console.log("Promise practice completed");