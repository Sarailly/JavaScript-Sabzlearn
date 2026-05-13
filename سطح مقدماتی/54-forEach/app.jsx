const users = [

    {id:1 ,firstName:"sara",  lastName:"illy" ,  age:39 ,email:'sara@gmail.com '},
    {id:2 ,firstName:"masoud",lastName:"kakouei" ,age:39 ,email:'masoud@gmail.com' },
    {id:3 ,firstName:"sarsamaneha",lastName:"illy" ,age:41 ,email:'samaneh@gmail.com' },
];

users.forEach(function(user){
    console.log(
        "name:" + user.firstName +  "\t\tlastname:" + user.lastName +  "\t\tage:" + user.age
    );
});