import React, { Suspense } from "react";
// style modül haline getirerek kullanmak için. bu yapı ile css class isimleri birbirine karışmaz ve çaılması daha zor olur.
import styles from "./App.module.css";
import Navigator from "./Navigator";
import TodoModule from "./modules";

const App = () => {
    return (
        <section className={styles.App}>
            <Suspense fallback={<div>Yükleniyor...</div>}>
                <Navigator />
            </Suspense>
        </section>
    );
};

export default App;
