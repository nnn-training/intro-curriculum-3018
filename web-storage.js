'use strict';
const key = 'favorite';
localStorage.setItem(key, 'programming');
const value = localStorage.getItem(key);
console.log(value);