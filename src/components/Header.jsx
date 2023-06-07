import React from "react";
import { SiGithub, SiGmail, SiLinkedin, SiWhatsapp } from "react-icons/si";

export default function Header() {
  return (
    <div className=" sm:flex items-center justify-between ">
      <h1 className="relative  z-20 text-center text-[24px] sm:text-[32px] py-5 font-black font-test">
        leonardAdjei
      </h1>

      <div className="flex w-[174px]  mx-auto sm:mx-0 sm:w-40 text-xl relative z-20 sm:justify-between justify-around   ">
        <SiGithub />
        <SiGmail />
        <SiLinkedin />
        <SiWhatsapp />
      </div>
    </div>
  );
}
