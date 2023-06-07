import React from "react";
import Button from "./Button";

export default function Hero() {
  return (
    <div className="grid place-items-center sm:place-items-start  sm:grid-cols-3 h-[630px]    border-b ">
      <div className=" col-span-2  pt-6  z-10">
        <img
          className="absolute z-0 -left-[200px]  sm:-left-48 lg:left-0 top-20"
          src="/public/Group.png"
          alt=""
        />
        <p className=" font-bold pt-48 sm:pt-20 sm:w-[700px]  text-center sm:text-left text-[40px] leading-10 sm:leading-[88px] sm:text-[68px] lg:text-[78px] ">
          Nice to meet you! <br />
          I'm  <span className="border-b-4 inline border-b-primary-green mb-0">
            Leonard Adjei.
          </span>
        </p>
        <p className="py-5 sm:py-10 lg:py-14 sm:text-left text-center text-[16px] sm:text-[18px]">
          Based in the Accra,i'm front-end developer <br />
          passionate about building accessible web apps <br />
          that users love.
        </p>

        <div className="w-full flex justify-center sm:block">
        <Button
          name="CONTACT ME"
          style="font-bold border-b-4 pb-2 border-b-primary-green hover:text-primary-green "
        />
        </div>

  
      </div>

      <div className="  bg-secondary-dark absolute  sm:right-0  lg:right-40 top-0  pt-32 ">
        <img
          className="absolute z-30 -right-56 bottom-0 sm:bottom-0 sm:-right-20 lg:bottom-20 lg:-left-16"
          src="/public/Oval.png"
          alt=""
        />
        <img
          className="w-[174px] relative z-10  sm:h-[500px] sm:w-full"
          src="../public/img.png"
          alt=""
        />
      </div>
    </div>
  );
}
