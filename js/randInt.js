//==============================================
//=                                            =
//=             Random Integer Gen             =
//=        Copyright 2025 ProishTheIdiot       =
//=                                            =
//=        Created on: December 9, 2025        =
//=              by ProishTheIdiot             =
//=                                            =
//==============================================
function randInt(min, max, rounding) {
  if (rounding == 'true') {
      randInt = Math.random() * (max - min + 1) + min;
      return randInt;
  } else if (rounding == 'false') {
    randInt = Math.round(Math.random() * (max - min + 1)) + min);
    return randInt;
  } else {
    console.error('randInt() must have rounding equal to "true" or "false"');
  };
};
