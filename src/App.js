import React from 'react';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import GlobalStyle from "./globalStyles";

function App(props) {
    return (
        <div>
            <GlobalStyle/>
            <Navbar/>
            <Hero/>
        </div>
    );
}

export default App;