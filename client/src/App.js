import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layouts/header/layout";
import Home from "./pages/home/home";
import Print from "./pages/print/print";
import Shared from "./pages/shared/shared";
import Detail from "./pages/shared/detail";
import Buy from "./pages/buy/buy";
import Login from "./pages/login/login";
import Error from "./pages/error/error";
import PrinterStatistics from "./pages/admin/PrinterStatistics";
import LayoutAdmin from "./layouts/admin/Layout";
import HomeAdmin from "./pages/admin/homeAdmin";
import PrinterAdmin from "./pages/admin/printerAdmin";
import PaperAdmin from "./pages/admin/paperAdmin";
import RevenueStatistics from "./pages/admin/RevenueStatistics";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/admin/" element={<LayoutAdmin />}>
          <Route index element={<homeAdmin />} />
          <Route path="homeAdmin" element={<HomeAdmin />} />
          <Route path="printerAdmin" element={<PrinterAdmin />} />
          <Route path="paperAdmin" element={<PaperAdmin />} />
          <Route path="PrinterStatistics" element={<PrinterStatistics />} />
          <Route path="RevenueStatistics" element={<RevenueStatistics />} />
        </Route>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="print" element={<Print />} />
          <Route path="shared" >
            <Route path="detail/:id" element={<Detail />} />
            <Route index element={<Shared />} />

          </Route>
          <Route path="buy" element={<Buy />} />
          <Route path="login" element={<Login />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}
