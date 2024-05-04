const height = 15;
let tree = "";

for (let i = 1; i <= height; i++) {
  for (y = 0; y < i; y++) {
    tree = tree + "*";
  }
  tree = tree + "\n";
}
console.log(tree);
