function average(ints) {
  let len = 1;
  ints = ints.filter((x) => !isNaN(x));
  if (ints.length == 0) return NaN;
  const sm = ints.reduce((x, y) => {
    len++;
    return x + y;
  });
  return sm / len;
}
module.exports = {average};
