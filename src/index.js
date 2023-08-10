import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import i18n from "i18next";
import {initReactI18next} from "react-i18next";
import {CssBaseline} from "@mui/material";
import englishTranslations from "./translations/english.json";
import russianTranslations from "./translations/russian.json";
import armenianTranslations from "./translations/armenian.json";
import {ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client';

i18n.use(initReactI18next).init({
    resources: {
        en: englishTranslations,
        ru: russianTranslations,
        hy: armenianTranslations,
    },
    lng: localStorage.getItem("lng"),
    fallbackLng: "en",
    interpolation: {
        escapeValue: false,
    },
});
export const BACKEND_URI = 'http://localhost:1337'

const client = new ApolloClient({
    uri: BACKEND_URI + '/graphql',
    cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(
    <React.StrictMode>
        <ApolloProvider client={client}>
            <CssBaseline/>
            <App/>
        </ApolloProvider>
    </React.StrictMode>
);
