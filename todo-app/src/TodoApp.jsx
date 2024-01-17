import React, { useEffect } from "react";

import useFetch from "./hooks/UseFetch";
import Todo from "./components/todo";
// style modül haline getirerek kullanmak için. bu yapı ile css class isimleri birbirine karışmaz ve çaılması daha zor olur.

const TodoApp = () => {
    const [response, loading, error] = useFetch("http://localhost:3009/todos");

    return (
        <main className="container">
            <div className="row">
                <div className="col-12">
                    <h3>Todo Listesi</h3>
                    {loading ? (
                        <p class="placeholder-glow">
                            <span class="placeholder col-12"></span>
                        </p>
                    ) : (
                        <ul>
                            {response.map((todo) => (
                                <Todo
                                    key={todo.id}
                                    id={todo.id}
                                    title={todo.title}
                                />
                            ))}
                        </ul>
                    )}
                </div>
                <div className="col-12">
                    <form>
                        <label>Todo Adı</label>
                        <input
                            className="form-control"
                            type="text"
                            placeholder="Todo Adı"
                        />
                        <label>Todo Tamamlandı</label>
                        <input className="form-check-input" type="checkbox" />
                        <button
                            className="btn btn-success d-block"
                            type="button"
                        >
                            Add
                        </button>
                    </form>
                </div>
                {error && <div className="alert alert-danger">{error}</div>}
            </div>
        </main>
    );
};

export default TodoApp;