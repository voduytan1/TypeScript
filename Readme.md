# Type
Không thể gán một giá trị khác kiểu cho một biến được khai báo (type annocation), tương tự khi thêm một phần tử vào một mảng thì phần tử đó phải cùng kiểu dữ liệu được khai báo

Nếu không dùng type annocation thì khi khởi tạo giá trị, TS sẽ tự động đoán kiểu dữ liệu của biến

Nếu không khai báo và cũng không khởi tạo giá trị cho biến thì biến đó sẽ giữ kiểu any

!!!Không viết hoa cho các kiểu dữ liệu

## Sự khác biệt giữa Primitive type - kiểu dữ liệu nguyên thúy (number, string, object ...) và Wrapper Classes/Objects (Number, String, Object ...)
### Đầu tiền, trước khi vào thẳng vấn đề thì chúng ta cần biết Prototype Chain là gì?
**Prototype chain (chuỗi prototype) là một cơ chế trong JavaScript cho phép các đối tượng kế thừa thuộc tính và phương thức từ các đối tượng khác**

**Cách thức hoạt động của Prototype Chain**
1. Khi bạn truy cập một thuộc tính của đối tượng, JavaScript sẽ kiểm tra xem thuộc tính đó có tồn tại trong chính đối tượng hay không.
2. Nếu không, JavaScript sẽ kiểm tra trong prototype của đối tượng đó (đối tượng mà nó kế thừa từ).
3.Nếu vẫn không tìm thấy, nó tiếp tục tìm trong prototype của prototype (cấp trên nữa), và cứ thế cho đến khi nó tìm thấy hoặc không còn gì để tìm (đạt đến null).

- Ví dụ, ta có một mô hình:
Tesla -> Human.prototype -> Animal.prototype -> Object.prototype -> null
Giả sử thuộc tính live() thuộc object Animal thì khi ta truy cập thuộc tính live() ở thực thể Tesla, JavaScript sẽ kiểm tra thuộc tính live() trong object Human, nếu không có sẽ tìm đến Animal 
và cứ thế nếu tìm đến null vẫn không tìm thấy thì thuộc tính đó không có sẵn cho thực thể Tesla và sẽ trả về null 

### Sau khi biết Prototype Chain là gì thì ta tiếp tục với chủ đề
- Kiểu dữ liệu nguyên thủy không có Prototype Chain, chúng chỉ đơn giản là chứa dữ liệu.
- Nhưng khi ta gọi một phương thức của một  Wrapper Classe/Object thì JavaScript sẽ tự động tạo ra một  Wrapper Classe/Object tạm thời và gọi phương thức đó trên đối tượng tạm thời
- Sau khi phương thức được thực thi và trả về giá trị thì giá trị nguyên thủy vẫn sẽ không thay đổi.
- Ví dụ:
`let num = 42;`

`console.log(typeof num);  // "number" (Trước khi gọi phương thức)`

`// Gọi phương thức toFixed() trên num``
`let result = num.toFixed(2);  // "42.00" (Kết quả là một chuỗi)`

`// Kiểm tra lại kiểu dữ liệu của num`
`console.log(typeof num);  // "number" (Kiểu của num vẫn là number)`
`console.log(result);      // "42.00" (Kết quả trả về là một chuỗi)`

## UPDATE - NUMBER TYPE 
Không có phân biệt giữa các kiểu int, float .... -> chỉ có kiểu number 

Khi số quá lớn thì kiểu number có thể không chứa hết được thì có kiểu bigint (nhưng ít dùng đến)

## UPDATE 2 - STRING TYPE 
có thể nhận nút xuống dòng trong string

## Update 3 - OBJECT TYPE 

kiểu "{}" không có nghĩa là một object, kí hiệu "{}" đề cập đến bất kỳ giá trị non-null nào số thuộc tính là 0 hoặc nhiều hơn
Ví dụ: Các Primitive type ( kiểu dữ liệu nguyên thủy) như string "Hello world" có thuộc tính length và là một non-null value nên chuỗi trên là một {}.
Source: https://github.com/microsoft/TypeScript/wiki/FAQ#--does-not-refer-to-objects-with-no-properties



