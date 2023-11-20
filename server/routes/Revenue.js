const express = require("express");
const router = express.Router();

const StudentInfo = require("../BusinessLayer/Revenue/DashboardStatsGrid");
const RecentOrders = require("../BusinessLayer/Revenue/RecentOrders");
const StudentCourseRevenue = require("../BusinessLayer/Revenue/BuyerProfilePieChart");
const PopularProducts = require("../BusinessLayer/Revenue/PopularProducts");
const RecentOrdersDownload = require("../BusinessLayer/Revenue/RecentOrdersDownload");

router.get('/DashboardStatsGrid', StudentInfo);
router.get('/RecentOrders', RecentOrders);
router.get('/BuyerProfilePieChart', StudentCourseRevenue);
router.get('/PopularProducts', PopularProducts);
router.get('/RecentOrdersDownload', RecentOrdersDownload);
module.exports = router
