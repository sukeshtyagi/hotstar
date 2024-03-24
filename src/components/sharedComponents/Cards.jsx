import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronRightIcon, PlusIcon } from "@heroicons/react/outline";

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
  const [isHovered7, setIsHovered7] = useState(false);

  return (
    <div className="outer  box-border flex flex-col gap-0 mb-14 z-0 border-t-4	">
      {category && (
        <div className="headingDiv box-border flex justify-between item-center mt-4 z-0 ">
          <h3 className="heading text-slate-50 text-3xl font-extrabold z-0 ">
            {category}
          </h3>
          <button
            className="text-slate-400 mr-0 font-bold bg-transparent "
            onClick={() => {
              navigate(`${link}`);
            }}
          >
            View More
          </button>
        </div>
      )}

      <div
        className={`itemContainer box-border flex justify-start z-0 items-center ${
          category ? "mt-0" : "mt-12"
        }`}
      >
        <div
          className="itemDiv w-44 h-64 p-2 mt-4 hover:z-100 relative hover:scale-x-220 hover:scale-y-150  cursor-pointer"
          onMouseEnter={() => setIsHovered1(true)}
          onMouseLeave={() => setIsHovered1(false)}
        >
          <img src={item1} alt="" className="box-border w-44 h-64" />

          {isHovered1 && (
            <>
              <div className="transparentDiv flex flex-col justify-start items-start bg-transparent z-50 absolute top-2 left-2 w-11/12 h-1/2 p-2">
                <p className="text-white text-xs">Hindi</p>
                <button className="text-green-500	 text-xs font-bold">
                  Hotstar Special
                </button>
              </div>

              <div className="coloredDiv flex flex-col justify-start gap-1 items-start bg-zinc-500 absolute -bottom-2 left-2 w-11/12 h-1/2">
                <div className="topDiv box-border flex items-center justify-evenly  w-full p-0">
                  <div className="watchDiv box-border flex justify-center items-center bg-slate-100 border-solid rounded-md p-2">
                    <ChevronRightIcon
                      className="h-3 w-5 text-black"
                      aria-hidden="true"
                    />
                    <p className="text-sm">Watch</p>
                  </div>

                  <div className="saveDiv box-border h-11/12  flex items-center rounded-md border-slate-50	border-2 p-2 ">
                    <PlusIcon
                      className="h-3 w-5 text-slate-50  "
                      aria-hidden="true"
                    />
                  </div>
                </div>

                <div className="midDiv box-border w-full flex flex-col justify-evenly gap-1 text-slate-50">
                  <div className=" box-border w-full flex justify-evenly">
                    <p className="box-border text-xs">2023.</p>
                    <p className="box-border text-xs">1 Season.</p>
                  </div>
                  <div className=" box-border w-full flex justify-evenly">
                    <p className="box-border text-xs">6 Languages.</p>
                    <p className="box-border text-xs">U/A 7+.</p>
                  </div>
                </div>

                <div className="bottomDiv box-border overflow-hidden">
                  <p className="box-border w-full h-full text-slate-100 text-xs font-normal text-left text-ellipsis leading-3	">
                    "Experience the magic of captivating stories, with tales
                    that leave you craving for more."
                  </p>
                </div>
              </div>
            </>
          )}
        </div>

        <div
          className="itemDiv w-44 h-64 p-2 mt-4 relative hover:z-100 hover:scale-x-220 hover:scale-y-150  cursor-pointer"
          onMouseEnter={() => setIsHovered2(true)}
          onMouseLeave={() => setIsHovered2(false)}
        >
          <img src={item2} alt="" className="box-border w-44 h-64" />

          {isHovered2 && (
            <>
              <div className="transparentDiv flex flex-col justify-start items-start bg-transparent z-50 absolute top-2 left-2 w-11/12 h-1/2 p-2">
                <p className="text-white text-xs">Hindi</p>
                <button className="text-green-500	 text-xs font-bold">
                  Hotstar Special
                </button>
              </div>

              <div className="coloredDiv flex flex-col justify-start gap-1 items-start bg-zinc-500 absolute -bottom-2 left-2 w-11/12 h-1/2">
                <div className="topDiv box-border flex items-center justify-evenly  w-full p-0">
                  <div className="watchDiv box-border flex justify-center items-center bg-slate-100 border-solid rounded-md p-2">
                    <ChevronRightIcon
                      className="h-3 w-5 text-black"
                      aria-hidden="true"
                    />
                    <p className="text-sm">Watch</p>
                  </div>

                  <div className="saveDiv box-border h-11/12  flex items-center rounded-md border-slate-50	border-2 p-2 ">
                    <PlusIcon
                      className="h-3 w-5 text-slate-50  "
                      aria-hidden="true"
                    />
                  </div>
                </div>

                <div className="midDiv box-border w-full flex flex-col justify-evenly gap-1 text-slate-50">
                  <div className=" box-border w-full flex justify-evenly">
                    <p className="box-border text-xs">2023.</p>
                    <p className="box-border text-xs">1 Season.</p>
                  </div>
                  <div className=" box-border w-full flex justify-evenly">
                    <p className="box-border text-xs">6 Languages.</p>
                    <p className="box-border text-xs">U/A 7+.</p>
                  </div>
                </div>

                <div className="bottomDiv box-border overflow-hidden">
                  <p className="box-border w-full h-full text-slate-100 text-xs font-normal text-left text-ellipsis leading-3	">
                    "Experience the magic of captivating stories, with tales
                    that leave you craving for more."
                  </p>
                </div>
              </div>
            </>
          )}
        </div>

        <div
          className="itemDiv w-44 h-64 p-2 mt-4 relative hover:z-100 hover:scale-x-220 hover:scale-y-150  cursor-pointer"
          onMouseEnter={() => setIsHovered3(true)}
          onMouseLeave={() => setIsHovered3(false)}
        >
          <img src={item3} alt="" className="box-border w-44 h-64" />

          {isHovered3 && (
            <>
              <div className="transparentDiv flex flex-col justify-start items-start bg-transparent z-50 absolute top-2 left-2 w-11/12 h-1/2 p-2">
                <p className="text-white text-xs">Hindi</p>
                <button className="text-green-500	 text-xs font-bold">
                  Hotstar Special
                </button>
              </div>

              <div className="coloredDiv flex flex-col justify-start gap-1 items-start bg-zinc-500 absolute -bottom-2 left-2 w-11/12 h-1/2">
                <div className="topDiv box-border flex items-center justify-evenly  w-full p-0">
                  <div className="watchDiv box-border flex justify-center items-center bg-slate-100 border-solid rounded-md p-2">
                    <ChevronRightIcon
                      className="h-3 w-5 text-black"
                      aria-hidden="true"
                    />
                    <p className="text-sm">Watch</p>
                  </div>

                  <div className="saveDiv box-border h-11/12  flex items-center rounded-md border-slate-50	border-2 p-2 ">
                    <PlusIcon
                      className="h-3 w-5 text-slate-50  "
                      aria-hidden="true"
                    />
                  </div>
                </div>

                <div className="midDiv box-border w-full flex flex-col justify-evenly gap-1 text-slate-50">
                  <div className=" box-border w-full flex justify-evenly">
                    <p className="box-border text-xs">2023.</p>
                    <p className="box-border text-xs">1 Season.</p>
                  </div>
                  <div className=" box-border w-full flex justify-evenly">
                    <p className="box-border text-xs">6 Languages.</p>
                    <p className="box-border text-xs">U/A 7+.</p>
                  </div>
                </div>

                <div className="bottomDiv box-border overflow-hidden">
                  <p className="box-border w-full h-full text-slate-100 text-xs font-normal text-left text-ellipsis leading-3	">
                    "Experience the magic of captivating stories, with tales
                    that leave you craving for more."
                  </p>
                </div>
              </div>
            </>
          )}
        </div>

        <div
          className="itemDiv w-44 h-64 p-2 mt-4 relative hover:z-100 hover:scale-x-220 hover:scale-y-150  cursor-pointer"
          onMouseEnter={() => setIsHovered4(true)}
          onMouseLeave={() => setIsHovered4(false)}
        >
          <img src={item4} alt="" className="box-border w-44 h-64" />

          {isHovered4 && (
            <>
              <div className="transparentDiv flex flex-col justify-start items-start bg-transparent z-50 absolute top-2 left-2 w-11/12 h-1/2 p-2">
                <p className="text-white text-xs">Hindi</p>
                <button className="text-green-500	 text-xs font-bold">
                  Hotstar Special
                </button>
              </div>

              <div className="coloredDiv flex flex-col justify-start gap-1 items-start bg-zinc-500 absolute -bottom-2 left-2 w-11/12 h-1/2">
                <div className="topDiv box-border flex items-center justify-evenly  w-full p-0">
                  <div className="watchDiv box-border flex justify-center items-center bg-slate-100 border-solid rounded-md p-2">
                    <ChevronRightIcon
                      className="h-3 w-5 text-black"
                      aria-hidden="true"
                    />
                    <p className="text-sm">Watch</p>
                  </div>

                  <div className="saveDiv box-border h-11/12  flex items-center rounded-md border-slate-50	border-2 p-2 ">
                    <PlusIcon
                      className="h-3 w-5 text-slate-50  "
                      aria-hidden="true"
                    />
                  </div>
                </div>

                <div className="midDiv box-border w-full flex flex-col justify-evenly gap-1 text-slate-50">
                  <div className=" box-border w-full flex justify-evenly">
                    <p className="box-border text-xs">2023.</p>
                    <p className="box-border text-xs">1 Season.</p>
                  </div>
                  <div className=" box-border w-full flex justify-evenly">
                    <p className="box-border text-xs">6 Languages.</p>
                    <p className="box-border text-xs">U/A 7+.</p>
                  </div>
                </div>

                <div className="bottomDiv box-border overflow-hidden">
                  <p className="box-border w-full h-full text-slate-100 text-xs font-normal text-left text-ellipsis leading-3	">
                    "Experience the magic of captivating stories, with tales
                    that leave you craving for more."
                  </p>
                </div>
              </div>
            </>
          )}
        </div>

        <div
          className="itemDiv w-44 h-64 p-2 mt-4 relative hover:z-100 hover:scale-x-220 hover:scale-y-150  cursor-pointer"
          onMouseEnter={() => setIsHovered5(true)}
          onMouseLeave={() => setIsHovered5(false)}
        >
          <img src={item5} alt="" className="box-border w-44 h-64" />

          {isHovered5 && (
            <>
              <div className="transparentDiv flex flex-col justify-start items-start bg-transparent z-50 absolute top-2 left-2 w-11/12 h-1/2 p-2">
                <p className="text-white text-xs">Hindi</p>
                <button className="text-green-500	 text-xs font-bold">
                  Hotstar Special
                </button>
              </div>

              <div className="coloredDiv flex flex-col justify-start gap-1 items-start bg-zinc-500 absolute -bottom-2 left-2 w-11/12 h-1/2">
                <div className="topDiv box-border flex items-center justify-evenly  w-full p-0">
                  <div className="watchDiv box-border flex justify-center items-center bg-slate-100 border-solid rounded-md p-2">
                    <ChevronRightIcon
                      className="h-3 w-5 text-black"
                      aria-hidden="true"
                    />
                    <p className="text-sm">Watch</p>
                  </div>

                  <div className="saveDiv box-border h-11/12  flex items-center rounded-md border-slate-50	border-2 p-2 ">
                    <PlusIcon
                      className="h-3 w-5 text-slate-50  "
                      aria-hidden="true"
                    />
                  </div>
                </div>

                <div className="midDiv box-border w-full flex flex-col justify-evenly gap-1 text-slate-50">
                  <div className=" box-border w-full flex justify-evenly">
                    <p className="box-border text-xs">2023.</p>
                    <p className="box-border text-xs">1 Season.</p>
                  </div>
                  <div className=" box-border w-full flex justify-evenly">
                    <p className="box-border text-xs">6 Languages.</p>
                    <p className="box-border text-xs">U/A 7+.</p>
                  </div>
                </div>

                <div className="bottomDiv box-border overflow-hidden">
                  <p className="box-border w-full h-full text-slate-100 text-xs font-normal text-left text-ellipsis leading-3	">
                    "Experience the magic of captivating stories, with tales
                    that leave you craving for more."
                  </p>
                </div>
              </div>
            </>
          )}
        </div>

        <div
          className="itemDiv w-44 h-64 p-2 mt-4 relative hover:z-100 hover:scale-x-220 hover:scale-y-150  cursor-pointer"
          onMouseEnter={() => setIsHovered7(true)}
          onMouseLeave={() => setIsHovered7(false)}
        >
          <img src={item6} alt="" className="box-border w-44 h-64" />

          {isHovered6 && (
            <>
              <div className="transparentDiv flex flex-col justify-start items-start bg-transparent z-50 absolute top-2 left-2 w-11/12 h-1/2 p-2">
                <p className="text-white text-xs">Hindi</p>
                <button className="text-green-500	 text-xs font-bold">
                  Hotstar Special
                </button>
              </div>

              <div className="coloredDiv flex flex-col justify-start gap-1 items-start bg-zinc-500 absolute -bottom-2 left-2 w-11/12 h-1/2">
                <div className="topDiv box-border flex items-center justify-evenly  w-full p-0">
                  <div className="watchDiv box-border flex justify-center items-center bg-slate-100 border-solid rounded-md p-2">
                    <ChevronRightIcon
                      className="h-3 w-5 text-black"
                      aria-hidden="true"
                    />
                    <p className="text-sm">Watch</p>
                  </div>

                  <div className="saveDiv box-border h-11/12  flex items-center rounded-md border-slate-50	border-2 p-2 ">
                    <PlusIcon
                      className="h-3 w-5 text-slate-50  "
                      aria-hidden="true"
                    />
                  </div>
                </div>

                <div className="midDiv box-border w-full flex flex-col justify-evenly gap-1 text-slate-50">
                  <div className=" box-border w-full flex justify-evenly">
                    <p className="box-border text-xs">2023.</p>
                    <p className="box-border text-xs">1 Season.</p>
                  </div>
                  <div className=" box-border w-full flex justify-evenly">
                    <p className="box-border text-xs">6 Languages.</p>
                    <p className="box-border text-xs">U/A 7+.</p>
                  </div>
                </div>

                <div className="bottomDiv box-border overflow-hidden">
                  <p className="box-border w-full h-full text-slate-100 text-xs font-normal text-left text-ellipsis leading-3	">
                    "Experience the magic of captivating stories, with talesthat
                    leave you craving for more."
                  </p>
                </div>
              </div>
            </>
          )}
        </div>

        <div
          className="itemDiv w-44 h-64 p-2 mt-4 relative hover:z-100 hover:scale-x-220 hover:scale-y-150  cursor-pointer"
          onMouseEnter={() => setIsHovered6(true)}
          onMouseLeave={() => setIsHovered6(false)}
        >
          <img src={item7} alt="" className="box-border w-44 h-64" />

          {isHovered7 && (
            <>
              <div className="transparentDiv flex flex-col justify-start items-start bg-transparent z-50 absolute top-2 left-2 w-11/12 h-1/2 p-2">
                <p className="text-white text-xs">Hindi</p>
                <button className="text-green-500	 text-xs font-bold">
                  Hotstar Special
                </button>
              </div>

              <div className="coloredDiv flex flex-col justify-start gap-1 items-start bg-zinc-500 absolute -bottom-2 left-2 w-11/12 h-1/2">
                <div className="topDiv box-border flex items-center justify-evenly  w-full p-0">
                  <div className="watchDiv box-border flex justify-center items-center bg-slate-100 border-solid rounded-md p-2">
                    <ChevronRightIcon
                      className="h-3 w-5 text-black"
                      aria-hidden="true"
                    />
                    <p className="text-sm">Watch</p>
                  </div>

                  <div className="saveDiv box-border h-11/12  flex items-center rounded-md border-slate-50	border-2 p-2 ">
                    <PlusIcon
                      className="h-3 w-5 text-slate-50  "
                      aria-hidden="true"
                    />
                  </div>
                </div>

                <div className="midDiv box-border w-full flex flex-col justify-evenly gap-1 text-slate-50">
                  <div className=" box-border w-full flex justify-evenly">
                    <p className="box-border text-xs">2023.</p>
                    <p className="box-border text-xs">1 Season.</p>
                  </div>
                  <div className=" box-border w-full flex justify-evenly">
                    <p className="box-border text-xs">6 Languages.</p>
                    <p className="box-border text-xs">U/A 7+.</p>
                  </div>
                </div>

                <div className="bottomDiv box-border overflow-hidden">
                  <p className="box-border w-full h-full text-slate-100 text-xs font-normal text-left text-ellipsis leading-3	">
                    "Experience the magic of captivating stories, with talesthat
                    leave you craving for more."
                  </p>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Cards;
