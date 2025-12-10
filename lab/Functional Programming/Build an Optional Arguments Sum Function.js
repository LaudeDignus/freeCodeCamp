function addTogether(...args) {
  if (args.length === 2) {
    const [a, b] = args;
    return typeof a === "number" && typeof b === "number" ? a + b : undefined;
  }

  if (args.length === 1) {
    const a = args[0];
    if (typeof a !== "number") {
      return undefined;
    }
    return function innerFunc(x) {
      console.log(a, x);
      return typeof x === "number" ? a + x : undefined;
    };
  }
}

console.log(addTogether(2, 3)); // should return 5.
console.log(addTogether(2)(3)); // should return 5.
console.log(addTogether("http://bit.ly/IqT6zt")); // should return undefined.
console.log(addTogether(2, "3")); // should return undefined.
console.log(addTogether(2)([3])); // should return undefined.
