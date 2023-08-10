import React from "react";
import { useTranslation } from "react-i18next";
import { Container, Paper } from "@mui/material";

const Priorities = () => {
  const { t, i18n } = useTranslation();

  return (
    <Container
      component={Paper}
      elevation={5}
      sx={{pt:3,pb:3}}
    >
      <div
        style={{
          textAlign: "justify",
        }}
        dangerouslySetInnerHTML={{
          __html: t("our-priorities", {
            interpolation: { escapeValue: false },
          }),
        }}
      />
    </Container>
  );
};

export default Priorities;
