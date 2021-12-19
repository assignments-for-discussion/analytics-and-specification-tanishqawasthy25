function average(ints) {
  let len = 1;
  ints = ints.filter((a) => !isNaN(a));
  if (ints.length == 0) return NaN;
  const sum1 = ints.reduce((a, b) => {
    len++;
    return a+b;
  });
  return sum1 / len;
}
module.exports = {average};
