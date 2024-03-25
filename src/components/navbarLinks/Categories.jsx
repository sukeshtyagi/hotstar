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
            parent="partners"
            item1="/images/sponsers/ps1.png"
            item2="/images/sponsers/ps2.jpg"
            item3="/images/sponsers/ps3.jpg"
            item4="/images/sponsers/ps4.jpg"
            item5="/images/sponsers/ps5.jpg"
            item6="/images/sponsers/ps6.jpg"
            item7="/images/sponsers/ps7.jpg"
          />
        </div>

        <div className="card mt-8">
          <Cards
            parent="categories"
            category="Popular Languages"
            item1="/images/lang/lg1.jpg"
            item2="/images/lang/lg2.jpg"
            item3="/images/lang/lg3.jpg"
            item4="/images/lang/lg4.png"
            item5="/images/lang/lg5.jpg"
            item6="/images/lang/lg6.jpg"
            item7="/images/lang/lg7.jpg"
            link="/langages"
          />
        </div>

        <div className="card mt-8">
          <Cards
            parent="Popular Channels"
            category="Popular Channels"
            item1="/images/channels/ch1.jpg"
            item2="/images/channels/ch2.png"
            item3="/images/channels/ch3.jpg"
            item4="/images/channels/ch4.png"
            item5="/images/channels/ch5.jpg"
            item6="/images/channels/ch2.png"
            item7="/images/channels/ch1.jpg"
            link="/popular-channels"
          />
        </div>

        <div className="card mt-8">
          <Cards
            parent="sports"
            category="Popular Sports"
            item1="/images/sports/ps1.jpeg"
            item2="/images/sports/ps2.jpg"
            item3="/images/sports/ps3.jpeg"
            item4="/images/sports/ps4.jpg"
            item5="/images/sports/ps5.jpg"
            item6="/images/sports/ps6.jpg"
            item7="/images/sports/ps7.jpg"
            link="/sports"
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
