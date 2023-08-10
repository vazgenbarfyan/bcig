import React from "react";
import { FiFacebook, FiLinkedin, FiYoutube } from "react-icons/fi";
import { useTranslation } from "react-i18next";

const ContactInfo = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="footer" id="login">
      <div className="footer-links">
        <div className="footer-links-contact">
          <div className="icon">
            <h5>{t("contacts")}</h5>
            <i className="fa fa-phone"></i>
            <label htmlFor=""> +374 10 651-631</label>
            <i className="fa fa-envelope"></i>
            <label htmlFor="/"> info@cep.am antifraud@epiu.am</label>
          </div>
        </div>
        <div className="footer-links-logo">
          <div className="footer-links-icons">
            <a href="https://www.facebook.com/epiu.am/" target="_blank">
              <FiFacebook />
            </a>
            <a
              href="https://www.linkedin.com/in/epiu-state-agency-441a21155/"
              target="_blank"
            >
              <FiLinkedin />
            </a>
            <a
              href="https://www.youtube.com/channel/UCQ62HVkKIOiqa4GtSEn6QYw"
              target="_blank"
            >
              <FiYoutube />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
