import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Cards({
  category,
  item1,
  item2,
  item3,
  item4,
  item5,
  item6,
  item7,
  item8,
  item9,
  item10,
  link,
}) {
  const navigate = useNavigate();
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);
  const [isHovered4, setIsHovered4] = useState(false);
  const [isHovered5, setIsHovered5] = useState(false);
  const [isHovered6, setIsHovered6] = useState(false);

  return (
    <div className="outer  box-border flex flex-col gap-0 mb-24 z-50 border-t-4	">
      <div className="headingDiv box-border flex justify-between item-center ml-16 z-0 ">
        <h3 className="heading text-slate-50 text-3xl font-extrabold z-0 ">
          {category}
        </h3>
        <button
          className="text-slate-400 mr-16 font-bold bg-transparent "
          onClick={() => {
            navigate(`${link}`);
          }}
        >
          View More
        </button>
      </div>

      <div className="itemContainer box-border flex justify-evenly z-0 ">
        <div
          className="itemDiv w-44 h-64 p-2 mt-4 z-50 relative hover:scale-x-220 hover:scale-y-150  cursor-pointer"
          onMouseEnter={() => setIsHovered1(true)}
          onMouseLeave={() => setIsHovered1(false)}
        >
          <img src={item1} alt="" className="box-border w-44 h-64" />

          {isHovered1 && (
            <div className="flex flex-col justify-start gap-24 bg-zinc-600 z-50 absolute top-1/2 left-2 w-11/12 h-auto">
              <p className="text-white">Additional Content</p>
              <button className="text-white">Watch</button>
            </div>
          )}
        </div>

        <div
          className="itemDiv w-44 h-64 p-2 mt-4 hover:scale-150 hover:z-50 cursor-pointer"
          onMouseEnter={() => setIsHovered2(true)}
          onMouseLeave={() => setIsHovered2(false)}
        >
          <img src={item2} alt="" className="box-border w-44 h-64" />

          {isHovered2 && (
            <div className="flex flex-col bg-black z-50">
              <p className="text-white">Additional Content</p>
              <button className="text-white">Watch</button>
            </div>
          )}
        </div>

        <div
          className="itemDiv w-44 h-64 p-2 mt-4 z-50 relative hover:scale-x-220 hover:scale-y-150  cursor-pointer"
          onMouseEnter={() => setIsHovered3(true)}
          onMouseLeave={() => setIsHovered3(false)}
        >
          <img src={item3} alt="" className="box-border w-44 h-64" />

          {isHovered3 && (
            <div className="flex flex-col justify-start gap-24 bg-zinc-600 z-50 absolute top-1/2 left-2 w-11/12 h-auto">
              <p className="text-white">Additional Content</p>
              <button className="text-white">Watch</button>
            </div>
          )}
        </div>

        <div
          className="itemDiv w-44 h-64 p-2 mt-4 hover:scale-150 hover:z-50 cursor-pointer"
          onMouseEnter={() => setIsHovered4(true)}
          onMouseLeave={() => setIsHovered4(false)}
        >
          <img src={item4} alt="" className="box-border w-44 h-64" />

          {isHovered4 && (
            <div className="flex flex-col bg-black z-50">
              <p className="text-white">Additional Content</p>
              <button className="text-white">Watch</button>
            </div>
          )}
        </div>

        <div
          className="itemDiv w-44 h-64 p-2 mt-4 hover:scale-150 hover:z-50 cursor-pointer"
          onMouseEnter={() => setIsHovered5(true)}
          onMouseLeave={() => setIsHovered5(false)}
        >
          <img src={item5} alt="" className="box-border w-44 h-64" />

          {isHovered5 && (
            <div className="flex flex-col bg-black z-50">
              <p className="text-white">Additional Content</p>
              <button className="text-white">Watch</button>
            </div>
          )}
        </div>

        <div
          className="itemDiv w-44 h-64 p-2 mt-4 hover:scale-150 hover:z-50 cursor-pointer relative"
          onMouseEnter={() => setIsHovered6(true)}
          onMouseLeave={() => setIsHovered6(false)}
        >
          <img src={item6} alt="" className="box-border w-44 h-64" />

          {isHovered6 && (
            <div className="flex flex-col bg-zinc-600 z-50 absolute top-1/2 left-2 w-full h-full">
              <p className="text-white">Additional Content</p>
              <button className="text-white">Watch</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Cards;
