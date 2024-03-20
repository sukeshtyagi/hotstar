import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/HomeComponents/Home";
import AboutUs from "./components/pages/AboutUs";
import ErrorPage from "./components/pages/ErrorPage";
import Paywall from "./components/paywall/Paywall";
import Login from "./components/login/Login";
import GetOtpComp from "./components/login/GetOtpComp";
import EnterOtpComp from "./components/login/EnterOtpComp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/paywall" element={<Paywall />} />
        <Route path="/login" element={<Login getOtp="enterOtp"/>} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
/*
 <Route
          path="/login/enter-otp"
          element={<Login enterOtp="enterOtp" enterOtpComp={<EnterOtpComp />} />}
        />
*/
