import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useTranslation } from "react-i18next";
import { Container } from "@mui/system";

export default function CompletedProjects() {
  const { t, i18n } = useTranslation();

  const projects = Array.from(
    { length: 30 },
    (_, i) => `implemented-project-${i + 1}`
  );

  if (i18n.language !== "hy") {
    return (
      <Container>
        {projects.map((projectName) => {
          return (
            <Accordion
              key={projectName}
              style={{ marginBottom: 5, padding: "12px" }}
            >
              <Typography style={{ margin: "10" }}>{t(projectName)}</Typography>
            </Accordion>
          );
        })}
      </Container>
    );
  }

  return (
      <Container>
        {projects.map((projectName) => {
          return (
            <Accordion key={projectName}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>{t(projectName)}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  dangerouslySetInnerHTML={{
                    __html: t(`${projectName}-description`, {
                      interpolation: { escapeValue: false },
                    }),
                  }}
                />
              </AccordionDetails>
            </Accordion>
          );
        })}
      </Container>
  );
}
