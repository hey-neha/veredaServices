import React from "react";

const Contact = () => {
  return (
    <div className="w-full h-auto p-5 md:p-6 flex flex-col ">
      {/*    first container */}
      <div className=" flex flex-col gap-4 mt-5 md:mt-7  md:gap-5 justify-evenly mx-5 md:mx-10  md:flex-row text-center">
        <div className="text-center">
          <p className="font-semibold text-3xl">1000+</p>
          <p className="font-semibold">Apps & Web Apps Launched</p>
        </div>

        <div className="text-center">
          <p className="font-semibold text-3xl">500+</p>
          <p className="font-semibold">Clients Served</p>
        </div>

        <div className="text-center">
          <p className="font-semibold text-3xl">$10M</p>
          <p className="font-semibold">Revenue Generated</p>
        </div>

        <div className="text-center">
          <p className="font-semibold text-3xl">10+</p>
          <p className="font-semibold">Awards Won</p>
        </div>
      </div>
      <div className="text-center mt-5 md:mt-24 lg:mt-28">
        <p className="font-semibold text-xl mx-5 md:mx-10">
          Have an{" "}
          <sapn className="text-transparent bg-clip-text bg-gradient-to-r from-[#53ADE4] to-[#277BA8]">
            {" "}
            excellent idea
          </sapn>{" "}
          and want <br /> to make it a really?
        </p>
      </div>

      {/*   second contaienr */}

      <div className="text-center flex justify-center mt-5 md:mt-16 lg:mt-20">
        <form action="#">
          {/*   first name and last name -----------------------------------------*/}
          <div className="flex flex-col  md:flex gap-5 md:gap-10 md:flex-row">
            {/*  fist name */}
            <div className="">
              <label className="text-start py-5 md:py-7" htmlFor="#">
                First Name
              </label>
              <br />
              <input
                className=" w-full p-2 px-10 border rounded"
                type="text"
                placeholder="First name"
              />
            </div>

            {/*   last name ------------*/}

            <div>
              <label className="text-start" htmlFor="#">
                Last Name
              </label>
              <br />
              <input
                className=" w-full p-2 px-10 border rounded"
                type="text"
                placeholder="Last Name"
              />
            </div>
          </div>

          {/*       email --------------------------------*/}

          <div className="">
            <label className="text-start" htmlFor="#">
              Email
            </label>
            <br />
            <input
              className=" w-full p-2 px-10 border rounded"
              type="text"
              placeholder="You@company.com"
            />
          </div>

          {/* phone number------------------------ */}
          <div className="">
            <label className="text-start" htmlFor="#">
              Phone Number
            </label>
            <br />
            <input
              className=" w-full p-2 px-10 border rounded"
              type="text"
              placeholder="+1(555) 000-0000"
            />
          </div>

          {/*      message-------------------------------------- */}

          <div>
            <label className="text-start" htmlFor="#">
              Message
            </label>
            <br />

            <textarea
              className=" w-full p-2 px-10 border rounded"
              name=""
              id=""
            ></textarea>
          </div>
          {/* button -----------------------------------------*/}

          <div className="my-4 md:my-7 ">
            <p className="text-start">
              You agree to our friendly privacy policy
            </p>
          </div>

          <div className=" w-full p-2  border rounded h-auto  bg-gradient-to-r from-[#277BA8] to-[#277BA8] text-center">
            <a href="#">Send message</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
