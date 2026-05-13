const users = [

    {id:1 ,firstName:"sara",  lasstName:"illy" ,  age:39 ,email:'sara@gmail.com '},
    {id:2 ,firstName:"masoud",lasstName:"kakouei" ,age:39 ,email:'masoud@gmail.com' },
    {id:3 ,firstName:"sarsamaneha",lasstName:"illy" ,age:41 ,email:'samaneh@gmail.com' },
];

const firstName= prompt("please enter firstName");
const lastName= prompt("please enter lastName");
const age= +prompt("please enter age");
const email= prompt("please enter email");


if(firstName.length<3 || firstName.length>10){
    alert("نام باید بین 3 تا 10 کاراکتر باشد")
}else if (lastName.length<3 || lastName.length>10){
    alert("نام خانوادگی باید بین 3 تا 10 کاراکتر باشد")
  }else if (isNaN(age) || age<18){
    alert("سن باید 18 یا بیشتر باشد")
  }else if (email.search("@gmail.com")===-1){
    alert("ایمیل معتبر نمیباشد")
  }
    
    else{
    let newUser = {
        id:users.length+1 ,
        firstName:firstName ,
        lastName:lastName ,
        age:age,
        email:email,
    };

    users.push(newUser);
    console.log(users);
  }
  