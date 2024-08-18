// callback function lar
const list = ['0 dan 12 yoshgacha chipta narhi 3000 ming',
              '12 dan 18 yoshgacha chipta narhi 5000 ming',
              '18 dan 22 yoshgacha chipta narhi 8000 ming',
              '22 dan kattalarga chipta narhi 10000 ming'];

function yosh(a,callback){
     if(typeof a !== 'number') callback("insert number", null);
     else if(a <= 12) callback(null, list[0]);
     else if(a > 12 && a <= 18) callback(null, list[1]);
     else if(a > 18 && a <= 22) callback(null, list[2]);
     else {
        setTimeout(function(){callback(null, list[3]);},2000)
    }
};
    
console.log("passed here 1") 

yosh(67, (err, data) => {
    if(err) console.log("error:", err);
    console.log(data);
});
console.log("passed here 2");
