import React from "react";
import { UilTimes } from "@iconscout/react-unicons";
import { UilCheckCircle } from "@iconscout/react-unicons";
import "./ServiceModal.css";

export default function ServiceModal({
  headFirst,
  headLast,
  serviceArr,
  onTap = () => {},
  price,
}) {
  return (
    <div className="services__modal">
      <div className="services__modal-content">
        <div style={{ display: "flex", alignItems: "center" }}>
          <h4 className="services__modal-title">
            {headFirst} <br /> {headLast}
          </h4>
          <div style={{ marginLeft: 10 }} className="projects__skills">
            <div
              className="projects__skill"
              style={{
                marginTop: 0,
                // padding: 10,
                // paddingLeft: 15,
                // paddingRight: 15,
              }}
            >
              <p
                style={{ color: "white", fontSize: 16 }}
                className="projects__text"
              >
                {`${price} $`}
              </p>
            </div>
          </div>
        </div>

        <div
          className="services__modal-close"
          onClick={() => {
            onTap(true);
          }}
        >
          <UilTimes />
        </div>

        <ul className="services__modal-services grid"></ul>
        {serviceArr?.map((val, index) => {
          return (
            <li className="services__modal-service">
              <UilCheckCircle className="services__modal-icon" />
              <p>{val}</p>
            </li>
          );
        })}
      </div>
    </div>
  );
}
