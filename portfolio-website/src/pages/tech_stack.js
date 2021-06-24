import React, { useEffect } from "react";
import { motion } from "framer-motion";
import {SiJavascript, SiTypescript, SiRedux, SiGooglecloud, SiTerraform, SiKubernetes } from "react-icons/si";
import {AiFillHtml5} from "react-icons/ai";
import {DiGitBranch, DiNodejs, DiJava, DiPostgresql, DiMongodb, DiMysql, DiReact} from 'react-icons/di';
import {FaAws, FaCss3Alt, FaDochub, FaDocker} from 'react-icons/fa';
import {GrGolang} from 'react-icons/gr';


const Tech_Stack = ({ setPage, pageVariants, pageTransition }) => {
    useEffect(() => {
        setPage(3);
    });

    return (
        <motion.div
            className="h-full flex items-center justify-center"
            exit="out"
            initial="out"
            animate="in"
            variants={pageVariants}
            transition={pageTransition}
        >
            <div className="w-15 gap-y-7 gap-x-15 lg:gap-y-30 grid-row 2 grid-cols-3 items-center">

                <div className="inline-flex flex-col items-center">
                    <div className="bg-black w-20 h-20 lg:w-30 lg:h-30 rounded-full flex items-center justify-center">
                        <FaCss3Alt color="white" size="50%" />
                    </div>
                    <span className="font-bold text-sm sm:text-base mt-2">Go</span>
                </div>

                <div className="inline-flex flex-col items-center">
                    <div className="bg-black w-20 h-20 lg:w-30 lg:h-30 rounded-full flex items-center justify-center">
                        <SiJavascript color="white" size="50%" />
                    </div>
                    <span className="font-bold text-sm sm:text-base mt-2">JavaScript</span>
                </div>

                <div className="inline-flex flex-col items-center">
                    <div className="bg-black w-20 h-20 lg:w-30 lg:h-30 rounded-full flex items-center justify-center">
                        <SiTypescript color="white" size="50%" className="mr-2" />
                    </div>
                    <span className="font-bold text-sm sm:text-base mt-2">TypeScript</span>
                </div>

                <div className="inline-flex flex-col items-center">
                    <div className="bg-black w-20 h-20 lg:w-30 lg:h-30 rounded-full flex items-center justify-center">
                        <DiJava color="white" size="50%" />
                    </div>
                    <span className="font-bold text-sm sm:text-base mt-2">Java</span>
                </div>

                <div className="inline-flex flex-col items-center">
                    <div className="bg-black w-20 h-20 lg:w-30 lg:h-30 rounded-full flex items-center justify-center">
                        <AiFillHtml5 color="white" size="50%" className="mr-2" />
                    </div>
                    <span className="font-bold text-sm sm:text-base mt-2">HTML</span>
                </div>

                <div className="inline-flex flex-col items-center">
                    <div className="bg-black w-20 h-20 lg:w-30 lg:h-30 rounded-full flex items-center justify-center">
                        <FaCss3Alt color="white" size="50%" />
                    </div>
                    <span className="font-bold text-sm sm:text-base mt-2">CSS</span>
                </div>
            </div>

            <div className="w-15 gap-y-7 gap-x-20 lg:gap-y-40 grid-row 2 grid-cols-3 items-center">

                <div className="inline-flex flex-col items-center">
                    <div className="bg-black w-20 h-20 lg:w-30 lg:h-30 rounded-full flex items-center justify-center">
                        <DiReact color="white" size="50%" />
                    </div>
                    <span className="font-bold text-sm sm:text-base mt-2">React.js</span>
                </div>

                <div className="inline-flex flex-col items-center">
                    <div className="bg-black w-20 h-20 lg:w-30 lg:h-30 rounded-full flex items-center justify-center">
                        <SiRedux color="white" size="50%" />
                    </div>
                    <span className="font-bold text-sm sm:text-base mt-2">Redux</span>
                </div>

                <div className="inline-flex flex-col items-center">
                    <div className="bg-black w-20 h-20 lg:w-30 lg:h-30 rounded-full flex items-center justify-center">
                        <FaDocker color="white" size="50%" />
                    </div>
                    <span className="font-bold text-sm sm:text-base mt-2">Docker</span>
                </div>

                <div className="inline-flex flex-col items-center">
                    <div className="bg-black w-20 h-20 lg:w-30 lg:h-30 rounded-full flex items-center justify-center">
                        <SiKubernetes color="white" size="50%" />
                    </div>
                    <span className="font-bold text-sm sm:text-base mt-2">Kubernetes</span>
                </div>

            </div>

            <div className="w-8/12 gap-y-7 gap-x-20 lg:gap-y-20 grid-flow-row grid-cols-4 grid-rows-1 items-center">


                <div className="inline-flex flex-col items-center">
                    <div className="bg-black w-20 h-20 lg:w-30 lg:h-30 rounded-full flex items-center justify-center">
                        <DiNodejs color="white" size="50%" />
                    </div>
                    <span className="font-bold text-sm sm:text-base mt-2">Node.js</span>
                </div>


                <div className="inline-flex flex-col items-center">
                    <div className="bg-black w-20 h-20 lg:w-30 lg:h-30 rounded-full flex items-center justify-center">
                        <FaCss3Alt color="white" size="50%" />
                    </div>
                    <span className="font-bold text-sm sm:text-base mt-2">CSS</span>
                </div>

                <div className="inline-flex flex-col items-center">
                    <div className="bg-black w-20 h-20 lg:w-30 lg:h-30 rounded-full flex items-center justify-center">
                        <FaCss3Alt color="white" size="50%" />
                    </div>
                    <span className="font-bold text-sm sm:text-base mt-2">CSS</span>
                </div>

                <div className="inline-flex flex-col items-center">
                    <div className="bg-black w-20 h-20 lg:w-30 lg:h-30 rounded-full flex items-center justify-center">
                        <FaCss3Alt color="white" size="50%" />
                    </div>
                    <span className="font-bold text-sm sm:text-base mt-2">CSS</span>
                </div>

                <div className="inline-flex flex-col items-center">
                    <div className="bg-black w-20 h-20 lg:w-30 lg:h-30 rounded-full flex items-center justify-center">
                        <FaCss3Alt color="white" size="50%" />
                    </div>
                    <span className="font-bold text-sm sm:text-base mt-2">CSS</span>
                </div>

                <div className="inline-flex flex-col items-center">
                    <div className="bg-black w-20 h-20 lg:w-30 lg:h-30 rounded-full flex items-center justify-center">
                        <FaCss3Alt color="white" size="50%" />
                    </div>
                    <span className="font-bold text-sm sm:text-base mt-2">CSS</span>
                </div>

            </div>

        </motion.div>
    );
};

export default Tech_Stack;
