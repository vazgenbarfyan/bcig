import React from "react";
import i18n from "./i18n";

const Languages = () => {
  const handleChange = (lng) => {
    let saveLanguage = JSON.stringify(lng);
    i18n.changeLanguage(lng);

    localStorage.setItem("lng", saveLanguage);
  };

  let currentLanguage = JSON.parse(localStorage.getItem("lng"));

  return (
    <nav className="container">
      <div className="row">
        <div className="col-2">
          <select
            className="custom-select"
            onChange={handleChange}
            value={currentLanguage}
            style={{
              backgroundColor: aquamarine,
              display: flex,
              textAlign: justify,
            }}
          >
            <option value="en">English</option>
            <option value="am">Armenian</option>
            <option value="ru">Russian</option>
          </select>
        </div>
      </div>
    </nav>
  );
};

export default Languages;
