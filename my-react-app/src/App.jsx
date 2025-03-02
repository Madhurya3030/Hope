import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './components/Header';
import Features from './components/Features';
import Causes from './components/Causes';
import Footer from './components/Footer';
import Carousel from './components/Carousel';
import RegisterStep1 from "./components/RegisterStep1";
import Home from "./components/Home";
import Reportcase from "./components/Reportcase.jsx";
import Login from "./components/Login.jsx";
function App() {
  return (
    <Router>
      <Routes>
        {/* Home Page with Full Layout */}
        <Route 
          path="/" 
          element={
            <>
              <Header />
              <Carousel />
              <Features />
              <Causes />
              <Footer />
            </>
          } 
        />

        {/* Registration Steps - Without Other Components */}
        <Route path="/registration1" element={<RegisterStep1 />} />
        <Route path="/homepage" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/report" element={<Reportcase />}
         />
      </Routes>
    </Router>
  );
}

export default App;
