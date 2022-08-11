import React, { useEffect, useState } from "react";
import "./Conindex.css";
// import Countryflag from "./countryFlag";
import relaxed from "../../assest/Images/contact/contact_01.svg";
import building from "../../assest/Images/contact/contact_02.svg";
import ReCAPTCHA from "react-google-recaptcha";
import { useTranslation } from 'react-i18next';//translator
import $ from "jquery";
import { Modal, Button } from "react-bootstrap";

export default function Index() {
  const { t, i18n } = useTranslation();//translator
  // console.log(t, 'ttttt')

  const [verified, setverified] = useState(false);
  const [en, seten] = useState(true);
  const [de, setde] = useState(false);

  function handleContact(value) {
    console.log("Captcha value:", value);
    setverified(true);
  }

  const changeLangEn = () => { 
    seten(true);
    setde(false);
  }; 

  const changeLangDe = () => { 
    seten(false);
    setde(true);
  }; 

  $('#contact_form_submitButton').prop('disabled', true);

  function handleSubmitbtn(value) {
    let isChecked = $('#iagree').is(':checked');
    console.log(isChecked); // true (if checked at the time);

    // if(isChecked == true) {
    //   $('#contact_form_submitButton').prop('disabled', false);
    //   $('#contact_form_submitButton').removeClass('disabled_contact_form_submitButton');
    //   $('#contact_form_submitButton').addClass('contact_form_submitButton');
    // } else {
    //   $('#contact_form_submitButton').prop('disabled', true);
    //   $('#contact_form_submitButton').addClass('disabled_contact_form_submitButton');
    //   $('#contact_form_submitButton').removeClass('contact_form_submitButton');
    // }
  }
  
  
 
  const [interestedIN, setInterestedIN] = useState([]);
  const [represent, setRepresent] = useState([]);

  useEffect(()=>{
    setInterestedIN([
      {name:t('contact_subhead_buttons_text11'), isActive:false},
      {name:t('contact_subhead_buttons_text12'), isActive:false},
    ]);

    setRepresent([
      {name:t('contact_subhead_buttons_text1'), isActivetoo:false},
      {name:t('contact_subhead_buttons_text2'), isActivetoo:false},
      {name:t('contact_subhead_buttons_text3'), isActivetoo:false},
      {name:t('contact_subhead_buttons_text4'), isActivetoo:false},
      {name:t('contact_subhead_buttons_text5'), isActivetoo:false},
      {name:t('contact_subhead_buttons_text6'), isActivetoo:false},
      {name:t('contact_subhead_buttons_text7'), isActivetoo:false},
      {name:t('contact_subhead_buttons_text8'), isActivetoo:false},
      {name:t('contact_subhead_buttons_text9'), isActivetoo:false},
    ]);

  },[t]);
 
  

  const toggleClassInt = (item) => {
    const indexVal = interestedIN.findIndex(x=>x.name == item.name);
    interestedIN.splice(indexVal,1,{...item, isActive: !item.isActive});
    setInterestedIN([...interestedIN]);
  };
  

  const toggleClassRep = (item) => {
    const indexVal = represent.findIndex(x=>x.name == item.name);
    represent.splice(indexVal,1,{...item, isActivetoo: !item.isActivetoo});
    setRepresent([...represent]);
  };

  // console.log(interestedIN,'interestedIN')
  // console.log(represent,'represent')

  
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState('');

  const [show, setShow] = useState(false);


  $('document').ready(function() {
    $('#opennn').click(function() {
      $('#successModal').modal('show');
    });
  });
  const openModal= () => {
    $('#successModal').modal('show');
    setShow(true);
    console.log('hii')
  }


  const submitContactInfo = async () => {

    var name = $("#name").val();
    var job_title = $("#job_title").val();  
    var email =  $("#email").val();

    if($("#name").val() === '') {
      $("#name").css('border', '1px solid #EA0069')
      $("#name_error_text").css('display', 'block')
    } else {
      $("#name_error_text").css('display', 'none')
    }

    if($("#job_title").val() === '') {
      $("#job_title").css('border', '1px solid #EA0069')
      $("#job_error_text").css('display', 'block')
    } else {
      $("#job_error_text").css('display', 'none')
    }

    if($("#email").val() === '') {
      $("#email").css('border', '1px solid #EA0069')
      $("#email_error_text").css('display', 'block')
    } else {
      $("#email_error_text").css('display', 'none')
    }
    
    setIsLoading(true);

    // console.log(interestedIN.length, represent.length, 'length')
    // console.log(interestedIN.filter(word => word.isActive === true),'interestedIN')
    // console.log(represent.filter(word => word.isActivetoo === true),'represent')

    var intrestarray = interestedIN.filter(word => word.isActive === true)
    var representarray = represent.filter(word => word.isActivetoo === true)

    // console.log(intrestarray.length, representarray.length, 'length')
    // console.log(intrestarray,'intrestarray')
    // console.log(representarray,'representarray')

    var mainintrestarray = []
    var mainrepresentarray = []
    for(var i=0; i < intrestarray.length; i++) {
      console.log(intrestarray,i,'intrestarray')
      mainintrestarray.push(intrestarray[i].name)    
    }

    for(var i=0; i < representarray.length; i++) {
      console.log(representarray,i,'representarray')
      mainrepresentarray.push(representarray[i].name)    
    }

    // console.log(mainintrestarray.length, mainrepresentarray.length, 'length')
    // console.log(mainintrestarray,'mainintrestarray')
    // console.log(mainrepresentarray,'mainrepresentarray')

    if(mainintrestarray.length== 0) {
      $("#intrested_error_text").css('display', 'block')
    } else if(interestedIN.length ){
      $("#intrested_error_text").css('display', 'none')
    }

    if(mainrepresentarray.length == 0) {
      $("#represent_error_text").css('display', 'block')
    } else if(represent.length ){
      $("#represent_error_text").css('display', 'none')
    }

    if(name && job_title && email) {
    try {
      const response = await fetch('https://website_api.leaftech-products.com/create_contact/', {
        method: 'POST',
        body: JSON.stringify({
          name : $("#name").val(),
          job_title : $("#job_title").val(),
          company : $("#company").val(),
          email : $("#email").val(),
          phone_no : $("#phone_no").val(),
          short_note : $("#short_note").val(),
          // language : $("#language").val(),
          // mainintrestarray,'mainrepresentarray'
          list_of_interest : mainintrestarray,
          list_of_groups : mainrepresentarray,
          language : en ? "en" : "de",
        }),
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      });

      console.log('response: ', response);


      if (!response.ok) {
        alert('fail')
        throw new Error(`Error! status: ${response.status}`);
      } else {
        alert('success')
        // $('#successModal').css('display', 'block')
        
      }

      const result = await response.json();

      console.log('result is: ', JSON.stringify(result, null, 4));

      setData(result);
    } catch (err) {
      setErr(err.message);
    } finally {
      setIsLoading(false);
    }
    } else {
      alert('Please fill all mandatory values')
    }
  };

  // console.log(data);

      // console.log(
    //   'name-', name,
    //   'job_title-', job_title,
    //   'company-', company,
    //   'email-', email,
    //   'phone_no-', phone_no,
    //   'short_note-', short_note,
    //   'language-', language,
    // )

 


  return (
    <div  style={{background:"linear-gradient(89.82deg, #FFFFFF 0.23%, rgba(255, 255, 255, 0.555775) 45.36%, rgba(228, 233, 239, 0.5) 83.29%, #E4E9EF 97.33%)"}}>
    <div className="container">
      <div className="row">
      <div className="row" style={{marginTop:'75px', height:'1153px', maxWidth: '104%', width: '103%'}}>
          <div  className="mx-auto flex  md:flex-row flex-col contact__leaf-wrapper">
            <div className="contact__leaf__info" style={{width:'666px', height:'506px', textAlign:'left', marginTop:'45px', marginLeft: '15px'}}>
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
                  <p id="intrested_error_text" style={{display:'none', fontFamily: "NunitoSans-Regular"}}>Please select at least one title from the category.</p>
                
                  <div className="flex space-x-3">
                  {/* <button style={{ fontFamily: "Exo2-Regular" }}
                  className={isActive1 ? 'main': 'contact_subhead_buttons_text'} 
                  onClick={toggleClass1}  
                  >
                  {t('contact_subhead_buttons_text11')}
                    </button>
                    <button style={{ fontFamily: "Exo2-Regular" }}  className={isActivetoo ? 'main': 'contact_subhead_buttons_text'} 
                  onClick={toggleClass2}  >
                    {t('contact_subhead_buttons_text12')}
                    </button> */}

                    {interestedIN.map((item, index)=>{
                      return(
                        <button key={`${item.name}_${item.isActive}_${index}`} style={{ fontFamily: "Exo2-Regular" }}
                    className={item.isActive ? 'main': 'contact_subhead_buttons_text'} 
                    onClick={()=>toggleClassInt(item)}  
                    >
                    {item.name}
                    </button>
                      )
                    })}

                  </div>
                </div>
                <div className="space-y-3" style={{marginTop:'32px'}}>
                  <p className="contact_subhead" style={{ fontFamily: "NunitoSans-Regular" }}>{t('contact_subhead2')}</p>
                  <p id="represent_error_text" style={{display:'none', fontFamily: "NunitoSans-Regular"}}>Please select at least one title from the category.</p>
                  <div className="space-x-4 space-y-4" style={{width:'705px'}}>
                    <div className="flex" style={{display:'flex', flexWrap:'wrap', marginLeft:'-15px'}}>
                      {/* <button style={{ fontFamily: "Exo2-Regular" }} className={isActive11 ? 'main': 'contact_subhead_buttons_text'} 
                  onClick={toggleClass11}>
                      {t('contact_subhead_buttons_text1')}
                      </button>
                      <button style={{ fontFamily: "Exo2-Regular" }}  className={isActive3 ? 'main': 'contact_subhead_buttons_text'} 
                  onClick={toggleClass3}  >
                      {t('contact_subhead_buttons_text2')}
                      </button>
                      <button style={{ fontFamily: "Exo2-Regular" }}  className={isActive4 ? 'main': 'contact_subhead_buttons_text'} 
                  onClick={toggleClass4}  >
                      {t('contact_subhead_buttons_text3')}
                      </button>
                    </div>

                    <div className="flex space-x-3" style={{marginLeft: '0px'}}>
                      <button style={{ fontFamily: "Exo2-Regular" }}  className={isActive5 ? 'main': 'contact_subhead_buttons_text'} 
                  onClick={toggleClass5}  >
                      {t('contact_subhead_buttons_text4')}
                      </button>
                      <button style={{ fontFamily: "Exo2-Regular" }}  className={isActive6 ? 'main': 'contact_subhead_buttons_text'} 
                  onClick={toggleClass6}  >
                      {t('contact_subhead_buttons_text5')}
                      </button>
                      <button style={{ fontFamily: "Exo2-Regular", zIndex:'10' }} className={isActive7 ? 'main': 'contact_subhead_buttons_text'} 
                  onClick={toggleClass7} >
                      {t('contact_subhead_buttons_text6')}
                      </button>
                    </div>

                    <div className="flex space-x-3"  style={{marginLeft: '0px'}}>
                    
                      <button style={{ fontFamily: "Exo2-Regular" }} className={isActive8 ? 'main': 'contact_subhead_buttons_text'} 
                  onClick={toggleClass8}>
                      {t('contact_subhead_buttons_text7')}
                      </button>
                      
                      <button style={{ fontFamily: "Exo2-Regular" }} className={isActive9 ? 'main': 'contact_subhead_buttons_text'} 
                  onClick={toggleClass9}>
                      {t('contact_subhead_buttons_text8')}
                      </button>

                      <button style={{ fontFamily: "Exo2-Regular" }} className={isActive10 ? 'main': 'contact_subhead_buttons_text'} 
                  onClick={toggleClass10}>
                      {t('contact_subhead_buttons_text9')}
                      </button> */}

                      {represent.map((item, index)=>{
                        return(
                          <button key={`${item.name}_${item.isActivetoo}_${index}`} style={{ fontFamily: "Exo2-Regular", marginLeft:'16px', marginTop:'16px' }}
                              className={item.isActivetoo ? 'main': 'contact_subhead_buttons_text'} 
                              onClick={()=>toggleClassRep(item)}  
                              >
                              {item.name}
                          </button>
                        )
                      })}


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
            <div className="rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 contact__leaf__form" style={{width: '520px', height:'763px'}}>
              <div className="flex justify-end text-[12px] space-x-4" style={{alignItems:'center', marginBottom:'24px', marginTop:'35px'}}>
                <p className="contact_form_meeting_font tracking-widest" style={{ fontFamily: "Exo2-Regular" }}>{t('contact_form_meeting')}</p>
                <div style={{display:'flex', alignItems:'center'}}>
                  <input className="contact_form_checkbox" checked={en} onChange={changeLangEn} id="language" value="en"  type="checkbox" />
                  <label className="contact_form_lang_font">English</label>
                </div>
                <div style={{display:'flex', alignItems:'center'}}>
                  <input className="contact_form_checkbox" checked={de} onChange={changeLangDe} id="language" value="de" type="checkbox" />
                  <label className="contact_form_lang_font">German</label>
                </div>
              </div>
              <div className="relative text-left">
                <label for="name" className="contact_subhead" style={{ fontFamily: "NunitoSans-Regular" }}>
                  Name*
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your name"
                  className="contact_form_longInput drop-shadow-sm bg-white rounded-[10px] border  text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
                <p id="name_error_text" style={{display:'none', fontFamily: "NunitoSans-Regular"}}>Required</p>
              </div>
              <div className="relative text-left">
                <label for="job_title" className="contact_subhead" style={{ fontFamily: "NunitoSans-Regular" }}>
                {t('contact_subhead_position')}
                </label>
                <input
                  type="text"
                  id="job_title"
                  name="Job Title"
                  placeholder="Role"
                  className="contact_form_longInput drop-shadow-sm bg-white rounded-[10px] border  text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
                <p id="job_error_text" style={{display:'none', fontFamily: "NunitoSans-Regular"}}>Required</p>
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
                    className="contact_form_shortInput drop-shadow-sm bg-white rounded-[10px] border  text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                <p id="email_error_text" style={{display:'none', fontFamily: "NunitoSans-Regular"}}>Please enter a valid email address</p>
                </div>
                <div className="relative text-left">
                  <label for="company" className="contact_subhead" style={{ fontFamily: "NunitoSans-Regular" }}>
                  {t('contact_subhead_company')}
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    placeholder="The name of your company"
                    className="contact_form_shortInput drop-shadow-sm bg-white rounded-[10px] border  text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="relative text-left"  style={{ display: 'flex', flexDirection: 'column' }}>
                <label for="phone_no" className="contact_subhead" style={{ fontFamily: "NunitoSans-Regular" }}>
                {t('contact_subhead_number')}
                </label>
                <input
                  type="text"
                  id="phone_no"
                  name="phone_no"
                  placeholder="+49"
                  className="contact_form_phoneInput drop-shadow-sm bg-white rounded-[10px] border  text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative text-left">
                <label for="short_note" className="contact_subhead" style={{ fontFamily: "NunitoSans-Regular" }}>
                {t('contact_subhead_note')}
                </label>
                <textarea
                  className="contact_form_shortnote"
                  id="short_note"
                  name="short_note"
                  rows="4"
                  cols="50"
                  placeholder={t('contact_note_text')}
                />
              </div>
              <div className="flex my-2 space-x-4 text-left contact_form_Iagree_div" >
                <input
                  type="checkbox"
                  id="iagree"
                  name="iagree"
                  // onChange={handleSubmitbtn}
                  className="contact_form_checkbox bg-white drop-shadow-sm rounded-[2px] w-[26px] h-[26px]   text-gray-700 py-1 px-3  transition-colors duration-200 ease-in-out"
                />
                <p className="text-[12px] contact_form_Iagree"  style={{fontFamily:"NunitoSans-Regular"}}>
                {t('contact_note_iagree')}
                </p>
              </div>
              {/* <div className="flex space-x-4 captcha" style={{marginTop:'20px'}}>
                <ReCAPTCHA
                  sitekey="6LfMumghAAAAAHZ9tUZyvHqMxQlPGKawhAYLlqEt"
                  onChange={handleContact}
                />
              </div> */}
              <div className=" flex space-x-4 justify-center">
                <button
                  disabled={false}
                  className="contact_form_submitButton"
                  // id="contact_form_submitButton"
                  style={{fontFamily:"NunitoSans-Regular"}}
                  onClick={submitContactInfo}
                >
                  {t('contact_submit_button')}
                </button>
                <button
                  style={{fontFamily:"NunitoSans-Regular", marginTop:'20px'}}
                  onClick={openModal}
                  id="opennn"
                >
                  {t('contact_submit_button')}
                </button>
              </div>
            </div>
          </div>
          {/* <!-- Modal --> */}
          <div class="modal fade" show={show} id="successModal" tabindex="-1" role="dialog" aria-labelledby="successModalTitle" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                ...
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
              </div>
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
                      className="w-full drop-shadow-sm bg-white rounded border  text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
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
                      className="w-full drop-shadow-sm bg-white rounded border  text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
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
                        className="w-full drop-shadow-sm bg-white rounded border  text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
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
                        className="w-full drop-shadow-sm bg-white rounded border  text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>
                  </div>
                  <div className="flex space-x-4">
                    <div className="w-1/2 relative mb-4 space-x-4">
                      <input
                        type="radio"
                        id="email"
                        name="email"
                        className=" bg-white drop-shadow-sm rounded border  text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
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
                        className=" bg-white drop-shadow-sm rounded border  text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
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
                      className="bg-white drop-shadow-sm rounded border  text-gray-700 py-1 px-3  transition-colors duration-200 ease-in-out"
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
    </div>




    

    </div>

  );
}


