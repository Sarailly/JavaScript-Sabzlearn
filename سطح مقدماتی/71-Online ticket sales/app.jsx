

const provinces = {

  guilan: ["بندر انزلی", " لاهیجان", " لنگرود"],
  hormozgan: ["میناب", "دهبارز", " بندر لنگه"],
  kermanshah: ["هرسین", "کنگاور", " اسلام آباد غرب"]

};

const province = prompt("لطفا نام استان را  وارد نمایید:");

//key/value datatype access with bracket notation array[key]
// console.log(provinces[province]);

const provinceCities = provinces[province];

if (provinceCities === undefined) {
  alert("شهری برای استان مورد نظر بافت نشد.");
} else {
  let citiesText = "";

  provinceCities.forEach(function (city) {
    citiesText = citiesText + city + "\n";
  });

  alert(citiesText);
}
