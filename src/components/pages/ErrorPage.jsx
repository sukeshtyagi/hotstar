import React from "react";

function ErrorPage() {
  return (
    <div className="flex flex-col gap-12 justify-center items-center w-screen h-screen bg-black">
      <p className="text-red-600 font-semibold text-xl italic text-center">
        We apologize for the inconvenience, but our site is currently undergoing
        maintenance.
      </p>
      <p className="text-red-600 font-semibold text-xl italic text-center">
        Please try again later. Thank you for your understanding and patience.
      </p>
    </div>
  );
}

export default ErrorPage;
