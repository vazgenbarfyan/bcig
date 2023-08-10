import React from "react";
import { useTranslation } from "react-i18next";
import { Container, Paper } from "@mui/material";
import { makeStyles } from "tss-react/mui";
import photos from "./AbilitiesPhotos";

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

const Abilities = () => {
  const { t, i18n } = useTranslation();
  const classes = useStyles();

  return (
    <>
      <Container
        component={Paper}
        elevation={5}
        sx={{pt:3,pb:3}}
      >
        <div
          className={classes.logoLg}
          style={{
            height: "500vh",
            width: "100%",
            display: "contents",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "20px",
            textAlign: "justify",
          }}
        >
          <div
            dangerouslySetInnerHTML={{
              __html: t("outCapabilities", {
                interpolation: { escapeValue: false },
              }),
            }}
          />
          <div className="abilities-images">
            <ul
              style={{
                margin: "25px 0",
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                alignItems: "center",
                justifyItems: "center",
                gap: "10px",
                width: "100%",
              }}
            >
              <li>
                <span>
                  <b style={{ marginBottom: "5px" }}>
                    {" "}
                    {t("mineral-resources")}
                  </b>
                </span>

                <img
                  className="our-abilities-images"
                  src={photos.mineralResources}
                />
              </li>
              <li>
                <span>
                  <b style={{ marginBottom: "5px" }}>{t("land-resources")}</b>
                </span>
                <img
                  className="our-abilities-images"
                  src={photos.landResources}
                />
              </li>
              <li>
                <span>
                  <b style={{ marginBottom: "5px" }}>{t("water-resources")}</b>
                </span>
                <img
                  className="our-abilities-images"
                  src={photos.waterResources}
                />
              </li>
              <li>
                <span>
                  <b style={{ marginBottom: "5px" }}>{t("atmosphere")}</b>
                </span>
                <img className="our-abilities-images" src={photos.atmosphere} />
              </li>
              <li>
                <span>
                  <b style={{ marginBottom: "5px" }}>{t("biodiversity")}</b>
                </span>
                <img
                  className="our-abilities-images"
                  src={photos.biodiversity}
                />
              </li>
              <li>
                <span>
                  <b style={{ marginBottom: "5px" }}>{t("protected-areas")}</b>
                </span>
                <img
                  className="our-abilities-images"
                  src={photos.protectedAreas}
                />
              </li>
              <li>
                <span>
                  <b style={{ marginBottom: "5px" }}>
                    {t("natural-resources")}
                  </b>
                </span>
                <img
                  className="our-abilities-images"
                  src={photos.naturalResources}
                />
              </li>
              <li>
                <span>
                  <b style={{ marginBottom: "5px" }}> {t("environment")}</b>
                </span>
                <img
                  className="our-abilities-images"
                  src={photos.environment}
                />
              </li>
            </ul>
          </div>
        </div>
        <div className="abilities">
          <div
            style={{
              marginLeft: "15px",
            }}
            dangerouslySetInnerHTML={{
              __html: t("abilities", {
                interpolation: { escapeValue: false },
              }),
            }}
          />
        </div>
      </Container>
    </>
  );
};

export default Abilities;
