import React, { useState, useEffect } from "react";

import { useParams } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import ReactLoading from "react-loading";
import { useNavigate } from "react-router-dom";

import { fetchSingleData } from "../../../api/beneficiariesApi";

const CapacityAssessmentInside = () => {
    const params = useParams();
    const { t, i18n } = useTranslation();

    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState(true);
    const [singleData, setSingleData] = useState(null);

    const categories = {
        hy: 370,
        en: 371,
        ru: 372,
    }

    useEffect(() => {
        setIsLoading(true);
        const newLanguage = i18n.language === "hy" ? "am" : i18n.language;
        const newSlug = params.assessment.slice(0, -2) + newLanguage;
        navigate("/achievements/capacity-assessment/" + newSlug);

        fetchSingleData(categories[i18n.language], newSlug)
            .then((data) => setSingleData(data[0]))
            .catch(() => console.log("turn on server"))
            .finally(() => setIsLoading(false));
    }, [i18n.language]);

    if (isLoading){
        return (
            <div className="loadingDiv">
                <ReactLoading type="spinningBubbles" color="green" />
            </div>
        )
    }

    if (!singleData){
        return (
            <div className="nothing">
                <h1>{t('nothingFound')}</h1>
            </div>
        )
    }

    return (
        <div className="singleNews" key={singleData.id}>
            <h1
                dangerouslySetInnerHTML={{__html: singleData.title.rendered}}
            />
            <div
                dangerouslySetInnerHTML={{__html: singleData.content.rendered}}
            />
            <p dangerouslySetInnerHTML={{__html: singleData.modified.slice(0, 10)}} />
        </div>
    );
};

export default CapacityAssessmentInside;