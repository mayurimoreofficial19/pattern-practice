let pattern = "";
let num = 5;

for (let i = 1; i <= num; i++) {
  for (let j = 0; j <= num - i; j++) {
    if (j === 0 || j === num - i || i === 1) {
      pattern += "* ";
    } else {
      pattern += "  ";
    }
  }
  pattern += "\n";
}
console.log(pattern);
