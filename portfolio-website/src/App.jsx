import Header from "./components/header";
import { AnimatePresence } from "framer-motion";
import { Link, Switch, Route } from "react-router-dom";
import { useState } from "react";

function App() {
    const [pageNo, setPageNo] = useState(0);

    return (
        <div className="flex-col flex h-screen overflow-hidden">
            <Header pageNo={pageNo} setPageNo={setPageNo} />
            <div className="flex h-screen main">
            </div>
        </div>
    );
}

export default App;
