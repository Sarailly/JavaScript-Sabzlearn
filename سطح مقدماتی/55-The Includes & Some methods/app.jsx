
const users =["sara","masoud","samaneh","sajad","amin","amir"];
const scores =[12,20,8,16,11,18,17,19,10] ;
const students=[
    {id:1 ,name:"sara", age:39 ,score:18},
    {id:2 ,name:"sina", age:29 ,score:12},
    {id:3 ,name:"ava", age:20 ,score:10},

];

// users.includes("samaneh")
// console.log(users.includes("samaneh"));   //->output is boolean

// scores.includes(11)
// console.log(scores.includes(11)) ;       //->output is boolean

// students.some(function(student){
//     console.log("some methods ->",student)
// });

// const isInStudent= students.some(function(student){});
// console.log(isInStudent);          //->output is FALSE ,have must return


const isInStudent= students.some(function(student){
    console.log("some method");
    return student.name=="sina";
});
console.log(isInStudent)


