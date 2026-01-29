let soLuongSach = prompt("Nhap so luong sach trong thu vien:");
soLuongSach = Number(soLuongSach);
if(soLuongSach < 10) {
console.log("Thu vien co it sach");
} else if (soLuongSach >= 10 && soLuongSach <= 20) {
  console.log("Thư viện có số lượng sách vừa đủ");
} else if (soLuongSach > 20) {
  console.log("Thư viện có nhiều sách");
} else {
  console.log("Dữ liệu không hợp lệ");
}







