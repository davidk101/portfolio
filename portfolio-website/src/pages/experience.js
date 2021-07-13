import React, { useState, useEffect } from "react";
import WorkCard from "../components/experience";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { motion } from "framer-motion";

const Work = ({ setPage, pageVariants, pageTransition }) => {
    useEffect(() => {
        setPage(1);
    });

    const workList = [
        {
            head1: "Beyond The Horizon Technology",
            head2: "Software Engineer Intern",
            head3: "August 2021 - Present",
            body1:
                "fgvw",
            body2:
                "sss",
        },
        {
            head1: "Beyond The Horizon Technology",
            head2: "Software Engineer Intern",
            head3: "August 2021 - Present",
            body1:
                "dninv",
            body2:
                "sss",
        }
    ];

    const [currentPage, setCurrentPage] = useState(0);
    const length = workList.length;

    const nextPage = () => {
        setCurrentPage(currentPage === length - 1 ? 0 : currentPage + 1);
    };

    const prevPage = () => {
        setCurrentPage(currentPage === 0 ? length - 1 : currentPage - 1);
    };

    return (
        <motion.div
            className="flex h-full items-center justify-center"
            exit="out"
            initial="out"
            animate="in"
            variants={pageVariants}
            transition={pageTransition}
        >
            <div className="h-3/4 w-11/12 sm:w-10/12 flex items-center">
                <IoIosArrowBack
                    size="50"
                    className="cursor-pointer scale-75 lg:scale-100 lg:hover:scale-90 mb-16 transition duration-400 ease-in-out transform hover:-translate-x-1 hover:scale-125"
                    onClick={prevPage}
                />

                {workList.map((work, index) => {
                    return (
                        <div
                            key={index}
                            className={index === currentPage ? "card active w-full" : "card"}>

                            {index === currentPage && (
                                <WorkCard
                                    head1={work.head1}
                                    head2={work.head2}
                                    head3={work.head3}
                                    body1={work.body1}
                                    body3={work.body2}/>
                            )}
                        </div>
                    );
                })}

                <IoIosArrowForward
                    size="50"
                    className="cursor-pointer scale-75 lg:scale-100 lg:hover:scale-90 mb-16 transition duration-400 ease-in-out transform hover:translate-x-1 hover:scale-125"
                    onClick={nextPage}
                />
            </div>
        </motion.div>
    );
};

export default Work;
