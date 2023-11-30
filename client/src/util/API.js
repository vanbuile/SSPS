const localhost = "http://localhost:3001/api";


//! API chính 
const APIadminPrinterStatistics = localhost + "/admin/statisticAdmin";
const APIadminRevenueStatistics = localhost + "/admin/revenueAdmin";
const APIadminPrinter = localhost +"/admin/print";
const APIadminFileTypes = localhost + "/admin/fileAdmin";//cập nhật kiểu file được cho phép
const APIadminPageNumber = localhost + "/admin/pageNumber";//cập nhật số trang in

const APIs = { APIadminPrinterStatistics, APIadminRevenueStatistics ,APIadminPrinter, APIadminFileTypes, APIadminPageNumber};
export default APIs;
