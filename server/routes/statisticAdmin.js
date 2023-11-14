const express = require("express");
const router = express.Router();

const DashboardTotal = require("../BusinessLayer/Statistic/DashboardTotal");
const PrinterStatisticsCol = require("../BusinessLayer/Statistic/PrinterStatisticsCol");
const PrinterStatisticsOrders = require("../BusinessLayer/Statistic/PrinterStatisticsOrders");
const TransactionChart = require("../BusinessLayer/Statistic/TransactionChart");

router.get('/total', DashboardTotal);
router.get('/PrinterStatisticsCol', PrinterStatisticsCol);
router.get('/PrinterStatisticsOrders', PrinterStatisticsOrders);
router.get('/TransactionChart', TransactionChart);
module.exports = router
