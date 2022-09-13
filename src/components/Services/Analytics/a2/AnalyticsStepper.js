import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
// import analyticsSetup from "../assest/Images/project/trio/Mask group.png";
// import m1 from "../../../assest/Images/project/manheim/Mask_group.png";
// import m2 from "../../../assest/Images/project/manheim/Group_1078.png";
// import m3 from "../../../assest/Images/project/manheim/Vertical_Bar_chart.png";
// import m4 from "../../../assest/Images/project/manheim/Graph_Trio.png";
import solar from "../../../../assest/Images/services/Analytics/step1.png";
import sunshine from "../../../../assest/Images/services/Analytics/step2.jpg";
import shading from "../../../../assest/Images/services/Analytics/analytics_shading_analysis_02.gif";
import daylight from "../../../../assest/Images/services/Analytics/step4.svg";
import summer from "../../../../assest/Images/services/Analytics/analytics_SummerHeatProduction.svg";
import cooling from "../../../../assest/Images/services/Analytics/analytics_CoolingHeating.svg";
import assessment from "../../../../assest/Images/services/Analytics/analytics_photovoltaic.svg";
import weather from "../../../../assest/Images/services/Analytics/step8.jpg";
import build from "../../../../assest/Images/services/Analytics/wind_analysis_serivce_02.gif";
import buildger from "../../../../assest/Images/services/Analytics/wind_analysis_serivce_GERMAN_02.gif";

import solar2 from "../../../../assest/Images/services/Analytics/stepper_01_german.svg";
import sunshine2 from "../../../../assest/Images/services/Analytics/stepper_02_german.svg";
import shading2 from "../../../../assest/Images/services/Analytics/analytics_shading_analysis_02.gif";
import daylight2 from "../../../../assest/Images/services/Analytics/stepper_04_german.svg";
import summer2 from "../../../../assest/Images/services/Analytics/analytics_SummerHeatProduction.svg";
import cooling2 from "../../../../assest/Images/services/Analytics/stepper_06_german.svg";
import assessment2 from "../../../../assest/Images/services/Analytics/stepper_07_german.svg";
import weather2 from "../../../../assest/Images/services/Analytics/stepper_08_german.svg";
import build2 from "../../../../assest/Images/services/Analytics/stepper_09_german.svg";
import { useTranslation } from 'react-i18next';//translator



const steps = [
  {
    label: 'Solar radiation analysis',
    description: `Created a detailed 3D analytics of the target building along with the surroundings, using building plans, satellite images, lidar scans, and CityGML data. `,
    // img: `${m1}`
  },
  {
    label: 'Sunshine hour analysis',
    description:
      'Integrated the TRY weather data files and building-specific inputs like material properties, building systems, and user information to create a thermal analytics of the building. ',
      
    },
  {
    label: 'Shading analysis',
    description: `Using Leaftech's in-house algorithm, we calculated all the relevant factors of the energy balance equation to simulate real operating conditions. We assessed in detail the solar heat gains through the glass facades. These simulations were based on relevant DIN and VDI standards. `,
    // img: `${m2}`
  },
  {
    label: 'Summer heat protection',
    description:
      'Calculated the yearly cooling load for every room in the office space and the minimum HVAC capacity required, after considering the differential weather conditions throughout the year.',
      // img: `${m3}`
  },
  {
    label: 'Cooling & heating demand assessment ',
    description:
      'Identified optimization potential to minimise the operational and investment cost while maintaining the comfort level inside the building (e.g. impact of different shading scenarios on the cooling load). ',
      // img: `${m4}`
  },
  {
    label: 'Photovoltaic assessment ',
    description:
      'Identified optimization potential to minimise the operational and investment cost while maintaining the comfort level inside the building (e.g. impact of different shading scenarios on the cooling load). ',
      // img: `${m4}`
  },
  {
    label: 'Building wind analysis',
    description:
      'Identified optimization potential to minimise the operational and investment cost while maintaining the comfort level inside the building (e.g. impact of different shading scenarios on the cooling load). ',
      // img: `${m4}`
  },
  {
    label: 'Weather sensor placement analysis ',
    description:
      'Identified optimization potential to minimise the operational and investment cost while maintaining the comfort level inside the building (e.g. impact of different shading scenarios on the cooling load). ',
      // img: `${m4}`
  },
  {
    label: 'Daylight analysis',
    description:
      'Identified optimization potential to minimise the operational and investment cost while maintaining the comfort level inside the building (e.g. impact of different shading scenarios on the cooling load). ',
      // img: `${m4}`
  },
];

export default function VerticalLinearStepper() {
  const { t, i18n } = useTranslation();//translator

  return (
  <div className="row service  service_stepper_container" >
    <div className="allsteper">
      <div className="stepLabel">
          <div className="step completed" style={{marginLeft: "20px"}}>
          
      <div className="nav step flex-column nav-pills" id="tab" role="tablist" aria-orientation="vertical">
          <a className="nav-link active" id="home-tab" onClick={() => window.scrollTo(0, 650)} data-toggle="pill" style={{fontFamily: "NunitoSans-Regular", marginTop: '-10px', fontSize:'24px'}} href="#home" role="tab" aria-controls="home" aria-selected="true">
            <div className="circle"></div>
            {t('analytics_service_stephead1')}
            <div className="line"></div>
            </a>
          <a className="nav-link" id="profile-tab" onClick={() => window.scrollTo(0, 650)} data-toggle="pill" style={{fontFamily: "NunitoSans-Regular", marginTop: '25px', fontSize:'24px'}} href="#profile" role="tab" aria-controls="profile" aria-selected="false">
            <div className="circle"></div>
            {t('analytics_service_stephead2')}
            <div className="line"></div>
            </a>
          <a className="nav-link" id="messages-tab" onClick={() => window.scrollTo(0, 650)} data-toggle="pill" style={{fontFamily: "NunitoSans-Regular", marginTop: '25px', fontSize:'24px'}} href="#messages" role="tab" aria-controls="messages" aria-selected="false">
            <div className="circle"></div>
            {t('analytics_service_stephead3')}
            <div className="line"></div>
            </a>
          <a className="nav-link" id="settings-tab" onClick={() => window.scrollTo(0, 650)} data-toggle="pill" style={{fontFamily: "NunitoSans-Regular", marginTop: '25px', fontSize:'24px'}} href="#settings" role="tab" aria-controls="settings" aria-selected="false">
            <div className="circle"></div>
            {t('analytics_service_stephead4')}
            <div className="line"></div>
            </a>
          <a className="nav-link" id="office-tab" onClick={() => window.scrollTo(0, 650)} data-toggle="pill" style={{fontFamily: "NunitoSans-Regular", marginTop: '25px', fontSize:'24px'}} href="#office" role="tab" aria-controls="office" aria-selected="false">
            <div className="circle"></div>
            {t('analytics_service_stephead5')}
            <div className="line"></div>
            </a>
          <a className="nav-link" id="cooling-tab" onClick={() => window.scrollTo(0, 650)} data-toggle="pill" style={{fontFamily: "NunitoSans-Regular", marginTop: '25px', fontSize:'24px'}} href="#cooling" role="tab" aria-controls="cooling" aria-selected="false">
            <div className="circle"></div>
            {t('analytics_service_stephead6')}
            <div className="line"></div>
            </a>
          <a className="nav-link" id="assessment-tab" onClick={() => window.scrollTo(0, 650)} data-toggle="pill" style={{fontFamily: "NunitoSans-Regular", marginTop: '25px', fontSize:'24px'}} href="#assessment" role="tab" aria-controls="assessment" aria-selected="false">
            <div className="circle"></div>
            {t('analytics_service_stephead7')}
            <div className="line"></div>
            </a>
          <a className="nav-link" id="analysis-tab" onClick={() => window.scrollTo(0, 650)} data-toggle="pill" style={{fontFamily: "NunitoSans-Regular", marginTop: '25px', fontSize:'24px'}} href="#analysis" role="tab" aria-controls="analysis" aria-selected="false">
            <div className="circle"></div>
            {t('analytics_service_stephead8')}
            <div className="line"></div>
            </a>
          <a className="nav-link" id="placement-tab" onClick={() => window.scrollTo(0, 650)} data-toggle="pill" style={{fontFamily: "NunitoSans-Regular", marginTop: '25px', fontSize:'24px'}} href="#placement" role="tab" aria-controls="placement" aria-selected="false">
          <div style={{display:'flex', alignItems: 'center'}}>
            <div className="circle"></div>
            {t('analytics_service_stephead9')}
            </div>
          </a>
      </div>
    </div>
    </div>

    {t('model_service_contact') === "Contact us" ?

      <div className="tab-content" id="tabContent" style={{width:'70%'}}>
        <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
          <div className="subcontent">
            <h1 className="stepper_desc_head" style={{ fontFamily: "NunitoSans-Regular" }}><b>{t('analytics_service_stephead1')}</b></h1>
            <p className="stepper_desc_p" style={{ fontWeight: '400', fontFamily: "NunitoSans-Regular"}}>
            {t('analytics_service_stepdesc1')}
            </p>
            <img className="stepperService_desc_img" src={solar} alt="solar" />
          </div>
        </div>
        <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
          <div className="subcontent">
            <h1 className="stepper_desc_head" style={{ fontFamily: "NunitoSans-Regular" }}><b>{t('analytics_service_stephead2')}</b></h1>
            <p className="stepper_desc_p" style={{ fontWeight: '400', fontFamily: "NunitoSans-Regular"}}>
            {t('analytics_service_stepdesc2')}
            </p>
            <img className="stepperService_desc_img" src={sunshine} alt="sunshine" />
          </div>
        </div>
        <div className="tab-pane fade" id="messages" role="tabpanel" aria-labelledby="messages-tab">
          <div className="subcontent">
            <h1 className="stepper_desc_head" style={{ fontFamily: "NunitoSans-Regular" }}><b>{t('analytics_service_stephead3')}</b></h1>
            <p className="stepper_desc_p" style={{ fontWeight: '400', fontFamily: "NunitoSans-Regular"}}>
            {t('analytics_service_stepdesc3')}
            </p>
            <img className="stepperService_desc_img" src={shading} alt="shading" />
          </div>
        </div>
        <div className="tab-pane fade" id="settings" role="tabpanel" aria-labelledby="settings-tab">
          <div className="subcontent">
            <h1 className="stepper_desc_head" style={{ fontFamily: "NunitoSans-Regular" }}><b>{t('analytics_service_stephead4')}</b></h1>
            <p className="stepper_desc_p" style={{ fontWeight: '400', fontFamily: "NunitoSans-Regular"}}>
            {t('analytics_service_stepdesc4')}
            </p>
            <img className="stepperService_desc_img" src={daylight} alt="daylight" />
          </div>
        </div>
        <div className="tab-pane fade" id="office" role="tabpanel" aria-labelledby="office-tab">
          <div className="subcontent">
            <h1 className="stepper_desc_head" style={{ fontFamily: "NunitoSans-Regular" }}><b>{t('analytics_service_stephead5')}</b></h1>
            <p className="stepper_desc_p" style={{ fontWeight: '400', fontFamily: "NunitoSans-Regular"}}>
            {t('analytics_service_stepdesc5')}
            </p>
            <img className="stepperService_desc_img" src={summer} alt="summer" />
          </div>
        </div>
        <div className="tab-pane fade" id="cooling" role="tabpanel" aria-labelledby="cooling-tab">
          <div className="subcontent">
            <h1 className="stepper_desc_head" style={{ fontFamily: "NunitoSans-Regular" }}><b>{t('analytics_service_stephead6')}</b></h1>
            <p className="stepper_desc_p" style={{ fontWeight: '400', fontFamily: "NunitoSans-Regular"}}>
            {t('analytics_service_stepdesc6')}
            </p>
            <img className="stepperService_desc_img" src={cooling} alt="cooling" />
          </div>
        </div>
        <div className="tab-pane fade" id="assessment" role="tabpanel" aria-labelledby="assessment-tab">
          <div className="subcontent">
            <h1 className="stepper_desc_head" style={{ fontFamily: "NunitoSans-Regular" }}><b>{t('analytics_service_stephead7')}</b></h1>
            <p className="stepper_desc_p" style={{ fontWeight: '400', fontFamily: "NunitoSans-Regular"}}>
            {t('analytics_service_stepdesc7')}
            </p>
            <img className="stepperService_desc_img" src={assessment} alt="assessment" />
          </div>
        </div>
        <div className="tab-pane fade" id="analysis" role="tabpanel" aria-labelledby="analysis-tab">
          <div className="subcontent">
            <h1 className="stepper_desc_head" style={{ fontFamily: "NunitoSans-Regular" }}><b>{t('analytics_service_stephead8')}</b></h1>
            <p className="stepper_desc_p" style={{ fontWeight: '400', fontFamily: "NunitoSans-Regular"}}>
            {t('analytics_service_stepdesc8')}
            </p>
            <img className="stepperService_desc_img" src={build} alt="build" />
          </div>
        </div>
        <div className="tab-pane fade" id="placement" role="tabpanel" aria-labelledby="placement-tab">
          <div className="subcontent">
            <h1 className="stepper_desc_head" style={{ fontFamily: "NunitoSans-Regular" }}><b>{t('analytics_service_stephead9')}</b></h1>
            <p className="stepper_desc_p" style={{ fontWeight: '400', fontFamily: "NunitoSans-Regular"}}>
            {t('analytics_service_stepdesc9')}
            </p>
            
            <img className="stepperService_desc_img" src={weather} alt="weather" />
          </div>
        </div>
      </div>


      :
      
      
      <div className="tab-content" id="tabContent" style={{width:'70%'}}>
      <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
        <div className="subcontent">
          <h1 className="stepper_desc_head" style={{ fontFamily: "NunitoSans-Regular" }}><b>{t('analytics_service_stephead1')}</b></h1>
          <p className="stepper_desc_p_de" style={{ fontWeight: '400', fontFamily: "NunitoSans-Regular"}}>
          {t('analytics_service_stepdesc1')}
          </p>
          <img className="stepperService_desc_img" src={solar2} alt="solar" />
        </div>
      </div>
      <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
          <div className="subcontent">
          <h1 className="stepper_desc_head" style={{ fontFamily: "NunitoSans-Regular" }}><b>{t('analytics_service_stephead2')}</b></h1>
          <p className="stepper_desc_p_de" style={{ fontWeight: '400', fontFamily: "NunitoSans-Regular"}}>
          {t('analytics_service_stepdesc2')}
          </p>
          <img className="stepperService_desc_img" src={sunshine2} alt="sunshine" />
        </div>
      </div>
      <div className="tab-pane fade" id="messages" role="tabpanel" aria-labelledby="messages-tab">
          <div className="subcontent">
          <h1 className="stepper_desc_head" style={{ fontFamily: "NunitoSans-Regular" }}><b>{t('analytics_service_stephead3')}</b></h1>
          <p className="stepper_desc_p_de" style={{ fontWeight: '400', fontFamily: "NunitoSans-Regular"}}>
          {t('analytics_service_stepdesc3')}
          </p>
          <img className="stepperService_desc_img" src={shading} alt="shading" />
        </div>
      </div>
      <div className="tab-pane fade" id="settings" role="tabpanel" aria-labelledby="settings-tab">
          <div className="subcontent">
          <h1 className="stepper_desc_head" style={{ fontFamily: "NunitoSans-Regular" }}><b>{t('analytics_service_stephead4')}</b></h1>
          <p className="stepper_desc_p_de" style={{ fontWeight: '400', fontFamily: "NunitoSans-Regular"}}>
          {t('analytics_service_stepdesc4')}
          </p>
          
          <img className="stepperService_desc_img" src={daylight2} alt="daylight" />
        </div>
      </div>
      <div className="tab-pane fade" id="office" role="tabpanel" aria-labelledby="office-tab">
          <div className="subcontent">
          <h1 className="stepper_desc_head" style={{ fontFamily: "NunitoSans-Regular" }}><b>{t('analytics_service_stephead5')}</b></h1>
          <p className="stepper_desc_p_de" style={{ fontWeight: '400', fontFamily: "NunitoSans-Regular"}}>
          {t('analytics_service_stepdesc5')}
          </p>
          <img className="stepperService_desc_img" src={summer} alt="summer" />
        </div>
      </div>
      <div className="tab-pane fade" id="cooling" role="tabpanel" aria-labelledby="cooling-tab">
          <div className="subcontent">
          <h1 className="stepper_desc_head" style={{ fontFamily: "NunitoSans-Regular" }}><b>{t('analytics_service_stephead6')}</b></h1>
          <p className="stepper_desc_p_de" style={{ fontWeight: '400', fontFamily: "NunitoSans-Regular"}}>
          {t('analytics_service_stepdesc6')}
          </p>
          <img className="stepperService_desc_img" src={cooling2} alt="cooling" />
        </div>
      </div>
      <div className="tab-pane fade" id="assessment" role="tabpanel" aria-labelledby="assessment-tab">
          <div className="subcontent">
          <h1 className="stepper_desc_head" style={{ fontFamily: "NunitoSans-Regular" }}><b>{t('analytics_service_stephead7')}</b></h1>
          <p className="stepper_desc_p_de" style={{ fontWeight: '400', fontFamily: "NunitoSans-Regular"}}>
          {t('analytics_service_stepdesc7')}
          </p>
          <img className="stepperService_desc_img" src={assessment2} alt="assessment" />
        </div>
      </div>
      <div className="tab-pane fade" id="analysis" role="tabpanel" aria-labelledby="analysis-tab">
          <div className="subcontent">
          <h1 className="stepper_desc_head" style={{ fontFamily: "NunitoSans-Regular" }}><b>{t('analytics_service_stephead8')}</b></h1>
          <p className="stepper_desc_p_de" style={{ fontWeight: '400', fontFamily: "NunitoSans-Regular"}}>
          {t('analytics_service_stepdesc8')}
          </p>
          <img className="stepperService_desc_img" src={buildger} alt="build" />
        </div>
      </div>
      <div className="tab-pane fade" id="placement" role="tabpanel" aria-labelledby="placement-tab">
          <div className="subcontent">
          <h1 className="stepper_desc_head" style={{ fontFamily: "NunitoSans-Regular" }}><b>{t('analytics_service_stephead9')}</b></h1>
          <p className="stepper_desc_p_de" style={{ fontWeight: '400', fontFamily: "NunitoSans-Regular"}}>
          {t('analytics_service_stepdesc9')}
          </p>
          
          <img className="stepperService_desc_img" src={build2} alt="weather" />
        </div>
      </div>
    </div>
      }
    </div>

    {t('model_service_contact') === "Contact us" ?

    <div className="accordian_container">
    <div class="accordion" id="myAccordion">
        <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
                <button type="button" class="accordion-button collapsed" data-bs-toggle="collapse" style={{fontFamily: "NunitoSans-Regular"}} data-bs-target="#collapseOne"><span style={{paddingRight:'19px'}}>{t('analytics_service_stephead1')}</span></button>									
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse " data-bs-parent="#myAccordion">
                <div class="card-body">
                    <img className="stepperService_desc_img" src={solar} alt="solar" />
                    <p style={{fontFamily: "NunitoSans-Regular"}} >{t('analytics_service_stepdesc1')}</p>
                </div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header" id="headingTwo">
                <button type="button" class="accordion-button collapsed" data-bs-toggle="collapse" style={{fontFamily: "NunitoSans-Regular"}} data-bs-target="#collapseTwo"><span style={{paddingRight:'19px'}}>{t('analytics_service_stephead2')}</span></button>
            </h2>
            <div id="collapseTwo" class="accordion-collapse collapse " data-bs-parent="#myAccordion">
                <div class="card-body">
                     <img className="stepperService_desc_img" src={sunshine} alt="sunshine" />
                    <p style={{fontFamily: "NunitoSans-Regular"}} >{t('analytics_service_stepdesc2')}</p>
                </div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header" id="headingThree">
                <button type="button" class="accordion-button collapsed" data-bs-toggle="collapse" style={{fontFamily: "NunitoSans-Regular"}} data-bs-target="#collapseThree"><span style={{paddingRight:'19px'}}>{t('analytics_service_stephead3')}</span></button>                     
            </h2>
            <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#myAccordion">
                <div class="card-body">
                    <img className="stepperService_desc_img" src={shading} alt="shading" />
                    <p style={{fontFamily: "NunitoSans-Regular"}} >{t('analytics_service_stepdesc3')}</p>
                </div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header" id="headingFour">
                <button type="button" class="accordion-button collapsed" data-bs-toggle="collapse" style={{fontFamily: "NunitoSans-Regular"}} data-bs-target="#collapseFour"><span style={{paddingRight:'19px'}}>{t('analytics_service_stephead4')}</span></button>									
            </h2>
            <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#myAccordion">
                <div class="card-body">
                    <img className="stepperService_desc_img" src={daylight} alt="daylight" />
                    <p style={{fontFamily: "NunitoSans-Regular"}} >{t('analytics_service_stepdesc4')}</p>
                </div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header" id="headingFive">
                <button type="button" class="accordion-button collapsed" data-bs-toggle="collapse" style={{fontFamily: "NunitoSans-Regular"}} data-bs-target="#collapseFive"><span style={{paddingRight:'19px'}}>{t('analytics_service_stephead5')}</span></button>
            </h2>
            <div id="collapseFive" class="accordion-collapse collapse" data-bs-parent="#myAccordion">
                <div class="card-body">
                    <img className="stepperService_desc_img" src={summer} alt="summer" />
                    <p style={{fontFamily: "NunitoSans-Regular"}} >{t('analytics_service_stepdesc5')}</p>
                </div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header" id="headingSix">
                <button type="button" class="accordion-button collapsed" data-bs-toggle="collapse" style={{fontFamily: "NunitoSans-Regular"}} data-bs-target="#collapseSix"><span style={{paddingRight:'19px'}}>{t('analytics_service_stephead6')}</span></button>                     
            </h2>
            <div id="collapseSix" class="accordion-collapse collapse" data-bs-parent="#myAccordion">
                <div class="card-body">
                    <img className="stepperService_desc_img" src={cooling} alt="cooling" />
                    <p style={{fontFamily: "NunitoSans-Regular"}} >{t('analytics_service_stepdesc6')}</p>
                </div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header" id="headingSeven">
                <button type="button" class="accordion-button collapsed" data-bs-toggle="collapse" style={{fontFamily: "NunitoSans-Regular"}} data-bs-target="#collapseSeven"><span style={{paddingRight:'19px'}}>{t('analytics_service_stephead7')}</span></button>									
            </h2>
            <div id="collapseSeven" class="accordion-collapse collapse" data-bs-parent="#myAccordion">
                <div class="card-body">
                    <img className="stepperService_desc_img" src={assessment} alt="assessment" />
                    <p style={{fontFamily: "NunitoSans-Regular"}} >{t('analytics_service_stepdesc7')}</p>
                </div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header" id="headingEight">
                <button type="button" class="accordion-button collapsed" data-bs-toggle="collapse" style={{fontFamily: "NunitoSans-Regular"}} data-bs-target="#collapseEight"><span style={{paddingRight:'19px'}}>{t('analytics_service_stephead8')}</span></button>
            </h2>
            <div id="collapseEight" class="accordion-collapse collapse" data-bs-parent="#myAccordion">
                <div class="card-body">
                    <img className="stepperService_desc_img" src={build} alt="build" />
                    <p style={{fontFamily: "NunitoSans-Regular"}} >{t('analytics_service_stepdesc8')}</p>
                </div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header" id="headingNine">
                <button type="button" class="accordion-button collapsed" data-bs-toggle="collapse" style={{fontFamily: "NunitoSans-Regular"}} data-bs-target="#collapseNine"><span style={{paddingRight:'19px'}}>{t('analytics_service_stephead9')}</span></button>                     
            </h2>
            <div id="collapseNine" class="accordion-collapse collapse" data-bs-parent="#myAccordion">
                <div class="card-body">
                  <img className="stepperService_desc_img" src={weather} alt="weather" />
                   <p style={{fontFamily: "NunitoSans-Regular"}} >{t('analytics_service_stepdesc9')}</p>
                </div>
            </div>
        </div>
    </div>
   </div>

   :
   
   <div className="accordian_container">
   <div class="accordion" id="myAccordion">
       <div class="accordion-item">
           <h2 class="accordion-header" id="headingOne">
               <button type="button" class="accordion-button collapsed" data-bs-toggle="collapse" style={{fontFamily: "NunitoSans-Regular"}} data-bs-target="#collapseOne"><span style={{paddingRight:'19px'}}>{t('analytics_service_stephead1')}</span></button>									
           </h2>
           <div id="collapseOne" class="accordion-collapse collapse " data-bs-parent="#myAccordion">
               <div class="card-body">
                   <img className="stepperService_desc_img" src={solar2} alt="solar2" />
                   <p style={{fontFamily: "NunitoSans-Regular"}} >{t('analytics_service_stepdesc1')}</p>
               </div>
           </div>
       </div>
       <div class="accordion-item">
           <h2 class="accordion-header" id="headingTwo">
               <button type="button" class="accordion-button collapsed" data-bs-toggle="collapse" style={{fontFamily: "NunitoSans-Regular"}} data-bs-target="#collapseTwo"><span style={{paddingRight:'19px'}}>{t('analytics_service_stephead2')}</span></button>
           </h2>
           <div id="collapseTwo" class="accordion-collapse collapse " data-bs-parent="#myAccordion">
               <div class="card-body">
                    <img className="stepperService_desc_img" src={sunshine2} alt="sunshine2" />
                   <p style={{fontFamily: "NunitoSans-Regular"}} >{t('analytics_service_stepdesc2')}</p>
               </div>
           </div>
       </div>
       <div class="accordion-item">
           <h2 class="accordion-header" id="headingThree">
               <button type="button" class="accordion-button collapsed" data-bs-toggle="collapse" style={{fontFamily: "NunitoSans-Regular"}} data-bs-target="#collapseThree"><span style={{paddingRight:'19px'}}>{t('analytics_service_stephead3')}</span></button>                     
           </h2>
           <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#myAccordion">
               <div class="card-body">
                   <img className="stepperService_desc_img" src={shading} alt="shading" />
                   <p style={{fontFamily: "NunitoSans-Regular"}} >{t('analytics_service_stepdesc3')}</p>
               </div>
           </div>
       </div>
       <div class="accordion-item">
           <h2 class="accordion-header" id="headingFour">
               <button type="button" class="accordion-button collapsed" data-bs-toggle="collapse" style={{fontFamily: "NunitoSans-Regular"}} data-bs-target="#collapseFour"><span style={{paddingRight:'19px'}}>{t('analytics_service_stephead4')}</span></button>									
           </h2>
           <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#myAccordion">
               <div class="card-body">
                   <img className="stepperService_desc_img" src={daylight2} alt="daylight2" />
                   <p style={{fontFamily: "NunitoSans-Regular"}} >{t('analytics_service_stepdesc4')}</p>
               </div>
           </div>
       </div>
       <div class="accordion-item">
           <h2 class="accordion-header" id="headingFive">
               <button type="button" class="accordion-button collapsed" data-bs-toggle="collapse" style={{fontFamily: "NunitoSans-Regular"}} data-bs-target="#collapseFive"><span style={{paddingRight:'19px'}}>{t('analytics_service_stephead5')}</span></button>
           </h2>
           <div id="collapseFive" class="accordion-collapse collapse" data-bs-parent="#myAccordion">
               <div class="card-body">
                   <img className="stepperService_desc_img" src={summer} alt="summer" />
                   <p style={{fontFamily: "NunitoSans-Regular"}} >{t('analytics_service_stepdesc5')}</p>
               </div>
           </div>
       </div>
       <div class="accordion-item">
           <h2 class="accordion-header" id="headingSix">
               <button type="button" class="accordion-button collapsed" data-bs-toggle="collapse" style={{fontFamily: "NunitoSans-Regular"}} data-bs-target="#collapseSix"><span style={{paddingRight:'19px'}}>{t('analytics_service_stephead6')}</span></button>                     
           </h2>
           <div id="collapseSix" class="accordion-collapse collapse" data-bs-parent="#myAccordion">
               <div class="card-body">
                   <img className="stepperService_desc_img" src={cooling2} alt="cooling2" />
                   <p style={{fontFamily: "NunitoSans-Regular"}} >{t('analytics_service_stepdesc6')}</p>
               </div>
           </div>
       </div>
       <div class="accordion-item">
           <h2 class="accordion-header" id="headingSeven">
               <button type="button" class="accordion-button collapsed" data-bs-toggle="collapse" style={{fontFamily: "NunitoSans-Regular"}} data-bs-target="#collapseSeven"><span style={{paddingRight:'19px'}}>{t('analytics_service_stephead7')}</span></button>									
           </h2>
           <div id="collapseSeven" class="accordion-collapse collapse" data-bs-parent="#myAccordion">
               <div class="card-body">
                   <img className="stepperService_desc_img" src={assessment2} alt="assessment2" />
                   <p style={{fontFamily: "NunitoSans-Regular"}} >{t('analytics_service_stepdesc7')}</p>
               </div>
           </div>
       </div>
       <div class="accordion-item">
           <h2 class="accordion-header" id="headingEight">
               <button type="button" class="accordion-button collapsed" data-bs-toggle="collapse" style={{fontFamily: "NunitoSans-Regular"}} data-bs-target="#collapseEight"><span style={{paddingRight:'19px'}}>{t('analytics_service_stephead8')}</span></button>
           </h2>
           <div id="collapseEight" class="accordion-collapse collapse" data-bs-parent="#myAccordion">
               <div class="card-body">
                   <img className="stepperService_desc_img" src={buildger} alt="buildger" />
                   <p style={{fontFamily: "NunitoSans-Regular"}} >{t('analytics_service_stepdesc8')}</p>
               </div>
           </div>
       </div>
       <div class="accordion-item">
           <h2 class="accordion-header" id="headingNine">
               <button type="button" class="accordion-button collapsed" data-bs-toggle="collapse" style={{fontFamily: "NunitoSans-Regular"}} data-bs-target="#collapseNine"><span style={{paddingRight:'19px'}}>{t('analytics_service_stephead9')}</span></button>                     
           </h2>
           <div id="collapseNine" class="accordion-collapse collapse" data-bs-parent="#myAccordion">
               <div class="card-body">
                 <img className="stepperService_desc_img" src={build2} alt="weather" />
                  <p style={{fontFamily: "NunitoSans-Regular"}} >{t('analytics_service_stepdesc9')}</p>
               </div>
           </div>
       </div>
   </div>
  </div>
   
  }
  </div>
  
   
    
  );
}
