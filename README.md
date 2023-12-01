# Lệnh Chạy
### Server
- cd folder server chạy lệnh **npm start** chạy trên port 3001
### Client
- cd folder client chạy lệnh **npm start** chạy trên port 3000
***
# API
### Client
- API có dụng 'http://localhost:3001/api' với phần phía sau là nơi lưu trữ json
- trong folder client/util -> nơ cấu hình API của từng nhiệm vụ
- API sẽ dùng thông qua ***axios*** thư viện dùng gọi API
```javascript
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import APIs from '../util/API';
```
- với **useState, useEffect** phần sử lí event của reactjs
- với **APIs** trong phần client/util chọn APIs muốn dùng
```javascript
const [data, setdata] = useState(null);
useEffect(() => {
	// Hàm fetchApiData sử dụng Axios để gửi yêu cầu GET đến API
	const fetchApiData = async () => {
	  try {
		  const response = await axios.get(APIs.APIadminPrinterStatistics + '/TransactionChart');
		  setdata(response.data);
	  } catch (error) {
		console.error('Error fetching data:', error);
	  }
	};

	// Gọi hàm fetchApiData khi component được mount
	fetchApiData();
  }, []); // [] đảm bảo useEffect chỉ chạy một lần khi component được mount
  if (!data) return <></>;
```
- **if (!data) return <></>;** này để đồng bộ chứ không bị lỗi 
- data được lấy lên từ server
### Server
- **app.use** phần này để chọn API cần xử dụng được kế nối với router của từng phần sau khi kế nối xong thì router có nhiệm vụ là phân chia task cho từng API con bên trong nó, các API này sẽ gọi đến các hàm cần xử lí
- ***cors*** là phần dưới dùng để xác thực API và dùng để cho phép loại file nào được vận chuyển thông qua HTTP
- ***async (req, res)*** hàm trong API có 2 phần request/response. res là dữ liệu được truyền từ server lên client còn req là những dữ liệu từ client gửi lại server, phần async để đồng bộ khi xử lí quá lớn 
***
# Kiến trúc
- **BusinessLayer** dùng để xử lí database khi lấy từ dưới tầng PersistenceLayer lên và trả về cho tầng UI phía trên FORNTEND thông qua API -> tần này xử lí nhiều nhất không được gọi database phần này
- **PersistenceLayer** tần này có chức năng là xử kết nối database không xử lí dùng **mysql2** để truy vấn và xử lí, ***connection*** kế nối database, 
```javascript
const connection = require('./DataBase');
const mysql = require('mysql2');
```
- **DATABASE** dùng XAMPP 

# Đăng Nhập
### Các TK/MK để đăng nhập
Đối với SPSO (2):
- TK: SPSO1234, MK: SPSO1234
- TK: SPSO5678, MK: SPSO5678
Đối với Student (7):
- TK: 2113928, MK: 2113928
- TK: 2113927, MK: 2113927
- TK: 2223928, MK: 2223928
- TK: 2355555, MK: 2355555
- TK: 2018972, MK: 2018972
- TK: 1918972, MK: 1918972
- TK: 1818972, MK: 1818972

### Thông tin ID/MSSV của Student/SPSO sau khi Đăng Nhập
sẽ được lưu vào Cookie:
- Đối với SPSO:
{
	name: SPSO_cookie_id,
	value: <ID>', (ID là giá trị của trường ID của bảng SPSO trên DBS)
	Expires/Max Age: Thời gian kể từ lúc đăng nhập thành công + 60 phút
}
- Đối với Student:
{
	name: Student_cookie_id,
	value: <MSSV> (MSSV là giá trị của trường MSSV của bảng STUDENT trên DBS),
	Expires/Max Age: Thời gian kể từ lúc đăng nhập thành công + 60 phút
}

Khi gửi request ở phía Client, để lấy ID/MSSV từ Cookie thì dùng lệnh này:
- Đối với SPSO:
``` javascript
document.cookie.split('; ').find((cookie) => cookie.startsWith(`SPSO_cookie_id=`)).split('=')[1]
```
- Đối với Student:
``` javascript
document.cookie.split('; ').find((cookie) => cookie.startsWith(`Student_cookie_id=`)).split('=')[1]
```