function konversi() {
  let input = document.getElementById("angka").value;
  let desimal = parseInt(input);

  if (isNaN(desimal)) {
    alert("This page says\n\nMasukkan Angka yang benar!");
  } else {
    let biner = konversiManual(desimal, 2);
    let oktal = konversiManual(desimal, 8);
    let heksa = konversiHeksadesimalManual(desimal);
    alert("This page says\n\nBiner : " + biner + "\nOktal : " + oktal + "\nHeksadesimal: " + heksa);
  }
}

function konversiManual(angka, basis) {
  if (angka === 0) return "0";
  let hasil = "";
  while (angka > 0) {
    let sisa = angka % basis;
    hasil = sisa + hasil;
    angka = parseInt(angka / basis);
  }
  return hasil;
}

function konversiHeksadesimalManual(angka) {
  if (angka === 0) return "0";
  let hasil = "";
  const heksaChar = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
  while (angka > 0) {
    let sisa = angka % 16;
    hasil = heksaChar[sisa] + hasil;
    angka = parseInt(angka / 16);
  }
  return hasil;
}
