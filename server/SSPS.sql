CREATE DATABASE IF NOT EXISTS SSPS;

USE SSPS;

CREATE TABLE IF NOT EXISTS PRINTER (
    id INT AUTO_INCREMENT PRIMARY KEY,
    configuration VARCHAR(255),
    name VARCHAR(255),
    model VARCHAR(255),
    brand VARCHAR(255),
    dayBuy DATE,
    description VARCHAR(255),
    paper VARCHAR(255),
    facility VARCHAR(255),
    building VARCHAR(255),
    floor VARCHAR(255),
    state INT
);

CREATE TABLE IF NOT EXISTS BUYPAGE (
    id INT AUTO_INCREMENT PRIMARY KEY,
    numberPage INT,
    date DATE
);

CREATE TABLE IF NOT EXISTS PRINTER_BUYPAGE (
    id_printer INT,
    id_buypage INT,
    PRIMARY KEY (id_printer, id_buypage),
    FOREIGN KEY (id_printer) REFERENCES PRINTER(id),
    FOREIGN KEY (id_buypage) REFERENCES BUYPAGE(id)
);

CREATE TABLE IF NOT EXISTS STUDENT (
    MSSV VARCHAR(6) PRIMARY KEY,
    numberPage INT
);

CREATE TABLE IF NOT EXISTS STUDENT_BUYPAGE (
    MSSV VARCHAR(6),
    id_buypage INT,
    PRIMARY KEY (MSSV, id_buypage),
    FOREIGN KEY (MSSV) REFERENCES STUDENT(MSSV),
    FOREIGN KEY (id_buypage) REFERENCES BUYPAGE(id)
);

CREATE TABLE IF NOT EXISTS FILE (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    type VARCHAR(255),
    Rank INT
);

CREATE TABLE IF NOT EXISTS PRINTING (
    id_printer INT,
    MSSV VARCHAR(6),
    id_file INT,
    numberPage INT,
    date DATE,
    PRIMARY KEY (id_printer, MSSV, id_file),
    FOREIGN KEY (id_printer) REFERENCES PRINTER(id),
    FOREIGN KEY (MSSV) REFERENCES STUDENT(MSSV),
    FOREIGN KEY (id_file) REFERENCES FILE(id)
);

CREATE TABLE IF NOT EXISTS RATING (
    MSSV VARCHAR(6),
    id_file INT,
    star INT,
    date DATE,
    PRIMARY KEY (MSSV, id_file),
    FOREIGN KEY (MSSV) REFERENCES STUDENT(MSSV),
    FOREIGN KEY (id_file) REFERENCES FILE(id)
);

CREATE TABLE IF NOT EXISTS COMMENT (
    MSSV VARCHAR(6),
    id_file INT,
    Content INT,
    date DATE,
    PRIMARY KEY (MSSV, id_file),
    FOREIGN KEY (MSSV) REFERENCES STUDENT(MSSV),
    FOREIGN KEY (id_file) REFERENCES FILE(id)
);


INSERT INTO PRINTER (configuration, name, model, brand, dayBuy, description, paper, facility, building, floor, state)
VALUES
('ConfigurationValue', 'PrinterName', 'PrinterModel', 'PrinterBrand', '2023-11-14', 'PrinterDescription', 'A4', 'FacilityName', 'BuildingName', 'FloorName', 1);
