import "./assets/css/compiled-css/App.css"
import Home from './pages/Home/Home';
import "../src/assets/swipebox/compiled-css/swipebox.css"
import Header from './Header/Header';
import React from 'react';

function App() {
  return (
    <React.Fragment>
      <Header />
      {/* <Home /> */}
    </React.Fragment>
  );
}

export default App;
