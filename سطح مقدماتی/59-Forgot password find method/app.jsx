
const users=[
    {id:1 , userName:"sara", password:"sara39" },
    {id:2 , userName:"sedighe", password:"sedighe39" },
    {id:3 , userName:"samaneh",password:"samaneh39"  },
    {id:4 , userName:"ava", password:"ava39" },
    {id:5 , userName:"amir",password:"amir39"  },
    {id:6 , userName:"ashraf", password:"ashraf39" },
] ;


const forgetUserName = prompt ("please enter the username: ");

// use trim() to del white space forgetUserName
if(forgetUserName.trim().length==0){
    alert("لطفا نام کاربری را وارد نمایید:")

}else{
     let mainUser = users.find(function(user){
        return user.userName==forgetUserName
     });

     //if method find() couldnot find any item return undefined
    if (mainUser==undefined){
        alert("کاربری با این یوزرنیم یافت نشد")
    }else{
        alert("your password: ->"+ mainUser.password);
    }
    
     
}