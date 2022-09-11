import React from "react";
import "./About.css";

function About() {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">About Me</h2>
      <span className="section__subtitle">My introduction</span>

      <div className="about__wrapper">
        <div className="about__container container grid">
          <div className="about__img-parent">
            <img src="./img/about3D.svg" alt="" className="about__img" />
          </div>

          <div className="about__data">
            <p className="about__description">
              Photoshop designer & editor, with good knowledge and bit of
              experience, working in real estate image editing, delivering high
              quality work
            </p>
            <div className="about__info">
              <div>
                <span className="about__info-title"> &lt;1 </span>
                <span className="about__info-name">
                  Year <br /> experience
                </span>
              </div>

              <div>
                <span className="about__info-title">100+</span>
                <span className="about__info-name">
                  Completed <br /> project
                </span>
              </div>

              <div>
                <span className="about__info-title">01+</span>
                <span className="about__info-name">
                  Companies <br /> worked
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
