console.log('web serverni boshlash');
const express = require('express');
const app = express();
const http = require('http');

// 1 enter code
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// 2 : session code

// 3 view code
app.set('views', 'views');
app.set('view engine', 'ejs');

// 4 routing code
app.get("/hello", function(req, res) {
    res.end(`<h1 style = background:red>Hello World by Parker<h1>`);
});
app.get("/gift", function(req, res) {
    res.end(`<h1 style = background:blue>Siz sovgalar bolimidasiz<h1>`);
});
const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function(){
    console.log(`this server is running  successfully on port: ${PORT}`);
})
