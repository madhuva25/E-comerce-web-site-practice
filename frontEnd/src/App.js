import React from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Home from "./component/Home";
import Login from "./component/Login";
import { Signup } from "./component/Signup";
import Heder from "./component/Heder";
import Iphone15 from "./component/Iphone15";
import MyAccount from "./component/MyAccount"
import Addmin from "./component/Admin"
import Footer from "./component/Footer";
import  Bnavbar2  from "./component/Bnavbar2";

import 'bootstrap/dist/css/bootstrap.min.css';
import Desktop1 from "./component/Desktop";


function App() {
  const location = useLocation();
  const showHeader = location.pathname !== "/admin/";
  
  const showFooter = location.pathname !== "/admin/";
  const showBnavbar2 = location.pathname !== "/admin/";
  

  return (
    <div className="App">
      {showHeader && <Heder/>}
      <Home/>
      
      <Routes>
        <Route path="/Home/:id" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/iphone15/:id" element={<Iphone15/>}/>
        <Route path="/myacount/:id" element={<MyAccount/>}/>
        <Route path="/admin/" element={<Addmin />}/>
        <Route path="/desktop/" element={<Desktop1 />}/>

      </Routes>

      {showFooter && <Footer/>}
      {showBnavbar2 && <Bnavbar2/>}

    </div>
  );
}

export default App;
