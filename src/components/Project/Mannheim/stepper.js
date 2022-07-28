import * as React from "react";
// import modelSetup from "../assest/Images/project/trio/Mask group.png";
import m1 from "../../../assest/Images/project/manheim/Mask_group.png";
import m2 from "../../../assest/Images/project/manheim/Group_1078.png";
import m3 from "../../../assest/Images/project/manheim/Vertical_Bar_chart.png";
import m4 from "../../../assest/Images/project/manheim/Graph_Trio.png";
import { useTranslation } from 'react-i18next';//translator

const steps = [
  {
    label: "Digital twin setup",
    description: `Created a detailed 3D model of the target building along with the surroundings, using building plans, satellite images, lidar scans, and CityGML data. `,
    img: `${m1}`,
  },
  {
    label: "Building & weather data integration",
    description:
      "Integrated the TRY weather data files and building-specific inputs like material properties, building systems, and user information to create a thermal model of the building. ",
  },
  {
    label: "Energy balance calculation",
    description: `Using Leaftech's in-house algorithm, we calculated all the relevant factors of the energy balance equation to simulate real operating conditions. We assessed in detail the solar heat gains through the glass facades. These simulations were based on relevant DIN and VDI standards. `,
    img: `${m2}`,
  },
  {
    label: "Cooling load assessment",
    description:
      "Calculated the yearly cooling load for every room in the office space and the minimum HVAC capacity required, after considering the differential weather conditions throughout the year.",
    img: `${m3}`,
  },
  {
    label: "Optimization recommendations",
    description:
      "Identified optimization potential to minimise the operational and investment cost while maintaining the comfort level inside the building (e.g. impact of different shading scenarios on the cooling load). ",
    img: `${m4}`,
  },
];

export default function VerticalLinearStepper() {
  const { t, i18n } = useTranslation();//translator

  // const [activeStep, setActiveStep] = React.useState(0);

  // const handleNext = () => {
  //   setActiveStep((prevActiveStep) => prevActiveStep + 1);
  // };

  // const handleBack = () => {
  //   setActiveStep((prevActiveStep) => prevActiveStep - 1);
  // };

  // const handleReset = () => {
  //   setActiveStep(0);
  // };

  return (
    <div className="row" style={{ textAlign: "left", marginTop:'120px' }}>
      <h2
        style={{ fontFamily: "Exo2-Bold" }}
        className="single_project_desc_head"
      >
        {t('mann_project_oursolution')}
      </h2>
      <p
        style={{
          fontFamily: "NunitoSans-Regular",
          margintop: "24px",
          marginBottom: "40px",
        }}
        className="single_project_desc_p"
      >
        {t('mann_project_oursolution_desc')}
      </p>
      <div className="allsteper">
        <div className="stepLabel">
          {/* <div className="step completed">
      <div className="v-stepper">
        <div className="circle"></div>
        <div className="line"></div>
      </div>
      <div className="v-stepper">
        <div className="circle"></div>
        <div className="line"></div>
      </div>
      <div className="v-stepper">
        <div className="circle"></div>
        <div className="line"></div>
      </div>
      <div className="v-stepper">
        <div className="circle"></div>
        <div className="line"></div>
      </div>
      <div className="v-stepper">
        <div className="circle"></div>
      </div>
       </div> */}
          <div className="step completed">
            <div
              className="nav step flex-column nav-pills"
              id="tab"
              role="tablist"
              aria-orientation="vertical"
            >
              <a
                className="nav-link active"
                id="home-tab"
                onClick={() => window.scrollTo(0, 1500)}
                data-toggle="pill"
                style={{ marginTop: "-10px", fontSize: "24px", fontFamily: "NunitoSans-Regular" }}
                href="#home"
                role="tab"
                aria-controls="home"
                aria-selected="true"
              >
                <div className="circle" style={{ marginLeft: "0px" }}></div>
                {t('mann_project_stephead1')}
                <div className="line" style={{ marginLeft: "8px" }}></div>
              </a>
              <a
                className="nav-link"
                id="profile-tab"
                onClick={() => window.scrollTo(0, 1500)}
                data-toggle="pill"
                style={{ marginTop: "48px", fontSize: "24px", fontFamily: "NunitoSans-Regular" }}
                href="#profile"
                role="tab"
                aria-controls="profile"
                aria-selected="false"
              >
                <div className="circle"></div>
                {t('mann_project_stephead2')}
                <div className="line"></div>
              </a>
              <a
                className="nav-link"
                id="messages-tab"
                onClick={() => window.scrollTo(0, 1500)}
                data-toggle="pill"
                style={{ marginTop: "48px", fontSize: "24px", fontFamily: "NunitoSans-Regular" }}
                href="#messages"
                role="tab"
                aria-controls="messages"
                aria-selected="false"
              >
                <div className="circle"></div>
                {t('mann_project_stephead3')}
                <div className="line"></div>
              </a>
              <a
                className="nav-link"
                id="settings-tab"
                onClick={() => window.scrollTo(0, 1500)}
                data-toggle="pill"
                style={{ marginTop: "48px", fontSize: "24px", fontFamily: "NunitoSans-Regular" }}
                href="#settings"
                role="tab"
                aria-controls="settings"
                aria-selected="false"
              >
                <div className="circle"></div>
                {t('mann_project_stephead4')}
                <div className="line"></div>
              </a>
              <a
                className="nav-link"
                id="office-tab"
                onClick={() => window.scrollTo(0, 1500)}
                data-toggle="pill"
                style={{ marginTop: "48px", fontSize: "24px", fontFamily: "NunitoSans-Regular" }}
                href="#office"
                role="tab"
                aria-controls="office"
                aria-selected="false"
              >
                <div className="circle"></div>
                {t('mann_project_stephead5')}
                {/* <div className="line"></div> */}
              </a>
            </div>
          </div>
        </div>

        <div className="tab-content" id="tabContent">
          <div
            className="tab-pane fade show active"
            id="home"
            role="tabpanel"
            aria-labelledby="home-tab"
          >
            <div className="subcontent">
              <h1
                className="stepper_desc_head"
                style={{ fontFamily: "NunitoSans-Regular" }}
              >
                <b>{t('mann_project_stephead1')}</b>
              </h1>
              <p className="stepper_desc_p" style={{ fontWeight: "400",fontFamily: "NunitoSans-Regular" }}>
              {t('mann_project_stepdesc1')}
              </p>
              <img className="stepper_desc_img" src={m1} alt="home" />
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="profile"
            role="tabpanel"
            aria-labelledby="profile-tab"
          >
            <div className="subcontent">
              <h1
                className="stepper_desc_head"
                style={{ fontFamily: "NunitoSans-Regular" }}
              >
                <b>{t('mann_project_stephead2')}</b>
              </h1>
              <p className="stepper_desc_p" style={{ fontWeight: "400",fontFamily: "NunitoSans-Regular" }}>
              {t('mann_project_stepdesc2')}
              </p>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="messages"
            role="tabpanel"
            aria-labelledby="messages-tab"
          >
            <div className="subcontent">
              <h1
                className="stepper_desc_head"
                style={{ fontFamily: "NunitoSans-Regular" }}
              >
                <b>{t('mann_project_stephead3')}</b>
              </h1>
              <p className="stepper_desc_p" style={{ fontWeight: "400",fontFamily: "NunitoSans-Regular" }}>
              {t('mann_project_stepdesc3')}
              </p>
              <img className="stepper_desc_img" src={m2} alt="home" />
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="settings"
            role="tabpanel"
            aria-labelledby="settings-tab"
          >
            <div className="subcontent">
              <h1
                className="stepper_desc_head"
                style={{ fontFamily: "NunitoSans-Regular" }}
              >
                <b>{t('mann_project_stephead4')}</b>
              </h1>
              <p className="stepper_desc_p" style={{ fontWeight: "400",fontFamily: "NunitoSans-Regular" }}>
              {t('mann_project_stepdesc4')}
              </p>
              <img className="stepper_desc_img" src={m3} alt="home" />
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="office"
            role="tabpanel"
            aria-labelledby="office-tab"
          >
            <div className="subcontent">
              <h1
                className="stepper_desc_head"
                style={{ fontFamily: "NunitoSans-Regular" }}
              >
                <b>{t('mann_project_stephead5')}</b>
              </h1>
              <p className="stepper_desc_p" style={{ fontWeight: "400",fontFamily: "NunitoSans-Regular" }}>
              {t('mann_project_stepdesc6')}
              </p>
              <img className="stepper_desc_img" src={m4} alt="home" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
