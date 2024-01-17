import React, { useContext, useEffect } from "react";
import { TodoContext } from "../Business/TodoProvider";
import { Todo } from "./";

const TodoList = () => {
    const { state, getAllTodos }= useContext(TodoContext);
    const { todos } = state;

    useEffect(() => {
        getAllTodos();
    }, []);

    return (
        <ul>
            {todos.map((todo) => (
                <Todo key={todo.id} id={todo.id} title={todo.title} />
            ))}
        </ul>
    );
};

export default TodoList;
