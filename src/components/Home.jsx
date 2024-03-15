import React from "react";
import Navbar from "./Navbar";

function Home() {
  return (
    <div className="homeContainer flex justify-start bg-black">
      <div className="leftDiv fixed top-0 left-0 ">
        <Navbar />
      </div>

      <div className="rightDiv ml-32 w-full	h-fit">
        <div className="contentDiv box-border h-screen">
          <h1>content</h1>
        </div>
        <div className="footerDiv box-border h-fit">
          <h2>footer content</h2>
        </div>
      </div>
    </div>
  );
}

export default Home;
