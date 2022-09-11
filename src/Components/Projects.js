import React, { useState } from "react";
import "./Projects.css";
import { obj } from "./imagesData";

export default function Projects() {
  const [data, setData] = useState(obj);

  const updateData = (id) => {
    const tempArr = obj.filter((item) => {
      if (item.id === id) {
        return item;
      } else {
        return;
      }
    });
    setData(tempArr);
  };
  return (
    <section className="projects section" id="portfolio">
      <h2 className="section__title">Some Things I’ve Built</h2>
      <span className="section__subtitle">What i offer</span>
      <div className="projects_btn">
        <button
          onClick={() => {
            updateData("Day to dusk");
          }}
          className="btn"
        >
          Day to Dusk
        </button>
        <button
          onClick={() => {
            updateData("Drone");
          }}
          className="btn"
        >
          Drone
        </button>
        <button
          onClick={() => {
            updateData("Flash");
          }}
          className="btn"
        >
          Flash
        </button>
        <button
          onClick={() => {
            updateData("HDR");
          }}
          className="btn"
        >
          HDR
        </button>
        <button
          onClick={() => {
            updateData("Twilight");
          }}
          className="btn"
        >
          Twilight
        </button>
        <button
          onClick={() => {
            updateData("Virtual Staging");
          }}
          className="btn"
        >
          Virtual Staging
        </button>
      </div>
      <div className="projects__div">
        {data.map((item, index) => {
          let link = `./img/${item.image}.jpeg`;
          return (
            <div className="projects__content">
              <div className="projects__overlay">
                <img
                  className="projects__overlayImg"
                  src={link}
                  alt="Images"
                  style={{
                    borderTopRightRadius: 10,
                    borderTopLeftRadius: 10,
                    borderBottomLeftRadius: 10,
                    borderBottomRightRadius: 10,
                    height: 250,
                    width: 350,
                  }}
                />
              </div>
              <div className="projects__overlayText "></div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
