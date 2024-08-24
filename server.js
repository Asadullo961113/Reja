const http = require('http');
const mongodb = require('mongodb');

let db;
const connectionString = "mongodb+srv://Asadulloh:0ARlpx4L8BQjFJBu@cluster0.lyocx.mongodb.net/Reja"
 
mongodb.connect(connectionString,
    {
    useNewUrlParser: true, 
    useUnifiedTopology: true
    },
    (err, client) => {
        if(err)
            console.log("error on connection mongodb");
        else {
            console.log("mongodb connection succedd");
            module.exports = client;

            const app = require('./app');
            const server = http.createServer(app);
            let PORT = 3000;
            server.listen(PORT, function(){
                console.log(`this server is running  successfully on port: ${PORT}, http://localhost:${PORT}`);
            });
        }
    });