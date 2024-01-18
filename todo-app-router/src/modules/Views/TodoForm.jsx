import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { TodoContext } from "../Business/TodoProvider";

const TodoForm = () => {
    const navigate = useNavigate();

    const { addTodo } = useContext(TodoContext);

    const validationSchema = Yup.object().shape(
        {
            title: Yup.string().required("Zorunlu alan"),
            completed: Yup.boolean()
        }
    );
    const formik = useFormik({
        initialValues: {
            title: "",
            completed: false
        },
        validationSchema,
        onSubmit: values => {
            addTodo({
                title: values.title,
                completed: values.completed
            })
            .then(() => navigate("/todos"));
        },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <label>Todo Adı</label>
            <input
                className="form-control"
                type="text"
                name="title"
                placeholder="Todo Adı"
                defaultValue={formik.values.title}
                onChange={formik.handleChange}
            />
            <label>Todo Tamamlandı</label>
            <input className="form-check-input" type="checkbox" name="completed" defaultValue={formik.values.completed}
                onChange={formik.handleChange} />
            <button className="btn btn-success d-block" type="submit">
                Add
            </button>
        </form>
    );
};

export default TodoForm;
