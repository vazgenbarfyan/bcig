import React from "react";
import { useTranslation } from "react-i18next";
import logos from "./PartnerLogos";
import { Divider, Grid } from "@mui/material";

const Partners = () => {
  const { t, i18n } = useTranslation();

  const partnersInfo = [
    {
      href: "https://www.adaptation-fund.org/",
      key: "adaptionFund",
    },
    {
      href: "https://www.thegef.org/",
      key: "globalEnvironmentFacility",
    },
    {
      href: "https://www.greenclimate.fund/",
      key: "greenClimate",
    },
    {
      href: "https://www.unep.org/",
      key: "unitedNationsEnvProg",
    },
    {
      href: "https://www.undp.org/",
      key: "unitedNationsDevProg",
    },
    {
      href: "https://www.unido.org/",
      key: "unitedNationsInduDevOrg",
    },
    {
      href: "https://www.worldbank.org/en/home",
      key: "theWorldBank",
    },
    {
      href: "https://www.osce.org/",
      key: "orgForSec",
    },
  ];

  return (
    <div className="content">
      <div className="partners-info">
        <div
          className="container"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            justifyItems: "space-around",
            gap: "40px",
          }}
        >
          {partnersInfo.map((info) => {
            return (
              <div key={info.key}>
                <a
                  href={info.href}
                  className="partnerInfoWrapper"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textDecoration: "none",
                    color: "black",
                  }}
                >
                  <img
                    className="image"
                    src={logos[info.key]}
                    alt={t(info.key)}
                    style={{
                      display: "block",
                      maxWidth: "400px",
                      maxHeight: "150px",
                      width: "100%",
                      height: "100vh",
                    }}
                  />
                  <b style={{ textAlign: "center" }}> {t(info.key)}</b>
                </a>
              </div>
            );
          })}
        </div>
        <Grid container spacing={10}>
          <Grid item xs={2} sm={10}>
            <Grid
              item
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
              display="flex"
            >
              <Divider
                orientation="vertical"
                style={{ height: "100%", width: "1px" }}
              />
            </Grid>
            <Grid
              item
              xs={2}
              container
              direction="row"
              justifyContent="right"
              alignItems="center"
            ></Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Partners;
