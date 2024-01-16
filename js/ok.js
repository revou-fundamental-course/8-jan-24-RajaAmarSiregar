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

function luas() {
    var s = document.getElementById('s').value;

    var luas = s*s;

    document.getElementById('luas').innerHTML = luas;
}

function kel() {
    var s = document.getElementById('s').value;

    var kel = 4*s;

    document.getElementById('kel').innerHTML = kel;
}