import React from "react";
import { BrowserRouter as Router, Routes, Route,useLocation  } from "react-router-dom";
import "../assets/css/compiled-css/App.css"
import Header from "./Header";
import SubRouting from "./SubRouting";
import Home from "../pages/Home/Home"
import About from "../pages/About/About";
import Services from "../pages/About/Services";
import Why_Epoch from "../pages/About/Why_Epoch"
import About_advantage from "../pages/About/About_advantage"
import Our_Partner from "../pages/Partner/Partner"
import Policy from "../pages/Policy/Policy"
import Industry from "../pages/Industry/Industry"
import Product from "../pages/Product/Product"
import Gallery from "../pages/Gallery/Gallery"
import Blogs from "../pages/Blogs/Blogs"
import Login from "../pages/Login/Login"
import L_English from "../pages/Language/L_English"
import L_Hindi from "../pages/Language/L_Hindi"

function Routing({menuItems}) {
    // console.log(menuItems);   
    
    return (
        <>
            <Router>
                <Header menuItems={menuItems} />
                <Routes>
                    {/* {
                        menuItems.submenu ? (
                            <>
                            {console.log(menuItems)}
                            <SubRouting submenu = {menuItems.submenu}  />
                            </>
                        ) : (
                            <>
                               
                                <Route path={menuItems.url} element={`<${menuItems.component}/>`} />
                            </>
                            
                        )
                    } */}
                    <Route path="/" element={<Home />} />
                    <Route exact path="/about-us" element={<About />} />
                    <Route  path="/about-us/our-services" element={<Services />} />
                    <Route  path="/about-us/why-epoch" element={<Why_Epoch />} />
                    <Route  path="/about-us/epoch-advantage" element={<About_advantage />} />
                    <Route  path="/our-partners/*" element={<Our_Partner />} />
                    <Route  path="/policies/*" element={<Policy />} />
                    <Route  path="/industries/*" element={<Industry />} />
                    <Route  path="/product/*" element={<Product />} />
                    <Route  path="/gallery" element={<Gallery />} />
                    <Route  path="/blogs" element={<Blogs />} />
                    <Route  path="/login" element={<Login />} />
                    <Route  path="/language/en" element={<L_English />} />
                    <Route  path="/language/hi" element={<L_Hindi />} />

                    {/* <Route path="/policies/property/:slug" element={<Policy />} /> */}
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
