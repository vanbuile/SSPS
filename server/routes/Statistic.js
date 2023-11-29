const express = require("express");
const router = express.Router();

const PrintingInfo = require("../BusinessLayer/Statistic/DashboardTotal");
const StudentPrintMaxSemester = require("../BusinessLayer/Statistic/PrinterStatisticsOrders");

const PrintInSemester = require("../BusinessLayer/Statistic/PrinterStatisticsCol");
const WeekInSemester = require("../BusinessLayer/Statistic/TransactionChart");
const PrinterOrdersDownload = require("../BusinessLayer/Statistic/PrinterOrdersDownload");
router.get('/total', PrintingInfo);
router.get('/PrinterStatisticsCol', PrintInSemester);
router.get('/PrinterStatisticsOrders', StudentPrintMaxSemester);
router.get('/TransactionChart', WeekInSemester);
router.get('/PrinterOrdersDownload', PrinterOrdersDownload);
module.exports = router
