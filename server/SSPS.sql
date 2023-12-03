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
    paper INT
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
    name VARCHAR(255),
    description VARCHAR(255),
    link VARCHAR(255),
    isShare INT, 
    score INT DEFAULT 0
);

CREATE TABLE IF NOT EXISTS PRINTING (
    id_printer INT,
    MSSV VARCHAR(7),
    id_file INT,
    paper INT,
    date DATETIME,
    PRIMARY KEY (id_printer, MSSV, id_file),
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
    PRIMARY KEY (MSSV, id_file),
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
    
    -- Calculate the average score for the file
    SELECT AVG(star) INTO avg_score FROM RATING WHERE id_file = NEW.id_file;
    
    -- Update the score in the FILE table
    UPDATE FILE SET score = avg_score WHERE ID = NEW.id_file;
END//

DELIMITER ;
