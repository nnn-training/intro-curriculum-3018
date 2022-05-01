'use strict';
const now = Date.now();
const key = 'last_access';
localStorage.setItem(key, now);
const value = localStorage.getItem(key);
console.log(value);

localStorage.setItem('favorite', 'programming');
console.log(localStorage.getItem('favorite'));