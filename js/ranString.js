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
  // Define all of the character lists
  var charList-lower = 'abcdefghijklmnopqrstuvwxyz';
  var charList-upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var charList-num = '1234567890';
  var charList-sym = '`~!@#$%^&*()_-+=[{}]|\:;<,>.?/';
  var charlist-all = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890`~!@#$%^&*()_-+=[{}]|\:;<,>.?/';

  // Generate a string based on the value of strType
  if (strType == 'lower') {
    // Lowercase string generation
    let result = '';
    const charListLength = charList-lower.length;
    for (let i = 0; i < length; i++) {
      // Generate a random index within the bounds of the character list
      const randomIndex = Math.floor(Math.random() * charListLength);
      // Append the character at the random index to the result string
      result += charList-lower.charAt(randomIndex); // If charList is a string
    }
    return result;
  } else if (strType == 'upper') {
    // Uppercase string generation
    let result = '';
    const charListLength = charList-upper.length;
    for (let i = 0; i < length; i++) {
      // Generate a random index within the bounds of the character list
      const randomIndex = Math.floor(Math.random() * charListLength);
      // Append the character at the random index to the result string
      result += charList-upper.charAt(randomIndex); // If charList is a string
    }
    return result;
  } else if (strType == 'num') {
    // Number string generation
  } else if (strType == 'sym') {
    // Symbol string generation
  } else if (strType == 'all') {
    // All character string generation
  } else {
    console.error("Invalid string type in ranString() function call. Valid types: 'lower' 'upper' 'num' 'sym' 'all'");
};
