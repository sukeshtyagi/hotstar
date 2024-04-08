import React from "react";
import VerticalNavbar from "../sharedComponents/VerticalNavbar";
import HorizontalNavbar from "../sharedComponents/HorizontalNavbar";
import Footer from "../sharedComponents/Footer";
import PopularShows from "./PopularShows";
import NewReleases from "./NewReleases";
import TopRated from "./TopRated";
import TVShows from "./TVShows";
import Movies from "./Movies";
import WebSeries from "./WebSeries";

function Home() {
  const components = [
    { component: <PopularShows key="PopularShows" />, name: "PopularShows" },
    { component: <NewReleases key="NewReleases" />, name: "NewReleases" },
    { component: <TopRated key="TopRated" />, name: "TopRated" },
    { component: <TVShows key="TV" />, name: "TVShows" },
    { component: <Movies key="movies" />, name: "movies" },
    { component: <WebSeries key="WebSeries" />, name: "WebSeries" },
  ];

  return (
    <div className="homeContainer box-border h-fit w-screen bg-black justify-start z-0 flex flex-col sbp:flex-row">
      <div className="leftDivVerticalNavbar box-border fixed top-0 left-0 z-20 hidden sbp:block">
        <VerticalNavbar />
      </div>

      <div className="leftDivHorizontalNavbar box-border fixed top-0 left-0  z-20 block sbp:hidden">
        <HorizontalNavbar />
      </div>

      <div className="rightDiv box-border w-4/5 h-full mx-auto mt-40 sbp:ml-48 sbp:mr-2 sbp:mt-24 flex flex-col justify-start gap-0 z-0">
        <div className="posterDiv p-2 border border-x-yellow-500 border-y-purple-700 z-0">
          <img
            src="/images/common/p3.jpg"
            alt="poster "
            className="text-slate-50 mt-0  h-96"
          />
        </div>

        {components.map((componentObj, index) => (
          <div
            key={index}
            className="contentDiv box-border w-full h-full flex flex-col gap-2 mt-8 z-0"
          >
            {componentObj.component}
          </div>
        ))}
        <div className="footerDiv box-border w-full h-fit mt-8 z-0 border-t-4">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Home;
