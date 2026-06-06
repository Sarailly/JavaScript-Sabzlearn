const todos = [
  { id: 1, title: "learn js", isDone: false },
  { id: 2, title: "learn next", isDone: false },
  { id: 3, title: "learn react", isDone: false },
];

const userChoice = +prompt(
  "لطفا یک گزینه را انتخاب نمایید:\n1:اضافه کردن todo \n2:حذف todo \n3:انجامtodo ",
);

if (userChoice === 1 || userChoice === 2 || userChoice === 3) {
  if (userChoice === 1) {
    //1 Add Todo
    let newTodoList = prompt("لطفا نام تودو جدید را وارد نمایید");

    const newTodo = {
      id: todos.length + 1,
      title: newTodoList,
      isDone: false,
    };

    todos.push(newTodo);
    console.log(todos);
  } else if (userChoice === 2) {
    //2  Remove Todo
    let todoTitle = prompt("لطفا نام تودو برای حذف را وارد نمایید");
    //use findindex method to find index of item form remove on todos array

    const mainTodoIndex = todos.findIndex(function (todo) {
      // تبدیل هر دو طرف مقایسه به حروف کوچک و حذف فاصله‌های اضافی
      return todo.title.toLowerCase().trim() === todoTitle.toLowerCase().trim();
    });
    console.log("mainTodoIndex", mainTodoIndex);

    //if index exist or not
    if (mainTodoIndex === -1) {
      alert("تودویی به این نام یافت نشد.");
    } else {
      //use splice method for remove item by index
      todos.splice(mainTodoIndex, 1);
      alert("تودو مورد نظر حذف شد");
    }
    console.log("Todos->", todos);
  } else {
    //3 Done Todo
    let todoTitle = prompt("لطفا نام تودو برای انجام را وارد نمایید");

    //way 1
    // todos.forEach(function (todo) {
    //   if (todo.title.toLowerCase().trim() == todoTitle.toLowerCase().trim()) {
    //     todo.isDone = true;
    //   }
    // });
    

    //way2
    // todos.some(function(todo){
    //     if (todo.title.toLowerCase().trim() == todoTitle.toLowerCase().trim()) {
    //     todo.isDone = true;
    //     return true;
    //   }
    // });


    //way3
    // بررسی اینکه کاربر کنسل نکرده باشد
    if (todoTitle) {
      // استفاده از find برای پیدا کردن خود آبجکت تودو
      const targetTodo = todos.find(function (todo) {
        return todo.title.toLowerCase().trim() === todoTitle.toLowerCase().trim();
      });

      // اگر تودو پیدا شد (یعنی undefined نبود)
      if (targetTodo) {
        targetTodo.isDone = true; // وضعیت را تغییر می‌دهیم
        alert("وضعیت تودو با موفقیت به 'انجام شده' تغییر یافت ✅");
      } else {
        alert("تودویی با این نام پیدا نشد ❌");
      }

    console.log("Todos is done->", todos);
  }
} // <-- این آکولاد جا افتاده بود (برای بستن بلاک قسمت 3)
} else {
  // <-- قبل از این else هم یک آکولاد } برای بستن شرط اصلی بالا نیاز بود
  alert("مقدار وارد شده صحیح نمیباشد.");
}
