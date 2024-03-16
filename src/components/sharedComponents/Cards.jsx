import React from "react";
import Slider from "react-slick";

function Cards({ category }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
  };

  return (
    <div className="outer box-border w-11/12 flex flex-col gap-2">
      <div className="headingDiv flex justify-between item-center">
        <h3 className="heading text-slate-50 text-xl font-bold">{category}</h3>
        <button className="text-slate-400 font-bold bg-transparent">
          View More
        </button>
      </div>
      <Slider {...settings}>
        <div className="box-border p-0">
          <img
            src="/images/dkdm.jpg"
            alt=""
            className="box-border w-32 h-full"
          />
        </div>

        <div className="box-border p-0">
          <img
            src="/images/dkdm.jpg"
            alt=""
            className="box-border w-32 h-full"
          />
        </div>

        <div className="box-border p-0">
          <img
            src="/images/dkdm.jpg"
            alt=""
            className="box-border w-32 h-full"
          />
        </div>

        <div className="box-border p-0">
          <img
            src="/images/dkdm.jpg"
            alt=""
            className="box-border w-32 h-full"
          />
        </div>

        <div className="box-border bgp-0">
          <img
            src="/images/dkdm.jpg"
            alt=""
            className="box-border w-32 h-full"
          />
        </div>
      </Slider>
    </div>
  );
}

export default Cards;
