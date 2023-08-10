import React, {useRef, useState} from "react";
import {useTranslation} from "react-i18next";
import emailsJs from "@emailjs/browser";
import {useForm} from "react-hook-form";
import {makeStyles} from "tss-react/mui";
import ContactSection from "./ContactSection";

const useStyles = makeStyles((theme) => ({
    logoLg: {
        display: "none",
        [theme.breakpoints.up("sm")]: {
            display: "block",
        },
    },
    logoSm: {
        display: "block",
        [theme.breakpoints.up("sm")]: {
            display: "none",
        },
    },
}));

const MainContact = () => {
    const {t, i18n} = useTranslation();
    const [senderName, setSenderName] = useState("");
    const [senderEmail, setSenderEmail] = useState("");
    const [message, setMessage] = useState("");
    const form = useRef();
    const {register, handleSubmit} = useForm();
    const classes = useStyles();

    const onSubmit = (data) => console.log(data);

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
            <ContactSection/>
        </>
    );
};

export default MainContact;
