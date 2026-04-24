import React from "react";
import PropTypes from "prop-types";
import { Tabs, Tab, Typography, Box, useTheme, useMediaQuery } from "@mui/material";
import FadeInSection from "./FadeInSection";
import { experiences } from "../data/experiences";
import { useTranslation } from "react-i18next";

const LOCALE_MAP = { tr: "tr-TR", en: "en-US" };

function formatDateRange(startDate, endDate, language) {
  const locale = LOCALE_MAP[language] || "en-US";
  const opts = { month: "long", year: "numeric" };
  const fmt = (d) =>
    new Intl.DateTimeFormat(locale, opts)
      .format(new Date(d))
      .toLocaleUpperCase(locale);
  return `${fmt(startDate)} - ${fmt(endDate)}`;
}

function TabPanel(props) {
  const { children, value, index, isMobile, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={isMobile ? `full-width-tabpanel-${index}` : `vertical-tabpanel-${index}`}
      aria-labelledby={isMobile ? `full-width-tab-${index}` : `vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: { xs: 2, sm: 3 } }}>
          <Typography component="div">{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
  isMobile: PropTypes.bool,
};

function a11yProps(index, isMobile) {
  if (isMobile) {
    return {
      id: "full-width-tab-" + index,
      "aria-controls": "full-width-tabpanel-" + index,
    };
  } else {
    return {
      id: "vertical-tab-" + index,
      "aria-controls": "vertical-tabpanel-" + index,
    };
  }
}

const JobList = () => {
  const { t, i18n } = useTranslation();
  const [value, setValue] = React.useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const experienceItems = experiences;

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "transparent",
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        height: "auto",
        minHeight: 300,
      }}
    >
      <Tabs
        orientation={!isMobile ? "vertical" : "horizontal"}
        variant="scrollable"
        scrollButtons="auto"
        value={value}
        onChange={handleChange}
        sx={{
          borderRight: isMobile ? 0 : 1,
          borderBottom: isMobile ? 1 : 0,
          borderColor: "var(--lightest-navy)",
          "& .MuiTabs-indicator": {
            backgroundColor: "var(--yellow)",
          },
          "& .MuiTabs-flexContainer": {
            borderBottom: isMobile ? "1px solid var(--lightest-navy)" : "none",
          },
        }}
      >
        {Object.keys(experienceItems).map((key, i) => (
          <Tab
            key={i}
            label={experienceItems[key]["company"]}
            {...a11yProps(i, isMobile)}
            sx={{
              color: "var(--slate)",
              fontFamily: "Nunito",
              fontSize: "14px",
              textAlign: isMobile ? "center" : "left",
              alignItems: isMobile ? "center" : "flex-start",
              textTransform: "none",
              padding: "10px 20px",
              minHeight: "48px",
              minWidth: isMobile ? "120px" : "auto",
              "&.Mui-selected": {
                color: "var(--yellow)",
              },
              "&:hover": {
                color: "var(--yellow)",
                backgroundColor: "var(--green-tint)",
              },
            }}
          />
        ))}
      </Tabs>
      <Box sx={{ flexGrow: 1 }}>
        {Object.keys(experienceItems).map((key, i) => {
          const job = experienceItems[key];
          const descItems = t(`experience.jobs.${job.translationKey}.desc`, {
            returnObjects: true,
          });

          return (
            <TabPanel key={i} value={value} index={i} isMobile={isMobile}>
              <span className="joblist-job-title">{job["jobTitle"] + " "}</span>
              <span className="joblist-job-company">{job["company"]}</span>
              <div className="joblist-duration">
                {formatDateRange(job.startDate, job.endDate, i18n.language)}
              </div>
              <ul className="job-description">
                {Array.isArray(descItems) &&
                  descItems.map((descItem, j) => (
                    <FadeInSection key={j} delay={(j + 1) * 100 + "ms"}>
                      <li>{descItem}</li>
                    </FadeInSection>
                  ))}
              </ul>
            </TabPanel>
          );
        })}
      </Box>
    </Box>
  );
};

export default JobList;
