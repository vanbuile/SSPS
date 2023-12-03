const localhost = "http://localhost:3001/api";


//! API chính 
const APIadminPrinterStatistics = localhost + "/admin/statisticAdmin";
const APIadminRevenueStatistics = localhost + "/admin/revenueAdmin";
const APIbuy = localhost + "/testbuy";
const APIadminPrinter = localhost +"/admin/print";
const APIadminFileTypes = localhost + "/admin/fileAdmin";//cập nhật kiểu file được cho phép
const APIadminPageNumber = localhost + "/admin/pageNumber";//cập nhật số trang in
const APILogin = localhost + "/login";//đăng nhập
const APIadminGetInfo = localhost + "/admin/adminInfo";//cập nhật hồ sơ
const APIshareFile = localhost + "/share";
const APIs = {APIadminPrinterStatistics, APIadminRevenueStatistics, APIbuy, APIadminPrinter, APIadminFileTypes, APIadminPageNumber, APILogin, APIadminGetInfo,APIshareFile};
export default APIs;