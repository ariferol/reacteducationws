import React, { useEffect, useContext } from "react";
import { Routes, Route } from "react-router-dom";
import UserList from "./UserList";
import CreateUser from "./CreateUser";
import EditUser from "./EditUser";

const UserRoutes: React.FC = () => {
    
    
    return (
        <Routes>
            <Route index element={<UserList />} />
            <Route path="/kullanici-ekle" element={<CreateUser />} />
            <Route path="/:id" element={<EditUser />} />
            <Route path="*" element={<p>404</p>} />
        </Routes>
    );
};

export default UserRoutes;
