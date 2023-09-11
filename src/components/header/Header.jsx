import React, {useCallback, useState} from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import LanguageButton from "./LanguageButton";
import {Box, createTheme, Divider, Grid, Hidden, IconButton, SwipeableDrawer, ThemeProvider,} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import NavLinks from "./NavLinks";
import NavigationData from "./Navigation.jsx";
import {ArrowRight} from "@mui/icons-material";
import TopHeader from "./TopHeader";
import { Fragment } from "react";

const ElevationScroll = (props) => {
    const {children, window} = props;
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window ? window() : undefined,
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
};

ElevationScroll.propTypes = {
    children: PropTypes.element.isRequired,
    window: PropTypes.func,
};

const useStyles = {
    logo: {
        maxWidth: 160,
        width: "50px",
        height: "50px",
        left: "5%",
        top: "3px",
    },
};

const theme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1285,
            xl: 1536,
        },
    },
});

const Header = () => {
    const [open, setOpen] = useState(false);

    const openDrawer = useCallback((bool) => {
        setOpen(true);
    }, []);
    const closeDrawer = useCallback((bool) => {
        setOpen(false);
    }, []);

    return (
        <>
            <ThemeProvider theme={theme}>
                <AppBar
                    sx={[
                        {
                            background: "white",
                            minHeight: {lg: "40px"},
                            fontSize: "15px",
                            position: "sticky",
                        },
                    ]}
                >
                    <TopHeader/>
                    <Toolbar>
                        <Hidden lgDown>
                            <Grid container sx={{justifyContent: 'center', gap: '1%'}}>
                                {NavigationData.map((item, index) => {
                                    return (
                                        <NavLinks
                                            key={index * Math.random() * 100}
                                            title={item.title}
                                            links={item.links}
                                            type={item.type}
                                        />
                                    );
                                })}
                            </Grid>
                        </Hidden>
                        <Hidden lgUp>
                            <IconButton onClick={openDrawer}>
                                <MenuIcon/>
                            </IconButton>
                        </Hidden>
                    </Toolbar>
                    <SwipeableDrawer
                        open={open}
                        anchor="right"
                        onOpen={openDrawer}
                        onClose={closeDrawer}
                    >
                        <Box sx={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                            <Box sx={{display: "flex", justifyContent: "flex-start"}}>
                                <LanguageButton isDrawerReady={open}/>
                            </Box>
                            <IconButton onClick={closeDrawer}>
                                <ArrowRight/>
                            </IconButton>
                        </Box>
                        <Divider/>
                        <Box sx={{display: "flex", flexDirection: "column", width: "max(25vw, 250px)"}}>
                            {NavigationData.map((item, index) => {
                                return (
                                    <Fragment key={index * Math.random() * 1000}>
                                        <NavLinks
                                            closeDrawer={closeDrawer}
                                            key={index * Math.random() * 1000}
                                            title={item.title}
                                            links={item.links}
                                            type={item.type}
                                            isDrawerReady={open}
                                        />
                                        <Divider/>
                                    </Fragment>
                                );
                            })}
                        </Box>
                    </SwipeableDrawer>
                </AppBar>
            </ThemeProvider>
        </>
    );
};

export default Header;
