import React from 'react'
import { useTranslation } from 'react-i18next';//translator

export default function LegalInformation() {
  const { t, i18n } = useTranslation();//translator


  return (
    <div className="row">
      <div className="row" style={{marginTop:'100px', marginLeft:'20px' ,background:"linear-gradient(89.82deg, #FFFFFF 0.23%, rgba(255, 255, 255, 0.555775) 45.36%, rgba(228, 233, 239, 0.5) 83.29%, #E4E9EF 97.33%)"}}>
      <div className="container">
        <div  className="mx-auto flex  md:flex-row flex-col ">
          <div  style={{textAlign:'left', marginTop:'72px', width:'100%', padding: '0px 20px'}}>
            <h1
               style={{ fontFamily: "Exo2-Bold" }}
               className="single_project_main_head "
            >
             {t('legal_main_head')}
            </h1>
           
            <div style={{width:'100%', display:'flex'}} >
              <div className="" style={{marginTop:'-10px'}}>
                  {/* <h2 style={{fontFamily:"Exo2-Regular"}} className="title-font font-bold text-[#0087FF] tracking-widest text-[30px] mb-3 uppercase">
                    LeafTech
                  </h2> */}
                  <p className="content_address" style={{ fontFamily: "NunitoSans-Regular", display:'flex', flexDirection:'column', alignItems:'flex-start', marginTop:'80px' }}>
                    <span>Leaftech GmbH </span>
                    <span>Am Krögel 2 </span>
                    <span> 10179 Berlin </span>
                    <span>Handelsregisternr.: HRB</span>
                    <span>193594 B</span>
                    <span>Geschäftsführung:</span>
                    <span>Michael Dittel, Sasan Zahirnia</span>
                  </p>
                    
                </div>

                <div className="" style={{marginTop:'-10px', margin:'0px 80px'}}>
                  {/* <h2 style={{fontFamily:"Exo2-Regular"}} className="title-font font-bold text-[#0087FF] tracking-widest text-[30px] mb-3 uppercase">
                    LeafTech
                  </h2> */}
                  <p className="content_address" style={{ fontFamily: "NunitoSans-Regular", display:'flex', flexDirection:'column', alignItems:'flex-start', marginTop:'80px' }}>
                    <span>contact@leaftech.eu</span>
                    <span>www.leaftech.eu</span>
                  </p>
                    
                </div>

                <div className="" style={{marginTop:'-10px'}}>
                  {/* <h2 style={{fontFamily:"Exo2-Regular"}} className="title-font font-bold text-[#0087FF] tracking-widest text-[30px] mb-3 uppercase">
                    LeafTech
                  </h2> */}
                  <p className="content_address" style={{ fontFamily: "NunitoSans-Regular", display:'flex', flexDirection:'column', alignItems:'flex-start', marginTop:'80px' }}>
                    <span>HRB 193594 B</span>
                    <span>Steuer-Nr.: 30/414/50358</span>
                    <span>Ust-ID: DE316292558</span>
                    <span>FinanzamtA KÖ IV Berlin</span>
                  </p>
                    
                </div>
            </div>
          </div>
          </div>
        </div>
      </div>

      <div className="row" style={{marginTop:'70px', marginBottom:'90px', textAlign:'left'}}>
      <div className="container"> 
      <div className="flex flex-col mb-10 lg:items-start items-center" style={{marginTop:'40px', width:'95% !important', padding: '0px 20px;' }}>
              {/* <div className="w-full h-12 inline-flex items-center justify-left "></div> */}
              <div className="flex-grow">

                <h2
                  style={{ fontFamily: "Exo2-Regular", marginTop:'56px'}}
                  className="results_benefits_subhead"
                >
                  {t('legal_subhead1')}
                </h2>
                <p
                  style={{ fontFamily: "NunitoSans-Regular", marginTop:'20px' }}
                  className="leading-relaxed text-[20px] font-[400] mb-5"
                >
                 {t('legal_subcontent11')}
                </p>


                <h2
                 style={{ fontFamily: "Exo2-Regular", marginTop:'56px'}}
                 className="results_benefits_subhead"
                >
                 {t('legal_subhead2')}
                </h2>
                <p
                  style={{ fontFamily: "NunitoSans-Regular",  marginTop:'20px' }}
                  className="leading-relaxed text-[20px] font-[400]"
                >
                 {t('legal_subcontent22')}
                </p>


                <h2
                 style={{ fontFamily: "Exo2-Regular", marginTop:'56px'}}
                 className="results_benefits_subhead"
                >
                 {t('legal_subhead3')}
                </h2>
                <p
                  style={{ fontFamily: "NunitoSans-Regular",  marginTop:'20px' }}
                  className="leading-relaxed text-[20px] font-[400]"
                >
                 {t('legal_subcontent33')}
                </p>


                <h2
                 style={{ fontFamily: "Exo2-Regular", marginTop:'56px'}}
                 className="results_benefits_subhead"
                >
                 {t('legal_subhead4')}
                </h2>
                <p
                  style={{ fontFamily: "NunitoSans-Regular",  marginTop:'20px' }}
                  className="leading-relaxed text-[20px] font-[400]"
                >
                 {t('legal_subcontent41')}
                </p>
                <p
                  style={{ fontFamily: "NunitoSans-Regular" }}
                  className="leading-relaxed text-[20px] font-[400]"
                >
                 {t('legal_subcontent42')}
                </p>


                <h2
                 style={{ fontFamily: "Exo2-Regular", marginTop:'56px'}}
                 className="results_benefits_subhead"
                >
                 {t('legal_subhead5')}
                </h2>
                <p
                  style={{ fontFamily: "NunitoSans-Regular",  marginTop:'20px' }}
                  className="leading-relaxed text-[20px] font-[400]"
                >
                 {t('legal_subcontent51')}
                </p>
                <p
                  style={{ fontFamily: "NunitoSans-Regular",  marginTop:'50px' }}
                  className="leading-relaxed text-[20px] font-[400]"
                >
                 {t('legal_subcontent52')}
                </p>
              </div>
            </div>
      </div>  
      </div>
    </div>
  )
}
