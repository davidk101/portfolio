import React, { useEffect } from "react";
import { motion } from "framer-motion";

const About = ({ setPage, pageVariants, pageTransition }) => {
    useEffect(() => {
        setPage(0);
    });

    return (
        <motion.div
            className="h-full flex"
            exit="out"
            initial="out"
            animate="in"
            variants={pageVariants}
            transition={pageTransition}>

            <div className="flex-1 flex items-center justify-center overflow-auto">
                <div className="ml-0 xl:ml-40 mb-24 w-2/3 my-10">
                    <h1 className="text-4xl mt-12 sm:text-7xl font-bold tracking-wide">
                        full-stack & mobile software engineer.
                    </h1>
                    <p className="sm:ml-1 text-base mt-6 sm:mt-12 sm:text-xl font-serif text-gray-500">
                        <p className = "my-5">
                            
                        </p>
                    </p>

                </div>
            </div>
        </motion.div>
    );
};

export default About;
