//==============================================
//=                                            =
//=              SHA Hasing System             =
//=        Copyright 2025 ProishTheIdiot       =
//=                                            =
//=        Created on: December 9, 2025        =
//=              by ProishTheIdiot             =
//=                                            =
//==============================================
async function hashSHA512(message) {
  const encoder = new TextEncoder();
  const data = encoder.encode(message);

  const hashBuffer = await crypto.subtle.digest('SHA-512', data);

  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray.map(b => ('00' + b.toString(16)).slice(-2)).join('');
  return hashHex;
}
async function hashSHA384(message) {
  const encoder = new TextEncoder();
  const data = encoder.encode(message);

  const hashBuffer = await crypto.subtle.digest('SHA-384', data);

  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray.map(b => ('00' + b.toString(16)).slice(-2)).join('');
  return hashHex;
}
async function hashSHA256(message) {
  const encoder = new TextEncoder();
  const data = encoder.encode(message);
  
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);

  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray.map(b => ('00' + b.toString(16)).slice(-2)).join('');
  return hashHex;
}
async function hashSHA1(message) {
  const encoder = new TextEncoder();
  const data = encoder.encode(message);

  const hashBuffer = await crypto.subtle.digest('SHA-1', data);

  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray.map(b => ('00' + b.toString(16)).slice(-2)).join('');
  return hashHex;
}

// Example usage:
// hashSHA512("Hello, World!").then(hash => console.log(hash));
