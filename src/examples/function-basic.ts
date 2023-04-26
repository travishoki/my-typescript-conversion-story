export const sum = (num1: number, num2: number) => {
  return num1 + num2;
};

// Happy Path:
sum(1, 1); // = 2

// Fail 1:
sum(1, undefined); // = Nan

// Fail 2:
var num1 = 1;
var num2 = undefined;
sum(num1, num2); // = Nan

/*
Response:
Ok, but meh.
*/
