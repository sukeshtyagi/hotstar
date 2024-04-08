import React from "react";
import Footer from "../sharedComponents/Footer";
import Cards from "../sharedComponents/Cards";
import VerticalNavbar from "../sharedComponents/VerticalNavbar";
import HorizontalNavbar from "../sharedComponents/HorizontalNavbar";

function Explore() {
  return (
    <div className="exploreContainer bbox-border w-screen flex overflow-y-atuo bg-black">
      <div className="leftDivVerticalNavbar box-border fixed top-0 left-0 z-20 hidden sbp:block bg-black">
        <VerticalNavbar />
      </div>

      <div className="leftDivHorizontalNavbar box-border fixed top-0 left-0 mb-4 z-20 block sbp:hidden">
        <HorizontalNavbar />
      </div>

      <div className="rightDiv box-border w-10/12 mx-auto mt-28 sbp:ml-60 sbp:mr-2 sbp:mt-20 h-full flex flex-col justify-start gap-0 z-0">
        <div className="header box-border w-4/5 mx-auto flex justify-start gap-1 items-center mt-0 bg-gray-700 p-0 text-white rounded-xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 ml-1 flex-shrink-0"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>

          <input
            type="text"
            placeholder="Movies,shows and more"
            className="box-border h-fit p-1 flex-grow text-lg text-gray-400 bg-transparent outline-none caret-slate-50"
          />
        </div>

        <div className="cardsDiv box-border w-full h-fit mt-8 z-0 border-t-4">
          <Cards
            item1="/images/explore/e11.jpg"
            item2="/images/explore/e12.jpg"
            item3="/images/explore/e13.jpg"
            item4="/images/explore/e14.jpg"
            item5="/images/explore/e15.jpg"
            item6="/images/explore/e16.jpg"
            item7="/images/explore/e17.jpg"
          />
        </div>
        <div className="footerDiv box-border w-full h-fit mt-8 z-0 border-t-4">
          <Cards
            item1="/images/newReleases/nr1.jpg"
            item2="/images/newReleases/nr2.jpg"
            item3="/images/newReleases/nr3.png"
            item4="/images/newReleases/nr4.jpg"
            item5="/images/newReleases/nr5.jpg"
            item6="/images/newReleases/nr6.jpg"
            item7="/images/newReleases/nr7.jpg"
          />
        </div>

        <div className="footerDiv box-border w-full h-fit mt-8 z-0 border-t-4">
          <Cards
            item1="/images/popularShows/dkdm.jpg"
            item2="/images/popularShows/ps2.jpg"
            item3="/images/popularShows/ps3.jpg"
            item4="/images/popularShows/ps4.jpg"
            item5="/images/popularShows/ps5.jpg"
            item6="/images/popularShows/ps6.jpg"
            item7="/images/popularShows/ps7.jpg"
          />
        </div>

        <div className="footerDiv box-border w-full h-fit mt-8 z-0 border-t-4">
          <Cards
            item1="/images/topRated/tr1.jpg"
            item2="/images/topRated/tr2.jpg"
            item3="/images/topRated/tr3.jpg"
            item4="/images/topRated/tr6.jpg"
            item5="/images/topRated/tr5.jpg"
            item6="/images/topRated/tr2.jpg"
            item7="/images/topRated/tr1.jpg"
          />
        </div>

        <div className="footerDiv box-border w-full h-fit mt-8 z-0 border-t-4">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Explore;
