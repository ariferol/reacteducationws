import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { TodoContext } from "../Business/TodoProvider";

const TodoForm = () => {
    const navigate = useNavigate();
    const { addTodo } = useContext(TodoContext);
    const onSubmit = (e) => { 
        const data = new FormData(e.currentTarget);
        e.preventDefault();
        const title = data.get("title");
        const completed = data.get("completed") === "on" ? true : false;
        addTodo({
            title: title,
            completed: completed,
        })
        .then(() => {
            navigate("/");
        });        
    };

    return (
        <form onSubmit={onSubmit}>
            <label>Todo Adı</label>
            <input
                className="form-control"
                type="text"
                name="title"
                placeholder="Todo Adı"
            />
            <label>Todo Tamamlandı</label>
            <input className="form-check-input" type="checkbox" name="completed" />
            <button className="btn btn-success d-block" type="submit">
                Add
            </button>
        </form>
    );
};

export default TodoForm;
