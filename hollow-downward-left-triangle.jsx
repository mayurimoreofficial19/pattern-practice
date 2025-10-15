let pattern = "";
let num = 5;

for (let i = num; i >= 1; i--) {
  for (let j = 1; j <= i; j++) {
    if (j === 1 || j === i || i === num) {
      pattern += "* ";
    } else {
      pattern += "  ";
    }
  }
  pattern += "\n";
}
console.log(pattern);
