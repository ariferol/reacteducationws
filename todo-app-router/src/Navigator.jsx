
import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import TodoModule from "./modules";

const Navigator = () => {
    return ( 
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<TodoModule />} />
                <Route path="/ekle" element={<p>about</p>} />
                <Route path="*" element={<p>404</p>} />
            </Routes>
        </BrowserRouter>
     );
}
 
export default Navigator;