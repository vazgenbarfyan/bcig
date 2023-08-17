import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const { t, i18n } = useTranslation();
  const [senderName, setSenderName] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  const [message, setMessage] = useState("");

  const form = useRef();

  const handleName = (e) => {
    setSenderName(e.target.value);
  };
  const handleEmail = (e) => {
    setSenderEmail(e.target.value);
  };
  const handleMessage = (e) => {
    setMessage(e.target.value);
  };
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_0u56cx6",
        "template_x87iixg",
        form.current,
        "nkkLtA7GvAAfB3FQb"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div>
      <form ref={form} onSubmit={sendEmail}>
        <FormStyles>
          <div className="form-group">
            <label htmlFor="name">
              {t("contactName")}
              <input
                type="text"
                id="senderName"
                placeholder={t("placeholderName")}
                name="senderName"
                value={senderName}
                onChange={handleName}
                required
              />
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="email">
              {t("contactEmail")}
              <input
                type="email"
                placeholder={t("placeholderEmail")}
                name="senderEmail"
                value={senderEmail}
                onChange={handleEmail}
              />
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="message">
              {t("contactMessage")}
              <textarea
                name="message"
                placeholder={t("placeholderMessage")}
                value={message}
                onChange={handleMessage}
              />
            </label>
          </div>
          <button type="submit">{t("button")}</button>
        </FormStyles>
      </form>
    </div>
  );
}

const FormStyles = styled.div`
  width: 100%;
  .form-group {
    width: 100%;
    margin-bottom: 2rem;
  }
  label {
    font-size: 1rem;
    color: rgb(19, 139, 67);
    font-weight: bold;
  }
  input,
  textarea {
    width: 100%;
    font-size: 1rem;
    padding: 0;
    outline: none;
    border: none;
    margin-top: 0.5rem;
    border-bottom: 2px solid rgb(19, 139, 67);
  }
  textarea {
    min-height: 75px;
    resize: vertical;
  }
  button[type="submit"] {
    width: fit-content;
    background-color: rgb(19, 139, 67);
    color: white;
    padding: 0.75rem 2rem;
    margin: 0;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 1rem;
    border: 2px solid white;
    border-radius: 4px;
    cursor: pointer;
    transition: 0.3s;
  }
  button[type="submit"]:hover {
    background-color: white;
    border: 2px solid rgb(19, 139, 67);
    color: rgb(19, 139, 67);
  }
`;