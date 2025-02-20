// console.log(100_000_000+2);
//  console.log(1e6); // e degani boshidagi raqamdan kein 0 qoshish uchun e yozadi
//  console.log(1e500);// 500 Infinity degani
//   console.log(.1+.2);
//   console.log( Number(.1+.2).toFixed(2));//toFixed vazifasi nechta butundan kein son kerak bolsa toFixed chiqaradi  
////============================
// let num = .1+.2
// console.log(Number(num.toFixed(3)));
////===========================
// let num = "0.1 + 0.2"
// console.log(parseInt(num)); // parseInt birinchi korgan raqamni oladi
// console.log(parseFloat(num)); // parseFloat kurgan birinchi fenkshonini oladi yani 0.1 yoki 0.2 shunaqa narsani oladi

// console.log(eval(num)); // ichidagi arfmetik amalini bajarish uchun EVAL degan bor 
////============================
// let sum = 5
// console.log(sum.toString(2));
// console.log(parseInt("5", 2));
// console.log(isNaN(123));

// let sum = 1.234534
// let sum1 = 0.234534
// console.log(sum.toPrecision(3));
// console.log(sum1.toPrecision(3)); //toPrecision 0 ignorqilibyaradi faqat sondan boshlab hisoblaydi hamma nollimas boshlangich nollardi

////============================
// console.log(Math.PI);
// console.log(Math.floor(-4));//math JS usida bor kutub xona 
// console.log(Math.abs(-4));
// console.log(Math.round(2.2));
// console.log(Math.round(2.7));
// console.log(Math.floor(10.999));//floor 10.999 bolasayam javob 10 boladi

// console.log(Math.ceil(10.001));//ceil 10.001 bolsayam javob 11 boladi 

// console.log(Math.trunc(10.999));// trunc kasir qismini chiqarib yaradi 10.999 faqat 10 di chiqaradi 

// console.log(Math.random()*10);// tasodifi sonlardi chiqarib beradi masalan 10 sanoq sistemasi 10 orasidagi tasodifi sonnardi chiqaradi 
// console.log(Math.trunc(Math.random()*100));//bunda faqat butun son chiqarish yoli
////============================
//MIN  && MAX
// console.log(Math.min(1,2,3,4,5,6,7,8,5,4,2,2,3,4,5,3,));// min raqamlardi ichida eng kichigini topip beradi 
// console.log(Math.max(1,2,3,4,5,6,7,8,5,4,2,2,3,4,5,3,));// mix raqamlardi ichida eng kattasini topip beradi 
// console.log(Math.pow(5,2));//pow sonlarni darajaga kutaradi
// console.log(5**2);//Math siz darajaga kutarish
// console.log(Math.sqrt(9));//sqrt ildiz ostidan chiqaradi
// console.log(Math.cbrt(27));// cbrt kub ostidagi darajada ishlashda islatiladi
// console.log(Math.sign(6));// sign musbat son manfi son ekanligini bilish 
// console.log(Math.sign(-2));
// console.log(Math.sign("-1232"));//STRING daham xuddi shunaqa

// console.log(Math.sign(-0));// Math minis -0 degan son yuq lekin Js -0 degan son bor
// console.log(Math.hypot());
////============================
//OPSHENEL CHENELI
let obj = {name:'kamar', chald: undefined}
console.log(obj.chald.age);//   ? tan maqsad agar aage bosa ol bolmasa undefined qil

////============================
////============================
////============================
////============================
