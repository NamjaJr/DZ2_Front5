import React from "react";
import { Route, BrowserRouter, Routes, useParams } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import PostPage from "./pages/postPage/PostPage";
import Counter from "./components/Counter";
import RegisterPage from "./registerPage/RegisterPage";



const App = () => {

  return (
   <div className='App'>
      {/*<PostPage/>*/}
      {/* <Counter/>*/}
       <RegisterPage/>
   </div>
  );
};



export default App;
