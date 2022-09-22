//?Selector
const container = document.querySelector(".container");

//?load
window.addEventListener("load", () => {});

//?onclick

container.addEventListener("click", (event) => {
  const screenDiv = document.querySelector(".screen");
  const screenOpacityDiv = document.querySelector(".screen-opacity");
  let screen = 0;
  let number1 = 0;
  let number2 = 0;
  let result = 0;
  let process;
  if (event.target.classList.contains("number")) {
    //screen number yazdır
  } else if (event.target.classList.contains("process")) {
    // işlemi ve number screen-opacity yazdır
    console.log("işlem");
  } else if (event.target.classList.contains("percent")) {
    //screen dei sayının yüzdesini al
    console.log("yüzde");
  } else if (event.target.classList.contains("minus-plus")) {
    // screendeki sayıyı negatif veya pozitife çevir
    console.log("artı-eksi");
  } else if (event.target.classList.contains("dot")) {
    //number ı floata çevir
    console.log("ondalık");
  } else if (event.target.classList.contains("del")) {
    //screen 0 a eşitle
    console.log("sil");
  } else if (event.target.classList.contains("result")) {
    //screen ve screen-opacity deki işlemleri yap
    console.log("sonuç");
  }
});
