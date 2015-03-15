var express = require('express');
var app = express();
var directoryTree = require('directory-tree');
var router = express.Router();
var bodyParser = require('body-parser');
var server;

var EXPRESS_PORT = 4000;
var EXPRESS_ROOT = 'www';

//app.use(require('connect-livereload')());
console.log('got here');
router.route('/galleries')
.get(function(req, res) {
    var tree = directoryTree.directoryTree('./www/content', ['.jpg']);
    var galleries = [ ];

    var galleryTreeNodes = tree.children;

    for (var galleryNode in galleryTreeNodes) {
        var gallery = {
           title : galleryTreeNodes[galleryNode].name,
           images : galleryTreeNodes[galleryNode].children
        };
        console.log('pushing gallery', gallery);
        galleries.push(gallery);
    }

    res.send(galleries);
});

app.use('/api/v1', router);
app.use(express.static(EXPRESS_ROOT));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
server = app.listen(EXPRESS_PORT, function() {
    console.log('listening de la port', EXPRESS_PORT);
});


module.exports = app;
