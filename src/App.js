import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/homePageComponents/Home";
import AboutUs from "./components/footerPages/AboutUs";
import ErrorPage from "./components/footerPages/ErrorPage";
import Paywall from "./components/paywall/Paywall";
import Login from "./components/login/Login";
import PaymentOption from "./components/login/PaymentOption";
import Mypage from "./components/navbarLinks/Mypage";
import Explore from "./components/navbarLinks/Explore";
import Shows from "./components/navbarLinks/Shows";
import Movies from "./components/navbarLinks/Movies";
import Categories from "./components/navbarLinks/Categories";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<ErrorPage />} />
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/paywall" element={<Paywall />} />
        <Route path="/login" element={<Login child="getOtp" />} />
        <Route path="/login/payment-option" element={<PaymentOption />} />

        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/shows" element={<Shows />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
