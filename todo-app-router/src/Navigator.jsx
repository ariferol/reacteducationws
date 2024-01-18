import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TodoModule from "./modules";

const Navigator = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/todos/*" element={<TodoModule />} />
                <Route
                    path="*"
                    element={
                        <div>
                            <h2>Aradığınız Sayfa Bulunamadı</h2>
                        </div>
                    }
                />
            </Routes>
        </BrowserRouter>
    );
};

export default Navigator;
