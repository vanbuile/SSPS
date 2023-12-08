DROP DATABASE IF EXISTS SSPS;
CREATE DATABASE IF NOT EXISTS SSPS;

USE SSPS;

SET GLOBAL time_zone = '+07:00';

CREATE TABLE IF NOT EXISTS PRINTER (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    model VARCHAR(255),
    brand VARCHAR(255),
    day DATE,
    description VARCHAR(255),
    paper INT DEFAULT 0,
    building VARCHAR(255),
    floor INT,
    state INT
);


CREATE TABLE IF NOT EXISTS STUDENT ( 
    MSSV VARCHAR(7) PRIMARY KEY,
    name VARCHAR(255),
    paper INT,
    pass VARCHAR(255)
);


CREATE TABLE IF NOT EXISTS SPSO (
    ID VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255),
    pass VARCHAR(255)
);
CREATE TABLE IF NOT EXISTS STUDENT_BUYPAGE (
    MSSV VARCHAR(7),
    ID INT AUTO_INCREMENT PRIMARY KEY ,
    date DATETIME,
    paper INT,
    FOREIGN KEY (MSSV) REFERENCES STUDENT(MSSV)
);

CREATE TABLE IF NOT EXISTS FILE (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    MSSV VARCHAR(7),
    name VARCHAR(255),
    description VARCHAR(255),
    link VARCHAR(255),
    isShare INT, -- nếu =0 thì không share -> link = nullptr, nếu =1 thì share -> link != nullptr
    score INT DEFAULT 0,
    FOREIGN KEY (MSSV) REFERENCES STUDENT(MSSV)
);

CREATE TABLE IF NOT EXISTS PRINTING (
    id_printer INT,
    MSSV VARCHAR(7),
    id_file INT,
    paper INT,
    date DATETIME,
    PRIMARY KEY (id_printer, MSSV, id_file, date),
    FOREIGN KEY (id_printer) REFERENCES PRINTER(id),
    FOREIGN KEY (MSSV) REFERENCES STUDENT(MSSV),
    FOREIGN KEY (id_file) REFERENCES FILE(id)
);

CREATE TABLE IF NOT EXISTS RATING (
    MSSV VARCHAR(7),
    id_file INT,
    star INT,
    date DATETIME,
    PRIMARY KEY (MSSV, id_file),
    FOREIGN KEY (MSSV) REFERENCES STUDENT(MSSV),
    FOREIGN KEY (id_file) REFERENCES FILE(id)
);

CREATE TABLE IF NOT EXISTS COMMENT (
    MSSV VARCHAR(7),
    id_file INT,
    Content TEXT,
    date DATETIME,
    PRIMARY KEY (MSSV, date),
    FOREIGN KEY (MSSV) REFERENCES STUDENT(MSSV),
    FOREIGN KEY (id_file) REFERENCES FILE(id)
);

CREATE TABLE IF NOT EXISTS SEMESTER (
    Semester CHAR(5) PRIMARY KEY,
    date DATETIME,
    week INT
);


CREATE TABLE IF NOT EXISTS FILETYPE (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    value VARCHAR(255),
    isUsable INT
);

CREATE TABLE IF NOT EXISTS FILEHAVETYPE(
    id_type INT,
    id_file INT,
    PRIMARY KEY(id_type,id_file),
    FOREIGN KEY (id_file) REFERENCES FILE(ID),
    FOREIGN KEY (id_type) REFERENCES FILETYPE(ID)
);
---trigger update score of file
DELIMITER //

CREATE TRIGGER update_score_after_rating_insert
AFTER INSERT ON RATING
FOR EACH ROW
BEGIN
    DECLARE avg_score DECIMAL(5, 2);
    
    SELECT AVG(star) INTO avg_score FROM RATING WHERE id_file = NEW.id_file;
    
    UPDATE FILE SET score = avg_score WHERE ID = NEW.id_file;
END//

DELIMITER ;
DELIMITER //

CREATE TRIGGER update_score_after_rating_update
AFTER UPDATE ON RATING
FOR EACH ROW
BEGIN
    DECLARE avg_score DECIMAL(5, 2);
    
    SELECT AVG(star) INTO avg_score FROM RATING WHERE id_file = NEW.id_file;
    
    UPDATE FILE SET score = avg_score WHERE ID = NEW.id_file;
END//

DELIMITER ;






USE SSPS;

DELIMITER //

-- ! SelectAllPrinting ! 
CREATE PROCEDURE GetPrintingInfo()
BEGIN
    SELECT 
        P.id_printer,
        P.MSSV,
        P.id_file,
        P.paper,
        P.date,
        F.isShare
    FROM 
        PRINTING P
    JOIN 
        FILE F ON P.id_file = F.id;
END //


CREATE PROCEDURE GetWeekInSemester()
BEGIN
    DECLARE dateVar DATE;
    DECLARE weekVar INT;

    SELECT date, week INTO dateVar, weekVar FROM Semester 
    ORDER BY date DESC LIMIT 1;

    SELECT 
        PR.name,
        SUM(P.paper) AS totalPaper,
        P.week
    FROM 
        (SELECT 
            P.paper, 
            FLOOR(DATEDIFF(P.date, dateVar)/7) + 1 AS week,
            P.id_printer
         FROM 
            PRINTING P) AS P
    JOIN 
        PRINTER PR ON P.id_printer = PR.id
    WHERE 
        P.week <= weekVar AND P.week > 0
    GROUP BY 
        PR.name, P.week;
END //



CREATE PROCEDURE GetPrintInSemester()
BEGIN
    DECLARE dateVar DATE;
    DECLARE weekVar INT;

    SELECT date,week INTO dateVar, weekVar FROM Semester 
    ORDER BY date DESC LIMIT 1;

    SELECT 
        PR.name as name,
        P.paper as pages_print,
        PR.paper as pages_buy
    FROM 
        (SELECT 
            sum(P.paper) as paper, 
            P.id_printer
        FROM 
            PRINTING P
        WHERE 
            FLOOR(DATEDIFF(P.date, dateVar)/7) + 1 <= weekVar and FLOOR(DATEDIFF(P.date, dateVar)/7) + 1 > 0
        GROUP BY P.id_printer) AS P
    JOIN 
        PRINTER PR ON P.id_printer = PR.id;
END //


CREATE PROCEDURE GetStudentPrintMaxSemester()
BEGIN

    DECLARE dateVar DATE;
    DECLARE weekVar INT;

    SELECT date,week INTO dateVar, weekVar FROM Semester 
    ORDER BY date DESC LIMIT 1;

    SELECT
        S.MSSV AS id,
        S.name AS student,
        P.paper AS number_pager_printer,
        s.paper AS number_pager_remaining,
        P.number_file_share as number_file_share,
        P.number_file as number_file
    FROM
        (SELECT 
            sum(P.paper) as paper, 
            P.MSSV,
            sum(F.isShare) as number_file_share,
            count(F.isShare) as number_file
        FROM 
            PRINTING P
        JOIN
            FILE F ON P.id_file = F.ID
        WHERE 
             FLOOR(DATEDIFF(P.date, dateVar)/7) + 1 <= weekVar and FLOOR(DATEDIFF(P.date, dateVar)/7) + 1 > 0
        GROUP BY P.MSSV) AS P
    JOIN
        STUDENT S ON P.MSSV = S.MSSV
    GROUP BY number_pager_printer DESC LIMIT 10;
END //


CREATE PROCEDURE GetStudentCourseRevenue()
BEGIN

    DECLARE dateVar DATE;
    DECLARE weekVar INT;

    SELECT date,week INTO dateVar, weekVar FROM Semester 
    ORDER BY date DESC LIMIT 1;

    SELECT
        CONCAT('K', SUBSTRING(S.MSSV, 1, 2)) AS name,
        sum(B.paper) as "value"
    FROM
        (SELECT MSSV, paper FROM STUDENT_BUYPAGE B 
        WHERE FLOOR(DATEDIFF(B.date, dateVar)/7) + 1 <= weekVar 
        and FLOOR(DATEDIFF(B.date, dateVar)/7) + 1 > 0
        ) as B
    JOIN
        STUDENT S ON S.MSSV = B.MSSV
    GROUP BY CONCAT('K', SUBSTRING(S.MSSV, 1, 2))
    ORDER BY value DESC;
END //


CREATE PROCEDURE GetStudentInfo()
BEGIN
    SELECT
        *
    FROM
        STUDENT_BUYPAGE;
END //

CREATE PROCEDURE GetRecentOrdersInfo()
BEGIN
    SELECT
        S.MSSV,
        S.name,
        sum(B.paper) AS number_pager_buy,
        S.paper AS number_pager_remaining,
        max(B.date) as date
    FROM
        STUDENT S JOIN STUDENT_BUYPAGE B ON S.MSSV = B.MSSV
    GROUP BY S.MSSV
    ORDER BY number_pager_buy DESC;
END //

CREATE PROCEDURE GetFileTypesList()
BEGIN
    SELECT
		*
    FROM
		FILETYPE;
END //

CREATE PROCEDURE AddFileTypes(typ VARCHAR(255))
BEGIN
	UPDATE FILETYPE
    SET isUsable = 1
    WHERE value = typ;
END //

CREATE PROCEDURE RemoveFileTypes(typ VARCHAR(255))
BEGIN
    UPDATE FILETYPE
    SET isUsable = 0
    WHERE value = typ;
END //

CREATE PROCEDURE UpdatePageNumber(quantity INT)
BEGIN
    UPDATE STUDENT
    SET paper = quantity + paper;
END //
CREATE PROCEDURE ViewAllPrinter()
BEGIN
    SELECT * FROM PRINTER; 
    -- de printer no kh chay
END //

CREATE PROCEDURE AddPrinter(IN _name varchar(255), IN _brand varchar(255), IN _model varchar(255), IN _building varchar(255),IN _floor INT,IN _paper int, IN _day date, IN _description varchar(255),IN _state int)
BEGIN
	INSERT INTO `ssps`.`printer`(`name`,`brand`,`model`,`building`,`floor`,`paper`,`day`,`description`,`state`)
VALUES
(_name,_brand,_model,_building,_floor,_paper,_day,_description,_state);
END //

CREATE PROCEDURE EditPrinter(IN _id int,IN _name varchar(255), IN _brand varchar(255), IN _model varchar(255), IN _building varchar(255),IN _floor INT,IN _paper int, IN _day date, IN _description varchar(255),IN _state int)
BEGIN
    UPDATE `ssps`.`printer`
    SET `name`=_name ,`brand` = _brand,`model` = _model,`building`= _building,`floor` = _floor,`paper`= _paper,`day`=_day,`description`=_description,`state`=_state
    WHERE `id` = _id;
END //

CREATE PROCEDURE `DeletePrinter` (IN _id int )
BEGIN
	DELETE FROM `ssps`.`printer`
	WHERE `id` = _id;
END //

CREATE PROCEDURE ViewPrinterByLocation(IN _building varchar(255))
BEGIN
    SELECT id, floor, building, `state`, paper
    FROM `SSPS`.`PRINTER`
    WHERE `building` = _building;
END //

CREATE FUNCTION addFile(_mssv VARCHAR(7), _name VARCHAR(255), _description VARCHAR(255), _link VARCHAR(255), _isShare INT)
RETURNS BIGINT
READS SQL DATA
DETERMINISTIC
BEGIN
    INSERT INTO `SSPS`.`FILE`(`MSSV`,`name`, `description`, `link`, `isShare`)
    VALUES (_mssv, _name, _description, _link, _isShare);
RETURN LAST_INSERT_ID();
END; //

CREATE PROCEDURE aPrinting(IN id_printer INT, IN mssv VARCHAR(7), IN id_file INT, IN paper INT, IN date DATETIME)
BEGIN
	INSERT INTO `SSPS`.`PRINTING`(`id_printer`,`MSSV`,`id_file`,`paper`,`date`)
VALUES
(id_printer, mssv, id_file, paper, date);
END //

CREATE PROCEDURE SPSOLogin(IN p_id VARCHAR(255), IN p_pass VARCHAR(255))
BEGIN
    SELECT *
    FROM SPSO
    WHERE ID = p_id AND pass = p_pass;
END //

CREATE PROCEDURE StudentLogin(IN p_id VARCHAR(255), IN p_pass VARCHAR(255))
BEGIN
    SELECT *
    FROM STUDENT
    WHERE MSSV = p_id AND pass = p_pass;
END //

CREATE PROCEDURE GetAdminInfo(IN p_id VARCHAR(255))
BEGIN
	SELECT ID, name
    FROM SPSO
    WHERE ID = p_id;
END //
DELIMITER ;





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
('2313925', 'Sinh viên 9', 60, '1918972'),
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
