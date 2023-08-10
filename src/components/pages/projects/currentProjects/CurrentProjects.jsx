import * as React from "react";
import {itemData} from "./ItemData";
import {Link} from "react-router-dom";
import ImageListItem from "@mui/material/ImageListItem";
import {useTranslation} from "react-i18next";
import Paper from "@mui/material/Paper";
import ImageList from "@mui/material/ImageList";

const CurrentProjects = () => {
    const {t, i18n} = useTranslation();

    return (
            <ImageList
                gap={100}
                style={{
                    display: 'flex',
                    flexWrap: "wrap",
                    justifyContent: "center",
                }}
            >
                {(itemData || []).map((item) => (
                    <Paper square key={item.key} elevation={15}>
                        <Link to={"/projects/current-projects/" + item.key}>
                            <ImageListItem
                                key={item.img}
                                style={{
                                    position: "relative",
                                }}
                            >
                                <div
                                    style={{
                                        position: "absolute",
                                        left: 7,
                                        top: 5,
                                        background: "white",
                                        opacity: "0.70",
                                        color: "black",
                                        fontWeight: "bold",
                                        borderRadius: "3px",
                                        padding: "3px 5px",
                                    }}
                                >
                                    <div>{t(`allCurrentProject.${item.key}.projectTag`)}</div>
                                </div>
                                <img
                                    style={{
                                        width: "550px",
                                        height: "500px",
                                    }}
                                    src={`${item.img}?w=248&fit=crop&auto=format`}
                                    srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                    alt={item.title}
                                />
                                <div
                                    style={{
                                        position: "absolute",
                                        left: 7,
                                        bottom: 30,
                                        right: 7,
                                        background: "white",
                                        opacity: "0.70",
                                        color: "black",
                                        borderRadius: "3px",
                                        fontWeight: "bold",
                                        padding: "3px 5px",
                                    }}
                                >
                                    <div>{t(`allCurrentProject.${item.key}.currentProject`)}</div>
                                </div>
                            </ImageListItem>
                        </Link>
                    </Paper>
                ))}
            </ImageList>
    );
};

export default CurrentProjects;
