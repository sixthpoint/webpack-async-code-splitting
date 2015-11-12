// Load a css document
require('./styles.css');

// Create a image element, load using require, then add to div tag
var img = document.createElement('img');
img.src = require('./bootstrap-logo.png');
img.height = 150;
img.width = 150;
document.getElementById('image').appendChild(img);

// Example Async loading
var a = require("./a");
require.ensure(["./b"], function (require) {
    require("./a").dosomething();
    var c = require("./c");
});

