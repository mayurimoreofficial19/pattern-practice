let pattern = "";
let num = 5;

for (let i = 1; i <= num; i++) {
  for (let j = 1; j <= num; j++) {
    pattern += "* ";
  }
  pattern += "\n";
}
console.log(pattern);
