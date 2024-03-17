import React from "react";
import Navbar from "../sharedComponents/Navbar";
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
    <div className="homeContainer flex h-fit w-screen justify-start bg-black z-0 overflow-x-hidden">
      <div className="leftDiv box-border fixed top-0 left-0 z-20 overflow-x-hidden">
        <Navbar />
      </div>

      <div className="rightDiv box-border ml-44 w-10/12 h-full flex flex-col justify-start gap-0 z-0 overflow-x-hidden	">
        <div className="posterDiv p-4 bg-gradient-to-l from-yellow-200 mt-8 z-0 overflow-x-hidden">
          <img
            src="/images/common/p3.jpg"
            alt="poster "
            className="text-slate-50 mt-0 w-full h-96"
          />
        </div>
        {components.map((componentObj, index) => (
          <div
            key={index}
            className="contentDiv box-border w-full h-full flex flex-col gap-2 mt-8 z-0 overflow-x-hidden	"
          >
            {componentObj.component}
          </div>
        ))}

        <div className="footerDiv box-border w-full h-fit mt-12 z-0 overflow-x-hidden">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Home;
