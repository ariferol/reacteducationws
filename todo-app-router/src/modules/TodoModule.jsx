import React from "react";
import { Routes, Route } from "react-router-dom";
import { TodoList, TodoForm } from "./Views";
import { TodoProvider } from "./Business/TodoProvider";

const TodoModule = () => {
    const loading = false;
    const response = [{
        id: 0,
        title: "Todo 1",
        completed: false
    }];
    const error = null;

    return (
        <TodoProvider>
            <Routes>
                <Route index element={<TodoList />} />
                <Route path="/ekle" element={<TodoForm />} />
            </Routes>
        </TodoProvider>
    );
};

export default TodoModule;
