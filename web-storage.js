'use strict';
const now = "programming";
const key = 'favorite';
localStorage.setItem(key, now);
const value = localStorage.getItem(key);
console.log(key);