import React from "react";
import bright from "../assets/bright visin.png";
import world from "../assets/wconcil.png";
import myTvs from "../assets/my tvs.png";
import beauty from "../assets/beutySupply.png";

const Home = () => {
  return (
    <>
      <div className="w-full h-auto p-10 md:p-16 flex flex-col text-center">
        {/*     first--container----------------------- */}
        <div>
          <h1 className="text-center md:text-[30px]  mb-5 md:mb-5  text-[24px] lg:text-[36px] font-semibold ">
            Services of{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#53ADE4] to-[#277BA8]">
              Vereda Digital Technology
            </span>
          </h1>
          <p className="px-5 md:px-20 lg:px-48 ">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro id
            quasi, beatae, eligendi iusto officiis illo ipsum qui ea rerum iure
            libero eius quas tempore quaerat nulla! Sint dolorum similique
            maiores quod, blanditiis ex odio officia nihil recusandae enim
            adipisci? Deleniti molestiae nisi, aliquid et quae aut hic assumenda
            illo Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Officia, ullam Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Atque, soluta..
          </p>
          <div className=" w-full md:w-[18%] lg:w-[19%]  md:ml-[300px] lg:ml-[430px] mt-3 md:mt-4 lg:mt-12 md:my-20   rounded p-3 bg-gradient-to-r from-[#53ADE4] to-[#277BA8] opacity-100 ">
            <a className="text-white" href="">
              Talk to our Expert Now
            </a>
          </div>
        </div>

        {/*   second container------------------------------------ */}

        <div className="mt-10 md:mt-16 text-center">
          <h1 className="font-semibold text-4xl text-transparent bg-clip-text bg-gradient-to-r from-[#53ADE4] to-[#277BA8]">
            Our Clients
          </h1>
          <div className=" gap-10 grid grid-cols-2 ml-10 md:ml-48 md:grid-cols-4 mt-5 justify-stretch  md:mt-12">
            <img className="" src={bright} alt="" />
            <img src={world} alt="" />
            <img src={myTvs} alt="" />
            <img src={beauty} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
