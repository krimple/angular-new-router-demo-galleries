console.log('boo!');
// app.js
var app = express();
var express = require('express');
var bodyParser = require('body-parser');
var server;

var EXPRESS_PORT = 4000;
var EXPRESS_ROOT = 'www';

app.use(require('connect-livereload')());
console.log('got here');
app.use(express.static(EXPRESS_ROOT));
app.route('/api/v1/galleries', function(req, res) {
     fs.readdir('www/content', function(err, files) {
        console.log('outputting');
        if (err) {
           console.log(err);
           return;
        }
        var result = [];
        for (var file in files) {
           result.push({
             id: file,
             title: 'Gallery: ' + file,
             location: file
           });
        }
        res.send(res);
     });
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
server = app.listen(EXPRESS_PORT, function() {
    console.log('listening de la port', EXPRESS_PORT);
});


module.exports = app;
