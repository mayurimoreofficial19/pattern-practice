let pattern = "";
let num = 5;

for (let i = num; i >= 1; i--) {
  for (let j = 1; j <= num - i; j++) {
    pattern += "  ";
  }

  for (let k = 1; k <= i; k++) {
    if (k === 1 || k === i || i === num) {
      pattern += "* ";
    } else {
      pattern += "  ";
    }
  }
  pattern += "\n";
}
console.log(pattern);
