import Header from "./components/header";
import About from "./pages/about";
import Projects from "./pages/projects";
import Work from "./pages/experience";
import TechStack from "./pages/tech_stack";
import { AnimatePresence } from "framer-motion";

import { Link, Switch, Route } from "react-router-dom";
import { useState } from "react";

function App() {
    const [pageNo, setPageNo] = useState(0);

    const selectedCSS = "my-4 font-extrabold mx-4 cursor-default";
    const deSelectedCSS =
        "my-4 mx-4 text-xs font-bold text-gray-400 transition duration-300 ease-in-out transform hover:text-gray-700";

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
        type: "tween",
        duration: 0.5
     };

    return (
        <div className="flex-col flex h-screen overflow-hidden">
            <Header pageNo={pageNo} setPageNo={setPageNo} />
            <div className="flex h-screen main">

                {/* Pages */}
                <div className="flex-1">
                    <AnimatePresence exitBeforeEnter>
                        <Switch>
                            <Route path="/projects">
                                <Projects
                                    setPage={setPageNo}
                                    pageVariants={pageVariants}
                                    pageTransition={pageTransition}
                                />
                            </Route>
                            <Route path="/experience">
                                <Work
                                    setPage={setPageNo}
                                    pageVariants={pageVariants}
                                    pageTransition={pageTransition}
                                />
                            </Route>
                            <Route path="/tech_stack">
                                <TechStack
                                    setPage={setPageNo}
                                    pageVariants={pageVariants}
                                    pageTransition={pageTransition}
                                />
                            </Route>
                            <Route path="/">
                                <About
                                    setPage={setPageNo}
                                    pageVariants={pageVariants}
                                    pageTransition={pageTransition}
                                />
                            </Route>
                        </Switch>
                    </AnimatePresence>
                </div>

                {/* Page Selector */}
                <div className="w-40 hidden md:flex flex-col justify-center mb-16">
                    <div className="flex flex-col">
                        <div className={pageNo === 0 ? selectedCSS : deSelectedCSS}>
                            <Link
                                to="/"
                                className={pageNo === 0 ? "cursor-default" : ""}
                                onClick={() => setPageNo(0)}
                            >
                                <span className="tracking-wide">ABOUT</span>
                            </Link>
                        </div>
                        <div className={pageNo === 1 ? selectedCSS : deSelectedCSS}>
                            <Link
                                to="/experience"
                                className={pageNo === 1 ? "cursor-default" : ""}
                                onClick={() => setPageNo(1)}
                            >
                                <span className="tracking-wide">EXPERIENCE</span>
                            </Link>
                        </div>
                        <div className={pageNo === 2 ? selectedCSS : deSelectedCSS}>
                            <Link
                                to="/projects"
                                className={pageNo === 2 ? "cursor-default" : ""}
                                onClick={() => setPageNo(2)}
                            >
                                <span className="tracking-wide">PROJECTS</span>
                            </Link>
                        </div>
                        <div className={pageNo === 3 ? selectedCSS : deSelectedCSS}>
                            <Link
                                to="/tech_stack"
                                className={pageNo === 3 ? "cursor-default" : ""}
                                onClick={() => setPageNo(3)}
                            >
                                <span className="tracking-wide">TECH STACK</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
