import React from "react";
import Footer from "../sharedComponents/Footer";
import Navbar from "../sharedComponents/Navbar";
import Cards from "../sharedComponents/Cards";

function Explore() {
  return (
    <div className="exploreContainer box-border w-screen  flex bg-black overflow-y-atuo ">
      <div className="leftDiv box-border fixed top-0 left-0 z-100">
        <Navbar />
      </div>
      <div className="rightDiv box-border w-10/12 flex flex-col m-auto ml-44">
        <div className="header box-border w-full h-1/2 caret-transparent	flex justify-start gap-6 items-center mt-8 bg-gray-700 p-2 text-white rounded-xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-10 h-10 ml-4"
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
            className="box-border h-fit text-3xl text-gray-400 py-3 bg-transparent outline-none caret-slate-50"
          />
        </div>

        <div className="footerDiv box-border w-full h-fit mt-8 z-0 border-t-4">
          <Cards
            item1="/images/explore/e11.jpg"
            item2="/images/explore/e12.jpeg"
            item3="/images/explore/e13.jpeg"
            item4="/images/explore/e14.jpg"
            item5="/images/explore/e15.jpg"
            item6="/images/explore/e16.jpg"
            item7="/images/explore/e17.jpg"
          />
        </div>
        <div className="footerDiv box-border w-full h-fit mt-8 z-0 border-t-4">
          <Cards
            item1="/images/newReleases/nr1.jpg"
            item2="/images/newReleases/nr2.avif"
            item3="/images/newReleases/nr3.webp"
            item4="/images/newReleases/nr4.jpg"
            item5="/images/newReleases/nr5.webp"
            item6="/images/newReleases/nr6.jpeg"
            item7="/images/newReleases/nr7.jpeg"
            item8="/images/newReleases/nr8.png"
            item9="/images/newReleases/nr9.jpg"
            item10="/images/newReleases/nr10.jpg"
          />
        </div>

        <div className="footerDiv box-border w-full h-fit mt-8 z-0 border-t-4">
          <Cards
            item1="/images/popularShows/dkdm.jpg"
            item2="/images/popularShows/ps2.jpg"
            item3="/images/popularShows/ps3.jpeg"
            item4="/images/popularShows/ps4.jpeg"
            item5="/images/popularShows/ps5.jpeg"
            item6="/images/popularShows/ps6.webp"
            item7="/images/popularShows/ps7.webp"
            item8="/images/popularShows/ps8.webp"
            item9="/images/popularShows/ps9.webp"
            item10="/images/popularShows/ps10.webp"
          />
        </div>

        <div className="footerDiv box-border w-full h-fit mt-8 z-0 border-t-4">
          <Cards
            item1="/images/topRated/tr1.jpeg"
            item2="/images/topRated/tr2.jpg"
            item3="/images/topRated/tr3.jpg"
            item4="/images/topRated/tr4.webp"
            item5="/images/topRated/tr5.jpg"
            item6="/images/topRated/tr6.jpg"
            item7="/images/topRated/tr7.webp"
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
