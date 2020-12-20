import React from "react";
import syllabus from "./pdf/ICT 116_BSCS_1st Sem, AY 2020-2021.pdf";
import "../components/styles/landingpage.css";

const LandingPage = () => {
  return (
    <div className="landingpage-body">
      <div className="side-container">
        <div className="leftside">
          <div className="title-div"></div>
          <div className="button-div">
            <button
              className="handlerButtons"
              type="button"
              id="moduleAssignmentsBtn"
              onClick={() => (window.location = "/moduleAssignments")}
            >
              Assignment / Modules
            </button>
            <button
              className="handlerButtons"
              type="button"
              id="syllabusBtn"
              onClick={() => window.open(syllabus)}
            >
              Syllabus
            </button>
          </div>
        </div>
        <div className="rightside">
          <div className="topside"></div>
          <div className="bottomside"></div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
