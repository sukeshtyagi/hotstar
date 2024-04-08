import React, { useState } from "react";
import Footer from "../sharedComponents/Footer";
import Cards from "../sharedComponents/Cards";
import VerticalNavbar from "../sharedComponents/VerticalNavbar";
import HorizontalNavbar from "../sharedComponents/HorizontalNavbar";

function Movies() {
  const videoUrl = "https://www.youtube.com/embed/wd_ainYKVdw";

  const [trailer, setTrailer] = useState(false);

  const handleTrailerClick = () => {
    setTrailer(true);
  };

  return (
    <div className="showsContainer box-border w-screen flex overflow-y-atuo bg-black">

      <div className="leftDivVerticalNavbar box-border fixed top-0 left-0 z-20 hidden sbp:block bg-black">
        <VerticalNavbar />
      </div>

      <div className="leftDivHorizontalNavbar box-border fixed top-0 left-0 mb-4 z-20 block sbp:hidden">
        <HorizontalNavbar />
      </div>

      <div className="rightDiv box-border w-10/12 mx-auto mt-28 sbp:ml-60 sbp:mr-2 sbp:mt-20 h-full flex flex-col justify-start gap-0 z-0">

        <div className="header box-border w-fit h-fit flex flex-wrap justify-start gap-5 items-start bg-gradient-to-r from-gray-900 from-50% p-1">
          {trailer && (
            <div className="videoDiv box-border w-full h-96">
              <iframe
                className="box-border w-full h-full"
                src={videoUrl}
                title="YouTube Video Player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                autoplay
                mute
              ></iframe>
            </div>
          )}

          {!trailer && (
            <>
              <img
                src="/images/common/patna.jpg"
                alt=""
                className="box-border w-1/2 "
              />

              <div className="headerRightDiv box-border w-full h-full flex flex-col items-start justify-center gap-5">
                <div className="topDiv box-border flex items-center justify-start gap-5">
                  <img
                    src="/images/common/hotstarspecial.png"
                    alt=""
                    className="box-border w-20 "
                  />
                  <div className="text flex flex-col justify-start m-0 p-0">
                    <p className="first box-border text-slate-100 text-2xl m-0">
                      Patna Shuklla
                    </p>
                    <p className="second box-border text-zinc-500 text-lg -mt-2">
                      Streaming from March 29
                    </p>
                  </div>
                </div>

                <button
                  className="box-border text-white text-lg bg-zinc-500 px-3 py-2 rounded-xl"
                  onClick={handleTrailerClick}
                >
                  Trailer
                </button>
              </div>
            </>
          )}
        </div>

        {/*cards start */}

        <div className="card mt-8">
          <Cards
            category="Action movies"
            item1="/images/topRated/tr1.jpg"
            item2="/images/topRated/tr2.jpg"
            item3="/images/topRated/tr3.jpg"
            item4="/images/topRated/tr6.jpg"
            item5="/images/topRated/tr5.jpg"
            item6="/images/topRated/tr2.jpg"
            item7="/images/topRated/tr1.jpg"
            link="/star-shows"
          />
        </div>

        <div className="card mt-8">
          <Cards
            category="Top movies"
            item1="/images/topRated/tr1.jpg"
            item2="/images/topRated/tr2.jpg"
            item3="/images/topRated/tr3.jpg"
            item4="/images/topRated/tr6.jpg"
            item5="/images/topRated/tr5.jpg"
            item6="/images/topRated/tr2.jpg"
            item7="/images/topRated/tr1.jpg"
            link="/star-shows"
          />
        </div>

        <div className="card mt-8">
          <Cards
            category="New movies"
            item1="/images/topRated/tr1.jpg"
            item2="/images/topRated/tr2.jpg"
            item3="/images/topRated/tr3.jpg"
            item4="/images/topRated/tr6.jpg"
            item5="/images/topRated/tr5.jpg"
            item6="/images/topRated/tr2.jpg"
            item7="/images/topRated/tr1.jpg"
            link="/star-shows"
          />
        </div>

        <div className="card mt-8">
          <Cards
            category="Comedy movies"
            item1="/images/topRated/tr1.jpg"
            item2="/images/topRated/tr2.jpg"
            item3="/images/topRated/tr3.jpg"
            item4="/images/topRated/tr6.jpg"
            item5="/images/topRated/tr5.jpg"
            item6="/images/topRated/tr2.jpg"
            item7="/images/topRated/tr1.jpg"
            link="/star-shows"
          />
        </div>

        <div className="card mt-8">
          <Cards
            category="Thriller"
            item1="/images/topRated/tr1.jpg"
            item2="/images/topRated/tr2.jpg"
            item3="/images/topRated/tr3.jpg"
            item4="/images/topRated/tr6.jpg"
            item5="/images/topRated/tr5.jpg"
            item6="/images/topRated/tr2.jpg"
            item7="/images/topRated/tr1.jpg"
            link="/star-shows"
          />
        </div>

        <div className="card mt-8">
          <Cards
            category="Romance movies"
            item1="/images/topRated/tr1.jpg"
            item2="/images/topRated/tr2.jpg"
            item3="/images/topRated/tr3.jpg"
            item4="/images/topRated/tr6.jpg"
            item5="/images/topRated/tr5.jpg"
            item6="/images/topRated/tr2.jpg"
            item7="/images/topRated/tr1.jpg"
            link="/star-shows"
          />
        </div>

        <div className="card mt-8">
          <Cards
            category="Action movies"
            item1="/images/topRated/tr1.jpg"
            item2="/images/topRated/tr2.jpg"
            item3="/images/topRated/tr3.jpg"
            item4="/images/topRated/tr6.jpg"
            item5="/images/topRated/tr5.jpg"
            item6="/images/topRated/tr2.jpg"
            item7="/images/topRated/tr1.jpg"
            link="/star-shows"
          />
        </div>

        <div className="card mt-8">
          <Cards
            category="Tollywood"
            item1="/images/topRated/tr1.jpg"
            item2="/images/topRated/tr2.jpg"
            item3="/images/topRated/tr3.jpg"
            item4="/images/topRated/tr6.jpg"
            item5="/images/topRated/tr5.jpg"
            item6="/images/topRated/tr2.jpg"
            item7="/images/topRated/tr1.jpg"
            link="/star-shows"
          />
        </div>

        <div className="card mt-8">
          <Cards
            category="Hollywood movies"
            item1="/images/topRated/tr1.jpg"
            item2="/images/topRated/tr2.jpg"
            item3="/images/topRated/tr3.jpg"
            item4="/images/topRated/tr6.jpg"
            item5="/images/topRated/tr5.jpg"
            item6="/images/topRated/tr2.jpg"
            item7="/images/topRated/tr1.jpg"
            link="/star-shows"
          />
        </div>

        {/*cards end */}
        <div className="footerDiv box-border w-full h-fit mt-8 z-0 border-t-4">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Movies;
