var num = 42;
console.log(typeof num); // "number" (Trước khi gọi phương thức)
// Gọi phương thức toFixed() trên num
var result = num.toFixed(2); // "42.00" (Kết quả là một chuỗi)
// Kiểm tra lại kiểu dữ liệu của num
console.log(typeof num); // "number" (Kiểu của num vẫn là number)
console.log(typeof result); // "42.00" (Kết quả trả về là một chuỗi)
