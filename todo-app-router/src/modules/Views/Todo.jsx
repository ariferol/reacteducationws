import React, { useContext } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { TodoContext } from "../Business/TodoProvider";

const Todo = ({ id, title }) => {
    const navigate = useNavigate();
    const { deleteTodo, getAllTodos } = useContext(TodoContext);

    return (
        <li className="d-flex justify-content-between p-4 m-4 border">
            <h3>{title}</h3>
            <section>
                <button
                    className="btn btn-danger mx-4"
                    type="button"
                    onClick={() => deleteTodo(id).then(() => getAllTodos())}
                >
                    Sil
                </button>
                <button
                    className="btn btn-warning"
                    type="button"
                    onClick={() => navigate("/todos/duzenle/" + id)}
                >
                    Düzenle
                </button>
            </section>
        </li>
    );
};

Todo.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};

export default Todo;
