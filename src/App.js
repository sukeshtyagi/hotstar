import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/HomeComponents/Home";
import AboutUs from "./components/pages/AboutUs";
import ErrorPage from "./components/pages/ErrorPage";
import Paywall from "./components/paywall/Paywall";
import Login from "./components/login/Login";
import GetOtpComp from "./components/login/GetOtpComp";
import EnterOtpComp from "./components/login/EnterOtpComp";
import PaymentOption from "./components/login/PaymentOption";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<ErrorPage />} />
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/paywall" element={<Paywall />} />

        <Route path="/login" element={<Login child="getOtp" />} />

        <Route path="/login/enter-otp" element={<Login child="enterOtp" />} />

        <Route path="/login/payment-option" element={< PaymentOption />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
/*

*/
