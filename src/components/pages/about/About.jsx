import React from "react";
import { useTranslation } from "react-i18next";
import { Container, Grid, Paper } from "@mui/material";
import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles((theme) => ({
  logoLg: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  logoSm: {
    display: "block",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
}));

const About = () => {
  const { t, i18n } = useTranslation();
  const classes = useStyles();
  return (
    <Container
      className={classes.logoLg}
      component={Paper}
      elevation={5}
      sx={{pb:3}}
    >
      <img
        src="https://cdn.unenvironment.org/s3fs-public/styles/article_billboard_image/public/2019-08/countryside-2326787_1920.jpg?itok=45Cf7I6D"
        style={{
          maxWidth: "100%",
          height: "auto",
          padding: "20px",
          marginTop: "20px",
        }}
      />
      <div
        style={{
          textAlign: "justify",
        }}
        dangerouslySetInnerHTML={{
          __html: t("ourHistory", {
            interpolation: { escapeValue: false },
          }),
        }}
      />
    </Container>
  );
};

export default About;
