const articles = [
  {
    id: 1,
    title: "جاوااسکریپت تنها زبان برنامه نویسی 995",
  },
  {
    id: 2,
    title: "جاوااسکریپت تنها زبان برنامه نویسی  یا سمت کاربر است",
  },
  {
    id: 3,
    title: "در این پست میپردازیم به اینکه چرا باید پایتون را {کنیم",
  },
  { id: 4, title: "بهترین کتابخانه آیکون در ریکت!" },
  {
    id: 5,
    title: "کتابخانه react-redux باا redux را در پروژه react",
  },
  {
    id: 6,
    title: "پو در ریکت اند کهرا در جای مشخصی از DOM قرار بدیم",
  },
  {
    id: 7,
    title: "با ریکت کوئری کنترل بیشتری روی داده های دریافتی از سمت سرور داریم",
  },
  {
    id: 8,
    title: "با مفهوم متغیر ها در جاوااسکریپت ر ها رو بررسی کنیم",
  },
  {
    id: 9,
    title: "هدف اصلی از توسعه‌ی این زبان، ای تکرار پایتون زبانی ",
  },
  { id: 10, title: "هدف  پایتون زبانی " },
];

const userSearch = prompt("جستجو کنید....");

if (userSearch.trim().length === 0) {
  alert("لطفا برای جستجو کلمه رو وارد نمایید.....");
} else {
  const searchResult = articles.filter(function (article) {
    //filter return array
    return article.title.includes(userSearch); //includes return true/false
  });

  if (searchResult.length == 0) {
    alert("موردی یافت نشد");
  } else {
    let result = ""; //for row search
    let i = 1;

    searchResult.forEach(function (item) {
      result = result + i + "." + item.title + "\n"; //for row search and index number
      i++; //add index number
    });

    alert(result);
  }
}
