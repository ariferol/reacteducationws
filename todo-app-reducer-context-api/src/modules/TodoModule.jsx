import React from "react";
import { TodoList } from "./Views";
import { TodoProvider } from "./Business/TodoProvider";

const TodoModule = () => {
    const loading = false;
    const response = [{
        id: 0,
        title: "Todo 1",
        completed: false
    }];
    const error = null;

    return (
        <TodoProvider>
            <main className="container">
            <div className="row">
                <div className="col-12">
                    <h3>Todo Listesi</h3>
                    {loading ? (
                        <p class="placeholder-glow">
                            <span class="placeholder col-12"></span>
                        </p>
                    ) : (
                        <TodoList />
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
        </TodoProvider>
    );
};

export default TodoModule;
