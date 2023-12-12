const express = require("express");


const {GetPrintingInfo}= require("../../PersistenceLayer/PrintingDAO");

const compareDates = async(date1, date2 = new Date()) => {
	time1 = Math.floor(date1.getTime() / (1000 * 60 * 60 * 24));
	time2 = Math.floor(date2.getTime() / (1000 * 60 * 60 * 24));
	return time1 - time2;
}

const paperPrintedToday = async (data) => {
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
			name: 'Số lượng giấy in trong ngày hôm nay',
			total: totalPaperToday,
			incTotal: totalPaperToday - totalPaperYesterday,
		};
		return result
}

const studentPrintedToday = async (data) => {
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
			name: 'Sô lượng Sinh viên in trong ngày hôm nay',
			total: mssvListToday.length,
			incTotal: mssvListToday.length - mssvListYesterday.length,
		};
		return result
}

const paperPrintedSemester = async (data, dateSemester) => {
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
			name: 'Tổng số giấy sử dụng HK231',
			total: totalPaperPreSemester,
			incTotal: -(totalPaperSemester - totalPaperPreSemester),
		};
	return result
}

const fileShareSemester = async (data, dateSemester) => {
	// thời gian bắt đầu học kì
	const dateStartSemester = new Date(dateSemester[0].date);
	const dateEndSemester = new Date(dateStartSemester);
	dateEndSemester.setDate(dateEndSemester.getDate() + dateSemester[0].week * 7);

	const dateStartPreSemester = new Date(dateSemester[1].date);
	const dateEndPreSemester = new Date(dateStartPreSemester);
	dateEndPreSemester.setDate(dateEndPreSemester.getDate() + dateSemester[1].week * 7);


	const totalNumberfileShareSemester = new Set();
	const totalNumberfileSharePreSemester = new Set();

    for (const item of data) {
        // Lấy ra ngày
        const dateObj = new Date(item.date);

        const compareStartSemester = await compareDates(dateObj, dateStartSemester);
		const compareEndSemester = await compareDates(dateObj, dateEndSemester);
        if (item.isShare && compareStartSemester >= 0 && compareEndSemester <= 0) {
            totalNumberfileShareSemester.add(item.id_file);
        }

        const compareStartPreSemester = await compareDates(dateObj, dateStartPreSemester);
		const compareEndPreSemester = await compareDates(dateObj, dateEndPreSemester);
        if (item.isShare && compareStartPreSemester >= 0 && compareEndPreSemester <= 0) {
			totalNumberfileSharePreSemester.add(item.id_file);
        }

    }
	result = 		{
		name: 'Sô lượng tài liệu share HK231',
		total: totalNumberfileShareSemester.size,
		incTotal: totalNumberfileShareSemester.size - totalNumberfileSharePreSemester.size,
	}
	return result

}



const PrintingInfo = async (req, res) =>{
	data = await GetPrintingInfo();
	const Semester = [
		{
			"Semester": "HK222",
			"date": "2023-09-01",
			"week": 8
		},
		{
			"Semester": "HK231",
			"date": "2023-11-01",
			"week": 8
		},
	]

	const result = []
	result[0] = await paperPrintedToday(data);
	result[1] = await studentPrintedToday(data);
	result[2] = await paperPrintedSemester(data, Semester);
	result[3] = await fileShareSemester(data, Semester);

    return res.status(200).json(result);
}

// DashboardTotal();
module.exports = PrintingInfo;