import React from "react";
import SectionTitle from "./SectionTitle";
import styled from "styled-components";
import ContactInfoItem from "./ContactInfoItem";
import ContactForm from "./ContactForm";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { useTranslation } from "react-i18next";

export default function ContactSection() {
  const { t, i18n } = useTranslation();
  return (
    <ContactSectionStyle>
      <div className="container">
        <SectionTitle />
        <div className="contactSection__wrapper">
          <div className="left">
            <a href="tel:+374 10 651631" style={{textDecoration: "none" }}>
              <ContactInfoItem icon={<LocalPhoneIcon />} text="+374 10 651-631" />
            </a>
            <ContactInfoItem
              icon={<MailOutlineIcon />}
              text="info@cep.am"
            />
            <ContactInfoItem icon={<LocationOnIcon />} text={t("street")} />
          </div>
          <div className="right">
            <ContactForm />
          </div>
        </div>
      </div>
    </ContactSectionStyle>
  );
}

const ContactSectionStyle = styled.div`
  .contactSection__wrapper {
    display: flex;
    gap: 5rem;
    margin-top: 2rem;
    align-items: center;
    justify-content: space-between;
    position: relative;
  }
  .contactSection__wrapper::after {
    position: absolute;
    content: "";
    width: 2px;
    height: 80%;
    background-color: rgb(19, 139, 67);
    left: 50%;
    transform: translateX(-50%);
  }
  .left{
    max-width: 25em;
  }

  @media only screen and (max-width: 768px) {
    .contactSection__wrapper {
      flex-direction: column;
      align-items: stretch;
    }
    .contactSection__wrapper::after {
      display: none;
    }
    .left,
    .right {
      max-width: 100%;
    }
    .right {
      padding: 0rem 2rem 2rem;
    }
  }
`;