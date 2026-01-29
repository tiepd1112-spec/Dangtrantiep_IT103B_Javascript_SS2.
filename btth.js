const ADMIN = "admin";
const STUDENT = "student";
const GUEST = "guest";


let userName = "Nguyễn Văn A ";
let role = `admin `;
let balence = 100000 ;
let cardStatus = "true";
let overdueDays = 0;
let messageRole = "";
let result = "";
let fine;


// Kiểm tra quyền truy cập dựa vào biến Vai trò (cần chuẩn hóa về chữ thường trước khi check):
// - Nếu là "admin": In ra "Chào Admin, bạn có toàn quyền hệ thống".

// - Nếu là "student": In ra "Chào sinh viên, bạn có thể mượn sách".

// - Nếu là "guest": In ra "Chào khách, bạn chỉ có thể đọc tại chỗ".

// - Trường hợp khác (default): In ra "Lỗi: Vai trò không hợp lệ!".

switch (role.toLowerCase) {
    case ADMIN:
        console.log("Chào Admin, bạn có toàn quyền hệ thống");
        messageRole = "Chào Admin, bạn có toàn quyền hệ thống"
        break;

    case STUDENT:
        console.log("Chào sinh viên, bạn có thể mượn sách");
        messageRole = "Chào sinh viên, bạn có thể mượn sách";
        //Kiểm tra điều kiện mượn sách:
// Người dùng CHỈ ĐƯỢC PHÉP mượn sách khi thỏa mãn các điều kiện sau:
// - Tên người dùng không được để trống (Gợi ý: Kiểm tra Truthy/Falsy).
// - Vai trò phải là "student" HOẶC "admin".
// - Số dư tài khoản phải lớn hơn 0 VÀ Trạng thái thẻ phải là true (Hoạt động).
// Nếu đủ điều kiện: In ra "ĐƯỢC PHÉP MƯỢN SÁCH".
// Nếu không đủ điều kiện: In ra "YÊU CẦU BỊ TỪ CHỐI" và ghi rõ lý do (nếu có thể).

if(userName && balence > 0 && cardStatus){
    console.log("Được phép mượn sách");
    result = "Được phép mượn sách";
//     Tính phí phạt trả muộn dựa vào số ngày quá hạn:
// - Nếu số ngày <= 0: Không phạt. In ra "Cảm ơn bạn đã trả đúng hạn".
// - Nếu số ngày từ 1 đến 5 ngày: Phạt 5.000đ/ngày.
// - Nếu số ngày từ 6 đến 10 ngày: Phạt 10.000đ/ngày.
// - Nếu số ngày > 10 ngày: Phạt 200.000đ (cố định) và in thêm cảnh báo "TÀI KHOẢN BỊ KHÓA".

    if(overdueDays <=0) {
    console.log("Cảm ơn đã trả sách đúng hạn");

    }else if (overdueDays >= 1 && overdueDays <= 5) {
        console.log("Số tiền phạt: ", overdueDays * 5000);
        fine = overdueDays * 5000;
    }else if (overdueDays >= 6 && overdueDays <= 10) {
        console.log("Số tiền phạt: ", overdueDays * 10000);
        fine = overdueDays * 10000;
    }else{
        console.log("Số tiền phạt: ", 200000);
        fine = 200000;
        console.log("Tài khoản bị khóa!");

    }

}else{
    if(!userName){
        console.log("Yêu cầu bị từ chối. Lý do: Tên đang bị để trống!");
        result ="Yêu cầu bị từ chối. Lý do: Tên đang bị để trống!"
    }else if (balence <= 0) {
        console.log("Yêu cầu bị từ chối. Lý do: Số dư không đủ!");
        result = "Yêu cầu bị từ chối. Lý do: Số dư không đủ!"
    }else if (!cardStatus) {
        console.log("Yêu cầu bị từ chối. Lý do: Thẻ đã bị khóa");
        result = "Yêu cầu bị từ chối. Lý do: Thẻ đã bị khóa";

    }else{
        console.log("Yêu cầu bị từ chối. Lý do không rõ!");
        result = "Yêu cầu bị từ chối. Lý do không rõ!";
    }
}
        break;

    case GUEST:
        console.log("Chào khách, bạn chỉ có thể đọc tại chỗ");
        messageRole = "Chào khách, bạn chỉ có thể đọc tại chỗ";
        break;

    default:
        console.log("Lỗi: Vai trò không hợp lệ!");
        break;
}

console.log(`
        --- HỆ THỐNG MƯỢN TRẢ ---

Người dùng: ${userName}

Quyền hạn: ${messageRole}

Kết quả mượn: ${result}

Tình trạng trả sách: ${overdueDays === 0 ? "Đúng hạn" : `Quá hạn ${overdueDays}` + "ngày"}

Tiền phạt: ${fine} VNĐ
    `);
