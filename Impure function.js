let PI = 3.14;

const hitungLuasLingkaran = (jariJari) => {
  return PI * jariJari * jariJari;
};

console.log(hitungLuasLingkaran(4));
console.log(hitungLuasLingkaran(8));

PI = 5;

console.log(hitungLuasLingkaran(4));
console.log(hitungLuasLingkaran(8));
