let num = 5;
let pattern = "";

if (num >= 1) {
  for (let i = 0; i < num; i++) {
    for (let j = num - i; j > 0; j--) {
      pattern += "* ";
    }
    pattern += "\n";
  }
  console.log(pattern);
} else {
  pattern = "Number must be greater tha 1 to print start pattern";
}
