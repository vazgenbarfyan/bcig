import * as React from "react";
import {useState} from "react";
import {Hidden, Toolbar, Typography,} from "@mui/material";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import {useTranslation} from "react-i18next";
import MiddleHeader from "./MiddleHeader";
import LanguageButton from "./LanguageButton";

export default function ButtonAppBar() {
    const {t, i18n} = useTranslation();
    const [open, setOpen] = useState(false);

    return (
        <>
            <Toolbar
                style={{
                    display: "grid",
                    flexDirection: "row",
                    gridTemplateColumns: "1fr auto auto",
                    justifyItems: "right",
                    gap: "10px",
                    backgroundColor: "#138B43"
                }}
            >
                <LocalPhoneIcon/>
                <Typography
                    variant="h6"
                    component="div"
                    sx={{flexGrow: 1}}
                    style={{padding: "1px", fontSize: "15px", textAlign: "right"}}
                >
                    {t("hotline")} +374 10 651-631, info@cep.am
                </Typography>

                <Hidden lgDown>
                    <LanguageButton color={'white'}/>
                </Hidden>
            </Toolbar>
            <MiddleHeader/>
        </>
    );
}
