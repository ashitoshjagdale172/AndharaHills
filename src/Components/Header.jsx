import React from "react";
import bgi from "../assets/images/bgimg.jfif";
const Header = () => {
  return (
    <div>
      <div
        className="bg-cover bg-center  h-[80vh] relative  saturate-200 container-150 brightness-[.90] z-[-10]"
        style={{ backgroundImage: `url(${bgi})` }}
      >
        <div className=" absolute z-[+5] text-[#ffffff] brightness-[1]  text-[40px] mt-[7%] font-[700] ml-[5%] ">
          Dream house <br />
          is no longer <br />
          just a dream
        </div>
      </div>
      <div className="bg-[#33691E4D] flex justify-center items-center gap-20 text-center  py-3">
        <div className=" flex flex-col gap-2">
          <div className=" text-[30px] font-[600]  ">300+</div>
          <div className="text-[14] leading-6 text-center">Happy Clients</div>
        </div>
        <div className=" flex flex-col gap-2">
          <div className=" text-[30px] font-[600]  ">1K+</div>
          <div className="text-[14] leading-6 text-center">Property Ready</div>
        </div>
        <div className=" flex flex-col gap-2">
          <div  className=" text-[30px] font-[600]  ">80+</div>
          <div className="text-[14] leading-6 text-center">Completed Agents</div>
        </div>
        <div className=" flex flex-col gap-2">
          <div className=" text-[30px] font-[600]  ">60%</div>
          <div className="text-[14] leading-6 text-center">Years Growth</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
