import React from "react";
import "../styles/Credits.css";
import FadeInSection from "./FadeInSection";
import { useTranslation } from "react-i18next";

const Credits = () => {
  const { t } = useTranslation();

  return (
    <FadeInSection>
      <div id="credits">
        <div className="ending-credits">
          <div>
            {t("credits.builtBy")}{" "}
            <a
              href="https://github.com/gazijarin/Gazi-V2"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("credits.designerName")}
            </a>
          </div>
          <div>
            {t("credits.rights")} © {new Date().getFullYear()}
          </div>
        </div>
      </div>
    </FadeInSection>
  );
};

export default Credits;
