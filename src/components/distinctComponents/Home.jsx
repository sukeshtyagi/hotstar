import React, { useState, useEffect, useRef } from "react";
import Navbar from "../sharedComponents/Navbar";
import Footer from "../sharedComponents/Footer";
import PopularShows from "./PopularShows";
import NewReleases from "./NewReleases";
import TopRated from "./TopRated";

function Home() {
  return (
    <div className="homeContainer flex h-fit w-screen justify-start bg-black">
      <div className="leftDiv box-border fixed top-0 left-0 z-50">
        <Navbar />
      </div>

      <div className="rightDiv box-border ml-80 w-3/4 h-fit flex flex-col justify-start gap-0 z-0">
        <div className="contentDiv box-border w-full flex flex-col gap-2 mt-8">
          <PopularShows />
        </div>
        <div className="contentDiv box-border w-full flex flex-col gap-2 mt-8">
          <NewReleases />
        </div>
        <div className="contentDiv box-border w-full flex flex-col gap-2 mt-8">
          <TopRated />
        </div>

        <div className="footerDiv box-border w-full h-fit mt-12">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Home;
