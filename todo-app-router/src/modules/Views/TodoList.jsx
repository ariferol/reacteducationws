import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { TodoContext } from "../Business/TodoProvider";
import { Todo, Loader } from ".";

const TodoList = () => {
    const navigate = useNavigate();
    const { state, getAllTodos } = useContext(TodoContext);
    const { todos, loading } = state;

    useEffect(() => {
        getAllTodos();
    }, []);

    if (loading) {
        return <Loader />;
    }

    return (
        <>
            <ul>
                {todos.map((todo) => (
                    <Todo key={todo.id} id={todo.id} title={todo.title} />
                ))}
            </ul>
            <button
                className="btn btn-success my-4"
                type="button"
                onClick={() => navigate("/todos/ekle")}
            >
                Yeni Todo Ekle
            </button>
        </>
    );
};

export default TodoList;
