let obj = {
  aordahe: [
    "كشري",
    "مكرونة وبيض",
    "كشري اصفر",
    "رز وبطاطس وبيض",
    "فول وطعمية",
    "بطاطس مقلية",
  ],
  chicken: [
    "فراخ مشوية بعيش",
    "فراخ مشوية ومكرونة",
    "مندي",
    "بانية وعيش",
    "بانية ومكرونة",
    "شاورما",
    "نجرسكو",
    "فراخ وبطاطس في الفرن",
    "كبسة",
    "فراخ مقلية ومكرونة",
    "كفتة بانية",
    "محشي",
    "ملوخية",
    "رز كوسة",
    "بسلة وبطاطس",
    "بانية في عيش سوري",
  ],
  meat: [
    "حواوشي",
    "فتة",
    "لسان عصفور",
    "بسلة وبطاطس",
    "تورلي",
    "سجق",
    "مكرونة بشامل",
    "كفتة ومكرونة",
    "كفتة وعيش",
    "شاورما لحمة",
    "رقاق",
    "بيتزا",
    "برجر",
    "بطاطس في الفرن",
    "كباب حله",
    "بامية",
    "لحمة بارده",
    "كوسة بدمعة",
    "سبانخ",
    "لوبيا",
    "لحمة مشوية ومكرونة",
    "مضغوط",
    "محشي",
    "ملوخية",
  ],
  fish: ["سمك مشوي", "سمك مقلي", "سمك زيت ولمون"],
};

let all = document.querySelectorAll(".all div");
let ok = document.querySelector(".ok");
let okBtn = document.querySelector(".ok .btn");
let okResult = document.querySelector(".ok #result");

all.forEach(function (e) {
  e.onclick = () => {
    let newObj = Object.keys(obj).find((ele) => {
      return ele === e.id;
    });
    ok.classList.add("show");
    okBtn.onclick = () => {
      okResult.innerHTML =
        obj[newObj][Math.floor(Math.random() * obj[newObj].length)];
    };
  };
});
