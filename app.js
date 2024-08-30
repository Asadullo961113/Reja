console.log('web serverni boshlash');
const express = require('express');
const app = express();
const fs = require('fs');

let user;
fs.readFile("database/user.json", "utf8", (err, data) => {
    if(err) {
        console.log("ERROR", err);
    }
    else {
        user = JSON.parse(data);
    }
});

// MongoDB chaqirish
const db = require("./server").db();
const mongodb = require("mongodb");

// 1 enter code
// app.use(): Middleware qo'shish uchun ishlatiladi, barcha so'rovlar uchun yoki ma'lum bir yo'nalish uchun.
// Middleware'lar dasturda so'rovlarni qabul qilib, ularga kerakli ishlov beradi va keyingi jarayonga o'tkazadi.
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// 2 : session code
// 3 view code
// SET() => Express.js ilovasining ko'rinishlarini qanday ishlashini va qayerda saqlanishini belgilaydi, 
app.set('views', 'views');
app.set('view engine', 'ejs');

// 4 routing code
// POST() => so'rovlari ma'lumot yuborish yoki yaratish uchun ishlatiladi.
// req.body: HTTP so'rovining tanasida yuborilgan ma'lumotlarni saqlaydi.
/* 'req.body.reja:' req.body ob'ekti ichida yuborilgan JSON ma'lumotlardan reja nomli maydonni olish uchun ishlatiladi. 
 Demak, foydalanuvchi so'rov yuborishda reja maydoniga qiymat kiritgan.*/
app.post("/create-item", (req, res) => {
    console.log("user entered /create-item");
    const new_reja = req.body.reja;
    db.collection("plans").insertOne({reja:new_reja}, (err,data) => {
        console.log(data.ops);
        res.json(data.ops[0]);
    });
});

app.post("/delete-item", (req, res)=>{
    const id = req.body.id;
    db.collection("plans").deleteOne(
        { _id : new mongodb.ObjectId(id)},
        function (err, data){
          res.json({ state:"success"});
        }
    );

});

app.post("/edit-item", (req, res) => {
    const data = req.body;
    console.log(data);
    db.collection("plans")
    .findOneAndUpdate({_id:new mongodb.ObjectId(data.id)},
    {$set:{reja: data.new_input}}, function (err, data) {
        res.json({ state:"success"});
    }
);
})

app.post("/delete-all",(req, res) => {
    if(req.body.delete_all){
        db.collection("plans").deleteMany(function(){
            res.json({ state:"hamma rejalarni o'chirish"});
        })
    }
});

// GET() => so'rovlari web sahifalarni olish uchun ishlatiladi.

app.get('/author', (req, res) => {
    res.render("author",{user: user} );
})
app.get("/", function(req, res) {
    db.collection("plans").find().toArray((err,data) =>{
        if(err) {
            console.log(err);
            res.end("something went wrong");
        } else {
            console.log(data);
            res.render("reja", {items: data});
        }
    });
});

module.exports = app;

// comment



