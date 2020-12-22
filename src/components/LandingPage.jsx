import React from "react";
import syllabus from "./pdf/ICT 116_BSCS_1st Sem, AY 2020-2021.pdf";
import "../components/styles/landingpage.css";
import module1 from "./pdf/ICT 116_Module_1-HCI.pdf";
import module2 from "./pdf/ICT-116-Module-2-HCI.pdf";
import module3 from "./pdf/ICT-116-Module-3-HCI.pdf";
import module4 from "./pdf/ICT 116-Module-4-HCI.pdf";
import module5 from "./pdf/UNDERSTANDING-and-CONCEPTUALIZING-INTERACTION.pdf";
import module6 from "./pdf/ICT 116_Design_Rules_1.pdf";
import module7 from "./pdf/ICT 116_Implementation Support .pdf";
import module11 from "./pdf/INTERFACES.pdf";
import module12 from "./pdf/SOCIAL-INTERACTION.pdf";
import assignment1 from "./words/ICT116_Assignment1_Girao.docx";
import assignment2 from "./words/compare.docx";
import "./styles/modulesAssignmentsStyles.css";
import "./styles/modulesAssignmentsStyles.scss";

const LandingPage = () => {
  return (
    <div className="body">
      <section className="landingpage-body" id="upper">
        <div className="side-container">
          <div className="leftside">
            <div className="title-div"></div>
            <div className="button-div">
              <div className="handler__buttons__div">
                <button
                  type="button"
                  className="handlerButtons"
                  onClick={() => (window.location = "#module__section")}
                >
                  Assignments / Modules
                </button>
              </div>
              <div className="handler__buttons__div">
                <button
                  type="button"
                  className="handlerButtons"
                  onClick={() => window.open(syllabus)}
                >
                  Syllabus
                </button>
              </div>
            </div>
          </div>
          <div className="rightside">
            <div className="topside"></div>
            <div className="bottomside"></div>
          </div>
        </div>
      </section>
      {/* ---------------------SECTION HERE-------------------------- */}
      <section className="body-div" id="module__section">
        {/* <Link className="back__btn__Link" to="/eportfolioapp">
        BACK
      </Link> */}
        <div
          className="back__btn__Link"
          onClick={() => (window.location = "#upper")}
        >
          Back
        </div>
        <ul className="deck">
          <li className="deck__item deck__item--module12">
            <div className="deck__label">12th Module</div>
            <div
              className="deck__module"
              title="Click to Open"
              onClick={() => window.open(module12)}
            >
              Social - Interaction
            </div>
            <div className="deck__assignment"></div>
            <div className="deck__download"></div>
          </li>
          <li className="deck__item deck__item--module11">
            <div className="deck__label">11th Module</div>
            <div
              className="deck__module"
              title="Click to Open"
              onClick={() => window.open(module11)}
            >
              Interfaces
            </div>
            <div className="deck__assignment"></div>
            <div className="deck__download"></div>
          </li>
          <li className="deck__item deck__item--module10">
            <div className="deck__label">10th Module</div>
            <div
              className="deck__module"
              title="Click to Open"
              onClick={() =>
                window.open(
                  "https://www.slideshare.net/alanjohndix/hci-3e-ch-10-universal-design?fbclid=IwAR19qzX6ziLaifTayQrg6O7llVnlrX63P5YVN0xfpgWL91NmYPl0ALhP_cE"
                )
              }
            >
              Universal Design
            </div>
            <div className="deck__assignment"></div>
            <div className="deck__download"></div>
          </li>
          <li className="deck__item deck__item--module9">
            <div className="deck__label">9th Module</div>
            <div
              className="deck__module"
              title="Click to Open"
              onClick={() =>
                window.open(
                  "https://www.slideshare.net/alanjohndix/hci-3e-ch-9-evaluation-techniques?fbclid=IwAR3j6o3fKOCDRuqWxm6FEoqdmf1kL3MubLRRNI9xCpmmYOVmJgTdTFWv270"
                )
              }
            >
              Evaluation Techniques
            </div>
            <div className="deck__assignment"></div>
            <div className="deck__download"></div>
          </li>
          <li className="deck__item deck__item--module8">
            <div className="deck__label">8th Module</div>
            <div
              className="deck__module"
              title="Click to Open"
              onClick={() =>
                window.open(
                  "https://www.slideshare.net/alanjohndix/hci-3e-ch-8-implementation-support?fbclid=IwAR1IJ4e5o9g5fkVqLvLOiQhTMGv07Eczpk2T9A4PllsS7ZDMszY4CBpHVUE"
                )
              }
            >
              Implementation Support
            </div>
            <div className="deck__assignment"></div>
          </li>
          <li className="deck__item deck__item--module7">
            <div className="deck__label">7th Module</div>
            <div
              className="deck__module"
              title="Click to Open"
              onClick={() => window.open(module7)}
            >
              Implementation Support
            </div>
            <div className="deck__assignment"></div>
            <div className="deck__download"></div>
          </li>
          <li className="deck__item deck__item--module6">
            <div className="deck__label">6th Module</div>
            <div
              className="deck__module"
              title="Click to Open"
              onClick={() => window.open(module6)}
            >
              Design Rules
            </div>
            <div className="deck__assignment"></div>
            <div className="deck__download"></div>
          </li>
          <li className="deck__item deck__item--module5">
            <div className="deck__label">5th Module</div>
            <div
              className="deck__module"
              title="Click to Open"
              onClick={() => window.open(module5)}
            >
              Interaction Design Basics
            </div>
            <div
              className="deck__assignment hasValue"
              title="Click to Open"
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/1qxADqmkzVNV0b-40dpVtgvHg53I9kQtg/view?usp=sharing"
                )
              }
            >
              Assignment : Compare
            </div>
            <div
              title="Click To Download"
              className="deck__download downloadHasValue"
              onClick={() => window.open(assignment2)}
            >
              Download Assignment File
            </div>
          </li>
          <li className="deck__item deck__item--module4">
            <div className="deck__label">4th Module</div>
            <div
              className="deck__module"
              title="Click to Open"
              onClick={() => window.open(module4)}
            >
              PARADIGMS
            </div>
            <div className="deck__assignment"></div>
            <div className="deck__download"></div>
          </li>
          <li className="deck__item deck__item--module3">
            <div className="deck__label">3rd Module</div>
            <div
              className="deck__module"
              title="Click to Open"
              onClick={() => window.open(module3)}
            >
              Human Computer Interaction Related Fields
            </div>
            <div className="deck__assignment"></div>
            <div className="deck__download"></div>
          </li>
          <li className="deck__item deck__item--module2">
            <div className="deck__label">2nd Module</div>
            <div
              className="deck__module"
              title="Click to Open"
              onClick={() => window.open(module2)}
            >
              Styles of HCI and Prototypes for Future HCI
            </div>
            <div
              className="deck__assignment hasValue"
              title="Click To Open"
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/1lPd7Fe_0QwHwQFlPahzbHwkqRhkasm_A/view?usp=sharing"
                )
              }
            >
              Assignment : 10 Prototypes for Future HCI
            </div>
            <div
              title="Click To Download"
              className="deck__download downloadHasValue"
              onClick={() => window.open(assignment1)}
            >
              Download Assignment File
            </div>
          </li>
          <li className="deck__item deck__item--module1">
            <div className="deck__label">1st Module</div>
            <div
              className="deck__module"
              title="Click to Open"
              onClick={() => window.open(module1)}
            >
              FOUNDATIONS OF HUMAN-COMPUTER INTERACTION
            </div>
            <div className="deck__assignment"></div>
            <div className="deck__download"></div>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default LandingPage;
