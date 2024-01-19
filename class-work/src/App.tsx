import React from "react";
import Navigator from "./Navigator";
import { AuthProvider } from "./Contexts/AuthContext";

const App = () => {
    return (
        <main>
            <AuthProvider>
                <Navigator />
            </AuthProvider>
        </main>
    );
};

export default App;
