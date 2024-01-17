function tampilkanJudulLuasPersegi() {
    var judulLuasPersegi = document.querySelector('.judul_luas_persegi');
    var judulLuasPanjang = document.querySelector('.judul_luas_panjang');
    
    judulLuasPersegi.style.display = 'block';
    judulLuasPanjang.style.display = 'none';
}

function tampilkanJudulLuasPanjang() {
    var judulLuasPersegi = document.querySelector('.judul_luas_persegi');
    var judulLuasPanjang = document.querySelector('.judul_luas_panjang');
    
    judulLuasPersegi.style.display = 'none';
    judulLuasPanjang.style.display = 'block';
}

function hitungLuas() {
    var sisi = document.getElementById('inputSisi').value;
    var luas = sisi * sisi;
    document.getElementById('hasilLuas').innerHTML = 'L = ' + sisi + ' x ' + sisi + ' = ' + luas;
  }

  function resetForm() {
    document.getElementById('inputSisi').value = '';
    document.getElementById('hasilLuas').innerHTML = '';
  }

  function hitungKeliling() {
    var sisiKeliling = document.getElementById('inputSisiKeliling').value;
    var keliling = 4 * sisiKeliling;
    document.getElementById('hasilKeliling').innerHTML = 'K = 4 x ' + sisiKeliling + ' = ' + keliling;
  }

  function resetKeliling() {
    document.getElementById('inputSisiKeliling').value = '';
    document.getElementById('hasilKeliling').innerHTML = '';
  }