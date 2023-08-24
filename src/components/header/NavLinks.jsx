import React, { useState } from "react";
import Button from "@mui/material/Button";
import { useTranslation } from "react-i18next";
import { Divider, Grid, List, Typography } from "@mui/material";
import { useNavigate } from "react-router";
import { NavLink } from "react-router-dom";
import '../../App.css';

const NavLinks = ({
  closeDrawer,
  title,
  links,
  onButtonClick,
  type,
  isDrawerReady,
}) => {
  const [anchorEl, setAnchorEl] = useState(false);
  const navigate = useNavigate();
  const handlePopoverOpen = (event) => {
    setAnchorEl(true);
  };

  const handlePopoverClose = () => {
    setAnchorEl(false);
  };

  const handlePopover = () => {
    setAnchorEl(prev => !prev);
  }
  
  const open = Boolean(anchorEl);

  const { t } = useTranslation();

  return (
    <Grid
      onClick={handlePopover}
      onMouseLeave={!isDrawerReady ? handlePopoverClose : null}
      onMouseEnter={!isDrawerReady ? handlePopoverOpen : null}
      sx={[
        {
          display: "flex",
          flexDirection: "column",
          position: "relative",
        },
        isDrawerReady && {
          p: 0.5,
        },
      ]}
    >
      {type === "single" ? (
        <Typography
          fontSize="1rem"
          component={Button}
          onClick={() => navigate(links[0].href)}
          sx={{ color: "rgb(19, 139, 67)", fontWeight: "bold" }}
        >
          {t(title)}
        </Typography>
      ) : (
        <>
          <Typography
            sx={{ color: "rgb(19, 139, 67)", fontWeight: "bold" }}
            component={Button}
            onClick={onButtonClick}
            fontSize="1rem"
          >
            {t(title)}
          </Typography>
          {isDrawerReady && open && <Divider variant="fullWidth" />}
          {open && (
            <List
              sx={[
                {
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  textAlign: "center",
                  width: "100%",
                  color: "rgb(60, 168, 71)",
                },
                !isDrawerReady && {
                  backgroundColor: "white",
                  borderRadius: "10px",
                  textAlign: "start",
                  padding: "20px",
                  boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.3)',
                  width: "max-content",
                  gap: "10px",
                  position: "absolute",
                  top: 35,
                  color: "rgb(60, 168, 71)",
                },
              ]}
            >
              {links?.map((item, index) => {
                return (
                  <Typography fontSize="1rem" key={index}>
                    <NavLink to={item?.href} onClick={closeDrawer} style={{textDecoration: "none",color: "black"}}>
                      <span className="menuItem">{t(item?.label)}</span>
                    </NavLink>
                  </Typography>
                );
              })}
            </List>
          )}
        </>
      )}
    </Grid>
  );
};

export default NavLinks;
