# Class
Các biến private nên để thên _ ở trước  
## Static properties và methods
- Static properties là các thuộc tính mà giá trị của chúng được chia sẻ giữa tất cả các đối tượng của lớp.
- Static methods
Chỉ có thể truy cập thông qua tên lớp, không thể gọi từ một instance.

Vì static method chỉ tồn tại trên class, nên nó không thể truy cập trực tiếp vào các thuộc tính hoặc phương thức của instance. Nhưng lại có thể truy cập static properties

Static method cũng có thể kế thừa và override

**Thường dùng làm các helper**

## Readonly
Tạo giá trị mà không bị xóa, thay đổi, chỉ có thể đọc

## getter và setter
thông qua cú pháp get và set