//==============================================
//=                                            =
//=                  UUIDGen.js                =
//=        Copyright 2025 ProishTheIdiot       =
//=                                            =
//=        Created on: December 9, 2025        =
//=              by ProishTheIdiot             =
//=                                            =
//==============================================
function generateUUID() {
  if (crypto && crypto.randomUUID) {
    return crypto.randomUUID();
  } else {
    // Fallback for older or non-secure contexts (less secure)
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0;
      var v = (c === 'x') ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }
}

// Example usage:
// const myUUID = generateUUID();
// console.log(myUUID); // e.g., "1fe35579-5ce7-46ec-89e0-7e7236700297"
