import React, { useEffect, useState } from "react";
import { Container, Paper } from "@mui/material";
import { useTranslation } from "react-i18next";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useNavigate, useParams } from "react-router";
import ReactLoading from "react-loading";
import { fetchSingleData } from "../../../api/beneficiariesApi";

const Announcement = () => {
  
    const params = useParams();
    const { i18n } = useTranslation();

    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState(true);
    const [singleData, setSingleData] = useState(null);

    const categories = {
      hy: 151,
      en: 149,
      ru: 366,
    }

    useEffect(() => {
        setIsLoading(true);
        const newLanguage = i18n.language === "hy" ? "am" : i18n.language;
        const newSlug = params.announcement.slice(0, -2) + newLanguage;
        navigate("/procurement/announcements/" + newSlug);

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

  return (
    <Container
      component={Paper}
      elevation={5}
      sx={{pt:3,pb:3}}
      style={{
        background: "rgb(90 254 156 / 14%)",
        border: "1px solid #0080007d",
      }}
    >
      <Box sx={{ width: "100%", maxWidth: "100%" }}>
        <Typography variant="h6" gutterBottom>
          <div className="title" dangerouslySetInnerHTML={{__html: singleData.title.rendered}} />
        </Typography>
        <div
          dangerouslySetInnerHTML={{__html: singleData.content.rendered}}
        />
      </Box>
    </Container>
  );
};

export default Announcement;