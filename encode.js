function encoder(input) {
  let encoded = "";
  let count = 1;

  for (let i = 0; i < input.length; i++) {
    if (input[i] === input[i + 1]) {
      count++;
    } else {
      encoded += input[i] + count;
      count = 1;
    }
  }

  return encoded;
}

module.exports = encoder;
