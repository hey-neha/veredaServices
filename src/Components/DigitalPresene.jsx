import React from "react";
import android from "../assets/AndroidLogo.png";
import fullstck from "../assets/FullstackIcon.png";
import websiteproce from "../assets/processorlog.png";
import digitalMarketing from "../assets/digitalMicon.png";
import on_demand from "../assets/Ondemandicon.png";

const DigitalPresene = () => {
  return (
    <div className="w-full h-auto bg-gray-100 text-center p-5 md:p-10 lg:p-14 mt-5 md:mt-14">
      {/*  first container */}
      <div>
        <h1 className="text-3xl text-center md:text-[30px] text-[24px] lg:text-[36px] font-semibold  ">
          We provide distinctive services and apps for your company.let us{" "}
          <br /> create your{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#53ADE4] to-[#277BA8] ">
            digital presence
          </span>{" "}
        </h1>
        <p className="px-5 md:px-52 lg:px-60 py-5 md:py-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
          excepturi similique consequuntur et ut soluta tempore nulla assumenda
          totam? Facere.
        </p>
      </div>
      {/*    second container */}
      <div className="flex flex-col mx-5 md:mx-8 my-5 md:my-7 flex-wrap md:flex md:flex-row">
        {/*  start */}
        <div className="bg-white rounded-xl p-4  text-center w-full md:w-1/3">
          <div className="flex justify-center ml-5 md:ml-24 lg:ml-32  bg-gray-100 w-full md:w-1/5  rounded">
            <img src={android} alt="" />
          </div>
          <h1 className="font-semibold my-3 md:my-3">
            Android App Development
          </h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel quod
            necessitatibus!
          </p>
          <p className="mt-2 mb-5">Learn More</p>
        </div>

        <div className="bg-white rounded-xl  p-4 text-center  md:w-1/3 ">
          <div className="flex justify-center ml-5 md:ml-24 lg:ml-32  bg-gray-100 w-full md:w-1/5  rounded">
            <img src={android} alt="" />
          </div>
          <h1 className="font-semibold my-3 md:my-3">
            Android App Development
          </h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel quod
            necessitatibus!
          </p>
          <p className="mt-2 mb-5">Learn More</p>
        </div>

        <div className="bg-white rounded-xl  p-4 text-center  md:w-1/3 ">
          <div className="flex justify-center ml-5 md:ml-24 lg:ml-32  bg-gray-100 w-full md:w-1/5  rounded">
            <img src={android} alt="" />
          </div>
          <h1 className="font-semibold my-3 md:my-3">
            Android App Development
          </h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel quod
            necessitatibus!
          </p>
          <p className="mt-2 mb-5">Learn More</p>
        </div>

        <div className="bg-white rounded-xl  p-4 text-center  md:w-1/3 ">
          <div className="flex justify-center ml-5 md:ml-24 lg:ml-32  bg-gray-100 w-full md:w-1/5  rounded">
            <img src={android} alt="" />
          </div>
          <h1 className="font-semibold my-3 md:my-3">
            Android App Development
          </h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel quod
            necessitatibus!
          </p>
          <p className="mt-2 mb-5">Learn More</p>
        </div>

        <div className="bg-white rounded-xl  p-4 text-center  md:w-1/3 ">
          <div className="flex justify-center ml-5 md:ml-24 lg:ml-32  bg-gray-100 w-full md:w-1/5  rounded">
            <img src={android} alt="" />
          </div>
          <h1 className="font-semibold my-3 md:my-3">
            Android App Development
          </h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel quod
            necessitatibus!
          </p>
          <p className="mt-2 mb-5">Learn More</p>
        </div>

        <div className="bg-white rounded-xl  p-4 text-center  md:w-1/3 ">
          <div className="flex justify-center ml-5 md:ml-24 lg:ml-32  bg-gray-100 w-full md:w-1/5  rounded">
            <img src={android} alt="" />
          </div>
          <h1 className="font-semibold my-3 md:my-3">
            Android App Development
          </h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel quod
            necessitatibus!
          </p>
          <p className="mt-2 mb-5">Learn More</p>
        </div>
        {/* end  */}
      </div>{" "}
      {/*  */}
    </div>
  );
};

export default DigitalPresene;
