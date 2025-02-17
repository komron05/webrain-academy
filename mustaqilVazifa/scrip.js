// Musbat yoki manfiy son – Foydalanuvchi kiritgan son musbat, manfiy yoki nol ekanligini aniqlang

// let num = 1;
// if (num > 0){
//     console.log('siz kiritgan son musbat');
// }else if(num < 0){
//     console.log('siz kiritgan son manfi');
// }else if(num==0){
//     console.log('siz kiritgan son 0');
// }else{
//     console.log('iltimos son kiritng');
    
// }
//============================================
// Juft yoki toq son – Kiritilgan son juft yoki toq ekanligini tekshiring.
// let num = 1;
// if (num % 2==0){
//     console.log(`siz kiritgan son juft: ${num}`);
// }else{
//     console.log(`siz kiritgan son toq: ${num}`);
// }
//============================================
// Katta sonni topish – Uchta son berilgan. Eng kattasini aniqlang.
// let sum1 = prompt('1 son kiriting');
// let sum2 = prompt('2 son kiriting');
// let sum3 = prompt('3 son kiriting');

// if(sum1 > sum2 && sum1 > sum3){
//     alert(`sizning 1 kiritkan soningiz katta ${sum1}`); 
// }else if(sum3 < sum2){
//     alert(`sizning 2 kiritkan soningiz katta ${sum2}`);
// }else if( sum3 ){
//     alert(`sizning 3 kiritkan soningiz katta ${sum3}`);
// }else{
//     alert('siz hichqanaqa son kiritmadingiz')
// }
//============================================
// Baholash tizimi – 100 dan 0 gacha baho beriladi. Agar baho 90+ bo‘lsa, "A", 80+ bo‘lsa, "B" va hokazo.
// let price = prompt('nechi bal olganingizni kiriting:')
// if(price >= 60 && price < 70){
//     alert('siz D balini olibsiz')
// }else if(price >=70 && price < 80 ){
//     alert('siz C balini olibsiz')
// }else if(price >=80 && price <90){
//     alert('siz B balini olibsiz')
// }else if (price >=90 && price <= 100){
//     alert('siz A balini olibsiz')
// }else if (price < 60 ){
//     alert('Afsuski sizning balingiz kam eka utolmadingiz')
// }else{
//     alert('iltimos faqat son kiriting')
// }
//============================================
// for 
// 1 dan N gacha sonlarni chiqarish – Foydalanuvchi kiritgan N gacha barcha sonlarni ekranga chiqaring.

// let N = 134
// for (let i = 1; i <= N; i++) {
//     console.log(i);
// }
//============================================
// Juft sonlarni chiqarish – 1 dan N gacha faqat juft sonlarni ekranga chiqaring.
// let N = 20
// for (let i = 1; i <= N; i++) {
//     if( i%2==0){
//         console.log(`${i} juft son`);
//     }
// }
//============================================
// 1 dan N gacha sonlar yig‘indisini hisoblash – Tsikl yordamida yig‘indini toping.
// function numTon(N) {
//     let sum = 0; 
//     for (let i = 1; i <= N; i++) {
//         sum = sum + i; 
//     }
//     return sum;
// }
// console.log(numTon(5)); 
//============================================
// Faktorialni hisoblash – Foydalanuvchi kiritgan sonning faktorialini hisoblang.
// function factorial(n) {
//     let result = 1;  
//     for (let i = 1; i <= n; i++) {
//         result *= i;  
//     }
//     return result;  
// }
// let number = prompt("Sonni kiriting:"); 
// number = parseInt(number); 
// alert("Faktorial: " + factorial(number)); 

//============================================
// Fibonacci ketma-ketligi – Foydalanuvchi kiritgan N ta Fibonacci sonlarini ekranga chiqaring.
// function fibonacci(N) {
//     let a = 0, b = 1, next;
//     for (let i = 1; i <= N; i++) {
//         console.log(a); 
//         next = a + b;  
//         a = b;  
//         b = next;  
//     }
// }
// let number = prompt("Nechta Fibonacci sonini chiqaraylik?");
// number = parseInt(number);                                      
// fibonacci(number);