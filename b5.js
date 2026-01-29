let tenSach = prompt("Nhập tên sách:");
let trangThai = prompt("Nhập trạng thái sách (có sẵn / đã mượn):").trim();
let namXuatBan = Number(prompt("Nhập năm xuất bản:"));

let namHienTai = new Date().getFullYear();
let soNamXuatBan = namHienTai - namXuatBan;

if (trangThai === "có sẵn" && soNamXuatBan <= 5) {
  console.log("Sách này mới và có sẵn để mượn");
} else if (trangThai === "đã mượn" && soNamXuatBan <= 10) {
  console.log("Sách này đã mượn nhưng khá mới, có thể mượn lại sau");
} else if (trangThai === "đã mượn" && soNamXuatBan > 10) {
  console.log("Sách này đã mượn và khá cũ");
} else if (trangThai === "có sẵn" && soNamXuatBan > 5) {
  console.log("Sách này có sẵn nhưng đã lâu năm");
} else {
  console.log("Thông tin sách không hợp lệ");
}