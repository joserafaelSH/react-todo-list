import React from "react";
import "./App.css";
import { HomePage } from "./Pages/HomePage/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainPage } from "./Pages/MainPage/MainPage";
import UserContext from "./Contexts/UserContext";
import { RegisterPage } from "./Pages/RegisterPage/RegisterPage";

function App() {
  return (
    <UserContext>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/homePage" element={<HomePage />} />
          <Route path="/mainPage" element={<MainPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </BrowserRouter>
    </UserContext>
  );
}

export default App;
