const express = require("express");
const router = express.Router();

const DashboardStatsGrid = require("../BusinessLayer/Revenue/DashboardStatsGrid");
const RecentOrders = require("../BusinessLayer/Revenue/RecentOrders");
const BuyerProfilePieChart = require("../BusinessLayer/Revenue/BuyerProfilePieChart");
const PopularProducts = require("../BusinessLayer/Revenue/PopularProducts");

router.get('/DashboardStatsGrid', DashboardStatsGrid);
router.get('/RecentOrders', RecentOrders);
router.get('/BuyerProfilePieChart', BuyerProfilePieChart);
router.get('/PopularProducts', PopularProducts);
module.exports = router
