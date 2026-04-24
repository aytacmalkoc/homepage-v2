import React from "react";
import "../styles/Intro.css";
import { TypeAnimation } from "react-type-animation";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import FadeInSection from "./FadeInSection";
import { useTranslation } from "react-i18next";

const Intro = () => {
  const { t } = useTranslation();

  return (
    <div id="intro">
      <div className="intro-block">
        <div className="intro-title">
          {t("intro.greeting")}
          <span className="intro-name">
            <TypeAnimation
              sequence={["aytac"]}
              wrapper="span"
              cursor={false}
              repeat={0}
            />
          </span>
          {t("intro.suffix")}
          <span className="intro-cursor">|</span>
        </div>
        <FadeInSection>
          <div className="intro-desc">{t("intro.desc")}</div>
          <a href="mailto:aytacmalkoc@protonmail.com" className="intro-contact">
            <EmailRoundedIcon />
            {" " + t("intro.sayHi")}
          </a>
        </FadeInSection>
      </div>
    </div>
  );
};

export default Intro;
