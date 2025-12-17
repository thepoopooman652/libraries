//==============================================
//=                                            =
//=              Random String Gen             =
//=        Copyright 2025 ProishTheIdiot       =
//=                                            =
//=        Created on: December 9, 2025        =
//=              by ProishTheIdiot             =
//=                                            =
//==============================================
function ranString(length, strType) {
  var charList-lower = 'abcdefghijklmnopqrstuvwxyz';
  var charList-upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var charList-num = '1234567890';
  var charList-sym = '`~!@#$%^&*()_-+=[{}]|\:;<,>.?/';
  var charlist-all = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890`~!@#$%^&*()_-+=[{}]|\:;<,>.?/';

  if (strType == 'lower') {
    let result = '';
    const charListLength = charList-lower.length;
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charListLength);
      result += charList-lower.charAt(randomIndex);
    }
    return result;
  } else if (strType == 'upper') {
    let result = '';
    const charListLength = charList-upper.length;
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charListLength);
      result += charList-upper.charAt(randomIndex);
    }
    return result;
  } else if (strType == 'num') {
    let result = '';
    const charListLength = charList-num.length;
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charListLength);
      result += charList-num.charAt(randomIndex);
  } else if (strType == 'sym') {
    let result = '';
    const charListLength = charList-sym.length;
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charListLength);
      result += charList-sym.charAt(randomIndex);
  } else if (strType == 'all') {
    let result = '';
    const charListLength = charList-all.length;
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charListLength
      result += charList-all.charAt(randomIndex);
  } else {
    console.error("Invalid string type in ranString() function call. Valid types: 'lower' 'upper' 'num' 'sym' 'all'");
};
