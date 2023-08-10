import {Container, Paper} from "@mui/material";
import React, {useEffect} from "react";
import {useTranslation} from "react-i18next";
import {useParams} from "react-router";
import {itemData} from "./ItemData";
import gsap from "gsap";
import './ProjectPage.css';
import Typography from "@mui/material/Typography";

const Project = (props) => {
    const {id} = useParams();
    const {t, i18n} = useTranslation();

    useEffect(() => {
        const divs = document.querySelectorAll(".project-info");
        gsap.set(divs[1], {x: 100, opacity: 1});

        gsap
            .timeline({defaults: {duration: 3}})
            .add("three")
            .to(divs[0], {y: 0, x: 25, opacity: 1}, "three")
            .to(divs[1], {y: 0, x: 0, opacity: 0.05}, "three")
            .to(divs[2], {y: 0, x: 25, opacity: 0.05}, "three")
            .to(divs[3], {y: 0, x: 0, opacity: 0.05}, "three")
            .to(divs[4], {y: 0, x: 25, opacity: 0.07}, "three")
            .to(divs[5], {y: 0, x: 25, opacity: 0.07}, "three")
            .to(divs[6], {y: 0, x: 0, opacity: 0.07}, "three")
            .to(divs[7], {y: 0, x: 25, opacity: 1.02}, "three")
            .to(divs[8], {y: 0, x: 0, opacity: 1.02}, "three");
    });

    const data = itemData.find((i) => {
        return i.key === id;
    });

    const ShowProjectAreas = () => {
        if (
            !t(`allCurrentProject.${data.key}.areas`).includes("allCurrentProject")
        ) {
            return (
                <div>
                    <h3 className='infoLabel'>{t("projectAreas")}</h3>
                    <h4 className='infoValue'>{t(`allCurrentProject.${data.key}.areas`)}</h4>
                </div>
            );
        }
    };

    const ShowStartDate = (props) => {
        if (
            !t(`allCurrentProject.${data.key}.startDate`).includes(
                "allCurrentProject"
            )
        ) {
            return (
                <div>
                    <h3 className='infoLabel'>{t("projectStartDate")}</h3>
                    <h4 className='infoValue'>{t(`allCurrentProject.${data.key}.startDate`)}</h4>
                </div>
            );
        }
    };

    return (
        <>
            <Container
                component={Paper}
                elevation={5}
                style={{
                    padding: 15,
                    marginTop: "10%",
                    lineHeight: "3em",
                    background: "rgba(255, 255, 128, .5)",
                }}
            >
                <div className="project-info">
                    <Typography variant={'h4'}>{t(`allCurrentProject.${data.key}.currentProject`)}</Typography>

                    <h3 className='infoLabel'>{t("projectFunding")}</h3>

                    <h4 className='infoValue'>{t(`allCurrentProject.${data.key}.funding`)}</h4>

                    <h3 className='infoLabel'>{t("projectBudget")}</h3>

                    <h4 className='infoValue'>{t(`allCurrentProject.${data.key}.budget`)}</h4>

                    <h3 className='infoLabel'>{t("projectDates")}</h3>

                    <h4 className='infoValue'>{t(`allCurrentProject.${data.key}.dates`)}</h4>

                    <ShowStartDate/>
                    <ShowProjectAreas/>

                    <h3 className='infoLabel'>{t("projectObjective")}</h3>

                    <h4 className='infoValue'>
                        {t(`allCurrentProject.${data.key}.objective`)}
                    </h4>

                    <h3>{t("projectActivities")}</h3>

                    <div
                        style={{paddingLeft: "40px", lineHeight: "40px"}}
                        dangerouslySetInnerHTML={{
                            __html: t(`allCurrentProject.${data.key}.projectActivities`, {
                                interpolation: {escapeValue: false},
                            }),
                        }}
                    />
                    <h3 className='infoLabel'>{t("projectDocuments")}</h3>
                    <h4 className='infoValue'>{t("projectDocumentsDescription")}</h4>
                </div>
            </Container>
        </>
    );
};

export default Project;
