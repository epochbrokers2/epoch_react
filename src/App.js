import React from "react";
import "./assets/css/icomoon/style.css";
import "../src/assets/swipebox/compiled-css/swipebox.css";
import { menuItems } from "./menuItems";
import Routing from "./Header/Routing";

function App() {
    return (
        <React.Fragment>
            <Routing menuItems={menuItems} />
        </React.Fragment>
    );
}

export default App;
