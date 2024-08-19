// callback function lar
// const list = ['0 dan 12 yoshgacha chipta narhi 3000 ming',
//               '12 dan 18 yoshgacha chipta narhi 5000 ming',
//               '18 dan 22 yoshgacha chipta narhi 8000 ming',
//               '22 dan kattalarga chipta narhi 10000 ming'];

const { resolveInclude } = require("ejs");

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
function countLetter(a, b) {
    let  count = 0;
    for(let i = 0;i<b.length; i ++ ){
        if(b[i] === a){
            count++;
        }  

    };
    return count;     
};
console.log(countLetter("l", "asadulloh")); // javob 2




