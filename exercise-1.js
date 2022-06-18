function sum(...numbers) {
  return numbers.reduce((result, value) => result + value);
}

console.log(sum(1, 2, 3, 4, 5));
