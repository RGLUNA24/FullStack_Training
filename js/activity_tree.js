
const height = 20;
let tree = '';

for (let i = 1; i <= height; i++) {
    for (y = 0; y < 1 * i; y++) {
        tree = tree + '*';
    }
    tree = tree + '\n';
}
console.log(tree);
