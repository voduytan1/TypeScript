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
3. Nếu vẫn không tìm thấy, nó tiếp tục tìm trong prototype của prototype (cấp trên nữa), và cứ thế cho đến khi nó tìm thấy hoặc không còn gì để tìm (đạt đến null).

4. Ví dụ, ta có một mô hình:
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

`// Gọi phương thức toFixed() trên num`
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

REF: https://github.com/microsoft/TypeScript/wiki/FAQ#--does-not-refer-to-objects-with-no-properties

## Update 4 - ARRAY TYPE 
một mảng có thể gán được nhiều kiểu dữ liệu nhưng ta có thể kiểm soát nó bằng cách type annocation cho mảng

Có thể khai báo mảng theo 2 cách:

`let numbers: number[] = [1, 2, 3];`
`let names: Array<string> = ["Alice", "Bob"];` 
Ví dụ:
`let temp: (string | number)[] = ['hello', 123] //mảng sẽ chỉ nhận các phần tử có kiểu string hoặc number`

## UPDATE 5 - TUPLE TYPE
Có vài điểm tương tự với array nhưng có kiểu, số lượng phần tử cố định,

Nếu bạn muốn có một phần tử có thể có hoặc không, ta có thể thêm dấu '?' sau kiểu dữ liệu lúc khai báo

Ví dụ:
`let temp[string, string?, number]`

## UPDATE 6 - ENUM TYPE (Kiểu liệt kê)
Giống như ta gom các constant thành một nhóm

ví dụ:
`enum Color {`
 ` Red = "red",`
  `Green = "green",`
  `Blue = "blue"`
`}`

Nếu chỉ khai báo tên các thành phần mà không gán giá trị thì TypeScript sẽ tự động gán là '0,1,2....' với kiểu dữ liệu number.

**Reverse Mapping**

Bạn có thể lấy tên của enum thông qua giá trị của nó

Ví dụ:
`enum Status {`
`  Active = 1,`
`  Inactive,`
`  Pending`
`}`
`let status: Status = Status.Active;`
`console.log(status); // Output: 1`
`console.log(Status[1]); // Output: "Active"`
`let color: Color = Color.Red;``

**Bạn có thể dùng enum trong các hàm**
`Ví dụ:`
`enum OrderStatus {`
`  Pending = "Pending",`
`  Shipped = "Shipped",`
`  Delivered = "Delivered",`
`  Canceled = "Canceled"`
`}`

`function getOrderStatusMessage(status: OrderStatus): string {`
`  switch (status) {`
`    case ...:`
`}`

`console.log(getOrderStatusMessage(OrderStatus.Shipped));  // "Your order has been shipped."`

## UPDATE 7 - UNIONS TYPE
TypeScript cho phép bạn khai báo một biến có thể nhận nhiều kiểu dữ liệu bằng cách sử dụng dấu |.

Ví dụ: 
`let value: string | number;
value = "Hello";  // Hợp lệ
value = 42;       // Hợp lệ`


## UPDATE 8 - Intersection Type
Intersection Types kết hợp nhiều kiểu dữ liệu lại với nhau. Nó tạo ra một kiểu mới yêu cầu một giá trị phải thỏa mãn tất cả các kiểu được kết hợp.
Ví dụ ta có 2 kiểu object, ta tạo một kiểu mới kết hợp cả 2 lại:
`type Worker = Person & Employee;`
Worker sẽ có được cả thuộc tính và phương thức của Person và Employee

## Update 9 - Literial Types (kiểu hằng)
Chỉ cho phép biến của kiểu dữ liệu này nhận các giá trị đã được khai báo trước.
`type Status = "pending" | "approved" | "rejected";`