import React from "react";
import JobList from "./JobList";
import "../styles/Experience.css";
import FadeInSection from "./FadeInSection";
import { useTranslation } from "react-i18next";

const Experience = () => {
  const { t } = useTranslation();

  return (
    <div id="experience">
      <FadeInSection>
        <div className="section-header ">
          <span className="section-title">{t("experience.title")}</span>
        </div>
        <JobList />
      </FadeInSection>
    </div>
  );
};

export default Experience;
