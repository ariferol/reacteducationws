import React, { useContext, useEffect } from "react";
import { TodoContext } from "../Business/TodoProvider";
import { Todo, Loader } from ".";

const TodoList = () => {
    const { state, getAllTodos }= useContext(TodoContext);
    const { todos, loading } = state;

    useEffect(() => {
        getAllTodos();
    }, []);

    if(loading) {
        return <Loader />;
    }

    return (
        <ul>
            {todos.map((todo) => (
                <Todo key={todo.id} id={todo.id} title={todo.title} />
            ))}
        </ul>
    );
};

export default TodoList;
