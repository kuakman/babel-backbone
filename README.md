# babel-backbone
Playground for Babel-Backbone integration on ES6

Important Note: Babel-Connect seems to have a bug in _index.js_ line 16:

```opts.ignore = babel._util.regexify(opts.ignore);```

it should be 'util' without the underscore:

```opts.ignore = babel.util.regexify(opts.ignore);```
