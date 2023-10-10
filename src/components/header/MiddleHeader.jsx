import * as React from "react";
import styled from "styled-components";
import {useTranslation} from "react-i18next";
import Typography from "@mui/material/Typography";
import { NavLink } from "react-router-dom";


const FlagWrapper = styled.div`
  position: relative;
  padding-left: 10px;

  &:after {
    content: "";
    width: 3px;
    height: 100%;
    background: linear-gradient(180deg, red 0 33%, #00f 33% 66%, orange 66% 100%);
    position: absolute;
    left: 0;
    top: 0;
    display: block;
  }

`;

export default function ProminentAppBar() {

    const {t, i18n} = useTranslation();

    return (
        <div
            style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                alignItems: "center",
                justifyItems: "center",
                padding: "10px",
                borderBottom: "1px solid lightgray"
            }}
        >
            <FlagWrapper>
                <a href=" http://www.mnp.am/">
                    <img src="/assets/gerb.png" alt="" title=""/>
                </a>
            </FlagWrapper>
            <div>
                <NavLink to="/" style={{textDecoration: 'none'}}>
                    <div className="header-title" style={{color: " black"}}>
                        <Typography variant={'h6'} sx={{
                            fontSize: "16px",
                            textAlign: "center",
                            fontWeight: 700
                        }} dangerouslySetInnerHTML={{
                            __html: t("headerTitle", {
                                interpolation: {escapeValue: false},
                            }),
                        }}/>
                    </div>
                </NavLink>
            </div>
            <div>
                <NavLink to="/">
                    <img
                        src="/assets/logo.png"
                        alt=""
                        style={{
                            width: "100px",
                            height: "100px",
                        }}
                    />
                </NavLink>
            </div>
        </div>
    );
}
