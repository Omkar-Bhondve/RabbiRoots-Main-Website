import React from "react";
import TopbarImg from "../../assets/topbar.webp";
import Img1 from "../../assets/b1.avif";
import Img2 from "../../assets/b2.avif";
import Img3 from "../../assets/b3.avif";
import Img4 from "../../assets/b4.avif";
import { Link } from "react-router-dom";

function Topbar() {
  return (
    <div className="w-full py-2 px-22 max-lg:px-4 flex flex-col gap-4 max-lg:mt-[6rem] max-sm:mt-[4rem]">
      <Link to={"/productlisting"}>
        <img
          src={TopbarImg}
          alt="topbar"
          className="w-full h-full object-cover cursor-pointer max-lg:hidden"
        />
      </Link>
      <Link to={"/productlisting"}>
        <div className="w-[100%] flex items-center gap-4 px-5 overflow-hidden max-lg:px-0 max-md:flex-col">
          <img
            src={Img1}
            alt=""
            className="w-[30%] h-full object-cover cursor-pointer max-md:w-full"
          />
          <img
            src={Img2}
            alt=""
            className="w-[30%] h-full object-cover cursor-pointer max-md:w-full"
          />
          <img
            src={Img3}
            alt=""
            className="w-[30%] h-full object-cover cursor-pointer max-md:w-full"
          />
          {/* <img src={Img4} alt="" className='w-[30%] h-full object-cover cursor-pointer max-md:w-full'/> */}
        </div>
      </Link>
    </div>
  );
}

export default Topbar;
