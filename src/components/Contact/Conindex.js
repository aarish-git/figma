import React, { useState } from "react";
import "./Conindex.css";
// import Countryflag from "./countryFlag";
import relaxed from "../../assest/Images/contact/contact1.png";
import building from "../../assest/Images/contact/contact2.png";
import ReCAPTCHA from "react-google-recaptcha";
import { useTranslation } from 'react-i18next';//translator

export default function Index() {
  const { t, i18n } = useTranslation();//translator
  console.log(t, 'ttttt')

  const [verified, setverified] = useState(false);

  function handleContact(value) {
    console.log("Captcha value:", value);
    setverified(true);
  }
  return (
    <div className="row">
    <div className="row" style={{marginTop:'75px', height:'1153px', maxWidth: '104%', width: '103%' ,background:"linear-gradient(89.82deg, #FFFFFF 0.23%, rgba(255, 255, 255, 0.555775) 45.36%, rgba(228, 233, 239, 0.5) 83.29%, #E4E9EF 97.33%)"}}>
        <div  className="mx-auto flex  md:flex-row flex-col ">
          <div  style={{width:'666px', height:'506px', textAlign:'left', marginTop:'147px', marginLeft: '-10px'}}>
            <h1
              style={{ fontFamily: "Exo2-Bold" }}
              className="contact_head"
            >
              {t('contact_head')}
            </h1>
            <p style={{ fontFamily: "NunitoSans-Regular" }} className="leading-relaxed  contact_content">
            {t('contact__content')}
            </p>
            <div className="my-5  text-left">
              <div className="space-y-3">
                <p className="contact_subhead" style={{ fontFamily: "NunitoSans-Regular" }}>{t('contact_subhead1')}</p>
                <div className="space-x-4">
                <button style={{ fontFamily: "Exo2-Regular" }} className="contact_subhead_buttons_text p-2 border-1 border-[#2F2F2F] shadow-[0_4px_4px_rgba(0,135,255,0.25)] ">
                {t('contact_subhead_buttons_text11')}
                  </button>
                  <button style={{ fontFamily: "Exo2-Regular" }} className="contact_subhead_buttons_text p-2 border-1 border-[#2F2F2F] shadow-[0_4px_4px_rgba(0,135,255,0.25)] ">
                  {t('contact_subhead_buttons_text12')}
                  </button>
                </div>
              </div>
              <div className="space-y-3" style={{marginTop:'32px'}}>
                <p className="contact_subhead" style={{ fontFamily: "NunitoSans-Regular" }}>{t('contact_subhead2')}</p>
                <div className="space-x-4 space-y-4">
                  <div className="flex space-x-3">
                    <button style={{ fontFamily: "Exo2-Regular" }} className="contact_subhead_buttons_text p-2 border-1 border-[#2F2F2F] shadow-[0_4px_4px_rgba(0,135,255,0.25)]">
                    {t('contact_subhead_buttons_text1')}
                    </button>
                    <button style={{ fontFamily: "Exo2-Regular" }} className="contact_subhead_buttons_text p-2 border-1 border-[#2F2F2F] shadow-[0_4px_4px_rgba(0,135,255,0.25)] ">
                    {t('contact_subhead_buttons_text2')}
                    </button>
                    <button style={{ fontFamily: "Exo2-Regular" }} className="contact_subhead_buttons_text p-2 border-1 border-[#2F2F2F] shadow-[0_4px_4px_rgba(0,135,255,0.25)] ">
                    {t('contact_subhead_buttons_text3')}
                    </button>
                  </div>

                  <div className="flex space-x-3" style={{marginLeft: '0px'}}>
                    <button style={{ fontFamily: "Exo2-Regular" }} className="contact_subhead_buttons_text p-2 border-1 border-[#2F2F2F] shadow-[0_4px_4px_rgba(0,135,255,0.25)] ">
                    {t('contact_subhead_buttons_text4')}
                    </button>
                    <button style={{ fontFamily: "Exo2-Regular" }} className="contact_subhead_buttons_text p-2 border-1 border-[#2F2F2F] shadow-[0_4px_4px_rgba(0,135,255,0.25)] ">
                    {t('contact_subhead_buttons_text5')}
                    </button>
                    <button style={{ fontFamily: "Exo2-Regular" }} className="contact_subhead_buttons_text p-2 border-1 border-[#2F2F2F] shadow-[0_4px_4px_rgba(0,135,255,0.25)] tracking-widest">
                    {t('contact_subhead_buttons_text6')}
                    </button>
                  </div>

                  <div className="flex space-x-3"  style={{marginLeft: '0px'}}>
                   
                    <button style={{ fontFamily: "Exo2-Regular" }} className="contact_subhead_buttons_text p-2 border-1 border-[#2F2F2F] shadow-[0_4px_4px_rgba(0,135,255,0.25)] tracking-widest">
                    {t('contact_subhead_buttons_text7')}
                    </button>
                    
                    <button style={{ fontFamily: "Exo2-Regular" }} className="contact_subhead_buttons_text p-2 border-1 border-[#2F2F2F] shadow-[0_4px_4px_rgba(0,135,255,0.25)] tracking-widest">
                    {t('contact_subhead_buttons_text8')}
                    </button>

                    <button style={{ fontFamily: "Exo2-Regular" }} className="contact_subhead_buttons_text p-2 border-1 border-[#2F2F2F] shadow-[0_4px_4px_rgba(0,135,255,0.25)] tracking-widest">
                    {t('contact_subhead_buttons_text9')}
                    </button>
                  </div>

                  {/* <button className="bg-zinc-200 w-3/4 px-3 py-2 border-1 border-black tracking-widest">
                    Digital Twin Services
                  </button>
                  <button className="bg-zinc-200 w-3/4 px-3 py-2 border-1 border-black tracking-widest">
                    Future Information
                  </button>
                  <button className="bg-zinc-200 w-3/4 px-3 py-2 border-1 border-black tracking-widest">
                    Digital Twin Services
                  </button> */}
                </div>
              </div>
              {t('contact_subhead_buttons_text9')==="Others" ?
                <div className="grid grid-cols-2 gap-4 place-content-end ">
               <div className="align-self-end">
               <img className="usersit_img"  alt="relaxed" src={relaxed} />
             </div>
             <div className="justify-end w-full">
               <img className="building_img" alt="building" src={building} />
             </div>
             </div>
              :
              <div className="grid grid-cols-2 gap-4 place-content-end ">
                <div className="align-self-end">
                <img className="usersit_img_de"  alt="relaxed" src={relaxed} />
              </div>
              <div className="justify-end w-full">
                <img className="building_img_de" alt="building" src={building} />
              </div>
               
              </div>
                  }
            </div>
          </div>
          <div className="rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0" style={{width: '500px', height:'763px'}}>
            <div className="flex justify-end text-[12px] space-x-4" style={{alignItems:'center', marginBottom:'24px', marginTop:'138px'}}>
              <p className="contact_form_meeting_font tracking-widest" style={{ fontFamily: "Exo2-Regular" }}>{t('contact_form_meeting')}</p>
              <div style={{display:'flex', alignItems:'center'}}>
                <input className="contact_form_checkbox" type="checkbox" />
                <label className="contact_form_lang_font">English</label>
              </div>
              <div style={{display:'flex', alignItems:'center'}}>
                <input className="contact_form_checkbox" type="checkbox" />
                <label className="contact_form_lang_font">German</label>
              </div>
            </div>
            <div className="relative text-left">
              <label for="full-name" className="contact_subhead" style={{ fontFamily: "NunitoSans-Regular" }}>
                Name*
              </label>
              <input
                type="text"
                id="full-name"
                name="full-name"
                placeholder="Your name"
                className="contact_form_longInput drop-shadow-sm bg-white rounded-[10px] border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative text-left">
              <label for="text" className="contact_subhead" style={{ fontFamily: "NunitoSans-Regular" }}>
              {t('contact_subhead_position')}
              </label>
              <input
                type="text"
                id="text"
                name="Job Title"
                placeholder="Role"
                className="contact_form_longInput drop-shadow-sm bg-white rounded-[10px] border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="flex space-x-4">
              <div className="relative text-left">
                <label for="email" className="contact_subhead" style={{ fontFamily: "NunitoSans-Regular" }}>
                  Email*
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="your@company.com"
                  className="contact_form_shortInput drop-shadow-sm bg-white rounded-[10px] border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative text-left">
                <label for="email" className="contact_subhead" style={{ fontFamily: "NunitoSans-Regular" }}>
                {t('contact_subhead_company')}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="The name of your company"
                  className="contact_form_shortInput drop-shadow-sm bg-white rounded-[10px] border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            {/* <div className=" flex space-x-4 text-left">
             
            </div>
            <div className="relative mb-4 ">
                <label for="email" className="contact_subhead" style={{ fontFamily: "NunitoSans-Regular" }}>
                  Phone
                </label><br />
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="+46"
                  className=" drop-shadow-sm bg-white rounded-[10px] border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1  leading-8 transition-colors duration-200 ease-in-out"
                />
              </div> */}
            <div className="relative text-left"  style={{ display: 'flex', flexDirection: 'column' }}>
              <label for="text" className="contact_subhead" style={{ fontFamily: "NunitoSans-Regular" }}>
              {t('contact_subhead_number')}
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="+49"
                className="contact_form_phoneInput drop-shadow-sm bg-white rounded-[10px] border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative text-left">
              <label for="email" className="contact_subhead" style={{ fontFamily: "NunitoSans-Regular" }}>
              {t('contact_subhead_note')}
              </label>
              {/* <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-white rounded-[10px] border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              /> */}
              <textarea
                className="contact_form_shortnote rop-shadow-md rounded-[10px] p-1 w-[-webkit-fill-available]"
                id="w3review"
                name="w3review"
                rows="4"
                cols="50"
                placeholder={t('contact_note_text')}
              />
            </div>
            <div className="flex my-2 space-x-4 text-left contact_form_Iagree_div" >
              <input
                type="checkbox"
                id="email"
                name="email"
                className="contact_form_checkbox bg-white drop-shadow-sm rounded-[2px] w-[26px] h-[26px]  border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3  transition-colors duration-200 ease-in-out"
              />
              <p className="text-[12px] contact_form_Iagree">
              {t('contact_note_iagree')}
              </p>
            </div>
            <div className=" flex space-x-4" style={{marginTop:'20px'}}>
              {/* <button className="w-1/3 text-black bg-slate-50	 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Go Back
              </button> */}
               <ReCAPTCHA
                sitekey="6LfMumghAAAAAHZ9tUZyvHqMxQlPGKawhAYLlqEt"
                onChange={handleContact}
              />
            </div>
            <div className=" flex space-x-4 justify-center">
              <button
                disabled={!verified}
                className="contact_form_submitButton"
              >
                {t('contact_submit_button')}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* tab view */}

      <div className="contact-mob text-gray-600 body-font bg-gray-300 bg-cover">
        <div style={{margin:'0px 40px'}} className="px-5 py-24 m-auto w-full flex flex-wrap items-start ">
          <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0 ">
            <h1 className="title-font text-center font-medium text-3xl text-gray-900">
              Let's accelerate the change <br /> together!
            </h1>
            <p className="leading-relaxed mt-4">
              Poke slow-carb mixtape knausgaard, typewriter street art gentrify
              hammock starladder roathse. Craies vegan tousled etsy austin.
            </p>
            <div className="flex space-x-6 py-4">
              <p>Meeting Language</p>
              <input className="mt-2 " type="radio" />
              <label>English</label>
              <input className="mt-2" type="radio" />
              <label>German</label>
            </div>
          </div>
          <div className="mt-6 bg-slate-50  w-full">
            <div className="lg:w-2/6 md:w-1/2 rounded-lg  pt-8 flex flex-col md:ml-auto w-full md:mt-0">
              <div className="p-5">
                <div className="relative mb-4">
                  <label
                    for="full-name"
                    className="contact_subhead" style={{ fontFamily: "NunitoSans-Regular" }}
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="full-name"
                    name="full-name"
                    className="w-full drop-shadow-sm bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
                <div className="relative mb-4">
                  <label for="email" className="leading-7 text-sm text-gray-600">
                    Job Title*
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full drop-shadow-sm bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
                <div className="flex space-x-4">
                  <div className="relative mb-4">
                    <label for="email" className="leading-7 text-sm text-gray-600">
                      Email*
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full drop-shadow-sm bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                  <div className="relative mb-4">
                    <label for="email" className="leading-7 text-sm text-gray-600">
                      Company(Optional)
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full drop-shadow-sm bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="flex space-x-4">
                  <div className="w-1/2 relative mb-4 space-x-4">
                    <input
                      type="radio"
                      id="email"
                      name="email"
                      className=" bg-white drop-shadow-sm rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                    <label for="email" className="leading-7 text-sm text-gray-600">
                      Digital twin service
                    </label>
                  </div>

                  <div className=" w-1/2 relative mb-4 space-x-4">
                    <input
                      type="radio"
                      id="email"
                      name="email"
                      className=" bg-white drop-shadow-sm rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                    <label for="email" className="leading-7 text-sm text-gray-600">
                      Future Information
                    </label>
                  </div>
                </div>
                <div className="flex mb-4">
                  <label for="email" className="leading-7 text-sm text-gray-600">
                    Short Note
                  </label>
                  <textarea
                    className="drop-shadow-md"
                    id="w3review"
                    name="w3review"
                    rows="4"
                    cols="50"
                  />
                </div>
                <div className="flex my-2 space-x-4">
                  <input
                    type="checkbox"
                    id="email"
                    name="email"
                    className="bg-white drop-shadow-sm rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3  transition-colors duration-200 ease-in-out"
                  />
                  <p className="text-xs text-gray-500 ">
                    Literally you probably haven't heard of them jean shorts.
                  </p>
                </div>
                <div className="my-4 space-y-3">
                  <div className="space-y-3">
                    <p className="font-medium">Interested in*</p>
                    <div className="space-x-4">
                      <button className="bg-zinc-200 px-2 py-2 border-1 border-black">
                        Future Information
                      </button>
                      <button className="bg-zinc-200 px-2 py-2 border-1 border-black">
                        Digital Twin Services
                      </button>
                    </div>
                  </div>
                  <p className="font-medium">Which group do you represent*</p>
                  <div className="space-x-4 space-y-4">
                    <div className="flex space-x-3">
                      <button className="bg-zinc-200 p-1 border-1 border-black ">
                        Building Ownwers
                      </button>
                      <button className="bg-zinc-200 p-1 border-1 border-black ">
                        Building Automations
                      </button>
                      <button className="bg-zinc-200 p-1 border-1 border-black ">
                        Others
                      </button>
                    </div>

                    <div className="flex space-x-3">
                      <button className="bg-zinc-200 p-1  border-1 border-black ">
                        Architects
                      </button>
                      <button className="bg-zinc-200 p-1  border-1 border-black ">
                        Building Designers
                      </button>
                      <button className="bg-zinc-200 p-1  border-1 border-black ">
                        Consultants
                      </button>
                    </div>

                    <div className="flex space-x-3">
                      <button className="bg-zinc-200 p-0.5  border-1 border-black ">
                        Asset Mangements
                      </button>
                      <button className="bg-zinc-200 p-1  border-1 border-black ">
                        Utility Provider
                      </button>
                      <button className="bg-zinc-200 p-1  border-1 border-black ">
                        Smart Home
                      </button>
                    </div>
                  </div>
                  <div className=" flex space-x-4 justify-center">
                    <button className=" w-1/3 text-white bg-zinc-300 border-0 my-3 py-2 px-8 focus:outline-none hover:bg-zinc-600 rounded text-lg">
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
