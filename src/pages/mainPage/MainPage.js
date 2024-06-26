import React, {useState} from 'react';
import {Container} from "@mui/material";
import TabsComponent from "../../components/Tabs";
import tabs from "../../components/Tabs";
import {Swiper} from "swiper/react";
import {SwiperComponent} from "../../components/Swiper";
import {useDispatch,useSelector} from "react-redux";
import Frontend from "../../components/Frontend";
import Backend from "../../components/Backend";
import Ios from "../../components/Ios";
import Android from "../../components/Android";
import UxUi from "../../components/UxUi";

const VALUES = {
    frontend:'frontend',
    backend: 'backend',
    ios: 'ios',
    android: 'android',
    UxUi: 'UxUi'
}

const GetCategories = ({tab}) => {
    switch (tab) {
        case  VALUES.frontend: {
            return<Frontend/>
        }case VALUES.backend: {
            return<Backend/>
        }case VALUES.ios: {
            return<Ios/>
        }case VALUES.android: {
            return<Android/>
        }case VALUES.UxUi:
            return <UxUi/>
        default: return <></>
    }
}

function MainPage() {

    const categoriesSelect = [
        {value: VALUES.frontend, label: 'Frontend'},
        {value: VALUES.backend, label: 'Backend'},
        {value: VALUES.android, label: 'Ios'},
        {value: VALUES.ios, label: 'Android'},
        {value: VALUES.UxUi, label: 'Ux/Ui'}
    ]

    const [value, setValue] = useState(categoriesSelect?.[0].value)

    const swiperImage = [
        {url: ''},
        {url: ''},
        {url: ''},
        {url: ''},
        {url: ''},
        {url: ''}
    ]

    return (
        <Container>
            <TabsComponent categoriesSelect={categoriesSelect} value={value} setValue={setValue}/>
            <GetCategories tab={value}/>
            {/*<SwiperComponent swiperImage={swiperImage}/>*/}
            <Swiper/>
        </Container>
    );
}

export default MainPage;