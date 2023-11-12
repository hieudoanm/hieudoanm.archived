---
title: 'Node.js: process.nextTick()'
date: '2021-12-12'
author: 'Hieu Doan'
description: 'Node.js: process.nextTick()'
---

```javascript
process.nextTick(() => {
  console.log('nextTick');
});

setImmediate(() => {
  console.log('setImmediate');
});

setTimeout(() => {
  console.log('setTimeout');
}, 0);

// Output:
// nextTick
// setTimeout
// setImmediate
```
