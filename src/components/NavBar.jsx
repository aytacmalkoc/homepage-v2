import React, { useState, useEffect, useRef } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import "../styles/NavBar.css";
import { useTranslation } from "react-i18next";

const NavBar = () => {
  const { t, i18n } = useTranslation();
  const [expanded, setExpanded] = useState(false);
  const scrollPos = useRef(0);

  useEffect(() => {
    if (expanded) {
      scrollPos.current = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollPos.current}px`;
      document.body.style.width = "100%";
    } else {
      const scrollY = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || "0") * -1);
      }
    }
  }, [expanded]);

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("language", lang);
  };

  return (
    <Navbar
      fixed="top"
      expand="lg"
      className="navbar"
      data-bs-theme="dark"
      expanded={expanded}
      onToggle={(isExpanded) => setExpanded(isExpanded)}
    >
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" onSelect={() => setExpanded(false)}>
            <Nav.Link href="/#intro">{t("nav.home")}</Nav.Link>
            <Nav.Link href="/#about">{t("nav.about")}</Nav.Link>
            <Nav.Link href="/#experience">{t("nav.experience")}</Nav.Link>
            <Nav.Link href="/#projects">{t("nav.software")}</Nav.Link>
          </Nav>
          <Nav className="ms-auto align-items-center" onSelect={() => setExpanded(false)}>
            <Nav.Link href="mailto:aytacmalkoc@protonmail.com">
              <EmailRoundedIcon style={{ fontSize: 20 }} />
            </Nav.Link>
            <Nav.Link href="https://github.com/aytacmalkoc" target="_blank">
              <GitHubIcon style={{ fontSize: 19 }} />
            </Nav.Link>
            <Nav.Link
              href="https://www.linkedin.com/in/aytacmalkoc/"
              target="_blank"
            >
              <LinkedInIcon style={{ fontSize: 21 }} />
            </Nav.Link>
            <div className="lang-switch" role="group" aria-label="Language switcher">
              <button
                className={`lang-option${i18n.language === "en" ? " active" : ""}`}
                onClick={() => changeLanguage("en")}
              >
                EN
              </button>
              <button
                className={`lang-option${i18n.language === "tr" ? " active" : ""}`}
                onClick={() => changeLanguage("tr")}
              >
                TR
              </button>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
