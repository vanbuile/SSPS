-- INSERT INTO PRINTER
INSERT INTO PRINTER (configuration, name, model, brand, dayBuy, description, paper, facility, building, floor, state)
VALUES 
  ('Cấu hình 1', 'Máy in 1', 'Mô hình 1', 'Nhãn hiệu 1', '2023-01-01', 'Mô tả 1', 'Giấy 1', 'Tiện nghi 1', 'Tòa nhà 1', 'Tầng 1', 1),
  ('Cấu hình 2', 'Máy in 2', 'Mô hình 2', 'Nhãn hiệu 2', '2023-01-02', 'Mô tả 2', 'Giấy 2', 'Tiện nghi 2', 'Tòa nhà 2', 'Tầng 2', 1),
  ('Cấu hình 3', 'Máy in 3', 'Mô hình 3', 'Nhãn hiệu 3', '2023-01-03', 'Mô tả 3', 'Giấy 3', 'Tiện nghi 3', 'Tòa nhà 3', 'Tầng 3', 1),
  ('Cấu hình 4', 'Máy in 4', 'Mô hình 4', 'Nhãn hiệu 4', '2023-01-04', 'Mô tả 4', 'Giấy 4', 'Tiện nghi 4', 'Tòa nhà 4', 'Tầng 4', 1),
  ('Cấu hình 5', 'Máy in 5', 'Mô hình 5', 'Nhãn hiệu 5', '2023-01-05', 'Mô tả 5', 'Giấy 5', 'Tiện nghi 5', 'Tòa nhà 5', 'Tầng 5', 1);

-- INSERT INTO BUYPAGE
INSERT INTO BUYPAGE (numberPage, date)
VALUES 
  (100, '2023-01-01'),
  (150, '2023-01-02'),
  (120, '2023-01-03'),
  (200, '2023-01-04'),
  (80, '2023-01-05');

-- INSERT INTO PRINTER_BUYPAGE
INSERT INTO PRINTER_BUYPAGE (id_printer, id_buypage)
VALUES 
  (1, 1),
  (2, 2),
  (3, 3),
  (4, 4),
  (5, 5);

-- INSERT INTO STUDENT
INSERT INTO STUDENT (MSSV, numberPage)
VALUES 
  ('123456', 50),
  ('654321', 75),
  ('789012', 60),
  ('345678', 90),
  ('901234', 40);

-- INSERT INTO STUDENT_BUYPAGE
INSERT INTO STUDENT_BUYPAGE (MSSV, id_buypage)
VALUES 
  ('123456', 1),
  ('654321', 2),
  ('789012', 3),
  ('345678', 4),
  ('901234', 5);

-- INSERT INTO FILE
INSERT INTO FILE (name, type, ispublic, link, Rank)
VALUES 
  ('Tệp Tin 1', 'Loại 1', 1, 'Liên kết 1', 5),
  ('Tệp Tin 2', 'Loại 2', 0, NULL, 3),
  ('Tệp Tin 3', 'Loại 3', 1, 'Liên kết 3', 4),
  ('Tệp Tin 4', 'Loại 4', 0, NULL, 2),
  ('Tệp Tin 5', 'Loại 5', 1, 'Liên kết 5', 1);

-- INSERT INTO PRINTING
INSERT INTO PRINTING (id_printer, MSSV, id_file, numberPage, date)
VALUES 
  (1, '123456', 1, 20, '2023-01-01'),
  (3, '789012', 3, 25, '2023-01-01'),
  (4, '345678', 4, 35, '2023-01-01'),
  (5, '901234', 5, 15, '2023-01-01'),
  (1, '123456', 2, 10, '2023-01-01'),
  (1, '123456', 3, 15, '2023-01-01'),
  (2, '654321', 4, 28, '2023-01-01'),
  (3, '789012', 5, 20, '2023-01-01'),
  (4, '345678', 1, 14, '2023-01-01'),
  (5, '901234', 2, 8, '2023-01-01'),
  (2, '654321', 3, 22, '2023-01-01'),
  (3, '789012', 4, 18, '2023-01-01'),
  (4, '345678', 5, 27, '2023-01-01'),
  (5, '901234', 1, 12, '2023-01-01'),
  (2, '654321', 2, 30, '2023-01-02'),
  (3, '789012', 3, 25, '2023-01-03'),
  (4, '345678', 4, 35, '2023-01-04'),
  (5, '901234', 5, 15, '2023-01-05'),
 (1, '123456', 2, 10, '2023-01-06'),
  (2, '654321', 3, 22, '2023-01-07'),
  (3, '789012', 4, 18, '2023-01-08'),
  (4, '345678', 5, 27, '2023-01-09'),
  (5, '901234', 1, 12, '2023-01-10');

-- INSERT INTO RATING
INSERT INTO RATING (MSSV, id_file, star, date)
VALUES 
  ('123456', 1, 4, '2023-01-01'),
  ('654321', 2, 5, '2023-01-02'),
  ('789012', 3, 3, '2023-01-03'),
  ('345678', 4, 5, '2023-01-04'),
  ('901234', 5, 2, '2023-01-05');

-- INSERT INTO COMMENT
INSERT INTO COMMENT (MSSV, id_file, Content, date)
VALUES 
  ('123456', 1, 'Bình luận 1', '2023-01-01'),
  ('654321', 2, 'Bình luận 2', '2023-01-02'),
  ('789012', 3, 'Bình luận 3', '2023-01-03'),
  ('345678', 4, 'Bình luận 4', '2023-01-04'),
  ('901234', 5, 'Bình luận 5', '2023-01-05');
