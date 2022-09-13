import React, { useEffect, useState } from "react";
import "./Conindex.css";
// import Countryflag from "./countryFlag";
import relaxed from "../../assest/Images/contact/contact_01.svg";
import building from "../../assest/Images/contact/contact_02.svg";
import tower from "../../assest/Images/Berlin_TVTower.svg";
import ReCAPTCHA from "react-google-recaptcha";
import { useTranslation } from 'react-i18next';//translator
import $ from "jquery";
import { Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Index() {
  const { t, i18n } = useTranslation();//translator
  // console.log(t, 'ttttt')

  const [verified, setverified] = useState(false);
  const [en, seten] = useState(true);
  const [de, setde] = useState(false);
  const [agree, setagree] = useState(false);

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

  const iAgree = () => { 
    // setagree(true);
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
  const [mobinterestedIN, setMobInterestedIN] = useState([]);
  const [mobrepresent, setMobRepresent] = useState([]);

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

    setMobInterestedIN([
      {name:t('contact_subhead_buttons_text11'), isActive:false},
      {name:t('contact_subhead_buttons_text12'), isActive:false},
    ]);

    setMobRepresent([
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

  const mobtoggleClassInt = (item) => {
    const indexVal = mobinterestedIN.findIndex(x=>x.name == item.name);
    mobinterestedIN.splice(indexVal,1,{...item, isActive: !item.isActive});
    setMobInterestedIN([...mobinterestedIN]);
  };
  

  const mobtoggleClassRep = (item) => {
    const indexVal = mobrepresent.findIndex(x=>x.name == item.name);
    mobrepresent.splice(indexVal,1,{...item, isActivetoo: !item.isActivetoo});
    setMobRepresent([...mobrepresent]);
  };

  // console.log(interestedIN,'interestedIN')
  // console.log(represent,'represent')

  
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState('');

  const [isShow, invokeModal] = React.useState(false)

  
  const initModal = () => {
    return invokeModal(!false)
  }

  const closeModal = () => {
    return invokeModal(!true)
  }


  const submitContactInfo = async () => {

    var name = $("#name").val();
    var job_title = $("#job_title").val();  
    var email =  $("#email").val();

    if($("#name").val() === '') {
      // $("#name").css('border', '1px solid #EA0069')
      $("#name").addClass('contact_form_longInput_error')
      $("#name").removeClass('contact_form_longInput')
      $("#name_error_text").css('display', 'block')
    } else {
      $("#name_error_text").css('display', 'none')
      $("#name").removeClass('contact_form_longInput_error')
      $("#name").addClass('contact_form_longInput')
    }

    if($("#job_title").val() === '') {
      // $("#job_title").css('border', '1px solid #EA0069')
      $("#job_title").addClass('contact_form_longInput_error')
      $("#job_title").removeClass('contact_form_longInput')
      $("#job_error_text").css('display', 'block')
    } else {
      $("#job_error_text").css('display', 'none')
      $("#job_title").removeClass('contact_form_longInput_error')
      $("#job_title").addClass('contact_form_longInput')
    }

    if($("#email").val() === '') {
      // $("#email").css('border', '1px solid #EA0069')
      $("#email").addClass('contact_form_shortInput_error')
      $("#email").removeClass('contact_form_shortInput')
      $("#email_error_text").css('display', 'block')
    } else {
      $("#email_error_text").css('display', 'none')
      $("#email").removeClass('contact_form_shortInput_error')
      $("#email").addClass('contact_form_shortInput')
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

    if(mainintrestarray.length === 0) {
      $("#intrested_error_text").css('display', 'block')
    } else if(interestedIN.length ){
      $("#intrested_error_text").css('display', 'none')
    }

    if(mainrepresentarray.length === 0) {
      $("#represent_error_text").css('display', 'block')
    } else if(represent.length ){
      $("#represent_error_text").css('display', 'none')
    }

    if(name && job_title && email && mainintrestarray.length !== 0 && mainrepresentarray.length !== 0) {
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
        alert('Message not sent')
        throw new Error(`Error! status: ${response.status}`);
      } else {
        // alert('success')
        invokeModal(!false)
        // $('#successModal').css('display', 'block')
         $("#name").val('');
         $("#job_title").val('');
         $("#company").val('');
         $("#email").val('');
         $("#phone_no").val('');
         $("#short_note").val('');
         mainintrestarray = [];
         mainrepresentarray = [];
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
         $('#name_error_text').css('display', 'none') 
         $('#job_error_text').css('display', 'none') 
         $('#email_error_text').css('display', 'none') 
         $('#intrested_error_text').css('display', 'none') 
         $('#represent_error_text').css('display', 'none')
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

  const mobSubmitContactInfo = async () => {

    var name = $("#mob_name").val();
    var job_title = $("#mob_job_title").val();  
    var email =  $("#mob_email").val();

    if($("#mob_name").val() === '') {
      // $("#mob_name").css('border', '1px solid #mob_EA0069')
      $("#mob_name").addClass('contact_form_longInput_error')
      $("#mob_name").removeClass('contact_form_longInput')
      $("#mob_name_error_text").css('display', 'block')
    } else {
      $("#mob_name_error_text").css('display', 'none')
      $("#mob_name").removeClass('contact_form_longInput_error')
      $("#mob_name").addClass('contact_form_longInput')
    }

    if($("#mob_job_title").val() === '') {
      // $("#mob_job_title").css('border', '1px solid #mob_EA0069')
      $("#mob_job_title").addClass('contact_form_longInput_error')
      $("#mob_job_title").removeClass('contact_form_longInput')
      $("#mob_job_error_text").css('display', 'block')
    } else {
      $("#mob_job_error_text").css('display', 'none')
      $("#mob_job_title").removeClass('contact_form_longInput_error')
      $("#mob_job_title").addClass('contact_form_longInput')
    }

    if($("#mob_email").val() === '') {
      // $("#mob_email").css('border', '1px solid #mob_EA0069')
      $("#mob_email").addClass('contact_form_shortInput_error')
      $("#mob_email").removeClass('contact_form_shortInput')
      $("#mob_email_error_text").css('display', 'block')
    } else {
      $("#mob_email_error_text").css('display', 'none')
      $("#mob_email").removeClass('contact_form_shortInput_error')
      $("#mob_email").addClass('contact_form_shortInput')
    }
    
    setIsLoading(true);

    // console.log(interestedIN.length, represent.length, 'length')
    // console.log(interestedIN.filter(word => word.isActive === true),'interestedIN')
    // console.log(represent.filter(word => word.isActivetoo === true),'represent')

    var intrestarraymob = mobinterestedIN.filter(word => word.isActive === true)
    var representarraymob = mobrepresent.filter(word => word.isActivetoo === true)

    // console.log(intrestarray.length, representarray.length, 'length')
    console.log(intrestarraymob,'intrestarray')
    console.log(representarraymob,'representarray')

    var mainintrestarraymob = []
    var mainrepresentarraymob = []
    for(var i=0; i < intrestarraymob.length; i++) {
      console.log(intrestarraymob,i,'intrestarraymob')
      mainintrestarraymob.push(intrestarraymob[i].name)    
    }

    for(var i=0; i < representarraymob.length; i++) {
      console.log(representarraymob,i,'mainrepresentarraymob')
      mainrepresentarraymob.push(representarraymob[i].name)    
    }

    // console.log(mainintrestarraymob.length, mainrepresentarraymob.length, 'length')
    // console.log(mainintrestarraymob,'mainintrestarraymob')
    // console.log(mainrepresentarraymob,'mainrepresentarraymob')

    if(mainintrestarraymob.length === 0) {
      $("#mob_intrested_error_text").css('display', 'block')
    } else if(interestedIN.length ){
      $("#mob_intrested_error_text").css('display', 'none')
    }

    if(mainrepresentarraymob.length === 0) {
      $("#mob_represent_error_text").css('display', 'block')
    } else if(represent.length ){
      $("#mob_represent_error_text").css('display', 'none')
    }

    if(name && job_title && email && mainintrestarraymob.length !== 0 && mainrepresentarraymob.length !== 0) {
    try {
      const response = await fetch('https://website_api.leaftech-products.com/create_contact/', {
        method: 'POST',
        body: JSON.stringify({
          name : $("#mob_name").val(),
          job_title : $("#mob_job_title").val(),
          company : $("#mob_company").val(),
          email : $("#mob_email").val(),
          phone_no : $("#mob_phone_no").val(),
          short_note : $("#mob_short_note").val(),
          // language : $("#language").val(),
          // mainintrestarraymob,'mainrepresentarraymob'
          list_of_interest : mainintrestarraymob,
          list_of_groups : mainrepresentarraymob,
          language : en ? "en" : "de",
        }),
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      });

      console.log('response: ', response);


      if (!response.ok) {
        alert('Message not sent')
        throw new Error(`Error! status: ${response.status}`);
      } else {
        // alert('success')
        invokeModal(!false)
        // $('#successModal').css('display', 'block')
         $("#mob_name").val('');
         $("#mob_job_title").val('');
         $("#mob_company").val('');
         $("#mob_email").val('');
         $("#mob_phone_no").val('');
         $("#mob_short_note").val('');
         mainintrestarraymob = [];
         mainrepresentarraymob = [];
         setMobInterestedIN([
          {name:t('contact_subhead_buttons_text11'), isActive:false},
          {name:t('contact_subhead_buttons_text12'), isActive:false},
        ]);
    
        setMobRepresent([
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
         $('#mob_name_error_text').css('display', 'none') 
         $('#mob_job_error_text').css('display', 'none') 
         $('#mob_email_error_text').css('display', 'none') 
         $('#mob_intrested_error_text').css('display', 'none') 
         $('#mob_represent_error_text').css('display', 'none')
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
    <div className="contact_page_top_container">
    <div className="container">
      <div className="row">
        <div className="row contact_desktop_view" style={{marginTop:'75px', height:'1153px', maxWidth: '104%', width: '103%'}}>
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
                    placeholder= {t('contact_name_text')}
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
                    placeholder= {t('contact_job_text')}
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
                      placeholder= {t('contact_email_text')}
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
                      placeholder= {t('contact_company_text')}
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
                    onChange={iAgree}
                    // checked={agree}
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
                  {/* <Button variant="success" onClick={initModal}>
                    Open Modal
                  </Button> */}
                </div>
              </div>
            </div>
            {/* <!-- Modal --> */}
          <Modal show={isShow}>
                  <Modal.Body>
                    <div className="modal_body">
                      <img className="tower" alt="building" src={tower} />
                      <div className="modal_content_2">
                      <h1 className="modal_main_head" style={{fontFamily:"Exo2-Bold"}}>{t('contact_thanks_text')}</h1>
                      <p className="modal_p" style={{fontFamily:"NunitoSans-Regular"}}>{t('contact_msgSent_text')}</p>
                      <Link style={{ all: "unset" }} to="/">
                      <button
                        className="contact_form_submitButton"
                        style={{fontFamily:"NunitoSans-Regular"}}
                        // onClick={submitContactInfo}
                      >
                          {t('contact_backtohome_text')}
                      </button>
                      </Link>
                      </div>
                      <span className="modalclosebtn" onClick={closeModal}>X</span>
                    </div>
                  </Modal.Body>
                </Modal>
        </div>

        <div className="row contact_mobile_view">
            <div className="contact__leaf__info" style={{width:'100%', textAlign:'left', marginTop:'45px', marginLeft: '0px'}}>
                <h1
                  style={{ fontFamily: "Exo2-Bold" }}
                  className="contact_head"
                >
                  {t('contact_head')}
                </h1>
                <p style={{ fontFamily: "NunitoSans-Regular" }} className="leading-relaxed  contact_content">
                {t('contact__content')}
                </p>
             </div>

             <div className="rounded-lg flex flex-col md:ml-auto w-full mt-10 md:mt-0 contact__leaf__form" style={{width: '100%'}}>
                <p className="contact_form_meeting_font tracking-widest" style={{ fontFamily: "Exo2-Regular" }}>{t('contact_form_meeting')}</p>
                <div className="flex text-[12px] space-x-4" style={{alignItems:'left', marginBottom:'24px', marginTop:'35px'}}>
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
                    id="mob_name"
                    name="name"
                    placeholder= {t('contact_name_text')}
                    className="contact_form_longInput "
                  />
                  <p id="mob_name_error_text" style={{display:'none', fontFamily: "NunitoSans-Regular"}}>Required</p>
                </div>
                <div className="relative text-left">
                  <label for="job_title" className="contact_subhead" style={{ fontFamily: "NunitoSans-Regular" }}>
                  {t('contact_subhead_position')}
                  </label>
                  <input
                    type="text"
                    id="mob_job_title"
                    name="Job Title"
                    placeholder= {t('contact_job_text')}
                    className="contact_form_longInput "
                  />
                  <p id="mob_job_error_text" style={{display:'none', fontFamily: "NunitoSans-Regular"}}>Required</p>
                </div>
                {/* <div className="flex space-x-4"> */}
                  <div className="relative text-left">
                    <label for="email" className="contact_subhead" style={{ fontFamily: "NunitoSans-Regular" }}>
                      Email*
                    </label>
                    <input
                      type="email"
                      id="mob_email"
                      name="email"
                      placeholder= {t('contact_email_text')}
                      className="contact_form_shortInput "
                    />
                  <p id="mob_email_error_text" style={{display:'none', fontFamily: "NunitoSans-Regular"}}>Please enter a valid email address</p>
                  </div>
                  <div className="relative text-left">
                    <label for="company" className="contact_subhead" style={{ fontFamily: "NunitoSans-Regular" }}>
                    {t('contact_subhead_company')}
                    </label>
                    <input
                      type="text"
                      id="mob_company"
                      name="company"
                      placeholder= {t('contact_company_text')}
                      className="contact_form_shortInput "
                    />
                  </div>
                {/* </div> */}
                <div className="relative text-left"  style={{ display: 'flex', flexDirection: 'column' }}>
                  <label for="phone_no" className="contact_subhead" style={{ fontFamily: "NunitoSans-Regular" }}>
                  {t('contact_subhead_number')}
                  </label>
                  <input
                    type="text"
                    id="mob_phone_no"
                    name="phone_no"
                    placeholder="+49"
                    className="contact_form_phoneInput "
                  />
                </div>
                <div className="relative text-left">
                  <label for="short_note" className="contact_subhead" style={{ fontFamily: "NunitoSans-Regular" }}>
                  {t('contact_subhead_note')}
                  </label>
                  <textarea
                    className="contact_form_shortnote"
                    id="short_note"
                    name="mob_short_note"
                    rows="2"
                    cols="50"
                    placeholder={t('contact_note_text')}
                  />
                </div>
                <div className="flex my-2 space-x-4 text-left contact_form_Iagree_div" >
                  <input
                    type="checkbox"
                    id="iagree"
                    name="iagree"
                    onChange={iAgree}
                    // checked={agree}
                    // onChange={handleSubmitbtn}
                    className="contact_form_checkbox "
                  />
                  <p className="text-[12px] contact_form_Iagree"  style={{fontFamily:"NunitoSans-Regular"}}>
                  {t('contact_note_iagree')}
                  </p>
                </div>

                <div className="my-5  text-left">
                  <div className="space-y-3">
                    <p className="contact_subhead" style={{ fontFamily: "NunitoSans-Regular" }}>{t('contact_subhead1')}</p>
                    <p id="mob_intrested_error_text" style={{display:'none', fontFamily: "NunitoSans-Regular"}}>Please select at least one title from the category.</p>
                  
                    <div className="flex space-x-3" style={{flexDirection:'row', alignItems:'center'}}>
                      <div className="flex space-x-3" style={{flexDirection:'column', width:'100%'}}>
                        {mobinterestedIN.map((item, index)=>{
                          return(
                            <button key={`${item.name}_${item.isActive}_${index}`} style={{ fontFamily: "Exo2-Regular", width:'100%', marginBottom:'8px', marginLeft:'0px' }}
                        className={item.isActive ? 'main': 'contact_subhead_buttons_text'} 
                        onClick={()=>mobtoggleClassInt(item)}  
                        >
                        {item.name}
                        </button>
                          )
                        })}

                      </div>
                      
                    <img className="building_img"  alt="relaxed" src={building} style={{width: '60% !important'}} />
                
                    </div>
                  </div>
                  <div className="space-y-3" style={{marginTop:'32px'}}>
                    <p className="contact_subhead" style={{ fontFamily: "NunitoSans-Regular" }}>{t('contact_subhead2')}</p>
                    <p id="mob_represent_error_text" style={{display:'none', fontFamily: "NunitoSans-Regular"}}>Please select at least one title from the category.</p>
                    <div className="" style={{width:'100%'}}>
                      <div className="flex" style={{display:'flex', flexWrap:'wrap', marginLeft:'-15px'}}>

                        {mobrepresent.map((item, index)=>{
                          return(
                            <button key={`${item.name}_${item.isActivetoo}_${index}`} style={{ fontFamily: "Exo2-Regular", marginLeft:'8px', marginTop:'8px' }}
                                className={item.isActivetoo ? 'main': 'contact_subhead_buttons_text'} 
                                onClick={()=>mobtoggleClassRep(item)}  
                                >
                                {item.name}
                            </button>
                          )
                        })}
                      </div>
                    </div>
                  </div>
                  {/* {t('contact_subhead_buttons_text9')==="Others" ?
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
                      } */}
                </div>
                {/* <div className="flex space-x-4 captcha" style={{marginTop:'20px'}}>
                  <ReCAPTCHA
                    sitekey="6LfMumghAAAAAHZ9tUZyvHqMxQlPGKawhAYLlqEt"
                    onChange={handleContact}
                  />
                </div> */}
                <div className=" flex  justify-left" style={{marginBottom:'60px'}}>
                  <img className="usersit_img"  alt="relaxed" src={relaxed} />
                  <button
                    disabled={false}
                    className="contact_form_submitButton"
                    // id="contact_form_submitButton"
                    style={{fontFamily:"NunitoSans-Regular"}}
                    onClick={mobSubmitContactInfo}
                  >
                    {t('contact_submit_button')}
                  </button>
                  {/* <Button variant="success" onClick={initModal}>
                    Open Modal
                  </Button> */}
                </div>
              </div>


        </div>

        {/* tab view */}

        {/* <div className="contact-mob text-gray-600 body-font bg-gray-300 bg-cover">
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
        </div> */}
      </div>
    </div>




    

    </div>

  );
}


