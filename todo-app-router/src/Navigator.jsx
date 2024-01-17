
import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import TodoModule from "./modules";

const Navigator = () => {
    return ( 
        <BrowserRouter>
            <Routes>
                <Route path="*" element={<TodoModule />} />
            </Routes>
        </BrowserRouter>
     );
}
 
export default Navigator;