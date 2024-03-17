import React from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";

function Cards({ category, item1, item2, item3, item4, item5, item6, item7, item8, item9, item10, link }) {
  const navigate = useNavigate();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
  };
  return (
    <div className="outer box-border flex flex-col gap-2">
      <div className="headingDiv box-border flex justify-between item-center mb-2">
        <h3 className="heading text-slate-50 text-3xl font-extrabold">
          {category}
        </h3>
        <button
          className="text-slate-400 font-bold bg-transparent"
          onClick={() => {
            navigate(`${link}`);
          }}
        >
          View More
        </button>
      </div>
      <Slider {...settings} className="w-full">
        {item1 && (
          <div className="box-border p-0 bg-cover bg-center">
            <img src={item1} alt="" className="box-border w-32 h-44" />
          </div>
        )}
        {item2 && (
          <div className="box-border p-0">
            <img src={item2} alt="" className="box-border w-32 h-44" />
          </div>
        )}
        {item3 && (
          <div className="box-border p-0">
            <img src={item3} alt="" className="box-border w-32 h-44" />
          </div>
        )}
        {item4 && (
          <div className="box-border p-0">
            <img src={item4} alt="" className="box-border w-32 h-44" />
          </div>
        )}
        {item5 && (
          <div className="box-border p-0">
            <img src={item5} alt="" className="box-border w-32 h-44" />
          </div>
        )}
        {item6 && (
          <div className="box-border p-0">
            <img src={item6} alt="" className="box-border w-32 h-44" />
          </div>
        )}
        {item7 && (
          <div className="box-border p-0">
            <img src={item7} alt="" className="box-border w-32 h-44" />
          </div>
        )}
        {item8 && (
          <div className="box-border p-0">
            <img src={item8} alt="" className="box-border w-32 h-44" />
          </div>
        )}
        {item9 && (
          <div className="box-border p-0">
            <img src={item9} alt="" className="box-border w-32 h-44" />
          </div>
        )}
        {item10 && (
          <div className="box-border p-0">
            <img src={item10} alt="" className="box-border w-32 h-44" />
          </div>
        )}
      </Slider>
    </div>
  );
}

export default Cards;
