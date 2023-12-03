import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layouts/header/layout";
import Home from "./pages/home/home";
import Print from "./pages/print/print1";
import ChoosePrinter from './pages/print/ChoosePrinter';
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
import InfoAdmin from "./pages/admin/infoAdmin";
import RevenueStatistics from "./pages/admin/RevenueStatistics";
import PaymentCheck from "./pages/buy/paymentcheck";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/admin/" element={<LayoutAdmin />}>
          <Route index element={<homeAdmin />} />
          <Route path="homeAdmin" element={<HomeAdmin />} />
          <Route path="printerAdmin" element={<PrinterAdmin />} />
          <Route path="paperAdmin" element={<PaperAdmin />} />
          <Route path="infoAdmin" element={<InfoAdmin />} />
          <Route path="PrinterStatistics" element={<PrinterStatistics />} />
          <Route path="RevenueStatistics" element={<RevenueStatistics />} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="print" element={<Print />} />
          <Route path='print/ChoosePrinter' element={< ChoosePrinter/>} />
          <Route path="shared" element={<Shared />} />
          <Route path="detail" element={<Detail />} />
          <Route path="buy" element={<Buy />} />
          <Route path="buy/paymentcheck" element={<PaymentCheck />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}
