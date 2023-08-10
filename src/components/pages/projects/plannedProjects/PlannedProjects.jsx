import React from "react";
import { Container, Paper } from "@mui/material";
import { useTranslation } from "react-i18next";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import "./plannedProjects.css";
import icons from "./PlannedProjectsIcons";

const PlannedProjects = () => {
  const { t, i18n } = useTranslation();

  return (
    <Container
      component={Paper}
      elevation={5}
      sx={{pt:3,pb:3}}
    >
      <Box sx={{ width: "100%", maxWidth: "100%" }}>
        <Typography variant="h6" gutterBottom>
          <div className="title">{t("titleGreenFinance")}</div>
        </Typography>
        <img src={icons.greenFinance} className="image" />
        <Typography variant="subtitle1" gutterBottom>
          {t("greenFinance")}
        </Typography>
      </Box>
      <br></br>
      <Box sx={{ width: "100%", maxWidth: "100%" }}>
        <Typography variant="h6" gutterBottom>
          <div className="title">{t("titleWasteManagement")}</div>
          <img src={icons.wasteManagement} alt="" className="image" />
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          {t("wasteManagement1")}
          <br />
          <br />
          <img src={icons.bin} alt="" className="image" />
          <br />
          {t("wasteManagement2")}
          <br />
          <br />
          <img src={icons.projects} alt="" className="image" />
          <br />
          {t("wasteManagement3")}
          <br />
          <br />
          <img src={icons.nature} alt="" className="image" />
          <br />
          {t("wasteManagement4")}
        </Typography>
      </Box>
      <br />
      <Box sx={{ width: "100%", maxWidth: "100%" }}>
        <Typography variant="h6" gutterBottom>
          <div className="title">{t("titleTransport")}</div>
          <img src={icons.transport} alt="" className="image" />
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          {t("transport1")}
          <br />
          <br />
          <img src={icons.traffic} alt="" className="image" />
          <br />
          {t("transport2")}
        </Typography>
      </Box>
      <br />
      <Box sx={{ width: "100%", maxWidth: "100%" }}>
        <Typography variant="h6" gutterBottom>
          <div className="title">{t("titleElectricMobility")}</div>
          <img src={icons.electricMobility} alt="" className="image" />
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          {t("electricMobility1")}
          <br />
          <br />
          <img src={icons.carCharge} alt="" className="image" />
          <br />
          {t("electricMobility2")}
        </Typography>
      </Box>
      <br />
      <Box sx={{ width: "100%", maxWidth: "100%" }}>
        <Typography variant="h6" gutterBottom>
          <div className="title"> {t("titleGreenBonds")}</div>
          <img src={icons.greenBonds} alt="" className="image" />
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          {t("greenBonds")}
        </Typography>
      </Box>
      <br />
      <Box sx={{ width: "100%", maxWidth: "100%" }}>
        <Typography variant="h6" gutterBottom>
          <div className="title"> {t("titleGreenRecovery")}</div>
          <img src={icons.greenRecovery} alt="" className="image" />
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          {t("greenRecovery")}
        </Typography>
      </Box>
      <br />
      <Box sx={{ width: "100%", maxWidth: "100%" }}>
        <Typography variant="h6" gutterBottom>
          <div className="title"> {t("titleGreenManagement")}</div>
          <img src={icons.greenManagement} alt="" className="image" />
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          {t("greenManagement")}
        </Typography>
      </Box>
      <br />
      <Box sx={{ width: "100%", maxWidth: "100%" }}>
        <Typography variant="h6" gutterBottom>
          <div className="title">{t("titleBiodiversity")}</div>
          <img src={icons.biodiversity} alt="" className="image" />
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          {t("biodiversityPlannedProject")}
        </Typography>
      </Box>
      <br />
      <Box sx={{ width: "100%", maxWidth: "100%" }}>
        <Typography variant="h6" gutterBottom>
          <div className="title">{t("titleAdaption")}</div>
          <img src={icons.adaptionMitigation} alt="" className="image" />
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          {t("adaption")}
        </Typography>
      </Box>
      <br />
      <Box sx={{ width: "100%", maxWidth: "100%" }}>
        <Typography variant="h6" gutterBottom>
          <div className="title"> {t("titleEcoEducation")}</div>
          <img src={icons.ecoEducation} alt="" className="image" />
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          {t("ecoEducation1")}
          <br />
          <br />
          <img src={icons.building} alt="" className="image" />
          <br />
          {t("ecoEducation2")}
        </Typography>
      </Box>
    </Container>
  );
};

export default PlannedProjects;
