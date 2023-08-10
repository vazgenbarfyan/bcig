import React from "react";
import { useTranslation } from "react-i18next";

const Hotline = () => {
  const { t, i18n } = useTranslation();
  return (
    <div>
      <h5>{t("hotline")}</h5>
      <h6>
        «Թեժ գիծը հասանելի է յուրաքանչյուր աշխատանքային օր՝ ժամը 09։00-18։00։
      </h6>
    </div>
  );
};

export default Hotline;
