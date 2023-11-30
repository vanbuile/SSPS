const express = require('express');
const fs = require('fs');
const XLSX = require('xlsx');

const {GetRecentOrdersInfo}= require("../../PersistenceLayer/RevernueDAO");

const RecentOrdersDownload = async (req, res) => {
    try {
        const data = await GetRecentOrdersInfo();

        // Tạo một đối tượng Worksheet từ mảng dữ liệu
        const ws = XLSX.utils.json_to_sheet(data);

        // Tạo một đối tượng Workbook và thêm Worksheet vào đó
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

        // Tạo tệp Excel trong bộ nhớ
        const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'buffer' });

        // Gửi tệp Excel dưới dạng phản hồi HTTP để người dùng tải xuống
        res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
        res.setHeader('Content-Disposition', 'attachment; filename=RecentOrdersInfo.xlsx');
        res.status(200).send(excelBuffer);
    } catch (error) {
        console.error('Error generating Excel file:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

module.exports = RecentOrdersDownload;