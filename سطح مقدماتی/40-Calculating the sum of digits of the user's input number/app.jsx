
let userNumber= +prompt("enter the number:" , 0);
let count =0;

if (isNaN(userNumber)){
  alert("یک عدد وارد نمایید")
}else{
  if(userNumber=== 0){
    count =1;
  }else{
    for(let i=0 ; userNumber/10!=0;i++){
      count++;
      console.log("count:"+count);
      
      userNumber =Math.floor(userNumber/10);
    }
  }
  alert(count);
}