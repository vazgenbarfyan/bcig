import React, { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import emailsJs from "@emailjs/browser";
import Map from "./Map";
import MainContact from "./MainContact";

const Contacts = () => {
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

  const sendMail = (e) => {
    e.preventDefault();

    emailsJs
      .sendForm(
        "service_noipr0n",
        "template_m5sgrtc",
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
    <>
      <MainContact />
      <Map />
    </>
  );
};

export default Contacts;
