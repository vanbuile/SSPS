const localhost = "http://localhost:3001/api";


//! API chính 
const APIadminPrinterStatistics = localhost + "/admin/statisticAdmin";
const APIadminRevenueStatistics = localhost + "/admin/revenueAdmin";
const APIadminPrinter = localhost +"/admin/print";
const APIviewprinterbylocation = localhost + "/chooseprinter";
const APIaddFile = localhost + "/file";



const APIs = { APIadminPrinterStatistics, APIadminRevenueStatistics ,APIadminPrinter, APIviewprinterbylocation, APIaddFile};
export default APIs;