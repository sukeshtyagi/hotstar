import React from "react";
import Navbar from "./sharedComponents/Navbar";
import Footer from "./sharedComponents/Footer";
import Cards from "./sharedComponents/Cards";

function Home() {
  return (
    <div className="homeContainer flex justify-start bg-black">
      <div className="leftDiv box-border fixed top-0 left-0">
        <Navbar />
      </div>

      <div className="rightDiv ml-64 w-full	h-fit overflow-y-auto">
        <div className="contentDiv box-border w-full h-screen">
          <Cards category="Popular Shows" />
        </div>
        <div className="footerDiv box-border w-full h-fit">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Home;
