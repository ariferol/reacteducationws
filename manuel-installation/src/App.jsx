import React from "react";
// style modül haline getirerek kullanmak için. bu yapı ile css class isimleri birbirine karışmaz ve çaılması daha zor olur.
import styles from "./App.module.css";

const App = () => {
    return (
        <section className={styles.App}>
            <h1>React App</h1>
        </section>
    );
};

export default App;