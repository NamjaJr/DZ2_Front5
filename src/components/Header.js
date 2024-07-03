// Header.js
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import AboutPage from "../pages/aboutPage/AboutPage";
import MainPage from "../pages/mainPage/MainPage";
import UserPage from "../pages/userPage/UserPage";
import TabsComponent from "./Tabs";
import { Container } from "@mui/material";

const VALUES = {
    aboutPage: 'aboutPage',
    mainPage: 'mainPage',
    userPage: 'userPage'
};

const GetCategories = ({ tab }) => {
    switch (tab) {
        case VALUES.aboutPage: {
            return <AboutPage />;
        }
        case VALUES.mainPage: {
            return <MainPage />;
        }
        case VALUES.userPage: {
            return <UserPage />;
        }
        default:
            return <></>;
    }
};

const Header = () => {
    const categoriesSelect = [
        { value: VALUES.aboutPage, label: 'AboutPage' },
        { value: VALUES.mainPage, label: 'MainPage' },
        { value: VALUES.userPage, label: 'userPage' },
    ];

    const [value, setValue] = useState(categoriesSelect?.[0].value);
    const requestState = useSelector((state) => state.request);

    const handleTabChange = (newValue) => {
        if (newValue === VALUES.mainPage && !requestState.aboutRequestSent) {
            alert('Сперва осуществите запрос на странице AboutPage');
            return;
        }
        if (newValue === VALUES.userPage && !requestState.mainRequestSent) {
            alert('Сперва осуществите запрос на странице MainPage');
            return;
        }
        setValue(newValue);
    };

    return (
        <div>
            <Container>
                <TabsComponent categoriesSelect={categoriesSelect} value={value} setValue={handleTabChange} />
                <GetCategories tab={value} />
            </Container>
        </div>
    );
};

export default Header;

