const h = (n) => (n * ((2 * n) - 1));
const p = (n) => (n * ((3 * n) - 1)) / 2;

let h_i = 144, h_n = h(h_i);
let p_i = 166, p_n = p(p_i);

while (h_n !== p_n) {
  h_n = h(++h_i);
  while (h_n > p_n) {
    p_n = p(++p_i);
  }
}

console.log(`h_n = p_n = t_n = ${h_n}`);
console.log(`h_i: ${h_i}, p_i: ${p_i}`);
