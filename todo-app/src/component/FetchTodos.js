import React, { Component } from "react";
class FetchTodos extends React.Component {
    state = {
        isLoading: true,
        users: [],
        error: null,
    };
    getFetchTodoList() {
        this.setState(
            {
                loading: true,
            },
            () => {
                fetch("http://localhost:3009/todos")
                    .then((res) => res.json())
                    .then((result) =>
                        this.setState({
                            loading: false,
                            users: result,
                        })
                    )
                    .catch(console.log);
            }
        );
    }
    componentDidMount() {
        this.getFetchTodoList();
    }
    render() {
        const { users, error } = this.state;
        return (
            <React.Fragment>
                <h1>All Todo List</h1>
                {error ? <p>{error.message} </p> : null}{" "}
                {users.map((user) => {
                    const { id, title, completed } = user;
                    return (
                        <div key={id}>
                            <p>Id: {id}</p>
                            <p>Title: {title}</p>
                            <p>Completed: {completed}</p>
                            <hr />
                        </div>
                    );
                })}{" "}
            </React.Fragment>
        );
    }
}
export default FetchTodos;