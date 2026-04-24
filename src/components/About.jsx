import React from "react";
import "../styles/About.css";
import FadeInSection from "./FadeInSection";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  const techStack = [
    "PHP & Laravel",
    "JavaScript (ES6+) & React & Next.js",
    "MySQL & PostgreSQL",
    "RESTful APIs",
    "React Native & Flutter",
  ];

  return (
    <div id="about">
      <FadeInSection>
        <div className="section-header ">
          <span className="section-title">{t("about.title")}</span>
        </div>
        <div className="about-content">
          <div className="about-description">
            <p>{t("about.para1")}</p>
            <p>{t("about.para2")}</p>
            {t("about.techStackIntro")}
            <ul className="tech-stack">
              {techStack.map((techItem, i) => (
                <FadeInSection key={i} delay={(i + 1) * 100 + "ms"}>
                  <li>{techItem}</li>
                </FadeInSection>
              ))}
            </ul>
          </div>
          <div className="about-image">
            <img alt="Aytac Malkoc" src={"/assets/me.png"} />
          </div>
        </div>
      </FadeInSection>
    </div>
  );
};

export default About;
