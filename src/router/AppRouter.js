import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from '../components/navbar/Navbar'
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Login from "../pages/login/Login";
import NotFound from "../pages/notFound/NotFound";

const AppRouter = () => {
  return (
    <div className="AppRouter">
    <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    </BrowserRouter>
    </div>
  )
}
export default AppRouter;