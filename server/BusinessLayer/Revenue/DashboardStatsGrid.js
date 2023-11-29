const express = require("express");

const {GetStudentInfo} = require("../../PersistenceLayer/RevernueDAO");

const compareDates = async(date1, date2 = new Date()) => {
	time1 = Math.floor(date1.getTime() / (1000 * 60 * 60 * 24));
	time2 = Math.floor(date2.getTime() / (1000 * 60 * 60 * 24));
	return time1 - time2;
}

const paperBuyToday = async (data) => {
	// Lấy ngày hôm trước hôm nay
	const yesterday = new Date();
	yesterday.setDate(yesterday.getDate() - 1);

	let totalPaperToday = 0;
	let totalPaperYesterday = 0;

    for (const item of data) {
        // Lấy ra ngày
        const dateObj = new Date(item.date);

        const compareResultToday = await compareDates(dateObj);
        if (compareResultToday === 0) {
            totalPaperToday += item.paper;
        }

        const compareResultYesterday = await compareDates(dateObj, yesterday);
        if (compareResultYesterday === 0) {
            totalPaperYesterday += item.paper;
        }
    }
	result =
		{
			name: 'Số lượng giấy bán trong hôm nay',
			total: totalPaperToday,
			incTotal: totalPaperToday - totalPaperYesterday,
		};
		return result
}

const studentBuyToday = async (data) => {
    // Lấy ngày hôm trước hôm nay
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);

    const mssvListToday = [];
    const mssvListYesterday = [];

    for (const item of data) {
        // Lấy ra ngày
        const dateObj = new Date(item.date);

        const compareResultToday = await compareDates(dateObj);
        if (compareResultToday === 0 && !mssvListToday.includes(item.MSSV)) {
            mssvListToday.push(item.MSSV);
        }

        const compareResultYesterday = await compareDates(dateObj, yesterday);
        if (compareResultYesterday === 0 && !mssvListYesterday.includes(item.MSSV)) {
            mssvListYesterday.push(item.MSSV);
        }
    }

	result = 
		{
			name: 'Số sinh viên mua giấy trong hôm nay',
			total: mssvListToday.length,
			incTotal: mssvListToday.length - mssvListYesterday.length,
		};
		return result
}

const paperBuySemester = async (data, dateSemester) => {
	// thời gian bắt đầu học kì
	const dateStartSemester = new Date(dateSemester[0].date);
	const dateEndSemester = new Date(dateStartSemester);
	dateEndSemester.setDate(dateEndSemester.getDate() + dateSemester[0].week * 7);

	const dateStartPreSemester = new Date(dateSemester[1].date);
	const dateEndPreSemester = new Date(dateStartPreSemester);
	dateEndPreSemester.setDate(dateEndPreSemester.getDate() + dateSemester[1].week * 7);

	let totalPaperSemester = 0;
	let totalPaperPreSemester = 0;

    for (const item of data) {
        // Lấy ra ngày
        const dateObj = new Date(item.date);

        const compareStartSemester = await compareDates(dateObj, dateStartSemester);
		const compareEndSemester = await compareDates(dateObj, dateEndSemester);
        if (compareStartSemester >= 0 && compareEndSemester <= 0) {
            totalPaperSemester += item.paper;
        }

        const compareStartPreSemester = await compareDates(dateObj, dateStartPreSemester);
		const compareEndPreSemester = await compareDates(dateObj, dateEndPreSemester);
        if (compareStartPreSemester >= 0 && compareEndPreSemester <= 0) {
            totalPaperPreSemester += item.paper;
        }

    }
	result = 
		{
			name: 'Số giấy bán trong HK231',
			total: totalPaperSemester,
			incTotal: totalPaperSemester - totalPaperPreSemester,
		};
	return result
}


const studentBuySemester = async (data, dateSemester) => {
	// thời gian bắt đầu học kì
	const dateStartSemester = new Date(dateSemester[0].date);
	const dateEndSemester = new Date(dateStartSemester);
	dateEndSemester.setDate(dateEndSemester.getDate() + dateSemester[0].week * 7);

	const dateStartPreSemester = new Date(dateSemester[1].date);
	const dateEndPreSemester = new Date(dateStartPreSemester);
	dateEndPreSemester.setDate(dateEndPreSemester.getDate() + dateSemester[1].week * 7);

    const mssvListToday = [];
    const mssvListYesterday = [];

    for (const item of data) {
        // Lấy ra ngày
        const dateObj = new Date(item.date);

        const compareStartSemester = await compareDates(dateObj, dateStartSemester);
		const compareEndSemester = await compareDates(dateObj, dateEndSemester);
        if (compareStartSemester >= 0 && compareEndSemester <= 0 && !mssvListToday.includes(item.MSSV)) {
            mssvListToday.push(item.MSSV);
        }

        const compareStartPreSemester = await compareDates(dateObj, dateStartPreSemester);
		const compareEndPreSemester = await compareDates(dateObj, dateEndPreSemester);
        if (compareStartPreSemester >= 0 && compareEndPreSemester <= 0 && !mssvListYesterday.includes(item.MSSV)) {
            mssvListYesterday.push(item.MSSV);
        }

    }
	result = 
		{
			name: 'Số sinh viên mua giấy trong HK231',
			total: mssvListToday.length,
			incTotal: mssvListToday.length - mssvListYesterday.length,
		};
		return result
}


const StudentInfo = async (req, res) =>{
	data = await GetStudentInfo();
	const Semester = [
		{
			"Semester": "HK231",
			"date": "2023-11-01",
			"week": 8
		},
		{
			"Semester": "HK222",
			"date": "2023-09-01",
			"week": 8
		}
	]

	const result = []
	result[0] = await paperBuyToday(data);
	result[1] = await studentBuyToday(data);
	result[2] = await paperBuySemester(data, Semester);
	result[3] = await studentBuySemester(data, Semester);

    return res.status(200).json(result);

}



module.exports = StudentInfo;