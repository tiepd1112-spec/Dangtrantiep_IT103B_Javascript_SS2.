let tenSach = prompt("Nhap ten cuon sach:");
let tenTacgia = prompt("Nhap ten tac gia cua sach:");
let namXuatban = prompt("Nhap nam xuat ban cua sach:");

namXuatBan = Number(namXuatBan);
let namHienTai = new Date().getFullYear();

console.log("Ten sach: " + tenSach);
console.log("Ten tac gia: " + tenTacgia);
console.log("Nam xuat ban: " + namXuatban);

if(namXuatban == namHienTai) {
    console.log("Day la sach moi!");
} else if(namHienTai - namXuatban <= 5) {
    console.log(" Sach kha moi!");
} else {
    console.log("Sach da cu");
}
