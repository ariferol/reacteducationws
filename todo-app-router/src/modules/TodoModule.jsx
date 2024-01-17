import React from "react";
import { Routes, Route } from "react-router-dom";
import { TodoList, TodoForm, TodoEditForm } from "./Views";
import { TodoProvider } from "./Business/TodoProvider";

const TodoModule = () => {
    return (
        <TodoProvider>
            <Routes>
                <Route index element={<TodoList />} />
                <Route path="/ekle" element={<TodoForm />} />
                <Route path="/:id" element={<TodoEditForm />} />
            </Routes>
        </TodoProvider>
    );
};

export default TodoModule;
