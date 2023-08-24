import React, {useState} from "react";
import {useTranslation} from "react-i18next";
import LanguageIcon from "@mui/icons-material/Language";
import {IconButton, List, ListItem} from "@mui/material";
import {Box} from "@mui/system";
import languages from "./Languages";

const LanguageButton = ({isDrawerReady, color = ""}) => {
    const [anchorEl, setAnchorEl] = useState(false);

    const handleOpen = () => {
        setAnchorEl(true);
    };
    const open = Boolean(anchorEl);

    const handleClose = () => {
        setAnchorEl(false);
    };

    const handleChange = (lng) => {
        i18n.changeLanguage(lng);

        localStorage.setItem("lng", lng);
    };

    const {i18n} = useTranslation();

    return (
        <Box
            sx={{display: "flex", flexDirection: "row", alignItems: "center"}}
            onMouseEnter={handleOpen}
            onMouseLeave={handleClose}
        >
            <IconButton>
                <LanguageIcon style={{color: color}}/>
            </IconButton>
            {open && (
                <List
                    sx={[
                        {
                            overflow: "visible",
                            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                            display: "flex",
                            justifyContent: "flex-start",
                            width: "100%",
                            color: "rgb(60, 168, 71)",
                            "&:before": {
                                display: "none",
                                content: '""',
                                position: "absolute",
                                top: 0,
                                right: 10,
                                width: 10,
                                height: 10,
                                bgcolor: "background.paper",
                                transform: "translateY(-50%) rotate(45deg)",
                                zIndex: 0,
                            },
                        },
                        !isDrawerReady && {
                            flexDirection: "column",
                            position: "absolute",
                            top: 40,
                            width: "100px",
                            right: 30,
                            color: "rgb(60, 168, 71)",
                            backgroundColor: "white",
                            "&:before" : {
                                display: "block",
                            }
                        },
                    ]}
                >
                    {languages.map((item, index) => {
                        return (
                            <ListItem
                                key={item.lang}
                                sx={{
                                    padding: '0 15px',
                                    fontWeight: "bold",
                                    ":hover": {
                                        cursor: "pointer",
                                    },
                                }}
                                onClick={() => handleChange(item.lang)}
                            >
                                {isDrawerReady ? item.short : item.label}
                            </ListItem>
                        );
                    })}
                </List>
            )}
        </Box>
    );
};

export default LanguageButton;
