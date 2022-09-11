import React, { useState } from "react";
import "./Services.css";
import { UilWebGrid } from "@iconscout/react-unicons";
import { UilArrowRight } from "@iconscout/react-unicons";
import { UilArrow } from "@iconscout/react-unicons";
import ServiceModal from "./Common/ServiceModal";
import { UilPen } from "@iconscout/react-unicons";

export default function Services() {
  const obj = [
    {
      id: "HDR",
      image: "hdr.25",
      title: "REAL ESTATE PHOTO ENHANCEMENT",
      price: "0.5 - 1 $ (Depending on image)",
      description: [
        " Lens Correction",
        " Merging",
        " Colour Correction",
        " Noise Reduction",
        " White Balance, Contrast, Exposure",
        " Perspective(Vertical / Horizontal Correction), Resizing",
        " Removal of Camera flashes / Mirror Reflection / Window Enhancement",
        " Adding Fire to Fire Place / Sky replacement / Grass Replacement",
      ],
    },
    {
      id: "Day to dusk",
      image: "dtd.6",
      title: "VIRTUAL TWILIGHT/DAY TO DUST CONVERSION",
      price: "1.5 - 2.5 $ (Depending on image)",
      description: [
        " Captivating twilight images for homes at any price point.",
        " Saves time. You only need to do one photo session.",
        " More cost-effective than a traditional twilight photo session.",
        " Can be added to any of our TechX photo packages.",
        " Make your listings rock among the competition.",
      ],
    },
  ];

  const [modalState, setModalState] = useState(null);
  return (
    <section className="services section" id="services">
      <h2 className="section__title">Our Best Rates</h2>
      <span className="section__subtitle"></span>
      <div className="services__container container grid">
        <div
          className="services__content"
          onClick={() => {
            setModalState(0);
          }}
        >
          <div>
            <UilWebGrid className="services__icon" />
            <h3 className="services_title">
              Basic <br /> Retouch
            </h3>
          </div>
          <span className="button button--flex button--small button--link services__button">
            View More <UilArrowRight className="button__icon" />
          </span>
          {modalState === 0 && (
            <ServiceModal
              headFirst={"Basic"}
              headLast={"Retouch"}
              price={"0.5 - 1 "}
              serviceArr={[
                "HDR bracketing",
                "White balance",
                "Tone/brightness/contrast adjustments",
                "Grain/noise reduction (if required)",
                "Lens distortion removal",
                "Images sharpening",
                "Vertical and horizontal straightening",
                "Flash/tripod/photographers reflections removal",
                "Sky replacement (if required)",
                "View out windows replacement (if required)",
                "Lawn greening",
              ]}
              onTap={(value) => {
                if (value) {
                  setTimeout(() => {
                    setModalState(null);
                  }, 100);
                }
              }}
            />
          )}
        </div>
        <div
          className="services__content"
          onClick={() => {
            setModalState(1);
          }}
        >
          <div>
            <UilArrow className="services__icon" />
            <h3 className="services_title">
              Basic <br /> Plus
            </h3>
          </div>
          <span className="button button--flex button--small button--link services__button">
            View More <UilArrowRight className="button__icon" />
          </span>
          {modalState === 1 && (
            <ServiceModal
              headFirst={"Basic"}
              headLast={"Plus"}
              price={1}
              serviceArr={[
                "HDR bracketing",
                "White balance",
                "Tone/brightness/contrast adjustments",
                "Grain/noise reduction (if required)",
                "Lens distortion removal",
                "Images sharpening",
                "Vertical and horizontal straightening",
                "Flash/tripod/photographers reflections removal",
                "Sky replacement (if required)",
                "View out windows replacement (if required)",
                "Remove minor blemishes (at 50% zoom in)",
                "Obvious cords/cables/leads removal",
                "TV screen replacement",
                "Pool cleaners removal",
                "Adding fire to fireplaces (if required)",
                "Lawn enhancement/patching/replacement",
              ]}
              onTap={(value) => {
                if (value) {
                  setTimeout(() => {
                    setModalState(null);
                  }, 100);
                }
              }}
            />
          )}
        </div>
        <div
          className="services__content"
          onClick={() => {
            setModalState(2);
          }}
        >
          <div>
            <UilPen className="services__icon" />
            <h3 className="services_title">
              Premium
              <br />
              Retouch
            </h3>
          </div>
          <span className="button button--flex button--small button--link services__button">
            View More <UilArrowRight className="button__icon" />
          </span>
          {modalState === 2 && (
            <ServiceModal
              headFirst={"Premium"}
              headLast={"Retouch"}
              price={1.5}
              serviceArr={[
                "HDR bracketing",
                "White balance",
                "Tone/brightness/contrast adjustments",
                "Grain/noise reduction (if required)",
                "Lens distortion removal",
                "Images sharpening",
                "Vertical and horizontal straightening",
                "Flash/tripod/photographers reflections removal",
                "Sky replacement (if required)",
                "View out windows replacement (if required)",
                "Remove minor blemishes (at 50% zoom in)",
                "Obvious cords/cables/leads removal",
                "TV screen replacement",
                "Pool cleaners removal",
                "Adding fire to fireplaces (if required)",
                "Lawn enhancement/patching/replacement",
                "Pool cleaners, dirt, bins, hoses on lawn removal",
                "Adding light to any lights that may not be “on” (if required)",
                "Deleting chromatic aberrations",
              ]}
              onTap={(value) => {
                if (value) {
                  setTimeout(() => {
                    setModalState(null);
                  }, 100);
                }
              }}
            />
          )}
        </div>
      </div>
      <div className="ourservice_container">
        <h2 className="section__title">Our Services</h2>
        <span className="section__subtitle">What i offer</span>
        <div className="projects__div">
          {obj.map((item, index) => {
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
                <div className="ouservice_title">
                  <h1 className="ourservice__text">{item.title}</h1>
                </div>
                <div className="ouservice_price">
                  <h3 className="ourservice__price1">{item.price}</h3>
                </div>

                <div className="ourservice__description1">
                  {item.description.map((value, index) => (
                    <div className="ourservice__description2">
                      <p className="ourservice__description">
                        <UilArrowRight className="button__icon" />
                        {value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
