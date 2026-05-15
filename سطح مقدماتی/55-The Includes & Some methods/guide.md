some & includes
1:includes:
/به ازای ایتم های ارایه اجرا میگردد و خروجی همراه یک Boolean هست
/مقدار خروجی true/false
/users.includes("samaneh")
/ برای مقادیر string و number استفاده میشود.


2:some
برای مقادیر ابچکت در ارایه استفاده میشود و از یک تابع همانند فورایج برای پیدا کردن مقدار استفاده میکند  و خروجی یک boolean هست.  
تازمانیکه حلقه را روی ارایه اجرا میکند که به شرط reurn برسد.

const isInStudent= students.some(function(student){
    return student.name=="sina";

//برای این استفاده میشه که چک کنیم ایا ایتمی که نیاز داریم در آرایه وجو دارد یا خیر؟
