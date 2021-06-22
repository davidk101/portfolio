import Header from "./components/header";
import { AnimatePresence } from "framer-motion";
import { Link, Switch, Route } from "react-router-dom";
import Work from "./pages/experience";
import { useState } from "react";

function App() {
    const [pageNo, setPageNo] = useState(0);

    const pageVariants = {
        in: {
            opacity: 1,
            y: 0,
            scale: 1,
        },
        out: {
            opacity: 0,
            y: "-100vh",
            scale: 0.5,
        },
    };

    const pageTransition = {
        type: "spring",
        velocity: 0.1,
        damping: 12,
    };

    return (
        <div className="flex-col flex h-screen overflow-hidden">
            <Header pageNo={pageNo} setPageNo={setPageNo} />
            <div className="flex h-screen main">
            </div>
            <div className="flex-1">
                <AnimatePresence exitBeforeEnter>
                    <Switch>

                        <Route path="/work">
                            <Work
                                setPage={setPageNo}
                                pageVariants={pageVariants}
                                pageTransition={pageTransition}
                            />
                        </Route>
                    </Switch>
                </AnimatePresence>
            </div>

        </div>
    );
}

export default App;
