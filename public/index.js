const strictEquals = (valueA, valueB) => {
  if (Object.is(valueA, NaN) && Object.is(valueB, NaN)) {
    return false;
  } else {
    return Object.is(valueA, valueB);
  }
};
console.log(strictEquals(1, 1));
console.log(strictEquals(NaN, NaN));
console.log(strictEquals(0, -0));
console.log(strictEquals(-0, 0));
console.log(strictEquals(1, "1"));
console.log(strictEquals(true, false));
console.log(strictEquals(false, false));
console.log(strictEquals("water", "oil"));
