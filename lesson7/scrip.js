// let obj = {
//     name:'Salim',
//     age:35,
//     child:{
//         name:'Shohzod',
//         age:25,
//         child:{
//             name:'Abbos',
//             age:20,
//         },
//     },
// };

// let sum=0;
// while(1){
//     if(obj) sum += obj.age;
//     else break;
//     obj = obj.child;
// }
// console.log(sum);
//============================================
//THIS metodi kanday ishlatilishi
// let user = {
//     name:"kamar",
//     sayHi: function(){
//         // console.log(`hello ${user.name}`);
//         console.log(`hello ${this.name}`); //Doim this dep yozib ketish yaxshi
//     }
// }
// let us = user
// user = null
// us.sayHi()
//THIS error function da umuman ishlamaydi error function qanday ()=> 
    //function ning ()() karrey funkshon deydi
//============================================

// function getName(name) {
//     this.name = name; 
//     this.sayHi = function () {
//       console.log('hello', this.name);
//       return 'hey';
//     };
//   }
//   new getName("Komronbek").sayHi(); 
//   new getName("Samardin").sayHi();
//============================================
////symbol yunik id yasab beradi
// let id1 = Symbol("id")
// let id2 = Symbol("id")
// console.log(id1);
// console.log(id1 ===  id2);

// let obj = {
//     [id1]:'Komronbek',
//     ["id2"]:'Melikulov'
// }
// console.log(obj[id1]);
// console.log(obj[id2]);
////syumbol qiymati obj kiy si bolaoladi 
//============================================
// let obj = {
//     name:'Salom ',
//     title:'Alaykum'
// }
// // console.log('title' in obj); //ichida malumot bor yoki yuq degan kiy tekshirish usuli
// for(value in obj){
//     console.log(obj[value]);//obj ichidagi value chiqarish usuli
//     console.log(obj.value);//obj ichidagi value chiqarish usuli agar nuqta value dep chaqirsag u value kiy dep izlaydi kein undefined boladi  

// }
//============================================
// buni direction deyiladi 
// let obj = {
//     name: 'dalom',
//     surname:'privet',
//     doblsurname:'hello',
//     child:{
//        name3:"children"
//     }
// }
// const {name:newName, surname, doblsurname , child:{name3}} = obj // buni direction deyiladi 
// //oldig : noqta qoyib nomini uzgartirda boladi
// console.log(doblsurname);
// console.log(name3);
//============================================
//sipriate opererator  ... 3-ta nuqta kopiy desa xam boladi
// let obj = {
//         child:{
//            name3:"children",
//            surname: 'bolalar'
//         } 
//     }
//     console.log(obj) 
//     obj = {...obj.child}
//     console.log(obj);

//============================================
// let obg = {
//     name:'salom',
//     surname:'valaykum'
// }
// console.log({obg,name:'salom dunyo'});
// console.log({...obg,name:'salom dunyo'});
// console.log({name:'salom dunyo', ...obg});//birinchida yozilgan ignor bob ketaveradi

