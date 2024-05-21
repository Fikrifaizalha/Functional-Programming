// Contoh penggunaan ketika Anda ingin menghilangkan seluruh nilai false pada array:

const truthyArray = [1, "", "Hallo", 0, null, "Harry", 14].filter((item) =>
  Boolean(item)
);
console.log(truthyArray);

// Contoh lain, penggunaan filter untuk menyaring array dari objek siswa
// yang layak mendapatkan beasiswa berdasarkan nilai skor yang didapat.

const students = [
  {
    name: "Rashford",
    score: 70,
  },
  {
    name: "Ronaldo",
    score: 90,
  },
  {
    name: "Bruno",
    score: 50,
  },
  {
    name: "Garnacho",
    score: 100,
  },
];

const eligibleForScholarshipStudents = students.filter(
  (student) => student.score > 85
);

console.log(eligibleForScholarshipStudents);
