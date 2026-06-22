import { Route, Routes } from "react-router-dom";
import { V1Main } from "./v1/components/V1Main.js";

function App() {
    return (
        <Routes>
            <Route path="/" element={<V1Main />} />
        </Routes>
    )
}

export { App };
