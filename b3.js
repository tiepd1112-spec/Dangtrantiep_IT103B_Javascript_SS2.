let tenSach = prompt("Nhap ten sach:");
let theLoaiSach = prompt("Nhap the loai sach:");
let tinhTrangSach = prompt("Nhap tinh trang sach (co san / da muon):");

theLoai = theLoai.trim();
tinhTrang = tinhTrang.trim();

if (theLoai === "Khoa học" || theLoai === "Lịch sử") {
  if (tinhTrang === "có sẵn") {
    console.log("Sách này có sẵn trong thư viện");
  } else {
    console.log("Sách đã được mượn");
  }
} else if (theLoai === "Văn học" || theLoai === "Truyện") {
  console.log("Sách này có thể đọc giải trí");
} else {
  console.log("Thể loại sách không được hỗ trợ");
}