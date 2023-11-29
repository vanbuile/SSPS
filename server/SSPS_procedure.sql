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

    SELECT date,week INTO dateVar, weekVar FROM Semester 
    ORDER BY date DESC LIMIT 1;

    SELECT 
        PR.name,
        P.paper,
        SUM(P.week) AS totalWeek
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
        P.week <= weekVar and P.week > 0
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

--share file procedure
CREATE PROCEDURE GetAllSharedFile()
BEGIN
    select *
    from file
    WHERE isShare==1
end //


CREATE PROCEDURE GetSharedFileDetail(fid)
BEGIN
    select * 
    from file
    WHERE 


end//


--end share file procedure



DELIMITER ;