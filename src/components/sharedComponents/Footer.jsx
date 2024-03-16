import React from "react";
import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();
  return (
    <div className="container box-border flex flex-col p-0">
      <div className="upperDiv box-border flex align-center justify-start gap-56">
        <div className="infoDiv box-border flex flex-col p-0">
          <p className="heading p-2 text-slate-100  text-lg font-medium">
            Company
          </p>
          <p
            className="link1 px-2 text-slate-500 text-base font-normal cursor-pointer"
            onClick={() => {
              navigate("/about-us");
            }}
          >
            About us
          </p>
          <p
            className="link2 px-2 text-slate-500 text-base font-normal cursor-pointer"
            onClick={() => {
              navigate("/careers");
            }}
          >
            Careers
          </p>
        </div>

        <div className="infoDiv">
          <p className="heading p-2 text-slate-100 text-lg font-medium">
            View Website in
          </p>
          <div className="flex items-center gap-2 pl-3 text-slate-500 font-normal">
            <input type="checkbox" checked readOnly />
            <p classname="">English</p>
          </div>
        </div>

        <div className="infoDiv">
          <p className="heading p-2 text-slate-100 text-lg font-medium">
            Need help
          </p>
          <p
            className="link1 px-2 text-slate-500  text-base font-normal cursor-pointer"
            onClick={() => {
              navigate("/visit-help-center");
            }}
          >
            Visit help center
          </p>
          <p
            className="link2 px-2 text-slate-500 text-base font-normal cursor-pointer"
            onClick={() => {
              navigate("/share-feedback");
            }}
          >
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
              onClick={() => {
                navigate("/fb-page");
              }}
            />
            <img
              src="/images/xlogo.jpg"
              alt="twitter logo"
              className="box-border w-12 h-16"
              onClick={() => {
                navigate("/X-page");
              }}
            />
          </div>
        </div>
      </div>

      <div className="lowerDiv box-border flex justify-between items-center">
        <div className="paraDiv text-slate-500">
          <p className="coypright">&copy; 2024 STAR.All right reserved</p>
          <p className="tnc">Terms of Use Privacy Policy FAQ</p>
        </div>
        <div className="imgDiv flex justify-evenly items-center justify-start gap-4 ">
          <img
            src="/images/googleplaystore.jpg"
            alt="googleplaystore logo"
            className="box-border w-30 h-20"
             onClick={() => {
                navigate("/google-playstore");
              }}
          />
          <img
            src="/images/appstore.png"
            alt="appstore logo"
            className="box-border w-30 h-20"
             onClick={() => {
                navigate("/app-playstore");
              }}
          />
        </div>
      </div>
    </div>
  );
}

export default Footer;
