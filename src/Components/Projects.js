import React from "react";
import { UilGithubAlt } from "@iconscout/react-unicons";
import { UilExternalLinkAlt } from "@iconscout/react-unicons";
import "./Projects.css";

export default function Projects() {
  const obj = [
    {
      title: "React-Native-Dropdown (NPM Package)",
      description:
        "A React Native dropdown component easy to customize for both iOS and Android.",
      skills: ["HTML", "CSS", "JavaScript", "React Native"],
      image: "pic1",
    },
    {
      title: "Youtube Clone",
      description:
        "The project includes search functionality in which one can search any keyword just like youtube and get the output.",
      skills: ["HTML", "CSS", "JavaScript", "React", "YouTube API"],
      image: "pic2",
    },
    {
      title: "Ethereum_ERC20",
      description: `In this project, you create your own token and you can check the balance or transfer it into your different accounts. You can also import existing tokens and transfer or check the balance if you are an owner of that token.`,
      skills: ["Hardhat", "Solidity", "web3.js", "React", "Material UI"],
      image: "pic3",
    },
    {
      title: "Excel_file Reader",
      description: `In this project, we can add an excel file, the heading of excel will come on the left and we can drag & drop the heading one by one and you will be able to see the table of those dragged headings. Chart is also included but you have to use "Test excel file" for that that is included in "readme.md" file in Github repo.`,
      skills: ["HTML", "CSS", "JavaScript", "React", "ChartJS", "Drag & Drop"],
      image: "pic4",
    },
    {
      title: "Airbnb Clone",
      description:
        "The Project includes Date Picker and how many person to stay functionality, and once you click on Done, then you are redirected to the search page.",
      skills: ["HTML", "CSS", "JavaScript", "React", "React Router"],
      image: "pic5",
    },
    {
      title: "Search Pic",
      description:
        "The Project includes the functionality of image search when we type anything in the search bar and we can also view them in a modal when we click on the image, and it also has a functionality of showing recent searches.",
      skills: ["HTML", "CSS", "JavaScript", "React", "Flickr API"],
      image: "pic6",
    },
    {
      title: "Homejam CLone",
      description:
        "This project is the clone of myhomejam.com Homepage, User Interface is fully responsive.",
      skills: ["HTML", "CSS", "JavaScript", "React"],
      image: "pic7",
    },
    {
      title: "Poll Survey UI",
      description:
        "This project shows the user interface of Polls, Surveys, Quiz inside a website.",
      skills: ["HTML", "CSS", "JavaScript"],
      image: "pic8",
    },
    {
      title: "Boring Study",
      description:
        "This project primarily focuses on the availability of the previous year's question papers and answers for the students of B.Tech and Diploma.",
      skills: ["HTML", "CSS", "JavaScript"],
      image: "pic9",
    },
    {
      title: "Boring Study",
      description:
        "This project primarily focuses on the availability of the previous year's question papers and answers for the students of B.Tech and Diploma.",
      skills: ["HTML", "CSS", "JavaScript"],
      image: "pic10",
    },
    {
      title: "Boring Study",
      description:
        "This project primarily focuses on the availability of the previous year's question papers and answers for the students of B.Tech and Diploma.",
      skills: ["HTML", "CSS", "JavaScript"],
      image: "pic11",
    },
    {
      title: "Boring Study",
      description:
        "This project primarily focuses on the availability of the previous year's question papers and answers for the students of B.Tech and Diploma.",
      skills: ["HTML", "CSS", "JavaScript"],
      image: "pic12",
    },
    {
      title: "Boring Study",
      description:
        "This project primarily focuses on the availability of the previous year's question papers and answers for the students of B.Tech and Diploma.",
      skills: ["HTML", "CSS", "JavaScript"],
      image: "pic13",
    },
    {
      title: "Boring Study",
      description:
        "This project primarily focuses on the availability of the previous year's question papers and answers for the students of B.Tech and Diploma.",
      skills: ["HTML", "CSS", "JavaScript"],
      image: "pic14",
    },
    {
      title: "Boring Study",
      description:
        "This project primarily focuses on the availability of the previous year's question papers and answers for the students of B.Tech and Diploma.",
      skills: ["HTML", "CSS", "JavaScript"],
      image: "pic15",
    },
    {
      title: "Boring Study",
      description:
        "This project primarily focuses on the availability of the previous year's question papers and answers for the students of B.Tech and Diploma.",
      skills: ["HTML", "CSS", "JavaScript"],
      image: "pic16",
    },
  ];
  return (
    <section className="projects section" id="portfolio">
      <h2 className="section__title">Some Things I’ve Built</h2>
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
                  alt="Youtube Clone "
                  style={{
                    borderTopRightRadius: 10,
                    borderTopLeftRadius: 10,
                    // height: 200,
                    // width: 300,
                  }}
                />
              </div>
              <div className="projects__overlayText ">
                <div className="projects__name">
                  <p className="projects__boldText">{item.title}</p>
                </div>
                <div className="projects__description">
                  <p className="projects__text">{item.description}</p>
                </div>

                {/* <div className="projects__skills">
                  {item.skills.map((value, index) => (
                    <div className="projects__skill">
                      <p style={{ color: "white" }} className="projects__text">
                        {value}
                      </p>
                    </div>
                  ))}
                </div> */}

                {/* <div className="projects__link">
                  <div
                    onClick={() => {
                      window.open(item.githubUrl, "_blank");
                    }}
                    className="projects__linkTab"
                  >
                    <UilGithubAlt />
                  </div>
                  <div
                    onClick={() => {
                      window.open(item.url, "_blank");
                    }}
                    className="projects__linkTab"
                  >
                    <UilExternalLinkAlt />
                  </div>
                </div> */}
              </div>
            </div>
          );
        })}
      </div>
      {/* <div className="projects__overlayText ">
          <div className="projects__name">
            <p
              style={{ marginTop: 15, marginBottom: 15 }}
              className="projects__boldText"
            >
              Youtube Clone
            </p>
          </div>
          <div className="projects__description">
            <p className="projects__text">
              A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm,
              and more. Available on Visual Studio Marketplace, Package Control,
              Atom Package Manager, and npm.
            </p>
          </div>

          <div className="projects__skills">
            <div className="projects__skill">
              <p style={{ color: "white" }} className="projects__text">
                Html
              </p>
            </div>
            <div className="projects__skill">
              <p style={{ color: "white" }} className="projects__text">
                Css
              </p>
            </div>
            <div className="projects__skill">
              <p style={{ color: "white" }} className="projects__text">
                JavaScript
              </p>
            </div>
            <div className="projects__skill">
              <p style={{ color: "white" }} className="projects__text">
                React
              </p>
            </div>
          </div>

          <div className="projects__link">
            <div className="projects__linkTab">
              <UilGithubAlt />
            </div>
            <div className="projects__linkTab">
              <UilExternalLinkAlt />
            </div>
          </div>
        </div>
      */}
      {/* </div> */}
    </section>
  );
}
