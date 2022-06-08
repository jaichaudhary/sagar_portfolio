import React, { useState } from "react";
import "./Skills.css";
import { UilBracketsCurly } from "@iconscout/react-unicons";
import { UilAngleDown } from "@iconscout/react-unicons";
import { UilServerNetwork } from "@iconscout/react-unicons";
import { UilSwatchbook } from "@iconscout/react-unicons";

function Skills() {
  const [frontend, setFrontend] = useState(true);
  const [backend, setBackend] = useState(false);
  const [design, setDesign] = useState(false);

  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My technical level</span>

      <div className="skills__wrapper">
        <div className="skills__container container grid">
          {/* <div> */}
          {/*=====================Skills 1======================*/}
          <div className="skills__content skills__open">
            <div
              onClick={() => {
                setFrontend(!frontend);
                setBackend(false);
                setDesign(false);
              }}
              className="skills__header"
            >
              <UilBracketsCurly size="2rem" className="skills__icon" />

              <div>
                <h1 className="skills__title">Editing tool</h1>
                <span className="skills__subtitle">Less than a year</span>
              </div>

              <div className={frontend ? "skills__arrow" : "skills__notArrow"}>
                <UilAngleDown size="2rem" />
              </div>
            </div>

            {frontend && (
              <div className="skills__list grid">
                <div className="skills__data">
                  <div className="skills__titles">
                    <h3 className="skills__name">Photoshop</h3>
                    <span className="skills__number">90%</span>
                  </div>
                  <div className="skills__bar">
                    <span className="skills__percentage skills__html"></span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
