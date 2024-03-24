import React from "react";
import Navbar from "../sharedComponents/Navbar";
import Footer from "../sharedComponents/Footer";
import Cards from "../sharedComponents/Cards";

function Categories() {
  return (
    <div className="showsContainer box-border w-screen h-screen flex bg-black overflow-y-auto">
      <div className="leftDiv box-border w-fit fixed top-0 left-0 z-100">
        <Navbar />
      </div>

      <div className="rightDiv box-border w-10/12 h-screen flex flex-col m-auto mt-5 ml-44">
        {/*cards start*/}

        <div className="card mt-8">
          <Cards
            parent="categories"
            category="Popular Languages"
            item1="/images/lang/lg1.jpg"
            item2="/images/lang/lg2.jpg"
            item3="/images/lang/lg3.jpg"
            item4="/images/lang/lg4.jpeg"
            item5="/images/lang/lg5.jpg"
            item6="/images/lang/lg6.jpeg"
            item7="/images/lang/lg7.jpg"
            link="/langages"
          />
        </div>

        <div className="card mt-8">
          <Cards
            parent="Popular Channels"
            category="Popular Languages"
            item1="/images/channels/ch1.jpeg"
            item2="/images/channels/ch2.jpeg"
            item3="/images/channels/ch3.jpeg"
            item4="/images/channels/ch4.jpeg"
            item5="/images/channels/ch5.jpeg"
            item6="/images/channels/ch2.jpeg"
            item7="/images/channels/ch1.jpeg"
            link="/popular-channels"
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

export default Categories;
