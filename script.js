function getlogin(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("user login succfully");
        },1000);
    });
}

function getprofile(){
    return new Promise ((resolve)=>{
        setTimeout(()=>{
            resolve("user get profile sussfully");
        },1000);
    });
}
function getcomment(){
    return new Promise((resolve)=>{
        setTimeout(() => {
           resolve("user post comment sussfully"); 
        },1000);
    });
}

getlogin()
.then((result)=>{
    console.log(result);
    return getprofile();
})
.then((result)=>{
    console.log(result);
    return getcomment();
})
.then((result)=>{
    console.log(result);
})
.catch((error)=>{
    console.log(error);
});

