import React from "react";
import PropTypes from "prop-types";

const Todo = ({id, title, onEdit, onDelete}) => {
    return (
        <li className="d-flex justify-content-between p-4 m-4 border">
            <h3>{title}</h3>
            <section>
                <button className="btn btn-danger mx-4" type="button" onClick={() => onDelete(id)}>Sil</button>
                <button className="btn btn-warning" type="button" onClick={() => onEdit(id)}>Düzenle</button>
            </section>
        </li>
    );
};

Todo.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    onEdit: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
};

export default Todo;