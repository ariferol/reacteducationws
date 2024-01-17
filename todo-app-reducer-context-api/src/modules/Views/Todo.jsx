import React, { useContext } from "react";
import PropTypes from "prop-types";

const Todo = ({ id, title }) => {
    return (
        <li className="d-flex justify-content-between p-4 m-4 border">
            <h3>{title}</h3>
            <section>
                <button
                    className="btn btn-danger mx-4"
                    type="button"
                    onClick={() => console.log("Sil")}
                >
                    Sil
                </button>
                <button
                    className="btn btn-warning"
                    type="button"
                    onClick={() => console.log("düzenle")}
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
