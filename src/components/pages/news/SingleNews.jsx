import React, { useState, useEffect } from "react";

import { useParams } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import ReactLoading from "react-loading";
import { useNavigate } from "react-router-dom";

import { fetchSingleNews } from "../../../api/newsApi";

const SingleNews = () => {
    const params = useParams();
    const { t, i18n } = useTranslation();

    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState(true);
    const [singleNewsData, setSingleNewsData] = useState(null);

    useEffect(() => {
        setIsLoading(true);
        const newLanguage = i18n.language === "hy" ? "am" : i18n.language;
        const newSlug = params.id.slice(0, -2) + newLanguage;
        navigate("/news/news/" + newSlug);

        fetchSingleNews(i18n.language, newSlug)
            .then((data) => setSingleNewsData(data[0]))
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

    if (!singleNewsData){
        return (
            <div className="nothing">
                <h1>{t('nothingFound')}</h1>
            </div>
        )
    }

    return (
        <div className="singleNews" key={singleNewsData.id}>
            <h1
                dangerouslySetInnerHTML={{__html: singleNewsData.title.rendered}}
            />
            <div
                dangerouslySetInnerHTML={{__html: singleNewsData.content.rendered}}
            />
        </div>
    );
};

export default SingleNews;
