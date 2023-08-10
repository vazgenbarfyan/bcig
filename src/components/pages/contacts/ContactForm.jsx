import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";

const FormStyles = styled.div`
  width: 100%;
  .form-group {
    width: 100%;
    margin-bottom: 2rem;
  }
  label {
    font-size: 1rem;
  }
  input,
  textarea {
    width: 100%;
    font-size: 1rem;
    padding: 1.2rem;
    background-color: gray;
    outline: none;
    border: none;
    border-radius: 4px;
    margin-top: 1rem;
  }
  textarea {
    min-height: 250px;
    resize: vertical;
  }
  button[type="submit"] {
    background-color: gray;
    color: var(--black);
    font-size: 1rem;
    display: inline-block;
    outline: none;
    border: none;
    padding: 1rem 0.5rem;
    border-radius: 8px;
    cursor: pointer;
  }
`;

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
              {t("placeholderName")}
              <input
                type="text"
                id="senderName"
                name="senderName"
                value={senderName}
                onChange={handleName}
                required
              />
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="email">
              {t("placeholderEmail")}
              <input
                type="email"
                name="senderEmail"
                value={senderEmail}
                onChange={handleEmail}
              />
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="message">
              {t("placeholderMessage")}
              <textarea
                name="message"
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
