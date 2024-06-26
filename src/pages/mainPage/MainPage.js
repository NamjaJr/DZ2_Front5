// import React, {useState} from 'react';
// import {Container} from "@mui/material";
// import TabsComponent from "../../components/Tabs";
// import tabs from "../../components/Tabs";
// import {Swiper} from "swiper/react";
// import {SwiperComponent} from "../../components/Swiper";
// import {useDispatch,useSelector} from "react-redux";
//
// const VALUES = {
//     frontend:'frontend',
//     backend: 'backend',
//     ios: 'ios',
//     android: 'android',
//     UxUi: 'UxUi'
// }
//
// const GetCategories = ({tab}) => {
//     switch (tab) {
//         case  VALUES.frontend: {
//             return
//         }case VALUES.backend: {
//             return
//         }case VALUES.ios: {
//             return
//         }case VALUES.android: {
//             return
//         }case VALUES.UxUi:
//
//         default: return <></>
//     }
// }
//
// function MainPage() {
//
//     const categoriesSelect = [
//         {value: VALUES.frontend, label: 'Frontend'},
//         {value: VALUES.backend, label: 'Backend'},
//         {value: VALUES.android, label: 'Ios'},
//         {value: VALUES.ios, label: 'Android'},
//         {value: VALUES.UxUi, label: 'Ux/Ui'}
//     ]
//
//     const [value, setValue] = useState(categoriesSelect?.[0].value)
//
//     const swiperImage = [
//         {url: ''},
//         {url: ''},
//         {url: ''},
//         {url: ''},
//         {url: ''},
//         {url: ''}
//     ]
//
//     return (
//         <Container>
//             <TabsComponent categoriesSelect={categoriesSelect} value={value} setValue={setValue}/>
//             <GetCategories tab={value}/>
//             <SwiperComponent swiperImage={swiperImage}/>
//             <Swiper/>
//         </Container>
//     );
// }
//
// export default MainPage;