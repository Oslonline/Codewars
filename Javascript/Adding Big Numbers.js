function add(a, b) {
  let result = "";
  let carry = 0;

  while (a.length < b.length) {
    a = "0" + a;
  }
  while (b.length < a.length) {
    b = "0" + b;
  }

  for (let i = a.length - 1; i >= 0; i--) {
    const digitA = parseInt(a[i]);
    const digitB = parseInt(b[i]);
    const sum = digitA + digitB + carry;
    result = (sum % 10).toString() + result;
    carry = Math.floor(sum / 10);
  }

  if (carry > 0) {
    result = carry.toString() + result;
  }

  return result;
}
