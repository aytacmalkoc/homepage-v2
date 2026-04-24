import React from "react";
import "../styles/Projects.css";
import FolderOpenRoundedIcon from "@mui/icons-material/FolderOpenRounded";
import FadeInSection from "./FadeInSection";
import ExternalLinks from "./ExternalLinks";
import { projects } from "../data/projects";
import { useTranslation } from "react-i18next";

const Projects = () => {
  const { t } = useTranslation();

  return (
    <div id="projects">
      <div className="section-header ">
        <span className="section-title">{t("projects.title")}</span>
        <a
          href="https://github.com/aytacmalkoc"
          className="explore-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t("projects.viewAll")}
        </a>
      </div>
      <div className="project-container">
        <ul className="projects-grid">
          {Object.keys(projects).map((key, i) => {
            const project = projects[key];
            const desc = t(`projects.items.${project.translationKey}.desc`);

            return (
              <FadeInSection key={i} delay={(i + 1) * 100 + "ms"}>
                <li className="projects-card">
                  <div className="card-header">
                    <div className="folder-icon">
                      <FolderOpenRoundedIcon sx={{ fontSize: 35 }} />
                    </div>
                    <ExternalLinks
                      githubLink={project["link"]}
                      openLink={project["open"]}
                    />
                  </div>
                  <div className="card-title">{key}</div>
                  <div className="card-desc">{desc}</div>
                  <div className="card-tech">{project["techStack"]}</div>
                </li>
              </FadeInSection>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Projects;
