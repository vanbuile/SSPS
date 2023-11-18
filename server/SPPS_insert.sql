-- INSERT INTO PRINTER
INSERT INTO PRINTER (name, model, brand, day, description, paper, facility, building, floor, state) 
VALUES 
('Máy In 1', 'Model 1', 'Nhãn hiệu 1', '2023-11-01', 'Mô tả Máy In 1', 100, 'Cơ sở 1', 'Tòa nhà 1', 'Tầng 1', 1),
('Máy In 2', 'Model 2', 'Nhãn hiệu 2', '2023-11-02', 'Mô tả Máy In 2', 200, 'Cơ sở 2', 'Tòa nhà 2', 'Tầng 2', 1),
('Máy In 3', 'Model 3', 'Nhãn hiệu 3', '2023-11-03', 'Mô tả Máy In 3', 150, 'Cơ sở 3', 'Tòa nhà 3', 'Tầng 3', 0),
('Máy In 4', 'Model 4', 'Nhãn hiệu 4', '2023-11-04', 'Mô tả Máy In 4', 50, 'Cơ sở 4', 'Tòa nhà 4', 'Tầng 4', 1),
('Máy In 5', 'Model 5', 'Nhãn hiệu 5', '2023-11-05', 'Mô tả Máy In 5', 120, 'Cơ sở 5', 'Tòa nhà 5', 'Tầng 5', 0);

-- INSERT INTO STUDENT
INSERT INTO STUDENT (MSSV, name, paper) 
VALUES 
('2113928', 'Sinh viên 1', 50),
('2113927', 'Sinh viên 2', 30),
('2223928', 'Sinh viên 3', 70),
('2355555', 'Sinh viên 4', 40),
('2018972', 'Sinh viên 5', 60),
('1918972', 'Sinh viên 7', 60),
('1818972', 'Sinh viên 8', 60);

-- INSERT INTO STUDENT_BUYPAGE
INSERT INTO STUDENT_BUYPAGE (MSSV, date, paper) VALUES
('2113928', '2023-11-11 14:30:00', 5),
('2113927', '2023-11-12 14:30:00', 8),
('2223928', '2023-11-13 14:30:00', 10),
('2355555', '2023-11-14 14:30:00', 3),
('2018972', '2023-11-15 14:30:00', 7),
('1918972', '2023-11-16 14:30:00', 2),
('1818972', '2023-11-17 14:30:00', 6),
('2113928', '2023-11-18 14:30:00', 4),
('2113927', '2023-11-19 14:30:00', 9),
('2223928', '2023-11-20 14:30:00', 1),
-- Thêm 10 dòng khác    14:30:00
('2113928', '2023-11-21 14:30:00', 3),
('2113927', '2023-11-22 14:30:00', 8),
('2223928', '2023-11-23 14:30:00', 5),
('2355555', '2023-11-24 14:30:00', 2),
('2018972', '2023-11-25 14:30:00', 6),
('1918972', '2023-11-26 14:30:00', 7),
('1818972', '2023-11-27 14:30:00', 4),
('2113928', '2023-11-28 14:30:00', 9),
('2113927', '2023-11-29 14:30:00', 1),
('2223928', '2023-11-30 14:30:00', 10);


-- INSERT INTO FILE
INSERT INTO FILE (name, description, link, isShare) 
VALUES 
('Tệp 1', 'Mô tả 1', 'Liên kết 1', 1),
('Tệp 2', 'Mô tả 2', 'Liên kết 2', 0),
('Tệp 3', 'Mô tả 3', 'Liên kết 3', 1),
('Tệp 4', 'Mô tả 4', 'Liên kết 4', 0),
('Tệp 5', 'Mô tả 5', 'Liên kết 5', 1);

-- INSERT INTO PRINTING
INSERT INTO PRINTING (id_printer, MSSV, id_file, paper, date) 
VALUES 
(1, '2113928', 1, 10, '2023-11-10 14:30:00'),
(2, '2113927', 2, 20, '2023-11-11 14:30:00'),
(3, '2223928', 3, 30, '2023-09-12 14:30:00'),
(4, '2355555', 4, 40, '2023-11-13 14:30:00'),
(5, '2018972', 5, 50, '2023-11-14 14:30:00');
INSERT INTO PRINTING (id_printer, MSSV, id_file, paper, date) 
VALUES 
(3, '2113928', 1, 10, '2023-11-18 14:30:00'),
(1, '2113927', 1, 20, '2023-11-18 14:30:00'),
(5, '2223928', 1, 30, '2023-11-18 14:30:00'),
(4, '2355555', 1, 40, '2023-11-18 14:30:00'),
(2, '2018972', 1, 50, '2023-11-18 14:30:00');

-- INSERT INTO RATING
INSERT INTO RATING (MSSV, id_file, star, date) 
VALUES 
('2113928', 1, 5, '2023-11-10 14:30:00'),
('2113927', 2, 4, '2023-11-11 14:30:00'),
('2223928', 3, 3, '2023-11-12 14:30:00'),
('2355555', 4, 2,  '2023-11-13 14:30:00'),
('2018972', 5, 1, '2023-11-14 14:30:00');

-- INSERT INTO COMMENT
INSERT INTO COMMENT (MSSV, id_file, Content, date) 
VALUES 
('2113928', 1, 'Bình luận 1', '2023-11-10 14:30:00'),
('2113927', 2, 'Bình luận 2', '2023-11-11 14:30:00'),
('2223928', 3, 'Bình luận 3', '2023-11-12 14:30:00'),
('2355555', 4, 'Bình luận 4',  '2023-11-13 14:30:00'),
('2018972', 5, 'Bình luận 5', '2023-11-14 14:30:00');

-- INSERT INTO SEMESTER
INSERT INTO SEMESTER (Semester, date, week) 
VALUES 
('HK231', '2023-11-01', 8),
('HK222', '2023-09-01', 8);

-- INSERT INTO FILETYPE
INSERT INTO FILETYPE (name, isUsable) 
VALUES 
('Loại 1', 1),
('Loại 2', 0),
('Loại 3', 1),
('Loại 4', 0),
('Loại 5', 1);

-- INSERT INTO FILEHAVETYPE
INSERT INTO FILEHAVETYPE (id_type, id_file) 
VALUES 
(1, 1),
(2, 2),
(3, 3),
(4, 4),
(5, 5);
