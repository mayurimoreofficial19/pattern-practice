let pattern = "";
let num = 5;

for (let i = num; i >= 1; i--) {
  for (let j = 1; j <= i; j++) {
    pattern += "* ";
  }
  pattern += "\n";
}
console.log(pattern);
