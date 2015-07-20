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

Seems like the fix for this went through on version 6.0.1 (we are currently on 6.0.0 in the package.json)
but for some reason the tarball for 6.0.1 is not deployed and npm is throwing an 404.

Check the issue reported by a guy in babel-connect repo:
https://github.com/babel/babel-connect/issues/7

Output:

{code}
npm ERR! fetch failed https://registry.npmjs.org/babel-connect/-/babel-connect-6.0.1.tgz
npm WARN retry will retry, error on last attempt: Error: fetch failed with status code 404
{code}
