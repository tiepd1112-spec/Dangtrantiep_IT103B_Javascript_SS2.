let tenSach = prompt("Nhap ten sach:");
let tenNguoiMuon = prompt("Nhap ten nguoi muon sach:");
let mucDoYeuThich = prompt("Nhap muc do yeu thich (1-5):");

mucDoYeuThich = Number(mucDoYeuThich);

if(mucDoYeuThich == 5 || mucDoYeuThich == 4) {
    console.log("Đây là cuốn sách yêu thích của bạn, hãy đọc ngay");
} else if(mucDoYeuThich == 3) {
    console.log("Sách này khá ổn, có thể mượn");
}else if(mucDoYeuThich == 2 || mucDoYeuThich == 1) {
    console.log("Sách này bạn có thể cân nhắc mượn lại sau");
}else {
    console.log("Mức độ yêu thích không hợp lệ");
}