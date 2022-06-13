'use strict';
const data = 'programming';
const key = 'favorite';
localStorage.setItem(key, data);
const value = localStorage.getItem(key);
console.log(value);