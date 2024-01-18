import React, { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { TodoContext } from "../Business/TodoProvider";

const TodoEditForm = () => {
    const navigate = useNavigate();
    const { id } = useParams(); // id parametresini alıyoruz
    const { putTodo, getTodo, state } = useContext(TodoContext);
    const { todo } = state;
    const validationSchema = Yup.object().shape({
        title: Yup.string().required("Zorunlu alan"),
        completed: Yup.boolean(),
    });
    const formik = useFormik({
        initialValues: {
            title: todo.title,
            completed: todo.completed,
        },
        validationSchema,
        enableReinitialize: true,
        onSubmit: (values) => {
            putTodo(id, {
                title: values.title,
                completed: values.completed,
            }).then(() => navigate("/todos"));
        },
    });

    useEffect(() => {
        getTodo(id);
    }, []);

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
            <input
                className="form-check-input"
                type="checkbox"
                name="completed"
                defaultValue={formik.values.completed}
                onChange={formik.handleChange}
            />
            <button className="btn btn-success d-block" type="submit">
                Güncelle
            </button>
            <button className="btn btn-primary my-4" type="button" onClick={() => navigate("/todos")}>Geri</button>
        </form>
    );
};

export default TodoEditForm;
