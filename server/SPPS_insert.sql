
USE SSPS;

-- INSERT INTO PRINTER
INSERT INTO PRINTER (name, model, brand, day, description, paper, building, floor, state)
VALUES 
('Brother1', 'Model 1', 'Brother', '2023-11-01', 'Mô tả Máy In 1', 100, 'BKB1', 1,1),
('Brother2', 'Model 2', 'Brother', '2023-11-02', 'Mô tả Máy In 2', 200, 'BKB2', 2, 1),
('Toshiba1', 'Model Y', 'Toshiba', '2023-11-03', 'Mô tả Máy In 3', 300, 'BKB3', 3, 0),
('Toshiba2', 'Model 4', 'Toshiba', '2023-11-04', 'Mô tả Máy In 4', 500, 'BKB1', 4, 1),
('SamsungL', 'Model Z', 'Samsung', '2023-11-05', 'Mô tả Máy In 5', 120, 'BKB2', 5, 0),
('Canon-CX08', 'Model V', 'Canon', '2023-11-01', 'Mô tả Máy In 1', 1000, 'BKB1', 1,1),
('Canon-CX08', 'Model 2', 'Canon', '2023-11-02', 'Mô tả Máy In 2', 4200, 'BKB2', 2, 1),
('Canon-Cx05', 'Model A', 'Canon', '2023-11-03', 'Mô tả Máy In 3', 150, 'BKB3', 3, 0),
('Epson-T1', 'Model 4', 'Epson', '2023-11-04', 'Mô tả Máy In 4', 5000, 'BKB1', 4, 1),
('Samsung-QL', 'Model V', 'Samsung', '2023-11-05', 'Mô tả Máy In 5', 120, 'BKB2', 5, 0),
('Epson-777', 'Model 1', 'Epson', '2023-11-01', 'Mô tả Máy In 1', 100, 'BKB1', 1 ,1),
('HP-HLQ2', 'Model 2', 'HP', '2023-11-02', 'Mô tả Máy In 2', 200, 'BKB6', 2, 1),
('HP-HLQ2', 'Model K', 'HP', '2023-11-03', 'Mô tả Máy In 3', 150, 'BKB3', 3, 0),
('Toshiba-Q2', 'Model 4', 'Toshiba', '2023-11-04', 'Mô tả Máy In 4', 500, 'BKB1', 4, 1),
('Samsung-QL', 'Model 5', 'Samsung', '2023-11-05', 'Mô tả Máy In 5', 200, 'BKB2', 5, 0),
('HP-HLQ2', 'Model 2', 'HP', '2023-11-02', 'Mô tả Máy In 2', 2000, 'BKB2', 2, 1),
('HP-HLQ2', 'Model 10', 'HP', '2023-11-03', 'Mô tả Máy In 3', 1500,  'BKB3', 3, 0),
('Toshiba-Q2', 'Model X', 'Toshiba', '2023-11-04', 'Mô tả Máy In 4', 5000, 'BKB1', 4, 1),
('Samsung-QL', 'Model 5', 'Samsung', '2023-11-05', 'Mô tả Máy In 5', 100, 'BKB6', 5, 0);

-- INSERT INTO STUDENT
INSERT INTO STUDENT (MSSV, name, paper, pass) 
VALUES 
('2113928', 'Đào Duy Long', 50, '2113928'),
('2113927', 'Sinh viên 2', 30, '2113927'),
('2223928', 'Sinh viên 3', 70, '2223928'),
('2355555', 'Sinh viên 4', 40, '2355555'),
('2018972', 'Sinh viên 5', 60, '2018972'),
('1918972', 'Sinh viên 7', 60, '1918972'),

('2155555', 'Sinh viên 4', 40, '2355555'),
('2118972', 'Sinh viên 5', 60, '2018972'),
('1928972', 'Sinh viên 7', 60, '1918972'),

('1818972', 'Sinh viên 8', 60, '1818972');

-- INSERT INTO SPSO
INSERT INTO SPSO (ID, name, pass) 
VALUES 
('SPSO1234', 'Nguyễn Văn A', 'SPSO1234'),
('SPSO5678', 'Nguyễn Văn B', 'SPSO5678');

-- INSERT INTO STUDENT_BUYPAGE
INSERT INTO STUDENT_BUYPAGE (MSSV, date, paper) VALUES
('2155555', '2023-11-11 14:30:00', 5),
('2118972', '2023-11-12 14:30:00', 8),
('1918972', '2023-11-13 14:30:00', 10),
('2113928', '2023-11-11 14:30:00', 5),
('2313925', '2023-11-12 14:30:00', 8),
('2223928', '2023-11-13 14:30:00', 10),
('2355555', '2023-11-14 14:30:00', 3),
('2018972', '2023-11-15 14:30:00', 7),
('1918972', '2023-11-16 14:30:00', 2),
('1818972', '2023-11-17 14:30:00', 6),
('2113928', '2023-11-18 14:30:00', 4),
('2313925', '2023-11-19 14:30:00', 9),
('2223928', '2023-11-20 14:30:00', 1),
('2113928', '2023-11-21 14:30:00', 3),
('2313925', '2023-11-22 14:30:00', 8),
('2223928', '2023-11-23 14:30:00', 5),
('2355555', '2023-11-24 14:30:00', 2),
('2018972', '2023-11-25 14:30:00', 6),
('1918972', '2023-11-26 14:30:00', 7),
('1818972', '2023-11-27 14:30:00', 4),
('2113928', '2023-11-28 14:30:00', 9),
('2113927', '2023-11-29 14:30:00', 1),
('2223928', '2023-12-30 14:30:00', 10),
('2018972', '2023-12-15 14:30:00', 7),
('1918972', '2023-12-16 14:30:00', 2),
('1818972', NOW(), 6),
('2113928', NOW(), 4),
('2113927', NOW(), 9),
('2223928', NOW(), 1),
('2113928', NOW(), 3);


-- INSERT INTO FILE
INSERT INTO FILE (MSSV, name, description, link, isShare) 
VALUES 
('1818972','Lập trình Java', 'File về lập trình Java từ cơ bản đến nâng cao.', 'https://drive.google.com/file/d/1xDVYbTvGXPx3n_WxFuKuLQMkTjSz-Qlb/view?usp=sharing', 1),
('1818972','Toán cao cấp', 'Tài liệu về toán cao cấp, bao gồm các chương từ 1 đến 5.', 'https://drive.google.com/file/d/1xDVYbTvGXPx3n_WxFuKuLQMkTjSz-Qlb/view?usp=sharing', 1),
('1818972','Kỹ thuật lập trình', 'Tài liệu về kỹ thuật lập trình, giới thiệu về các ngôn ngữ lập trình.', 'https://drive.google.com/file/d/1xDVYbTvGXPx3n_WxFuKuLQMkTjSz-Qlb/view?usp=sharing', 1),
('1818972','Quản trị mạng', 'Tài liệu hướng dẫn về quản trị mạng, các chương từ 1 đến 10.', 'https://drive.google.com/file/d/1xDVYbTvGXPx3n_WxFuKuLQMkTjSz-Qlb/view?usp=sharing', 1),
('1818972','Tiếng Anh giao tiếp', 'Tài liệu học tiếng Anh giao tiếp, từ vựng và ngữ pháp.', 'https://drive.google.com/file/d/1xDVYbTvGXPx3n_WxFuKuLQMkTjSz-Qlb/view?usp=sharing', 1),
('1818972','Mạng máy tính', 'File bao gồm chương 1, chương 2 và chương 3 về mạng máy tính.', 'https://drive.google.com/file/d/1xDVYbTvGXPx3n_WxFuKuLQMkTjSz-Qlb/view?usp=sharing', 1),
('1818972','Hóa đại cương', 'File chứa nâng cao và cơ bản về hóa đại cương.', 'https://drive.google.com/file/d/1xDVYbTvGXPx3n_WxFuKuLQMkTjSz-Qlb/view?usp=sharing', 0),
('1818972','Mạng máy tính', 'File bao gồm chương 1, chương 2 và chương 3 về mạng máy tính.', 'https://drive.google.com/file/d/1xDVYbTvGXPx3n_WxFuKuLQMkTjSz-Qlb/view?usp=sharing', 0),
('1818972','Hóa đại cương', 'File chứa nâng cao và cơ bản về hóa đại cương.', 'https://drive.google.com/file/d/1xDVYbTvGXPx3n_WxFuKuLQMkTjSz-Qlb/view?usp=sharing', 1);


-- INSERT INTO PRINTING
INSERT INTO PRINTING (id_printer, MSSV, id_file, paper, date) 
VALUES 
(1, '2113928', 1, 10, '2023-11-10 14:30:00'),
(2, '2113927', 2, 20, '2023-11-11 14:30:00'),
(3, '2223928', 3, 30, '2023-09-12 14:30:00'),
(4, '2355555', 4, 40, '2023-11-13 14:30:00'),
(5, '2018972', 5, 50, '2023-11-14 14:30:00'),
(3, '2113928', 1, 10, '2023-11-18 14:30:00'),
(1, '2113928', 1, 10, '2023-11-19 15:30:00'),
(2, '2113927', 2, 20, '2023-11-19 15:30:00'),
(3, '2223928', 3, 30, '2023-09-19 15:30:00'),
(4, '2355555', 4, 40, '2023-11-20 15:30:00'),
(5, '2018972', 5, 50, '2023-11-21 15:30:00'),
(3, '2113928', 1, 10, '2023-11-22 15:30:00'),
(1, '2113927', 1, 20, NOW()),
(5, '2223928', 1, 30, NOW()),
(4, '2355555', 1, 40, NOW()),
(2, '2018972', 1, 50, NOW()),
(2, '2113927', 2, 20, '2023-11-25 15:30:00'),
(4, '2355555', 4, 40, '2023-11-25 15:30:00'),
(5, '2018972', 5, 50, '2023-11-25 15:30:00');

-- INSERT INTO RATING
INSERT INTO RATING (MSSV, id_file, star, date) 
VALUES 
('2113928', 1, 5, '2023-11-10 14:30:00'),
('2113928', 2, 4, '2023-11-11 14:30:00'),
('2223928', 3, 3, '2023-11-12 14:30:00'),
('2355555', 4, 2,  '2023-11-13 14:30:00'),
('2018972', 5, 1, '2023-11-14 14:30:00');

-- INSERT INTO COMMENT
INSERT INTO COMMENT (MSSV, id_file, Content, date) 
VALUES 
('2113928', 1, 'Bình luận 1', '2023-11-10 14:30:00'),
('2018972', 2, 'Bình luận 2', '2023-11-11 14:30:00'),
('2018972', 3, 'Bình luận 3', '2023-11-12 14:30:00'),
('2355555', 4, 'Bình luận 4',  '2023-11-13 14:30:00'),
('2113928', 5, 'Bình luận 5', '2023-11-14 14:30:00');

-- INSERT INTO SEMESTER
INSERT INTO SEMESTER (Semester, date, week) 
VALUES 
('HK231', '2023-11-01', 8),
('HK222', '2023-09-01', 8);

-- INSERT INTO FILETYPE
INSERT INTO FILETYPE (name, value, isUsable) 
VALUES 
('.PDF (Portable Document Format)','PDF', 1),
('.XLSX (Microsoft Excel Spreadsheet)','XLSX', 0),
('.PPT (Microsoft Powerpoint Presentation)','PPT', 0),
('.DOCX (Microsoft Word Document)','DOCX', 1),
('.TXT (Text Document)','TXT', 0),
('.PNG (Portable Network Graphics)','PNG', 1),
('.JPEG (Joint Photographic Experts Group)','JPEG', 0);

-- INSERT INTO FILEHAVETYPE
INSERT INTO FILEHAVETYPE (id_type, id_file) 
VALUES 
(1, 1),
(2, 2),
(3, 3),
(4, 4),
(5, 5);
