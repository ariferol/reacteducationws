import React, { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { TodoContext } from "../Business/TodoProvider";

const TodoEditForm = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const { addTodo, getTodo, state } = useContext(TodoContext);
    console.log("id", id);
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

    useEffect(() => {
        getTodo(id);
    }, []);

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

export default TodoEditForm;
