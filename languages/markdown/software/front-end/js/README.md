# JavaScript

- [JavaScript](#javascript)
  - [async/await](#asyncawait)
  - [Closures](#closures)
    - [Emulating private methods with closures](#emulating-private-methods-with-closures)
  - [Imperative vs. Functional Programming](#imperative-vs-functional-programming)
  - [Functions - Constructors](#functions---constructors)
  - [Functions - Methods](#functions---methods)
  - [`bind`](#bind)
  - [`setTimeout`](#settimeout)
    - [Solution](#solution)
  - [`this`](#this)
  - [`return`](#return)
    - [Regular](#regular)
    - [Arrow](#arrow)
  - [Code](#code)
    - [Compose](#compose)
    - [Find Most Frequent](#find-most-frequent)
    - [Lodash Get](#lodash-get)
    - [Maximum Subarray Sum](#maximum-subarray-sum)
    - [Memorize](#memorize)
    - [Reverse Linked List](#reverse-linked-list)
    - [Throttle](#throttle)

## async/await

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

## Closures

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

### Emulating private methods with closures

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

## Imperative vs. Functional Programming

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

## Functions - Constructors

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

## Functions - Methods

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

## `bind`

## `setTimeout`

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

### Solution

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

## `this`

- `this` value inside a regular function is dynamic and depends on the invocation.
- But `this` inside the arrow function is bound lexically and equals to `this` of the outer function.

**Regular** Example

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

**Arrow** Example

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

## `return`

### Regular

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

### Arrow

```js
const increment = (num) => num + 1;
increment(41); // => 42
```

## Code

### Compose

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

### Find Most Frequent

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

### Lodash Get

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

### Maximum Subarray Sum

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

### Memorize

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

### Reverse Linked List

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

### Throttle

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
