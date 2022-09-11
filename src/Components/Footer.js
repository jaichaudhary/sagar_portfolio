import React from "react";
import { UilLinkedinAlt } from "@iconscout/react-unicons";
import { UilInstagram } from "@iconscout/react-unicons";
import { UilFacebookF } from "@iconscout/react-unicons";

function Footer() {
  return (
    <div
      id="#footer"
      className="footer"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 60,
      }}
    >
      <div className="contact__desc">
        <p>Developed and maintained by Sagar Chaudhary</p>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 10,
          //   backgroundColor: "yellow",
          marginBottom: 40,
          marginTop: 5,

          // justifyContent: "space-evenly",
          // visibility: "hidden",
        }}
        //   className="home__social"
      >
        <a
          href="https://www.linkedin.com/in/sagar-chaudhary-540378219/"
          className="home__social-icon"
          target="_blank"
          rel="noopener noreferrer"
        >
          <UilLinkedinAlt color={"var(--first-color)"} />
        </a>

        <a
          href="https://www.facebook.com/profile.php?id=100081602072590"
          className="home__social-icon"
          target="_blank"
          rel="noopener noreferrer"
        >
          <UilFacebookF color={"var(--first-color)"} />
        </a>

        <a
          href="https://www.instagram.com/real_estate_editor_1044/"
          className="home__social-icon"
          target="_blank"
          rel="noopener noreferrer"
        >
          <UilInstagram color={"var(--first-color)"} />
        </a>
      </div>
    </div>
  );
}

export default Footer;
