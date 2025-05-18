npm run dev

> express-practice@1.0.0 dev
> nodemon ./dist/app/server.js

[nodemon] 3.1.10
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,cjs,json
[nodemon] starting `node ./dist/app/server.js`
/Users/username/Developer/Learn/express-practice/node_modules/path-to-regexp/dist/index.js:73
            throw new TypeError(`Missing parameter name at ${i}: ${DEBUG_URL}`);
            ^

TypeError: Missing parameter name at 1: https://git.new/pathToRegexpError
    at name (/Users/username/Developer/Learn/express-practice/node_modules/path-to-regexp/dist/index.js:73:19)
    at lexer (/Users/username/Developer/Learn/express-practice/node_modules/path-to-regexp/dist/index.js:91:27)
    at lexer.next (<anonymous>)
    at Iter.peek (/Users/username/Developer/Learn/express-practice/node_modules/path-to-regexp/dist/index.js:106:38)
    at Iter.tryConsume (/Users/username/Developer/Learn/express-practice/node_modules/path-to-regexp/dist/index.js:112:28)
    at Iter.text (/Users/username/Developer/Learn/express-practice/node_modules/path-to-regexp/dist/index.js:128:30)
    at consume (/Users/username/Developer/Learn/express-practice/node_modules/path-to-regexp/dist/index.js:152:29)
    at parse (/Users/username/Developer/Learn/express-practice/node_modules/path-to-regexp/dist/index.js:183:20)
    at /Users/username/Developer/Learn/express-practice/node_modules/path-to-regexp/dist/index.js:294:74
    at Array.map (<anonymous>)

Node.js v22.14.0
[nodemon] app crashed - waiting for file changes before starting...
