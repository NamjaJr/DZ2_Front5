import React from "react";
import { Route, BrowserRouter, Routes, useParams } from "react-router-dom";
import UsersPage from "./pages/usersPage/UsersPage";
import { useSelector } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css'
import {findAllByDisplayValue} from "@testing-library/react";
import Menu from "./components/Menu";
import MainPage from "./pages/mainPage/MainPage";

const App = () => {


  return (
   <BrowserRouter>
       <Menu/>
       <Routes>
           <Route index element={<MainPage/>}/>
           <Route path= {'/users'} element = {<UsersPage/>}/>
           <Route/>
           <Route/>
       </Routes>
   </BrowserRouter>
  );
};




export default App;
