import React from "react";
import { ChevronDownIcon, XIcon } from "@heroicons/react/outline"; 
import { useNavigate } from "react-router-dom";

function LoginHeader() {
  const navigate = useNavigate()

  return (
    <div className="header box-border w-full h-fit flex flex-col justify-start mt-4">
      <div className="icon flex justify-between h-12">
        <p></p>
        <XIcon
          className="box-border w-8 font-thin text-zinc-500 mr-10 cursor-pointer"
          onClick={() => {
            navigate("/paywall");
          }}
        />
      </div>
      <div className="text flex flex-col gap-1">
        <h1 className="heading box-border text-center text-slate-100 text-3xl font-semibold tracking-wider">
          Login or signup to continue
        </h1>
        <p className="para box-border text-center text-gray-500 text-lg font-medium tracking-wide">
          Scan QR code or enter phone number to login
        </p>
      </div>
    </div>
  );
}

export default LoginHeader;
