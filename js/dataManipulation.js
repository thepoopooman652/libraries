//==============================================
//=                                            =
//=              dataManipulation.js           =
//=        Copyright 2025 ProishTheIdiot       =
//=                                            =
//=        Created on: December 9, 2025        =
//=              by ProishTheIdiot             =
//=                                            =
//==============================================
const reverseString = (str) => {
  return str.split('').reverse().join('');
};
const isPalindrome = (str) => {
  const reversed = str.split('').reverse().join('');
  return str === reversed;
};
const findLargest = (arr) => {
  return Math.max(...arr);
};
const removeFalsy = (arr) => {
  return arr.filter(Boolean);
};
const isEmpty = (obj) => {
  return Object.keys(obj).length === 0;
};
const generateRandom = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
