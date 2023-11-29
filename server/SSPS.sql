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
    facility VARCHAR(255),
    building VARCHAR(255),
    floor VARCHAR(255),
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
    isShare INT -- nếu =0 thì không share -> link = nullptr, nếu =1 thì share -> link != nullptr
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
    Content nvarchar(255),
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
