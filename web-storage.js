'use strict';
const now = Date.now();
const key = 'last_access';
localStorage.setItem(key, now);
const value = localStorage.getItem(key);
console.log(value);

const key2 = 'favorite';
localStorage.setItem(key2, 'programming');
const value2 = localStorage.getItem(key2);
console.log(value2);