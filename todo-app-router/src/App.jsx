import React, { Suspense } from "react";
// style modül haline getirerek kullanmak için. bu yapı ile css class isimleri birbirine karışmaz ve çaılması daha zor olur.
import styles from "./App.module.css";
import Navigator from "./Navigator";

const Loader = () => (
    <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="spinner-border" role="status">
            <span className="visually-hidden">Yükleniyor...</span>
        </div>
    </div>
);

const App = () => {
    return (
        <section className={styles.App}>
            <Suspense fallback={<Loader />}>
                <div className="container">
                    <Navigator />
                </div>
            </Suspense>
        </section>
    );
};

export default App;
