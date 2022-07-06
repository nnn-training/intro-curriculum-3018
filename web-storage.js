'use strict';
const now = Date.now();
const key = 'last_access_time';
const keyName = 'favorite';
const value = 'programming';

localStorage.setItem(key, now);
localStorage.setItem(keyName, value);
const dateValue = localStorage.getItem(key);
const keyValue = localStorage.getItem(keyName);
console.log(dateValue);
console.log(keyValue);
