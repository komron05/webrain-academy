// let str1 = "salom\tdunyo ";
// let str2 = 'salom "kamar" ';
// let str3 = `salom "Tojikiston"`;
// console.log(str1, str2, str3);
//========================================
// let str = 'Kamar';
// let str1 = new String('salom')//buni birbiriga taqqoslasa false chiqadi chinki bu abekt boladi
// console.log(str === 'Kamar');
// console.log(str1 === 'Kamar');
//========================================
// console.log(str.localeCompare(str1)); // localeCompare faqat -1, 0, 1 qaytaradi  [-1 str dagi blan str1 qiymat umuman yuq degani] 
// // [1 str dagi blan str1 dagi malumotlar qisman bor ] [0 str dagi blan str1 xammasi birbiriga tugri keladi]
//========================================
// let str = 'Academiy'
// console.log(str[3]);// shunday yozsa minusli index qabul qilmasydi yani undefined chiqadi  
// console.log(str.at(-2));// at minusli index qabul qiladi 
// console.log(str.charAt(0));//charAt bush joy chiqaradi
//=======================================
//Methods
let son = 123456543
let str = 'Melikulov komronbek  Kom '
// console.log(str.length);         //length nechta harf borligini chiqarib beradi
// console.log(str.toUpperCase());    //toUpperCase hamma harflarni katta qilib beradi
// console.log(`${son}`.toUpperCase());
// console.log(str.toLowerCase);     //toLowerCase hamma harflarni kichik qilib beradi
// console.log(str.indexOf('lov'));     //indexOf nechinchidan boshlansa ushandan hisoblaydi agar yuq harf yozsak -1 chidaradi 
// console.log(str.indexOf('lov',3));     //agar , liboy son kiritsag shundan boshlab qidiradi
// console.log(str.lastIndexOf('lov'));     //lastIndexOf bu oxiridan boshlab qidiradi
// console.log(str.includes('k'));       //includes bu index ichida bergan malumot bolsa truue chiqaradi bolmasa false chiqaradi 
// console.log(str.startsWith('M'));    //startsWith bu boshu beringan index bilan boshlanganmi yuqmi tekshiradi
// console.log(str.endsWith('v'));     //endsWith bu oxiri berilgan index blan tugaganmi yuqmi tekshirib beradi
// console.log(str.padEnd(13,"."));      //padEnd berilggan index ning oxiriga .... qoyadi odatta oxiriga sigmayqolgan index larni ... qilibqoyadi
// console.log(str.padStart(13,"."));   //padStart berilggan index ning boshiga ....  qoyadi odatta boshiga sigmayqolgan index larni ... qilibqoyadi
// console.log(str.slice(0,7));      // slice berilgan qiymatni keragini kesib olish slice - qiymatham oladi
// console.log(str.substring(6,0)); // substring - qiymat olmaydi chappa qilsayam ishlaydi
// console.log(eval(`2+8*2`));     // eval string ichidagi arfmetik amallardi bajaradi
//======================================== 
// console.log(str.trim()); // trim boshidagi oxiridagi bush joylarni ignor qilibharadi
// console.log(str.trimEnd()); // oxiridagi bosh joylarni olib tashlaydi
// console.log(str.trimStart()); // boshidagi bosh joylarni olib tashlaydi
//========================================
//  console.log(str.split('',2));// split elementni errey ga uzgartirib beradi va harbitta harfni ajratib beradi 2-parametir limit boladi
//  console.log(str.concat(' Kamar Qishlogidan')); //stringa malumot kushib boraveradi
//  console.log(new String('Kamar siti').valueOf()); // valueOf konstraktordan value qilib chiqarib beradi
//  console.log(str.replace(/kom/gi,'KOM'));// replace string ichidagi bosh harfini katta qilib beradi 2-ta index qabul qiladi 1-uzgartirmoqchi bolgar harfni yozadi 2-usha harfni katta qilib qoyadi
 
 
//  for(char of str){  // char  berilgan malumotni har bittasiga birmabir kirib chaqadi
//     console.log(char);
//  }
//========================================