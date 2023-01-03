// BT1: TÌM SỐ NGUYÊN DƯƠNG NHỎ NHẤT
document.getElementById('btnXemKetQua').onclick = function () {
    let sum = 0;
    let n = 0;
    while (sum < 10000) {
        sum += n;
        n++;

    }
    document.getElementById('ketQua1').innerHTML = n - 1;
}

// BT2: TÍNH TỔNG 2 SỐ x VÀ n
document.getElementById('btnTinhTong').onclick = function () {
    let x = document.getElementById('nhapSoX').value;
    let n = document.getElementById('nhapSoN').value;
    let lt = 1;
    let sum = 0;
    let i = 1;
    while (i <= n) {
        lt *= x;
        sum += lt;
        i++;
    }
    document.getElementById('ketQua2').innerHTML = sum.toLocaleString();
}

// BT3: NHẬP VÀO 1 SỐ, TÍNH GIAI THỪA SỐ ĐÓ
document.getElementById('btnTinhGiaiThua').onclick = function () {
    // Input
    let nhapSo = +document.getElementById('nhapSo').value;

    // Output
    let giaiThua = 1;
    let giaTri = 1;
    while (giaTri <= nhapSo) {
        giaiThua *= giaTri;
        giaTri++;
    }
    document.getElementById('ketQua3').innerHTML = giaiThua.toLocaleString();
}
// BT4: TẠO THẺ DIV CHẴN, LẺ
function doiMauThe() {
    let divs = document.getElementsByClassName('themau');
    for (let i = 0; i < divs.length; i++) {
        if ((i + 1) % 2 == 0) {
            divs[i].style.background = "red";
        }
        else { // Vị trí lẽ => màu xanh
            divs[i].style.background = "blue";
        }
    }

}