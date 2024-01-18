import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { TodoList, TodoForm, TodoEditForm } from "./Views";
import { TodoProvider } from "./Business/TodoProvider";

const TodoModule = () => {
    const navigate = useNavigate();

    return (
        <TodoProvider>
            <Routes>
                <Route index element={<TodoList />} />
                <Route path="/ekle" element={<TodoForm />} />
                <Route path="/duzenle/:id" element={<TodoEditForm />} />
            </Routes>
            <button onClick={() => navigate("/todos/ekle")}>Yeni Todo Ekle</button>
        </TodoProvider>
    );
};

export default TodoModule;
