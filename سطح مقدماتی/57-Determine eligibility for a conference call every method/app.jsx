const members=[
    {id:1 , name:"sara", age:39 },
    {id:1 , name:"sedighe", age:28 },
    {id:1 , name:"samaneh", age:41 },
    {id:1 , name:"ava", age:16 },
    {id:1 , name:"amir", age:45 },
    {id:1 , name:"ashraf", age:70 },
] ;

const isAll = members.every(function(member){
    console.log(member);
    return member.age>18;
});
if(isAll==true){
    alert("شما محاز هستید");
}else{
    alert("شما مجاز نیستید");
}