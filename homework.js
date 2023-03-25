//deklarasi angka2 sebanyak 100

var angka = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41,
  42, 43, 44, 45, 46, 47, 48, 49, 50, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13,
  14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32,
  33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
];

console.log('array random dengan 100 index :', angka);

//pecah menjadi 2 array menjadi ganjil dan genap

var genap = [];
var ganjil = [];

for (var i = 0; i < angka.length; i++) {
  if (angka[i] % 2 == 0) {
    genap.push(angka[i]);
  } else {
    ganjil.push(angka[i]);
  }
}
console.log('array bil genap :', genap);
console.log('array bil ganjil :', ganjil);

//carilah bilangan terbesar dari array genap

var max_genap;

for (var i = 0; i < genap.length; i++) {
  if (i == 0) {
    var max_genap = genap[i];
  } else {
    if (genap[i] > max_genap) {
      max_genap = genap[i];
    }
  }
}

console.log('bilangan terbesar dari array genap :', max_genap);

//carilah bilangan terbesar dari array ganjil

var max_ganjil;

for (var i = 0; i < ganjil.length; i++) {
  if (i == 0) {
    var max_ganjil = ganjil[i];
  } else {
    if (ganjil[i] > max_ganjil) {
      max_ganjil = ganjil[i];
    }
  }
}

console.log('bilangan terbesar dari array ganjil :', max_ganjil);

//carilah bilangan terkecil dari array genap

var min_genap;

for (var i = 0; i < genap.length; i++) {
  if (i == 0) {
    var min_genap = genap[i];
  } else {
    if (genap[i] < min_genap) {
      min_genap = genap[i];
    }
  }
}
console.log('bilangan terkecil dari array genap :', min_genap);

//carilah bilangan terkecil dari array ganjil

var min_ganjil;

for (var i = 0; i < ganjil.length; i++) {
  if (i == 0) {
    var min_ganjil = ganjil[i];
  } else {
    if (ganjil[i] < min_ganjil) {
      min_ganjil = ganjil[i];
    }
  }
}
console.log('bilangan terkecil dari array ganjil :', min_ganjil);

//carilah total dari array genap

var total_genap = 0;

for (var i = 0; i < genap.length; i++) {
  total_genap += genap[i];
}

console.log('total dari bilangan genap adalah :', total_genap);

//carilah total dari array ganjil

var total_ganjil = 0;

for (var i = 0; i < ganjil.length; i++) {
  total_ganjil += ganjil[i];
}

console.log('total dari bilangan ganjil adalah :', total_ganjil);

//carilah rata rata dari array genap

var rata2_genap = total_genap / genap.length;

console.log('rata rata dari bilangan genap adalah :', rata2_genap);

//carilah rata rata dari array ganjil

var rata2_ganjil = total_ganjil / ganjil.length;

console.log('rata rata dari bilangan ganjil adalah :', rata2_ganjil);

// perbandingan nilai-nilai array

console.log(
  'apakah angka terkecil dari array genap lebih besar dari angka terkecil dari array ganjil ? :',
  min_genap > min_ganjil
);

console.log(
  'apakah angka terbesar dari array ganjil lebih kecil dari angka terbesar dari array genap ? :',
  max_ganjil < max_genap
);

console.log(
  'apakah nilai total array ganjil sama dengan nilai total dari array genap ? :',
  total_ganjil == total_genap
);

console.log(
  'apakah nilai rata-rata array ganjil lebih besar dari nilai rata-rata array genap ? :',
  rata2_ganjil > rata2_genap
);
