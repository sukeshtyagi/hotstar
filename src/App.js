import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/HomeComponents/Home";
import AboutUs from "./components/footerPages/AboutUs";
import ErrorPage from "./components/footerPages/ErrorPage";
import Paywall from "./components/paywall/Paywall";
import Login from "./components/login/Login";
import PaymentOption from "./components/login/PaymentOption";
import Mypage from "./components/mypage/Mypage";
import Explore from "./components/explore/Explore";
import Shows from "./components/shows/Shows";

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

        <Route path="/login/payment-option" element={<PaymentOption />} />

        <Route path="/mypage" element={<Mypage />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/shows" element={<Shows />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
/*

*/
