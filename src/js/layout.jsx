import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./component/navbar";
import { Home } from "./views/home";
import { Favorites } from "./views/favorites";

const Layout = () => (
   <BrowserRouter>
       <Navbar />
       <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/favorites" element={<Favorites />} />
       </Routes>
   </BrowserRouter>
);

export default Layout;
