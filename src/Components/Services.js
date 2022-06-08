import React, { useState } from "react";
import "./Services.css";
import { UilWebGrid } from "@iconscout/react-unicons";
import { UilArrowRight } from "@iconscout/react-unicons";
import { UilArrow } from "@iconscout/react-unicons";
import ServiceModal from "./Common/ServiceModal";
import { UilPen } from "@iconscout/react-unicons";

export default function Services() {
  const [modalState, setModalState] = useState(null);
  return (
    <section className="services section" id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What i offer</span>
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
              price={0.75}
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
              price={1.25}
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
    </section>
  );
}
