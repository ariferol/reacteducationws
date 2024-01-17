import React, { useEffect } from "react";
// style modül haline getirerek kullanmak için. bu yapı ile css class isimleri birbirine karışmaz ve çaılması daha zor olur.
import styles from "./App.module.css";
import TodoApp from "./TodoApp";
//import styles from "./App.module.css";
//import FetchTodos from "./Components/FetchTodos";
/*
import {
    BrowserRouter as Router,
    Route,
    Routes,
} from "react-router-dom";
import Create from "./Components/Create";
import Edit from "./Components/Edit";
import Home from "./Components/Home.js"; 
*/
import "./App.css";

const App = () => {
    return (
         <section className={styles.App}>
            {/* <FetchTodos/>  */}
            <TodoApp />
        </section> 
        /* <div className="App">
            <h1 className="geeks">Sample CRUD app </h1>
            <h3>CRUD App v1</h3>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route
                        path="/create"
                        element={<Create />}
                    />
                    <Route
                        path="/edit"
                        element={<Edit />}
                    />
                </Routes>
            </Router>
        </div> */
    );
};

export default App;
