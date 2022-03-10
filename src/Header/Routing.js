import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../assets/css/compiled-css/App.css"
import Header from "./Header";
import Home from "../pages/Home/Home"
import About from "../pages/About/About";
import Services from "../pages/About/Services";

function Routing({menuItems}) {
    return (
        <>
            <Router>
                <Header menuItems={menuItems} />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="about-us" element={<About />}>
                        <Route
                            path="/about-us/our-services"
                            element={<Services />}
                        />
                    </Route>
                    {/* <Route path="about-us" element={<About />} />
                    <Route path="/about-us/our-services" element={<Services />} /> */}
                    {/* <Route path=":slug" element={<Page />} /> */}
                    <Route
                        path="*"
                        element={
                            <main style={{ padding: "1rem" }}>
                                <p>There's nothing here!</p>
                            </main>
                        }
                    />
                </Routes>
            </Router>
        </>
    );
}

export default Routing;
