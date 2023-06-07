import React from "react";

export default function Skills() {
  return (
    <div className="grid md:grid-cols-2   lg:grid-cols-3 text-center gap-y-10 place-items-center sm:place-items-start pt-16 pb-20 ">
      <div >
        <h1 className="font-bold text-[32px] sm:text-[48px] sm:text-left">HTML</h1>
        <p className="text-center sm:text-left">3 Years Experience</p>
      </div>
      <div>
        <h1 className="font-bold text-[32px] sm:text-[48px] text-center sm:text-left">CSS</h1>
        <p className="text-center sm:text-left">3 Years Experience</p>
      </div>
      <div>
        <h1 className="font-bold text-[32px] sm:text-[48px] sm:text-left">JAVASCRIPT</h1>
        <p className="text-center sm:text-left">3 Years Experience</p>
      </div>
      <div>
        <h1 className="font-bold text-[32px] sm:text-[48px]">REACT</h1>
        <p className="text-center sm:text-left">3 Years Experience</p>
      </div>
      <div>
        <h1 className="font-bold text-[32px] sm:text-[48px]">FIREBASE</h1>
        <p className="text-center sm:text-left">3 Years Experience</p>
      </div>
      <div>
        {" "}
        <h1 className="font-bold text-[32px] sm:text-[48px]">TAILWINDCSS</h1>
        <p className="text-center sm:text-left">3 Years Experience</p>
      </div>
      <img className="absolute -right-24 -bottom-[750px] md:right-0 md:-bottom-[420px] lg:right-0 lg:-bottom-72" src="/public/Group2.png" alt="" />
<hr className="bg-white w-full sm:hidden"/>
    </div>
  );
}
