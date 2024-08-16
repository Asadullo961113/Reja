console.log('web serverni boshlash');
const express = require('express');
const app = express();
const http = require('http');
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
// 1 enter code
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// 2 : session code
// 3 view code
app.set('views', 'views');
app.set('view engine', 'ejs');

// 4 routing code
app.post("/create-item", (req, res) => {
    // TODO
})
app.get('/author', (req, res) => {
    res.render("author",{user: user} );
})
app.get("/", function(req, res) {
    res.render("harid");
});
const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function(){
    console.log(`this server is running  successfully on port: ${PORT}`);
})

// comment






