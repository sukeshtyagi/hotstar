import React from "react";

function Footer() {
  return (
    <div className="container box-border flex flex-col p-0">
      <div className="upperDiv box-border flex align-center justify-start gap-56">
        <div className="infoDiv box-border flex flex-col p-0">
          <p className="heading p-2 text-slate-100  text-lg font-medium">
            Company
          </p>
          <p className="link1 px-2 text-slate-500 text-base font-normal ">
            About us
          </p>
          <p className="link2 px-2 text-slate-500 text-base font-normal cursor-pointer">
            Careers
          </p>
        </div>

        <div className="infoDiv">
          <p className="heading p-2 text-slate-100 text-lg font-medium">
            View Website in
          </p>
          <div className="flex align-center gap-2 pl-3 text-slate-500 font-normal">
            <input type="checkbox" checked />
            <p classname="">English</p>
          </div>
        </div>

        <div className="infoDiv">
          <p className="heading p-2 text-slate-100 text-lg font-medium">
            Need help
          </p>
          <p className="link1 px-2 text-slate-500  text-base font-normal cursor-pointer">
            Visit help center
          </p>
          <p className="link2 px-2 text-slate-500 text-base font-normal cursor-pointer">
            Share Feedback
          </p>
        </div>

        <div className="infoDiv4">
          <p className="heading p-2 text-slate-100 text-red-900 text-lg font-medium">
            Connect with us
          </p>
          <div className="logos flex justify-evenly align-center">
            <img
              src="/images/fblogo.jpg"
              alt="fb logo"
              className="box-border w-12 h-16"
            />
            <img
              src="/images/xlogo.jpg"
              alt="twitter logo"
              className="box-border w-12 h-16"
            />
          </div>
        </div>
      </div>

      <div className="lowerDiv box-border flex flex-col bg-yellow-500">
        <div className="paraDiv">
          <p className="coypright">@ 2024 STAR.All right reserved</p>
          <p className="tnc">Terms of Use Privacy Policy FAQ</p>
        </div>
        <div className="imgDiv flex">
          <img
            src="/images/googleplaystore.jpg"
            alt="googleplaystore logo"
            className="box-border w-30 h-20"
          />
          <img
            src="/images/appstore.png"
            alt="appstore logo"
            className="box-border w-30 h-20"
          />
        </div>
      </div>
    </div>
  );
}

export default Footer;
