let tenSach = prompt("Nhap ten sach:");
let tenNguoiMuon = prompt("Nhap ten nguoi muon sach:");
let tinhTrangSach = prompt("Nhap tinh trang sach: có sẵn/ đã mượn/ không có sẵn):");
let soNgayMuon = prompt("Nhap so ngay muon sach:");

soNgayMuon = Number(soNgayMuon);
tinhTrangSach = tinhTrangSach.trim().toLowerCase();

if (
  tinhTrangSach !== "co san" &&
  tinhTrangSach !== "da muon" &&
  tinhTrangSach !== "khong co san"
) {
  console.log("Thông tin không hợp lệ, vui lòng nhập lại");
} else {
  if (tinhTrangSach === "co san") {
    if (coTheThuVien === "co") {
      console.log("Chúc mừng, bạn có thể mượn sách này");
    } else {
      console.log("Bạn không thể mượn sách nếu không có thẻ thư viện");
    }
  } else if (tinhTrangSach === "da muon") {
    if (soNgayMuon < 30) {
      if (coTheThuVien === "co") {
        console.log("Sách đang được mượn, vui lòng đợi đến khi trả lại");
      } else {
        console.log("Bạn không thể mượn sách nếu không có thẻ thư viện");
      }
    } else {
      console.log("Sách đã được mượn quá lâu, vui lòng liên hệ thư viện");
    }
  } else if (tinhTrangSach === "khong co san") {
    console.log(
      "Sách này hiện tại không có sẵn trong thư viện, bạn có thể đăng ký mượn sau"
    );
  }
}
