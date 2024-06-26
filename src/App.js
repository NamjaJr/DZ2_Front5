import React from "react";
import MainPage from "./pages/mainPage/MainPage";
import TabsSlice from "./store/TabsSlice";

const App = () => {

  return (
   <div className='App'>
     {/*<MainPage/>*/}
       <TabsSlice/>
   </div>
  );
};



export default App;
