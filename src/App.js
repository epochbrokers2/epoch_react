import React from "react";
import "./assets/css/compiled-css/App.css";
import "./assets/css/icomoon/style.css";
import Home from "./pages/Home/Home";
import "../src/assets/swipebox/compiled-css/swipebox.css";
import Header from "./Header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Overview from "./pages/About/Overview";
import { menuItems } from "./menuItems";
import Page from "./Header/Page";

function App() {
    return (
        <React.Fragment>
            <Router>
                <Header menuItems={menuItems} />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about-us" element={<Overview />} />
                    <Route path=":slug" element={<Page />} />
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
            {/* <Home /> */}
        </React.Fragment>
    );
}

export default App;
