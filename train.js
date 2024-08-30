// MIT 18 TASK F
// Yagona string argumentga ega findDoublers nomli function tuzing
// Agar stringda bittadan ortiq bir xil harflar ishtirok etgan bo'lsa
// true yokida false natija qaytarsin.

function findDouble(a) {
  let b = a.split('');
  let seen = [];

  for (let i = 0; i < b.length; i++) {
    let s = b[i];
    if (seen.includes(s)) {
      return true; 
    }
    seen.push(s);
  }

  return false; 
}

console.log(findDouble("hello")); // true
console.log(findDouble("helo"));  // false


// MIT 18 TASK-E:

/*Shunday function tuzing, u bitta string argumentni qabul qilib osha stringni teskari qilib return qilsin.

MASALAN: getReverse("hello") return qilsin "olleh"*/

// function teskari(a){
//     b = a.split('').reverse().join('');
//     return b;
//   }
//   console.log(teskari("salom")); // molas



/*MIT 18 TASK-D: 

Shunday function tuzing, u 2ta string parametr ega bolsin, 
hamda agar har ikkala string bir hil harflardan iborat bolsa
true aks holda false qaytarsin
MASALAN: 
checkContent("mitgroup", "gmtiprou") return qiladi true;*/

// function Letter(a,b) {
//     s = a.split('').sort();
//     f = b.split('').sort();
    
//     return s.join('') === f.join('');
// };
// console.log(Letter("busan","nsabu")); // true
// console.log(Letter("aka","opa")); // false



// MIT 14 TASK-C

// Shop nomli class tuzing, va bu class 3 xill parametr qabul qilsin.
// Hamda classning quyidagdek 3'ta metodi bo'lsin:

// 1) qoldiq
// 2) sotish
// 3) qabul

// Har bir metod ishga tushgan vaqtda log qilinsin

// MASALAN:
// const shop = new Shop(4, 5, 2)

// shop.qoldiq();
// natija qaytishi kerak: Hozir 20: 40'da 4'ta non, 5'ta lag'mon va 2'ta cola mavjud

// shop.sotish("non", 3); & shop.qabul("cola", 4); & shop.qoldiq();
// Natija qaytishi kerak: Hozir 20:50da 1ta non, 5ta lag'mon va 6ta cola mavjud!
// ===================================================================================
// class Shop {
//     constructor(side_menu, food_name, drinks, count) {
//         this.side_menu = side_menu;
//         this.food_name = food_name;
//         this.drinks = drinks;
//         this.count = count
//     }
//     qoldiq() {
//         const date = new Date()
//         if (this.side_menu <= 0 || this.food_name <= 0 || this.drinks <= 0) {
// 			console.log("Hozircha omborda mahsulotlar tugaganlari bor");
// 		} 
//         else {
//             const ombor = (`
//                 Hozir 
//                 ${date.toLocaleTimeString()} da 
//                 ${this.side_menu}ta non, 
//                 ${this.food_name}ta lag'mon va 
//                 ${this.drinks} blok cola mavjud`);
// 			console.log(ombor);
//             }
//     }
//     sotish(mahsulot, soni) {
//         switch (mahsulot.toLowerCase()) {
//             case "non":
//                 this.side_menu -= soni;
//                 break;
//             case "lag'mon":
//                 this.food_name -= soni;
//                 break;
//             case "cola":
//                 this.drinks -= soni;
//                 break;
//             default:
//                 console.log(`Hozirda omborda '${mahsulot}' mavjud emas`);
//                 break;
//     }
//     }
//     qabul(mahsulot, qabul_soni) {
//         switch (mahsulot.toLowerCase()) {
//             case "non":
//                 this.side_menu += qabul_soni;
//                 break;
//             case "lag'mon":
//                 this.food_name += qabul_soni;
//                 break;
//             case "cola":
//                 this.drinks += qabul_soni;
//                 break;
//             default:
//                 console.log(`Hozirda omborda '${mahsulot}' mavjud emas`);
//                 break;
//             }
//     }
// }
// const shop = new Shop(4, 5, 2)
// // shop.qoldiq()
// shop.sotish("non", 1)
// shop.qabul('cola', 50)
// shop.qoldiq()

// MIT 18 TASK B

// Shunday, function tuzingki, bu function yagona parametrga ega bo'lib
// string tarkibidagi sonlar miqdorini qaytarsin

// Masalan: countDigits("ad2a4y9wet0sfgb983")
// Yoqoridagi string tarkibida 7 dona raqam qatnashganligi uchun, natija 7 qaytadi


// function countDigits(a) {
//     let count = 0;
//     for (let i = 0; i < a.length; i++) {
//         if (a[i] >= '0' && a[i] <= '9') {
//             count++;
//         }
//     } 
//     return count;
// }
// // Misol uchun
// console.log(countDigits("ad2a4y9wet0sfgb983")); // javob: 7


// callback function lar
// const list = ['0 dan 12 yoshgacha chipta narhi 3000 ming',
//               '12 dan 18 yoshgacha chipta narhi 5000 ming',
//               '18 dan 22 yoshgacha chipta narhi 8000 ming',
//               '22 dan kattalarga chipta narhi 10000 ming'];

// const { resolveInclude } = require("ejs");

// function yosh(a,callback){
//      if(typeof a !== 'number') callback("insert number", null);
//      else if(a <= 12) callback(null, list[0]);
//      else if(a > 12 && a <= 18) callback(null, list[1]);
//      else if(a > 18 && a <= 22) callback(null, list[2]);
//      else {
//         setTimeout(function(){callback(null, list[3]);},2000)
//     }
// };
    
// console.log("passed here 1") 

// yosh(67, (err, data) => {
//     if(err) console.log("error:", err);
//     console.log(data);
// });
// console.log("passed here 2");

 
// async function

// async function yosh(a){
//     if(typeof a !== 'number') throw new Error ("insert number");
//     else if(a <= 12) return(list[0]);
//     else if(a > 12 && a <= 18) return(list[1]);
//     else if(a > 18 && a <= 22) return(list[2]);
//     else {
//         return(list[3])
//     //    setTimeout(function(){return(list[3]);},2000)
//    }
// };

// call via then, catch

// console.log('passed here 1')
// yosh(65)
//     .then((data) => {
//         console.log('javob:', data);
//     })
//     .catch((err) => {
//         console.log('ERROR:', err);
//     });
// console.log('passed here 2')

// call via async function

// console.log('passed here 1')
// async function run() {
//     let javob = await yosh(65)
//     console.log(list[3])
//     javob = await yosh(19)
//     console.log(list[2])
// };
// run();
// console.log('passed here 2')

// MIT 18 TASK A

// Masalani izohi:
// A-TASK: 

/* Shunday 2 parametrli function tuzing, hamda birinchi parametrdagi 
 letterni ikkinchi parametrdagi sozdan qatnashga sonini return qilishi kerak boladi.
 MASALAN countLetter("e", "engineer") 3ni return qiladi.*/

// masalani yechimi
// function countLetter(a, b) {
//     let  count = 0;
//     for(let i = 0;i<b.length; i ++ ){
//         if(b[i] === a){
//             count++;
//         }  

//     };
//     return count;     
// };
// console.log(countLetter("l", "asadulloh")); // javob 2




