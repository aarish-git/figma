import React, { useState } from "react";
import "./Conindex.css";
// import Countryflag from "./countryFlag";
import relaxed from "../../assest/Images/contact/contact1.png";
import building from "../../assest/Images/contact/contact2.png";
import ReCAPTCHA from "react-google-recaptcha";

export default function Index() {
  const [verified, setverified] = useState(false);

  function handleContact(value) {
    console.log("Captcha value:", value);
    setverified(true);
  }
  return (
    <div>
      <section
        style={{
          background:
            "linear-gradient(89.82deg, #FFFFFF 0.23%, rgba(255, 255, 255, 0.555775) 45.36%, rgba(228, 233, 239, 0.5) 83.29%, #E4E9EF 97.33%)",
        }}
        class="contact-desk text-gray-600 body-font"
      >
        <div class="container px-5 py-24 mx-auto flex flex-wrap items-start">
          <div class="lg:w-3/5 md:w-1/2 text-left md:pr-16 lg:pr-0 pr-0 ">
            <h1
              style={{ fontFamily: "Exo2-Regular" }}
              class="font-[700] text-[40px] text-[#2F2F2F]"
            >
              Let's accelerate the change together!
            </h1>
            <p class="leading-relaxed mt-4">
              Do you have a building to twin or want to know more about
              Leaftech? <br />
              Reach out to us and we will schedule a meeting with you.
            </p>
            <div class="my-5  text-left">
              <div class="space-y-3">
                <p class="font-medium">Interested in*</p>
                <div class="space-x-4">
                  <button class="bg-[#FFFFFF] p-2 border-1 border-[#2F2F2F] shadow-[0_4px_4px_rgba(0,135,255,0.25)] ">
                    Future Information
                  </button>
                  <button class="bg-[#FFFFFF] p-2 border-1 border-[#2F2F2F] shadow-[0_4px_4px_rgba(0,135,255,0.25)] ">
                    Digital Twin Services
                  </button>
                </div>
              </div>
              <div class="my-4 space-y-3">
                <p class="font-medium">Which group do you represent?*</p>
                <div class="space-x-4 space-y-4">
                  <div class="flex space-x-3">
                    <button class="bg-[#FFFFFF] p-2 border-1 border-[#2F2F2F] shadow-[0_4px_4px_rgba(0,135,255,0.25)]">
                      Building Ownwers
                    </button>
                    <button class="bg-[#FFFFFF] p-2 border-1 border-[#2F2F2F] shadow-[0_4px_4px_rgba(0,135,255,0.25)] ">
                      Building Automations
                    </button>
                    <button class="bg-[#FFFFFF] p-2 border-1 border-[#2F2F2F] shadow-[0_4px_4px_rgba(0,135,255,0.25)] ">
                      Others
                    </button>
                  </div>

                  <div class="flex space-x-3">
                    <button class="bg-[#FFFFFF] p-2 border-1 border-[#2F2F2F] shadow-[0_4px_4px_rgba(0,135,255,0.25)] ">
                      Architects
                    </button>
                    <button class="bg-[#FFFFFF] p-2 border-1 border-[#2F2F2F] shadow-[0_4px_4px_rgba(0,135,255,0.25)] ">
                      Building Designers
                    </button>
                    <button class="bg-[#FFFFFF] p-2 border-1 border-[#2F2F2F] shadow-[0_4px_4px_rgba(0,135,255,0.25)] tracking-widest">
                      Consultants
                    </button>
                  </div>

                  <div class="flex space-x-3">
                    <button class="bg-[#FFFFFF] p-2 border-1 border-[#2F2F2F] shadow-[0_4px_4px_rgba(0,135,255,0.25)] tracking-widest">
                      Asset Mangements
                    </button>
                    <button class="bg-[#FFFFFF] p-2 border-1 border-[#2F2F2F] shadow-[0_4px_4px_rgba(0,135,255,0.25)] tracking-widest">
                      Utility Provider
                    </button>
                    <button class="bg-[#FFFFFF] p-2 border-1 border-[#2F2F2F] shadow-[0_4px_4px_rgba(0,135,255,0.25)] tracking-widest">
                      Smart Home
                    </button>
                  </div>

                  {/* <button class="bg-zinc-200 w-3/4 px-3 py-2 border-1 border-black tracking-widest">
                    Digital Twin Services
                  </button>
                  <button class="bg-zinc-200 w-3/4 px-3 py-2 border-1 border-black tracking-widest">
                    Future Information
                  </button>
                  <button class="bg-zinc-200 w-3/4 px-3 py-2 border-1 border-black tracking-widest">
                    Digital Twin Services
                  </button> */}
                </div>
              </div>
              <div class="grid grid-cols-2 gap-4 place-content-end ">
                <div class="align-self-end">
                  <img src={relaxed} />
                </div>
                <div class="justify-end w-full">
                  <img src={building} />
                </div>
              </div>
            </div>
          </div>
          <div class="lg:w-2/6 md:w-1/2 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
            <div class="flex justify-end text-[12px] space-x-4 py-5 ">
              <p class="uppercase tracking-widest">Meeting Language</p>
              <input class="mt-1" type="checkbox" />
              <label>English</label>
              <input class="mt-1" type="checkbox" />
              <label>German</label>
            </div>
            <div class="relative mb-4 text-left">
              <label for="full-name" class="leading-7 text-[16px] font-[600]">
                Name*
              </label>
              <input
                type="text"
                id="full-name"
                name="full-name"
                placeholder="Your name"
                class="w-full drop-shadow-sm bg-white rounded-[10px] border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div class="relative mb-4 text-left">
              <label for="email" class="leading-7 text-[16px] font-[600]">
                Job Title*
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Role"
                class="w-full drop-shadow-sm bg-white rounded-[10px] border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div class="flex space-x-4">
              <div class="relative mb-4 text-left">
                <label for="email" class="leading-7 text-[16px] font-[600]">
                  Email*
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="your@company.com"
                  class="w-full drop-shadow-sm bg-white rounded-[10px] border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div class="relative mb-4 text-left">
                <label for="email" class="leading-7 text-[16px] font-[600]">
                  Company(Optional)
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="The name of your company"
                  class="w-full drop-shadow-sm bg-white rounded-[10px] border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div class=" space-x-4 text-left">
              <div class="w-1/2 relative mb-4 ">
                <label for="email" class="leading-7 text-[16px] font-[600]">
                  Phone
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="+46"
                  class="w-full drop-shadow-sm bg-white rounded-[10px] border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1  leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div class="relative mb-4 text-left">
              <label for="email" class="leading-7 text-[16px] font-[600]">
                Short Note
              </label>
              {/* <input
                type="email"
                id="email"
                name="email"
                class="w-full bg-white rounded-[10px] border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              /> */}
              <textarea
                class="drop-shadow-md rounded-[10px] p-1"
                id="w3review"
                name="w3review"
                rows="4"
                cols="50"
                placeholder="Is there anything we’d need to know before the meeting?"
              />
            </div>
            <div class="flex my-2 space-x-4 text-left">
              <input
                type="checkbox"
                id="email"
                name="email"
                class="bg-white drop-shadow-sm rounded-[2px] w-[26px] h-[26px]  border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3  transition-colors duration-200 ease-in-out"
              />
              <p class="text-[12px] text-gray-500 ">
                I agree to the Privacy Policy and to receive other
                communications from Leaftech*
              </p>
            </div>
            <div class=" flex space-x-4 justify-center">
              {/* <button class="w-1/3 text-black bg-slate-50	 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Go Back
              </button> */}
              {/* <ReCAPTCHA
                sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                onChange={handleContact}
              /> */}
              
              <button
                disabled={!verified}
                class=" w-1/3 text-white bg-[#0087FF] border-0 my-3 py-2 px-8 focus:outline-none hover:bg-zinc-600 rounded-[10px] text-lg"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* tab view */}

      <section class="contact-mob text-gray-600 body-font bg-gray-300 bg-cover">
        <div class="container px-5 py-24 m-auto w-full flex flex-wrap items-start ">
          <div class="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0 ">
            <h1 class="title-font text-center font-medium text-3xl text-gray-900">
              Let's accelerate the change <br /> together!
            </h1>
            <p class="leading-relaxed mt-4">
              Poke slow-carb mixtape knausgaard, typewriter street art gentrify
              hammock starladder roathse. Craies vegan tousled etsy austin.
            </p>
            <div class="flex space-x-6 py-4">
              <p>Meeting Language</p>
              <input class="mt-2 " type="radio" />
              <label>English</label>
              <input class="mt-2" type="radio" />
              <label>German</label>
            </div>
          </div>
          <div class="mt-6 bg-slate-50  w-full">
            <div class="lg:w-2/6 md:w-1/2 rounded-lg  pt-8 flex flex-col md:ml-auto w-full md:mt-0">
              <div class="p-5">
                <div class="relative mb-4">
                  <label
                    for="full-name"
                    class="leading-7 text-[16px] font-[600]"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="full-name"
                    name="full-name"
                    class="w-full drop-shadow-sm bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
                <div class="relative mb-4">
                  <label for="email" class="leading-7 text-sm text-gray-600">
                    Job Title*
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    class="w-full drop-shadow-sm bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
                <div class="flex space-x-4">
                  <div class="relative mb-4">
                    <label for="email" class="leading-7 text-sm text-gray-600">
                      Email*
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      class="w-full drop-shadow-sm bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                  <div class="relative mb-4">
                    <label for="email" class="leading-7 text-sm text-gray-600">
                      Company(Optional)
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      class="w-full drop-shadow-sm bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div class="flex space-x-4">
                  <div class="w-1/2 relative mb-4 space-x-4">
                    <input
                      type="radio"
                      id="email"
                      name="email"
                      class=" bg-white drop-shadow-sm rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                    <label for="email" class="leading-7 text-sm text-gray-600">
                      Digital twin service
                    </label>
                  </div>

                  <div class=" w-1/2 relative mb-4 space-x-4">
                    <input
                      type="radio"
                      id="email"
                      name="email"
                      class=" bg-white drop-shadow-sm rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                    <label for="email" class="leading-7 text-sm text-gray-600">
                      Future Information
                    </label>
                  </div>
                </div>
                <div class="flex mb-4">
                  <label for="email" class="leading-7 text-sm text-gray-600">
                    Short Note
                  </label>
                  <textarea
                    class="drop-shadow-md"
                    id="w3review"
                    name="w3review"
                    rows="4"
                    cols="50"
                  />
                </div>
                <div class="flex my-2 space-x-4">
                  <input
                    type="checkbox"
                    id="email"
                    name="email"
                    class="bg-white drop-shadow-sm rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3  transition-colors duration-200 ease-in-out"
                  />
                  <p class="text-xs text-gray-500 ">
                    Literally you probably haven't heard of them jean shorts.
                  </p>
                </div>
                <div class="my-4 space-y-3">
                  <div class="space-y-3">
                    <p class="font-medium">Interested in*</p>
                    <div class="space-x-4">
                      <button class="bg-zinc-200 px-2 py-2 border-1 border-black">
                        Future Information
                      </button>
                      <button class="bg-zinc-200 px-2 py-2 border-1 border-black">
                        Digital Twin Services
                      </button>
                    </div>
                  </div>
                  <p class="font-medium">Which group do you represent*</p>
                  <div class="space-x-4 space-y-4">
                    <div class="flex space-x-3">
                      <button class="bg-zinc-200 p-1 border-1 border-black ">
                        Building Ownwers
                      </button>
                      <button class="bg-zinc-200 p-1 border-1 border-black ">
                        Building Automations
                      </button>
                      <button class="bg-zinc-200 p-1 border-1 border-black ">
                        Others
                      </button>
                    </div>

                    <div class="flex space-x-3">
                      <button class="bg-zinc-200 p-1  border-1 border-black ">
                        Architects
                      </button>
                      <button class="bg-zinc-200 p-1  border-1 border-black ">
                        Building Designers
                      </button>
                      <button class="bg-zinc-200 p-1  border-1 border-black ">
                        Consultants
                      </button>
                    </div>

                    <div class="flex space-x-3">
                      <button class="bg-zinc-200 p-0.5  border-1 border-black ">
                        Asset Mangements
                      </button>
                      <button class="bg-zinc-200 p-1  border-1 border-black ">
                        Utility Provider
                      </button>
                      <button class="bg-zinc-200 p-1  border-1 border-black ">
                        Smart Home
                      </button>
                    </div>
                  </div>
                  <div class=" flex space-x-4 justify-center">
                    <button class=" w-1/3 text-white bg-zinc-300 border-0 my-3 py-2 px-8 focus:outline-none hover:bg-zinc-600 rounded text-lg">
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
