# Theory

- [Theory](#theory)
  - [Asymtonic Notation](#asymtonic-notation)
    - [Big Theta (Θ)](#big-theta-θ)
    - [Common Runtimes](#common-runtimes)
    - [Big Omega (Ω) and Big O (O)](#big-omega-ω-and-big-o-o)
  - [Regular Expression](#regular-expression)
    - [Literals](#literals)
    - [Alternation](#alternation)
    - [Character Sets](#character-sets)
    - [Wild for Wildcards](#wild-for-wildcards)
    - [Ranges](#ranges)
    - [Shorthand Character Classes](#shorthand-character-classes)
    - [Grouping](#grouping)
    - [Quantifies](#quantifies)
      - [Fixed](#fixed)
      - [Optional](#optional)
      - [O or More (Kleene Star), 1 or More (Kleene Plus)](#o-or-more-kleene-star-1-or-more-kleene-plus)
      - [Anchors](#anchors)
    - [Review](#review)
  - [Node.js](#nodejs)
    - [async/await](#asyncawait)
    - [Status Codes](#status-codes)
    - [API Architectures](#api-architectures)
    - [Servers](#servers)
    - [Docker](#docker)
    - [Closures](#closures)
      - [Emulating private methods with closures](#emulating-private-methods-with-closures)
    - [Imperative vs. Functional Programming](#imperative-vs-functional-programming)
    - [Functions](#functions)
      - [Constructors](#constructors)
      - [Methods](#methods)
    - [`bind`](#bind)
    - [`setTimeout`](#settimeout)
      - [Solution](#solution)
    - [`this`](#this)
      - [Regular](#regular)
      - [Arrow](#arrow)
    - [`return`](#return)
      - [Regular `return`](#regular-return)
      - [Arrow `return`](#arrow-return)
    - [Code](#code)
      - [Compose](#compose)
      - [Find Most Frequent](#find-most-frequent)
      - [Lodash Get](#lodash-get)
      - [Maximum Subarray Sum](#maximum-subarray-sum)
      - [Memorize](#memorize)
      - [Reverse Linked List](#reverse-linked-list)
      - [Throttle](#throttle)
    - [React](#react)
      - [Agular vs React](#agular-vs-react)
      - [Virtual Dom](#virtual-dom)
      - [Rendering](#rendering)
      - [Life Cycle](#life-cycle)
      - [Class Component vs. Functional Component](#class-component-vs-functional-component)
      - [`import`](#import)
      - [Best Practices](#best-practices)
  - [Workers](#workers)
    - [Service Workers](#service-workers)
    - [Web Workers](#web-workers)

## Asymtonic Notation

### Big Theta (Θ)

- We use big Theta when a program has only one case in term of runtime.

### Common Runtimes

- Θ(1). This is constant runtime. This is the runtime when a program will always do the same thing regardless of the input. For instance, a program that only prints “hello, world” runs in Θ(1) because the program will always just print “hello, world”.
- Θ(log N). This is logarithmic runtime. You will see this runtime in search algorithms.
- Θ(N). This is linear runtime. You will often see this when you have to iterate through an entire dataset.
- Θ(N\*logN). You will see this runtime in sorting algorithms.
- Θ(N2). This is an example of a polynomial runtime. You will see this runtime when you have to search through a two-dimensional dataset (like a matrix) or nested loops.
- Θ(2N). This is exponential runtime. You will often see this runtime in recursive algorithms (Don’t worry if you don’t know what that is yet!).
- Θ(N!). This is factorial runtime. You will often see this runtime when you have to generate all of the different permutations of something. For instance, a program that generates all the different ways to order the letters “abcd” would run in this runtime.

### Big Omega (Ω) and Big O (O)

- We use big Omega or Ω to describe the best case and big O or O to describe the worst case.

## Regular Expression

### Literals

In Regular expression, the `literals` are the simplest characters that will match the exact text of the literals. For example, the regex `monkey` will completely match the text `monkey` but will also match `monkey` in text `The monkeys like to eat bananas.`

### Alternation

Alternation indicated by the pipe symbol `|`, allows for the matching of either of two subexpressions. For example, the regex `baboons|gorillas` will match the text baboons as well as the text `gorillas`.

### Character Sets

Regular expression character sets denoted by a pair of brackets `[]` will match any of the characters included within the brackets. For example, the regular expression `con[sc]en[sc]us` will match any of the spellings `consensus`, `concensus`, `consencus`, and `concencus`.

### Wild for Wildcards

In Regular expression, wildcards are denoted with the period `.` and it can match any single character (letter, number, symbol or whitespace) in a piece of text. For example, the regular expression `.........` will match the text `orangutan`, `marsupial`, or any other 9-character text.

### Ranges

Regular expression ranges are used to specify a range of characters that can be matched. Common regular expression ranges include: [A-Z]. : match any uppercase letter [a-z]. : match any lowercase letter [0-9]. : match any digit [A-Za-z] : match any uppercase or lowercase letter.

### Shorthand Character Classes

While character ranges are extremely useful, they can be cumbersome to write out every single time you want to match common ranges such as those that designate alphabetical characters or digits. To alleviate this pain, there are **shorthand character** classes that represent common ranges, and they make writing regular expressions much simpler. These shorthand classes include:

- `\w`: the “word character” class represents the regex range `[A-Za-z0-9_]`, and it matches a single uppercase character, lowercase character, digit or underscore
- `\d`: the “digit character” class represents the regex range `[0-9]`, and it matches a single digit character
- `\s`: the “whitespace character” class represents the regex range `[ \t\r\n\f\v]`, matching a single space, tab, carriage return, line break, form feed, or vertical tab

In addition to the shorthand character classes \w, \d, and \s, we also have access to the negated shorthand character classes! These shorthands will match any character that is NOT in the regular shorthand classes. These negated shorthand classes include:

- `\W`: the “non-word character” class represents the regex range `[^A-Za-z0-9_]`, matching any character that is not included in the range represented by `\w`
- `\D`: the “non-digit character” class represents the regex range `[^0-9]`, matching any character that is not included in the range represented by `\d`
- `\S`: the “non-whitespace character” class represents the regex range `[^ \t\r\n\f\v]`, matching any character that is not included in the range represented by `\s`

### Grouping

In Regular expressions, grouping is accomplished by open `(` and close parenthesis `)`. Thus the regular expression `I love (baboons|gorillas)` will match the text `I love baboons` as well as `I love gorillas`, as the grouping limits the reach of the | to the text within the parentheses.

### Quantifies

#### Fixed

In Regular expressions, fixed quantifiers are denoted by curly braces `{}`. It contains either the exact quantity or the quantity range of characters to be matched. For example, the regular expression `roa{3}r` will match the text roaaar, while the regular expression `roa{3,6}r` will match `roaaar`, `roaaaar`, `roaaaaar`, or `roaaaaaar`.

#### Optional

In Regular expressions, optional quantifiers are denoted by a question mark `?`. It indicates that a character can appear either 0 or 1 time. For example, the regular expression `humou?r` will match the text `humour` as well as the text `humor`.

#### O or More (Kleene Star), 1 or More (Kleene Plus)

In Regular expressions, the Kleene star(`*`) indicates that the preceding character can occur 0 or more times. For example, `meo*w` will match `mew`, `meow`, `meooow`, and `meoooooooooooow`.

The Kleene plus(`+`) indicates that the preceding character can occur 1 or more times. For example, `meo+w` will match `meow`, `meooow`, and `meoooooooooooow`, but not match `mew`.

#### Anchors

Anchors (hat `^` and dollar sign `$`) are used in regular expressions to match text at the start and end of a string, respectively. For example, the regex `^Monkeys: my mortal enemy$` will completely match the text `Monkeys: my mortal enemy` but not match `Spider Monkeys: my mortal enemy` or `Monkeys: my mortal enemy in the wild`. The `^` ensures that the matched text begins with `Monkeys`, and the `$` ensures the matched text ends with `enemy`.

### Review

`\d*\s*\(*\d{3}\)*(\s|-||\.)*\d{3}(\s|-|\.)*\d{3,4}`

Match these strings

- 718-555-3810
- 9175552849
- 1 212 555 3821
- (917)5551298
- 212.555.8731

## Node.js

- `Event Loop` job is to get first function from Event `Queue` and push it to `Call Stack` - last in first out
- `Heap` <=> `Call Stack` => `Web API` => `Queue`

```javascript
setTimeout(() => {
  console.log('setTimeout');
}, 0);

setImmediate(() => {
  console.log('setImmediate');
});

new Promise((resolve) => {
  resolve();
  console.log('resolve');
}).then(() => {
  console.log('then');
});

process.nextTick(() => {
  console.log('nextTick');
});

console.log('log');

// Output:
// resolve
// log
// nextTick
// then
// setTimeout
// setImmediate
```

### async/await

- History:
  - In the past, we depend on `callbacks` to deal with asynchronous, which results in `callback hell`.
  - In ES6, we got `.then()` which makes the code cleaner.
  - In ES7, we got `async/await` which make everything better.
- Ideas:
  - `async/await` helps make JS code easier to work with and understand.
  - It is built upon `Promises` and compatible with all `API` from `Promises`.
  - `async` turns a normal function into a `promise` function and allows the usage of `await`.
  - `await` is placed before a `promise` function and will wait until the `promise` complete.
  - Use `try/catch` to catch the unexpected error.

### Status Codes

|                        | Status Codes                          |
| ---------------------- | ------------------------------------- |
| Information responses  | 100 - Continue                        |
|                        | 101 - Switching Protocols             |
|                        | 102 - Processing (WebDAV)             |
|                        | 103 - Early Hints                     |
| Successful responses   | 200 - OK                              |
|                        | 201 - Created                         |
|                        | 202 - Accepted                        |
|                        | 203 - Non-Authoritative Information   |
|                        | 204 - No Content                      |
|                        | 205 - Reset Content                   |
|                        | 206 - Partial Content                 |
|                        | 207 - Multi-Status (WebDAV)           |
|                        | 208 - Already Reported (WebDAV)       |
|                        | 226 - IM Used (WebDAV)                |
| Redirection messages   | 300 - Multiple Choices                |
|                        | 301 - Moved Permanently               |
|                        | 302 - Found                           |
|                        | 303 - See Other                       |
|                        | 304 - Not Modified                    |
|                        | 305 - Use Proxy                       |
|                        | 306 - Unused                          |
|                        | 307 - Temporary Redirect              |
|                        | 308 - Permanent Redirect              |
| Client error responses | 400 - Bad Request                     |
|                        | 401 - Unauthorized                    |
|                        | 402 - Payment Required                |
|                        | 403 - Forbidden                       |
|                        | 404 - Not Found                       |
|                        | 405 - Method Not Allowed              |
|                        | 406 - Not Acceptable                  |
|                        | 407 - Proxy Authentication Required   |
|                        | 408 - Request Timeout                 |
|                        | 409 - Conflict                        |
|                        | 410 - Gone                            |
|                        | 411 - Length Required                 |
|                        | 412 - Precondition Failed             |
|                        | 413 - Payload Too Large               |
|                        | 414 - URI Too Long                    |
|                        | 415 - Unsupported Media Type          |
|                        | 416 - Range Not Satisfiable           |
|                        | 417 - Expectation Failed              |
|                        | 418 - I'm a teapot                    |
|                        | 421 - Misdirected Request             |
|                        | 422 - Unprocessable Entity (WebDAV)   |
|                        | 423 - Locked (WebDAV)                 |
|                        | 424 - Failed Dependency (WebDAV)      |
|                        | 425 - Too Early                       |
|                        | 426 - Upgrade Required                |
|                        | 428 - Precondition Required           |
|                        | 429 - Too Many Requests               |
|                        | 431 - Request Header Fields Too Large |
|                        | 451 - Unavailable For Legal Reasons   |
| Server error responses | 500 Internal Server Error             |
|                        | 501 Not Implemented                   |
|                        | 502 Bad Gateway                       |
|                        | 503 Service Unavailable               |
|                        | 504 Gateway Timeout                   |
|                        | 505 HTTP Version Not Supported        |
|                        | 506 Variant Also Negotiates           |
|                        | 507 Insufficient Storage (WebDAV)     |
|                        | 508 Loop Detected (WebDAV)            |
|                        | 510 Not Extended                      |
|                        | 511 Network Authentication Required   |

### API Architectures

- SOAP (XML)
- RESTful (JSON)
- GraphQL
- gRPC (Google Remote Procedure Call)
- WebSocket (Bi-directional)
- WebHook (Event Driven)

### Servers

|        | nginx (Engine X)     | Apache HTTP Server   |
| ------ | -------------------- | -------------------- |
|        | Reverse Proxy Server |                      |
| Static | Yes                  | No                   |
| Speed  | Faster               |                      |
|        | URI locations        | Filesystem locations |

### [Docker](https://www.docker.com/)

- Image Layers
  - Each layer is an image itself, just one without a human-assigned tag. They have auto-generated IDs though.
  - Each layer stores the changes compared to the image it's based on.
  - An image can consist of a single layer (that's often the case when the squash command was used).
  - Each instruction in a Dockerfile results in a layer. (Except for multi-stage builds, where usually only the layers in the final image are pushed, or when an image is squashed to a single layer).
  - Layers are used to avoid transferring redundant information and skip build steps which have not changed (according to the Docker cache).
- Cached
  - Its parent image exists in the cache
  - The Dockerfile instruction corresponding to the layer is unchanged (or in case of ADD/COPY, the involved files are exactly the same)
  - Cache Gotcha #1: `RUN apt-get update`
  - Using the Cache Well: it is better to update the package management files (`package.json` & `requirements.txt`), you only have to do it once.

### Closures

A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function's scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.

- Lexical scoping

```js
function init() {
  var name = 'Mozilla'; // name is a local variable created by init
  function displayName() {
    // displayName() is the inner function, a closure
    alert(name); // use variable declared in the parent function
  }
  displayName();
}
init();
```

- Closure

```js
function makeAdder(x) {
  return function (y) {
    return x + y;
  };
}

var add5 = makeAdder(5);
var add10 = makeAdder(10);

console.log(add5(2)); // 7
console.log(add10(2)); // 12
```

#### Emulating private methods with closures

```js
var counter = (function () {
  var privateCounter = 0;

  function changeBy(val) {
    privateCounter += val;
  }

  return {
    increment: function () {
      changeBy(1);
    },

    decrement: function () {
      changeBy(-1);
    },

    value: function () {
      return privateCounter;
    },
  };
})();

console.log(counter.value()); // 0.

counter.increment();
counter.increment();
console.log(counter.value()); // 2.

counter.decrement();
console.log(counter.value()); // 1.
```

### Imperative vs. Functional Programming

Imperative

```ts
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function getOdds(arr) {
  let odds = [];
  for (let i = 0; i < arr.length + 1; i++) {
    if (i % 2 !== 0) {
      odds.push(i);
    }
  }
  return odds;
}

console.log(getOdds(arr)); // logs [1, 3, 5, 7, 9]
```

```ts
function getOdds2(arr) {
  return arr.filter((num) => num % 2 !== 0);
}

console.log(getOdds2(arr)); // logs [1, 3, 5, 7, 9]

const getOdds3 = (arr) => arr.filter((num) => num % 2 !== 0);

console.log(getOdds3(arr)); // logs [1, 3, 5, 7, 9]
```

### Functions

#### Constructors

**Regular** can easily construct objects.

```js
function Car(color) {
  this.color = color;
}
const redCar = new Car('red');
redCar instanceof Car; // => true
```

**Arrow** cannot be used as a constructor.

```js
const Car = (color) => {
  this.color = color;
};
const redCar = new Car('red'); // TypeError: Car is not a constructor
```

#### Methods

**Regular** Example

```js
class Hero {
  constructor(heroName) {
    this.heroName = heroName;
  }
  logName() {
    console.log(this.heroName);
  }
}
const batman = new Hero('Batman');

batman.logName(); // Batman
setTimeout(batman.logName, 1000); // undefined
setTimeout(batman.logName.bind(batman), 1000); // Batman
```

**Arrow** Example

```js
class Hero {
  constructor(heroName) {
    this.heroName = heroName;
  }
  logName = () => {
    console.log(this.heroName);
  };
}

const batman = new Hero('Batman');

batman.logName(); // Batman
setTimeout(batman.logName, 1000); // Batman
setTimeout(batman.logName.bind(batman), 1000); // Batman
```

### `bind`

### `setTimeout`

```ts
for (var i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}
// Output: 5
// Output: 5
// Output: 5
// Output: 5
// Output: 5
```

- `setTimeout` method is asynchronous so that JavaScript runs the asynchronous code once the synchronous code execution is completed.
- At the time of synchronous code (for loop) execution is completed the variable i value is 5 so that we can see 5 inside our console.

```ts
for (let i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}
// Output: 1
// Output: 2
// Output: 3
// Output: 4
// Output: 5
```

- `let` keyword because it creates a new variable on each iteration but `var` keyword is using the same variable throughout the for loop execution.

#### Solution

```ts
for (var i = 0; i < 5; i++) {
  (function (val) {
    //val is parameter
    setTimeout(function () {
      console.log(val);
    }, 1000);
  })(i); // i is argument
}

// -- > output  0,1,2,3,4
```

OR

```ts
for (var i = 0; i < 5; i++) {
  function timeout(val) {
    setTimeout(function () {
      console.log(val);
    }, 1000);
  }
  timeout(i);
}
```

### `this`

- `this` value inside a regular function is dynamic and depends on the invocation.
- But `this` inside the arrow function is bound lexically and equals to `this` of the outer function.

#### Regular

```js
function myFunction() {
  console.log(this);
}
// Simple invocation
myFunction(); // logs global object (window)
```

```js
const myObject = {
  method() {
    console.log(this);
  },
};
// Method invocation
myObject.method(); // logs myObject
```

```js
function myFunction() {
  console.log(this);
}
const myContext = { value: 'A' };
myFunction.call(myContext); // logs { value: 'A' }
myFunction.apply(myContext); // logs { value: 'A' }
```

```js
function MyFunction() {
  console.log(this);
}
new MyFunction(); // logs an instance of MyFunction
```

#### Arrow

```js
const myObject = {
  myMethod(items) {
    console.log(this); // logs myObject
    const callback = () => {
      console.log(this); // logs myObject
    };
    items.forEach(callback);
  },
};
```

### `return`

#### Regular `return`

```js
function myFunction() {
  return 42;
}
myFunction(); // => 42
```

```js
function myEmptyFunction() {
  42;
}
myEmptyFunction(); // => undefined
```

```js
function myEmptyFunction2() {
  42;
  return;
}
myEmptyFunction2(); // => undefined
```

#### Arrow `return`

```js
const increment = (num) => num + 1;
increment(41); // => 42
```

### Code

#### Compose

```js
function compose() {
  var fns = arguments;

  return function (result) {
    for (var i = fns.length - 1; i > -1; i--) {
      result = fns[i].call(this, result);
    }

    return result;
  };
}

var number = compose(Math.round, parseFloat);

number('72.5'); //=> 73
```

#### Find Most Frequent

```js
const a = [1, 2, 3, 4, 5, 1, 1, 2];

// count appearance
const count = (arr) => {
  const obj = {};
  for (const item of arr) {
    if (obj.hasOwnProperty(item)) {
      obj[item] += 1;
    } else {
      obj[item] = 1;
    }
  }
  return obj;
};

// k is the numebr of elements that are returned
const findKMostFrequent = (array, k) => {
  const appearances = count(array);

  const list = Object.entries(appearances).sort((a, b) => {
    return b[1] - a[1];
  });

  return list.map((item) => item[0]).splice(0, k);
};

console.log(findKMostFrequent(a, 1));
// Output => [1]

console.log(findKMostFrequent(a, 2));
// Output => [1, 2]
```

#### Lodash Get

```js
const getValue = () => {};

const get = (object, path, defaultValue) => {
  let keys = path;
  if (typeof keys === 'string') {
    keys = keys.replace(/\[/g, '.').replace(/\]/g, '').split('.');
  }
  const first = keys.shift();
  if (!object.hasOwnProperty(first)) {
    return defaultValue;
  }
  return get(object[key], keys, defaultValue);
};

const object = { a: [{ b: { c: 3 } }] };

console.log(_.get(object, 'a[0].b.c')); // 3
console.log(_.get(object, ['a', '0', 'b', 'c'])); // 3
console.log(_.get(object, 'a.b.c', 'default')); // default
```

#### Maximum Subarray Sum

```ts
const maximumSubarraySum = (nums) => {
  // Initialize currentMax and globalMax
  // with first value of nums
  let endIndex;
  let currentMax = nums[0];
  let globalMax = nums[0];

  // Iterate for all the elements
  // of the array
  for (let i = 1; i < nums.length; ++i) {
    // Update currentMax
    currentMax = Math.max(nums[i], nums[i] + currentMax);

    // Check if currentMax is greater than globalMax
    if (currentMax > globalMax) {
      globalMax = currentMax;
      endIndex = i;
    }
  }

  let startIndex = endIndex;

  // Traverse in left direction to
  // find start Index of subarray
  while (startIndex >= 0) {
    globalMax -= nums[startIndex];

    if (globalMax === 0) break;

    // Decrement the start index
    startIndex--;
  }

  console.log(nums.splice(startIndex, endIndex));
};

// Driver Code

// Given array arr[]
const arr = [-2, -5, 6, -2, -3, 1, 5, -6];

// Function call
maximumSubarraySum(arr);
```

#### Memorize

```js
const memorize = (func) => {
  const cache = {};
  return (...args) => {
    const key = args.join('-');
    if (cache[key]) {
      return cache[key];
    }
    const result = func(...args);
    cache[key] = result;
    return result;
  };
};

const add = (a, b) => {
  console.log('computing');
  return a + b;
};

const memorizeAdd = memorize(add);

console.log(memorizeAdd(1, 2));
console.log(memorizeAdd(3, 4));
console.log(memorizeAdd(1, 2));
```

#### Reverse Linked List

```js
class Node {
  // constructor
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  add(element) {
    const node = new Node(element); // Create a node before adding
    let current;
    if (this.head === null)
      //For first element
      this.head = node;
    else {
      // Iterate till the last item and add value
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }
  printList() {
    let curr = this.head;
    let str = '';
    while (curr) {
      str += curr.element + ' ';
      curr = curr.next;
    }
    console.log(str);
  }
  reverseList() {
    let current = this.head;
    let prev = null;
    let next = null;
    while (current != null) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    // The prev will be pointing to last node, which you will point // to head now so if we start printing from head, list will be
    // reversed
    this.head = prev;
  }
}

let ll = new LinkedList();
// adding more elements to the list
ll.add(10);
ll.add(20);
ll.add(30);
ll.add(40);
ll.add(50);
// returns 10 20 30 40 50
ll.printList();
ll.reverseList();
ll.printList();
```

#### Throttle

```js
const throttle = (fn, delay) => {
  let lastCalled = 0;
  return (...args) => {
    let now = new Date().getTime();
    if (now - lastCalled < delay) {
      return;
    }
    lastCalled = now;
    return fn(...args);
  };
};

const logTimestamp = () => {
  const now = Date.now();
  console.log(`Message at ${now}`);
};

const throttleLog = throttle(logTimestamp, 1000);
```

- If two `throttleLog` functions is called within one second, the second will not be invoked.

### React

#### Agular vs React

|                  | [Angular](https://angular.io/) | [React](https://react.dev/) |
| ---------------- | ------------------------------ | --------------------------- |
| Languages        | TypeScript                     | TypeScript                  |
| Type             | Framework                      | Library                     |
| DOM Manipulation | Traditional DOM                | Virtual DOM                 |
| Data Binding     | two-way                        | one-way                     |
| HTML             | HTML with JS                   | JS with HTML (JSX)          |
| Testing          | Jasmine                        | Jest                        |
| Developer        | Google                         | Meta                        |
| Learning Curve   | More Difficult                 | Easier                      |

- ~~[AngularJS](https://angularjs.org/): is JavaScript based. Works on MVC. {{ }} expressions are used for two way binding between view and model. Special methods, ng-bind can also be used to do the same. Prefer a hierarchical dependency injection.~~

#### Virtual Dom

DOM takes all the HTML elements and wraps them in an object with a tree-structure.

Virtual DOM is an abstraction of your Real DOM but it's pretty light-weight than the Real DOM.

Virtual DOM is very easy to understand if you take an example of a lift which has a mirror inside it. Suppose, 4 people enters into the lift. Now, the mirror will reflect its appearance with 4 people. Again people entering into the lift will reflect the object of mirror. And same effect happens when people exit from the lift, the mirror object gets changes (increase, decrease, or even empty). So, in reality mirror has no real object, but it only reflects its presence with outer object.

#### Rendering

Rendering is a process that is triggered by a change of state in some component of your application, when a state change occurs React.

- It will collect from the root of your App all the components that requested a re-render because their state or their props changed.

Reconciliation: Once the re-rendering has happened, React has the context of two versions of the React.createElement output, the version executed before the state change occurred, and the version executed after the state has changed.

- Elements that changed type must be recreated.
- Changes within the attributes of an element are replaced, without unmounting the element.
- Upgrades within the element's children recreate all children
- Updates within child elements that use `key` as attributes are compared and only new items are represented.

Commit: After React calculated all the changes that should be made in the application tree. `react-dom` appears for the browser and react-native for the mobile platforms, which make the modifications to the browser or mobile app API (finally! 🥳).

#### Life Cycle

```jsx
import React from 'react';

const App = () => {
  const [val, setVal] = useState(0);

  useEffect(() => {
    // mounting and updating
    console.log('update 1');
    return () => {
      // unmount
      console.log('unmount 2', val);
    };
  }, [val]);

  console.log('mount 3');

  // Output:
  // mount 3
  // update 1
  // mount 3
  // unmount 2 0
  // update 1

  return (
    <div>
      <h1>React Lifecycle</h1>
      <h2>Update state: {value}</h2>
      <button onClick={onClick}>Click</button>
    </div>
  );
};
```

#### Class Component vs. Functional Component

- Difference syntax
- Before the introduction of hooks, functional components were stateless. However, with React 16.8, you can implement states with the useState hook to create a stateful component (just like the class component).
- Usage
  - Functional components with hooks are concise and more straightforward to code with. They perform exactly as the class component; this implies no difference between the two other than syntax.
  - By using just functional components in your project, you drastically eliminate the need to refactor the class component into a functional component when it grows.
  - Since classes confuse both people and machines, most especially the this keyword, you don't have to worry about this anymore in functional components.
  - No need for unnecessary method binding like we always do in the class component.
  - Sharing stateful logic between components is tedious in a class-based approach.

#### `import`

- After compiling, the code we actually get is `return React.createElement`

#### Best Practices

- Directory Layout:
  - Use `.jsx`, `.test.jsx` and `css/scss` in the same folder.
  - Use `index.jsx` to directly import
  - Avoid using `export default`, use `export` only to apply tree shaking
- CSS in JavaScript
  - Styled Components
  - Striving for the Single Responsibility of React Components
- SEO Optimation
  - Listing pages in robots.txt
  - Pre-rendering with `react-snap`
  - Server Side Rendering with Gatsby
- Optimization
  - Bundle
    - Measure: `Webpack Bundle Analyser` - `Lighthouse/Web dev`
    - Image compression
    - Using light package alternatives
    - Prefer Functions with Hooks than Classes
    - A better way to Bundle-Split
      - Vendor bundles: these are bundles installed and imported for use. `node_module` packages
      - The second is our main source bundle, which is the critical code needed to render the application
      - A bunch of other bundles split by routes
  - Performance
    - Use [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)
    - Profiling Components with the DevTools Profiler
    - Virtualize Long Lists
    - Avoid Reconciliation
    - Use `React.Fragments` to avoid additional HTML element wrappers.
    - Avoid Inline Function Definition in the Render Function.
    - Avoid using Index as Key for map
    - Avoid Props in Initial States
    - Avoid spreading props on DOM elements
    - Memoize React Components (stateless component which will get re-render when parameters are the same)
    - CSS Animations Instead of JS Animations

## Workers

### Service Workers

Service workers essentially act as proxy servers that sit between web applications, the browser, and the network (when available). They are intended, among other things, to enable the creation of effective offline experiences, intercept network requests and take appropriate action based on whether the network is available, and update assets residing on the server. They will also allow access to push notifications and background sync APIs.

To summarize, use service workers to:

- Intercept network requests when the network is unavailable.
- Handle push notifications
- Sync data to and from the server in the background.

The advantage of using a Service Worker for push notifications and background sync is, unlike a Web Worker, it isn't connected to the page lifecycle. So a page refresh won't cause the Service Worker task to be interrupted.

### Web Workers

Web Workers makes it possible to run a script operation in a background thread separate from the main execution thread of a web application. The advantage of this is that laborious processing can be performed in a separate thread, allowing the main (usually the UI) thread to run without being blocked/slowed down.
