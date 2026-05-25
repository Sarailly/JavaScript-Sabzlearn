const products = [
  { id: 1, title: "mobile", price: 400, qty: 10 },
  { id: 2, title: "laptop", price: 900, qty: 15 },
  { id: 3, title: "ram", price: 400, qty: 0 },
  { id: 4, title: "headphone", price: 400, qty: 1 },
  { id: 5, title: "hard", price: 200, qty: 8 },
];

const basket = [
  { id: 1, title: "mobile", price: 400 },
  { id: 2, title: "laptop", price: 900 },
  { id: 3, title: "hard", price: 200 },
];

const userChoice = prompt(
  "یکی را انتخاب کنید:" +
    "\n1:حذف محصول از سبد خرید" +
    "\n2:اضافه کردن محصول به سبد خرید",
);

if (userChoice == 1 || userChoice == 2) {
  //1)if enter 1 or 2 continue

  if (userChoice == 1) {
    //2)remove item
    const userProductTitle = prompt(
      "لطفا نام محصول موجود در سبد را انتخاب نمایید:",
    );

    if (userProductTitle.trim().length == 0) {
      //3)etebarsanji 1 length of array
      alert("نام محصول صحیح نمیباشد.");
    } else {
      //3)else etebarsanji 1
      const productIndex = basket.findIndex(function (product) {
        //4)use findindex on basket
        return (
          product.title.toLowerCase() == userProductTitle.trim().toLowerCase()
        );
      });

      if (productIndex == -1) {
        alert("محصولی در سبد یافت نشد.");
      } else {
        basket.splice(productIndex, 1);
        console.log("basket->", basket);
      }
    }
  } else {
    //2)else add item
    const userProductTitle = prompt("لطفا نام محصول جدید را وارد نمایید:");

    if (userProductTitle.trim().length == 0) {
      //3)etebarsanji 2 length of array
      alert("نام محصول صحیح نمیباشد.");
    } else {
      //3)else etebarsanji 2
      const mainProduct = products.find(function (product) {
        //use method find() to access objects
        return product.title == userProductTitle;
      });
      if (mainProduct === undefined) {
        alert("محصول در فروشگاه یافت نشد");
      } else {
        let newProduct = {
          //creat  newproduct
          id: basket.length + 1,
          title: mainProduct.title,
          price: mainProduct.price,
        };
        basket.push(newProduct); //push newproduct to basket
        console.log("newbasket->", basket);
      }
    }
  }
} else {
  //1)else error
  alert("اطلاعات وارد شده صحیح نیست.");
}
