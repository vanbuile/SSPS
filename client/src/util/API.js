const localhost = "http://localhost:3001/api";


//! API chính 
const APIadminPrinterStatistics = localhost + "/admin/statisticAdmin";
const APIadminRevenueStatistics = localhost + "/admin/revenueAdmin";
const APIbuy = localhost + "/testbuy";
const APIadminPrinter = localhost +"/admin/print";

const APIshareFile = localhost + "/share";


const APIs = { APIadminPrinterStatistics, APIadminRevenueStatistics, APIbuy ,APIadminPrinter, APIshareFile};
export default APIs;