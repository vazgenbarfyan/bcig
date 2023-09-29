import { Box, Container, Grid, Paper } from "@mui/material";
import { useTranslation } from "react-i18next";
import { FiFacebook, FiLinkedin, FiYoutube } from "react-icons/fi";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const { t, i18n } = useTranslation();

  return (
    <Box p={{ xs: 1, sm: 1 }} mt={{ xs: 5, sm: 5 }} style={{boxShadow: "-8px 0 10px rgba(0,0,0,0.6)"}}>
        <Grid
          container
          justifyContent={"space-around"}
          alignItems={"center"}
          margin="0px"
          sx={{ padding: "10px"}}
        >
          <Grid
            item
            sx={{ display: "flex", alignItems: "center", gap: "10px" }}
            xs={12}
            md={6}
          >
            <NavLink to="/">
              <img
                src="/assets/logo.png"
                alt=""
                className="logo"
                width="50"
                height="50"
              />
            </NavLink>
            <span> {t("copyright")}</span>
          </Grid>
          <Grid item xs={12} md={2}>
            <Box sx={{ display: "flex", alignItems: "center", gap: "4px" }}>
              <i className="fa fa-location-dot"></i>
              <span>{t("street")}</span>
            </Box>
            <Box>
              <a href="tel:+374 10 651631" style={{color: "black", gap: "4px", display: "flex", alignItems: "center", textDecoration: "none" }}>
                <i className="fa fa-phone"></i>
                <span style={{color: "rgb(19, 139, 67)"}}>+374 10 651-631</span>
              </a>
            </Box>
          </Grid>

          <Grid item xs={12} md={2}>
            <Box sx={{ display: "flex", alignItems: "center", gap: "4px" }}>
              <i className="fa fa-envelope"></i>
              <span>info@cep.am</span>
            </Box>
            <div
              className="social-media"
              style={{
                display: "flex",
                width: "50%",
                justifyContent: "space-between",
                fontSize: "1.3rem",
              }}
            >
              <a
                className="icon-circle"
                href="https://www.facebook.com/epiu.am/"
                target="_blank"
              >
                <FiFacebook style={{ color: 'rgb(19, 139, 67)'}}/>
              </a>
              <a
                className="icon-circle"
                href="https://www.linkedin.com/in/epiu-state-agency-441a21155/"
                target="_blank"
              >
                <FiLinkedin style={{ color: 'rgb(19, 139, 67)'}}/>
              </a>
              <a
                className="icon-circle"
                href="https://www.youtube.com/channel/UCQ62HVkKIOiqa4GtSEn6QYw"
                target="_blank"
              >
                <FiYoutube style={{ color: 'rgb(19, 139, 67)'}}/>
              </a>
            </div>
          </Grid>
        </Grid>
    </Box>
  );
};

export default Footer;
