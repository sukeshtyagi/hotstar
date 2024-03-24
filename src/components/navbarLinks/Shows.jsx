import React from "react";
import Navbar from "../sharedComponents/Navbar";
import Footer from "../sharedComponents/Footer";
import Cards from "../sharedComponents/Cards";

function Shows() {
  return (
    <div className="showsContainer box-border w-screen h-screen flex bg-black overflow-y-auto">
      <div className="leftDiv box-border w-fit fixed top-0 left-0 z-100">
        <Navbar />
      </div>

      <div className="rightDiv box-border w-10/12 h-screen flex flex-col m-auto mt-5 ml-44">
        <div className="header box-border flex justify-start gap-5 items-start bg-gradient-to-r from-gray-900 from-50% p-1">
          <img
            src="/images/common/patna.jpg"
            alt=""
            className="box-border w-1/2 "
          />

          <div className="headerRightDiv box-border w-full h-full flex flex-col items-start justify-center gap-5">
            <div className="topDiv box-border flex items-center justify-start gap-5">
              <img
                src="/images/common/HotstarSpecialogo.jpeg"
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

            <button className="box-border text-white text-lg bg-zinc-500 px-3 py-2 rounded-xl">
              Releasing Soon
            </button>
          </div>
        </div>

        <div className="card mt-8">
          <Cards
            category="Spiritual"
            item1="/images/spiritual/dkdm.jpg"
            item2="/images/spiritual/sp2.jpg"
            item3="/images/spiritual/sp3.jpeg"
            item4="/images/spiritual/sp4.jpg"
            item5="/images/spiritual/sp5.jpg"
            item6="/images/spiritual/sp6.jpeg"
            item7="/images/spiritual/sp7.jpeg"
            link="/spiritual"
          />
        </div>

        <div className="card mt-8">
          <Cards
            category="Stories you will fall in love with"
            item1="/images/stories/st1.jpg"
            item2="/images/stories/st2.jpg"
            item3="/images/stories/st3.jpeg"
            item4="/images/stories/st4.jpeg"
            item5="/images/stories/st5.jpg"
            item6="/images/stories/st6.jpeg"
            item7="/images/stories/st7.jpeg"
            link="/stories-you-will-love"
          />
        </div>

        <div className="card mt-8">
          <Cards
            category="Star shows"
            item1="/images/star/star1.jpg"
            item2="/images/star/star2.jpeg"
            item3="/images/star/star3.jpg"
            item4="/images/star/star4.jpeg"
            item5="/images/star/star5.jpeg"
            item6="/images/star/star6.jpg"
            item7="/images/star/star7.jpg"
            link="/star-shows"
          />
        </div>

        <div className="footerDiv box-border w-full h-fit mt-8 z-0 border-t-4">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Shows;
