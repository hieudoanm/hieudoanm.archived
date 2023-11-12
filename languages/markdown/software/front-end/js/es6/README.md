# ES6

- [ES6](#es6)
  - [2015](#2015)
    - [let](#let)
    - [const](#const)
    - [Arrow Functions](#arrow-functions)
    - [For/Of Loop](#forof-loop)
    - [Map Objects](#map-objects)
    - [Set Objects](#set-objects)
    - [Class](#class)
    - [Promises](#promises)
    - [Symbols](#symbols)
    - [Default Parameter](#default-parameter)
    - [Function Rest Parameter](#function-rest-parameter)
    - [String.includes()](#stringincludes)
    - [String.startsWith()](#stringstartswith)
    - [String.endsWith()](#stringendswith)
    - [Array.from()](#arrayfrom)
    - [Array.keys()](#arraykeys)
    - [Array.find()](#arrayfind)
    - [Array.findIndex()](#arrayfindindex)
  - [2016](#2016)
    - [Exponentiation Operator](#exponentiation-operator)
    - [Exponentiation Assignment](#exponentiation-assignment)
  - [2017](#2017)
    - [String padding](#string-padding)
    - [Object.entries](#objectentries)
    - [Object.values](#objectvalues)
    - [async functions](#async-functions)
  - [2018](#2018)
    - [Asynchronous Iteration](#asynchronous-iteration)
    - [Promise Finally](#promise-finally)
    - [Object Rest Properties](#object-rest-properties)
  - [2019](#2019)
    - [Array.flat() \& Array.flatMap()](#arrayflat--arrayflatmap)
    - [String.trimStart() \& String.trimEnd()](#stringtrimstart--stringtrimend)
    - [Object.fromEntries()](#objectfromentries)
  - [2020](#2020)
    - [BigInt](#bigint)
    - [String.matchAll()](#stringmatchall)
    - [The Nullish Coalescing Operator (??)](#the-nullish-coalescing-operator-)
    - [The Optional Chaining Operator (?.)](#the-optional-chaining-operator-)
    - [Logical AND Assignment Operator (\&\&=)](#logical-and-assignment-operator-)
    - [Logical OR Assignment (||=)](#logical-or-assignment-)
    - [Nullish.Coalescing Assignment (??=)](#nullishcoalescing-assignment-)
    - [Promise.allSettled()](#promiseallsettled)
  - [2021](#2021)
    - [Promise.any()](#promiseany)
    - [String.replaceAll()](#stringreplaceall)
    - [Numeric Separators (\_)](#numeric-separators-_)
  - [2022](#2022)
    - [Array at()](#array-at)
    - [String at()](#string-at)
    - [RegExp /d](#regexp-d)
    - [Object.hasOwn()](#objecthasown)
    - [error.cause](#errorcause)
    - [await import](#await-import)
    - [Private methods and fields](#private-methods-and-fields)
    - [Class field declarations](#class-field-declarations)

## 2015

### let

The `let` keyword allows you to declare a variable with block scope.

```ts
var x = 10;
// Here x is 10
{
  let x = 2;
  // Here x is 2
}
// Here x is 10
```

### const

The `const` keyword allows you to declare a constant (a JavaScript variable with a constant value).

```ts
var x = 10;
// Here x is 10
{
  const x = 2;
  // Here x is 2
}
// Here x is 10
```

### Arrow Functions

- Arrow functions allows a short syntax for writing function expressions.
- Arrow functions do not have their own this. They are not well suited for defining object methods.
- Arrow functions are not hoisted. They must be defined before they are used.
- Using `const` is safer than using `var`, because a function expression is always a constant value.

```ts
// ES5
var x = function (x, y) {
  return x * y;
};

// ES6
const x = (x, y) => x * y;
```

### For/Of Loop

- The JavaScript `for/of` statement loops through the values of an iterable objects.
- `for/of` lets you loop over data structures that are iterable such as Arrays, Strings, Maps, NodeLists, and more.

```ts
const cars = ['BMW', 'Volvo', 'Mini'];
let text = '';

for (let x of cars) {
  text += x + ' ';
}
```

```ts
let language = 'JavaScript';
let text = '';

for (let x of language) {
  text += x + ' ';
}
```

### Map Objects

### Set Objects

- A JavaScript Set is a collection of unique values.
- Each value can only occur once in a Set.
- A Set can hold any value of any data type.

### Class

- A JavaScript class is **not** an object.
- It is a **template** for JavaScript objects.

### Promises

### Symbols

### Default Parameter

### Function Rest Parameter

### String.includes()

### String.startsWith()

### String.endsWith()

### Array.from()

### Array.keys()

### Array.find()

### Array.findIndex()

## 2016

### Exponentiation Operator

The **exponentiation** operator (`**`) raises the first operand to the power of the second operand.

```ts
let x = 5;
let z = x ** 2; // result is 25
```

`x ** y` produces the same result as `Math.pow(x, y)`:

```ts
let x = 5;
let z = Math.pow(x, 2); // result is 25
```

### Exponentiation Assignment

The **exponentiation assignment** operator (`**=`) raises the value of a variable to the power of the right operand.

```ts
let x = 5;
x **= 2; // result 25
```

## 2017

### String padding

ECMAScript 2017 added two String methods: `padStart` and `padEnd` to support padding at the beginning and at the end of a string.

```ts
let str = '5';
str = str.padStart(4, 0);
// result is 0005
```

```ts
let str = '5';
str = str.padEnd(4, 0);
// result is 5000
```

### Object.entries

The `Object.entries()` method returns an array of the key/value pairs in an object:

```ts
const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 50,
  eyeColor: 'blue'
};

Object.entries(person), null, 2);

// [
//   ['firstName', 'John'],
//   ['lastName', 'Doe'],
//   ['age', 50],
//   ['eyeColor', 'blue']
// ];
```

### Object.values

`Object.values` are similar to `Object.entries`, but returns a single dimension array of the object values:

```ts
const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 50,
  eyeColor: 'blue',
};

Object.values(person);

// ['John', 'Doe', 50, 'blue'];
```

### async functions

## 2018

### Asynchronous Iteration

### Promise Finally

### Object Rest Properties

## 2019

### Array.flat() & Array.flatMap()

### String.trimStart() & String.trimEnd()

### Object.fromEntries()

## 2020

### BigInt

### String.matchAll()

### The Nullish Coalescing Operator (??)

### The Optional Chaining Operator (?.)

### Logical AND Assignment Operator (&&=)

### Logical OR Assignment (||=)

### Nullish.Coalescing Assignment (??=)

### Promise.allSettled()

Promise.allSettled([prom1,prom2,prom3]).then {}

## 2021

### Promise.any()

### String.replaceAll()

### Numeric Separators (\_)

## 2022

### Array at()

### String at()

### RegExp /d

### Object.hasOwn()

### error.cause

### await import

### Private methods and fields

### Class field declarations
