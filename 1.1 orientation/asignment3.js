/*What if I ask you to find a nonce for the following input - 
harkirat => Raman | Rs 100
Ram => Ankit | Rs 10*/

const crypto = require("crypto");

// Function to find an input string that produces a hash starting with '00000'
function findHashWithPrefix(prefix) {
  let input = 0;
  while (true) {
    let inputStr =
      `
rohit => sai | Rs 100
ruchi => jay | Rs 10
` + input.toString();
    let hash = crypto.createHash("sha256").update(inputStr).digest("hex");
    if (hash.startsWith(prefix)) {
      return { input: inputStr, hash: hash };
    }
    input++;
  }
}

// Find and print the input string and hash
const result = findHashWithPrefix("00000");
console.log(`Input: ${result.input}`);
console.log(`Hash: ${result.hash}`);