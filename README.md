# Babel Backbone integration on ES6

Playground for testing Babel-Backbone integration on ES6 features.

This simple server uses Babel-connect plugin to transpile code on demand per request.

To run the playground tool:

1. ```npm install```
* ```bower install```
* ```node run```

Important Note: Babel-Connect seems to have a bug in _index.js_ line 16.
Unfortunately, you have to fix it manually after running ```npm install```, open index.js from ```/node_modules/babel-connect/```

Replace this: ```opts.ignore = babel._util.regexify(opts.ignore);```
with this: ```opts.ignore = babel.util.regexify(opts.ignore);```
