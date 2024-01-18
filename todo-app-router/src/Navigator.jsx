
import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import TodoModule from "./modules";

const Navigator = () => {
    return ( 
        <BrowserRouter>
            <Routes>
                <Route path="/todos/*" element={<TodoModule />} />
                <Route path="*" element={<p>404 Not Found</p>} />
            </Routes>
        </BrowserRouter>
     );
}
 
export default Navigator;