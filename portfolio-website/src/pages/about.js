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

            <div className="flex-1 flex items-center justify-center">
                <div className="ml-0 xl:ml-32 mb-24 w-2/3">
                    <h1 className="text-4xl mt-12 sm:text-8xl font-bold tracking-wide">
                        full stack and mobile software engineer
                    </h1>
                    <div className="bg-black h-1 w-12 ml-1 sm:w-24 sm:ml-2 mt-2"></div>
                    <p className="sm:ml-1 text-base mt-6 sm:mt-12 sm:text-lg">
                        Intro here!
                    </p>

                </div>
            </div>
        </motion.div>
    );
};

export default About;
