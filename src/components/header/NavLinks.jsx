import React, { useState } from "react";
import Button from "@mui/material/Button";
import { useTranslation } from "react-i18next";
import Link from "@mui/material/Link";
import { Divider, Grid, List, Typography } from "@mui/material";
import { useNavigate } from "react-router";

const NavLinks = ({
  expand,
  title,
  links,
  onButtonClick,
  type,
  isDrawerReady,
}) => {
  const [anchorEl, setAnchorEl] = useState(false);
  const navigate = useNavigate();
  const handlePopoverOpen = (event) => {
    if (type !== "single") expand(true);
    setAnchorEl(true);
  };

  const handlePopoverClose = () => {
    if (type !== "single") expand(false);
    setAnchorEl(false);
  };
  const open = Boolean(anchorEl);

  const { t, i18n } = useTranslation();

  return (
    <Grid
      onMouseLeave={handlePopoverClose}
      onMouseEnter={handlePopoverOpen}
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
                  width: "100%",
                  color: "rgb(60, 168, 71)",
                },
                !isDrawerReady && {
                  position: "absolute",
                  top: 25,
                  left: 7,
                  minWidth: "300px",
                  color: "rgb(60, 168, 71)",
                },
              ]}
            >
              {links?.map((item, index) => {
                return (
                  <Typography
                    href={item?.href}
                    component={Link}
                    fontSize="0.9rem"
                    sx={{
                      textDecoration: "none",
                      color: "black",
                      ":hover": {
                        textDecoration: "underLine",
                        color: "rgb(60, 168, 71)",
                      },
                    }}
                  >
                    {t(item?.label)}
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
