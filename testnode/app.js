var http = require('http'); // ici on importe le module http qui est integré par defaut dans nodeJS

// création du server, et renvoie hello world quand un utilisateur se connecte
var server = http.createServer(function(req,res){
    res.send('hello world');
});

server.listen(8080) // on lance le serveur, qui ecoutera sur le port 8080
