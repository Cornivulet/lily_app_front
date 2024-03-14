import React from 'react';
import {Route, Routes} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
const App = () => {
    return (
            <div>
                <Navbar/>
                <Routes>
                    {/*Guest section*/}
                    <Route path="/" element={<Home/>}/>
                </Routes>
            </div>

  );
}

export {App};
