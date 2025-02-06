// {kiy:value}
// let acount = {name: 'welkom to kamar',sarazm: 'kamar sarazimda joylashgan'};
// console.log(acount);
//======================================

// let newObj1 = {};
// let newObj2 = Object();
// console.log(newObj1 , newObj2);

//======================================
// OBJ chaqirish usullari
// let acound = {
//     name:'komronbek',
//     surname: 'Melikulov',
//     age:'14-01-2005',
//     'ful name': 'komronbek melikulov',
//     12:79952838606
// };
// console.log(acound.name);
// console.log(acound['ful name']);
// console.log(acound[12]);

//======================================
// OBJ chaqirish usullari
// let acound = {
//     name:'komronbek',
//     surname: 'Melikulov',
//     age:'14-01-2005',
// };
// let kiy = 'surname'
// console.log(acound.kiy);
// console.log(acound[kiy]);
// console.log(acound['kiy']);

//======================================
//OBG ichidaga malumotni uzgartirish usullari
// let acound = {
//     name:'komronbek',
//     surname: 'Melikulov',
//     age:'14-01-2005',
// }
// acound.name = 'Samardin';
// acound.surname = 'Jaxbarov';
// acound.age = 'Yoshi haqida malumot bilmiman';
// console.log(acound);

//======================================
//OBG ichidaga malumotni qoshish 
// let acound = {
//     name:'komronbek',
//     surname: 'Melikulov',
//     age:'14-01-2005',
// }
// acound.name2 = 'Samardin';
// acound.surname2 = 'Jahbarov';
// acound.age2 = 'Yoshi haqida malumot bilmiman';
// console.log(acound);

//======================================
// OBG ichida 2-ta birxil name kelsa eng oxiridagi name yuqoridagi xamma name ignor qiladi,
//  shuning uchun eng oxiridagi name chiqadi!

// let acound = {
//     name:'komronbek',
//     surname: 'Melikulov',
//     age:'14-01-2005',
//     name: 'Salom Alaykum Komronbek'
// }
// console.log(acound);

//======================================
//OBG ichidagi malumotlardi uchirish,
// delete qilishtayam 2-ta birxil bolsa oxiridagini delete qiladi!

// let acound = {
//     name:'komronbek',
//     surname: 'Melikulov',
//     age:'14-01-2005',
//     name: 'Salom Alaykum Komronbek'
// }
// Object.seal(acound); // seal blan faqat malumotni uzgartirsa boladi koshibam nolmaydi udalitxam bolmaydi
// Object.freeze(acound)// Object muzlatib qoyadi
// delete acound.name;
//  acound.salom = "hello word"
// acound.name = 'salom xammaga'
// console.log(acound);

//======================================

// let ac1 = {
//     name:'komronbek',
//     surname: 'Melikulov',
//     age:'14-01-2005',
//     name: 'Salom Alaykum Komronbek'
// };
// const ac2 = structuredClone(ac1)// ac1 mallumotini uzgartirsayam ac2 uzgarmaydi structuredClone-o'zini kopiya qiladi oladi
// console.log(ac2);

//======================================
//bu sal murakkab kurinish sabab kiy ikixil
// let name = "komronbek";
// let surname = 'melikulov';
// let cd1 = {
//     ism:name,
//     familya:surname,
// }
// console.log(cd1);

//======================================
//bu soda korinish sabab kiy lar birxil 
// let name = "komronbek";
// let surname = 'melikulov';
// let cd1 ={name, surname}
// console.log(cd1);

//======================================

// let cd1 ={
// name:'kamar',
// surname:'kamarsiti'
// }
// console.log('name' in cd1);      //   [In] ichida degan manoda keladi 

//======================================
//For kies blan ishlash
// let acound = {
//     name:'komronbek',
//     surname: 'Melikulov',
//     age:'14-01-2005',
//     oche:"Usmonkulovich"  

// }
// for(i in acound){
//     console.log(acound[i]);
// }
 
