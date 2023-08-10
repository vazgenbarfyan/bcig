import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

const SectionTitleStyle = styled.div`
  text-align: center;
  p {
    font-family: "RobotoMono Regular";
    font-size: 1rem;
  }
  h2 {
    font-family: "Montserrat Bold";
    font-size: 4rem;
    margin-top: 0rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    text-align: center;
    p {
      font-size: 1.2rem;
    }
    h2 {
      font-size: 3.6rem;
    }
  }
`;

export default function SectionTitle() {
  const { t, i18n } = useTranslation();

  return (
    <SectionTitleStyle className="section-title">
      <h2>{t("contactWithUs")}</h2>
    </SectionTitleStyle>
  );
}
