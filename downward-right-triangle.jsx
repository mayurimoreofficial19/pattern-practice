let pattern = "";
let num = 5;

for (let i = num; i >= 0; i--) {
  for (let j = 1; j <= num - i; j++) {
    pattern += "  ";
  }

  for (let k = 1; k <= i; k++) {
    pattern += "* ";
  }
  pattern += "\n";
}
console.log(pattern);
