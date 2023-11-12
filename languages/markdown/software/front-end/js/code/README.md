# Code

- [Code](#code)
  - [Compose](#compose)
  - [Find Most Frequent](#find-most-frequent)
  - [Lodash Get](#lodash-get)
  - [Maximum Subarray Sum](#maximum-subarray-sum)
  - [Memorize](#memorize)
  - [Reverse Linked List](#reverse-linked-list)
  - [Throttle](#throttle)

## Compose

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

## Find Most Frequent

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

## Lodash Get

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

## Maximum Subarray Sum

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

## Memorize

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

## Reverse Linked List

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

## Throttle

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
