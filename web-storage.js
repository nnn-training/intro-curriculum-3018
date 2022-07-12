'use strict';
const now = Date.now();
const key = 'last_access';
localStorage.setItem(key, now);
const value = localStorage.getItem(key);
console.log(value);

const favKey = 'favorite';
const favValue = 'programming';
localStorage.setItem(favKey, favValue);
console.log(localStorage.getItem(favKey))