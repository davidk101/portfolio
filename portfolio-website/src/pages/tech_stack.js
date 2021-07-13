import React, { useEffect } from "react";
import { motion } from "framer-motion";
import {SiJavascript, SiTypescript, SiCocoapods, SiFirebase, SiRedux, SiGooglecloud, SiTerraform, SiKubernetes } from "react-icons/si";
import {AiFillHtml5} from "react-icons/ai";
import {DiGitBranch, DiNodejs, DiJava, DiPostgresql, DiMongodb, DiMysql, DiReact, DiPython, DiSwift} from 'react-icons/di';
import {FaAws, FaCss3Alt, FaDochub, FaDocker} from 'react-icons/fa';

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
            <div className = "grid grid-cols-3 md:grid-cols-7 overflow-auto ml-20 mr-20 overflow-auto">

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
                        <DiPython color="white" size="50%" />
                    </div>
                    <span className="font-bold text-sm sm:text-base mt-2">Python</span>
                </div>

                <div className="inline-flex flex-col items-center">
                    <div className="bg-black w-20 h-20 lg:w-30 lg:h-30 rounded-full flex items-center justify-center">
                        <SiJavascript color="white" size="50%" />
                    </div>
                    <span className="font-bold text-sm sm:text-base mt-2">JavaScript</span>
                </div>

                <div className="inline-flex flex-col items-center">
                    <div className="bg-black w-20 h-20 lg:w-30 lg:h-30 rounded-full flex items-center justify-center">
                        <DiSwift color="white" size="50%" />
                    </div>
                    <span className="font-bold text-sm sm:text-base mt-2">Swift</span>
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

                <div className="inline-flex flex-col items-center">
                    <div className="bg-black w-20 h-20 lg:w-30 lg:h-30 rounded-full flex items-center justify-center">
                        <DiReact color="white" size="50%" />
                    </div>
                    <span className="font-bold text-sm sm:text-base mt-2">React.js</span>
                </div>

                <div className="inline-flex flex-col items-center">
                    <div className="bg-black w-20 h-20 lg:w-30 lg:h-30 rounded-full flex items-center justify-center">
                        <DiNodejs color="white" size="50%" />
                    </div>
                    <span className="font-bold text-sm sm:text-base mt-2">Node.js</span>
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

                <div className="inline-flex flex-col items-center">
                    <div className="bg-black w-20 h-20 lg:w-30 lg:h-30 rounded-full flex items-center justify-center">
                        <SiTerraform color="white" size="50%" />
                    </div>
                    <span className="font-bold text-sm sm:text-base mt-2">Terraform</span>
                </div>

                <div className="inline-flex flex-col items-center">
                    <div className="bg-black w-20 h-20 lg:w-30 lg:h-30 rounded-full flex items-center justify-center">
                        <FaAws color="white" size="50%" />
                    </div>
                    <span className="font-bold text-sm sm:text-base mt-2">AWS</span>
                </div>


                <div className="inline-flex flex-col items-center">
                    <div className="bg-black w-20 h-20 lg:w-30 lg:h-30 rounded-full flex items-center justify-center">
                        <SiGooglecloud color="white" size="50%" />
                    </div>
                    <span className="font-bold text-sm sm:text-base mt-2">GCP</span>
                </div>

                <div className="inline-flex flex-col items-center">
                    <div className="bg-black w-20 h-20 lg:w-30 lg:h-30 rounded-full flex items-center justify-center">
                        <DiPostgresql color="white" size="50%" />
                    </div>
                    <span className="font-bold text-sm sm:text-base mt-2">PostgreSQL</span>
                </div>

                <div className="inline-flex flex-col items-center">
                    <div className="bg-black w-20 h-20 lg:w-30 lg:h-30 rounded-full flex items-center justify-center">
                        <DiMongodb color="white" size="50%" />
                    </div>
                    <span className="font-bold text-sm sm:text-base mt-2">MongoDB</span>
                </div>

                <div className="inline-flex flex-col items-center">
                    <div className="bg-black w-20 h-20 lg:w-30 lg:h-30 rounded-full flex items-center justify-center">
                        <SiFirebase color="white" size="50%" />
                    </div>
                    <span className="font-bold text-sm sm:text-base mt-2">Firebase</span>
                </div>

                <div className="inline-flex flex-col items-center">
                    <div className="bg-black w-20 h-20 lg:w-30 lg:h-30 rounded-full flex items-center justify-center">
                        <DiMysql color="white" size="50%" />
                    </div>
                    <span className="font-bold text-sm sm:text-base mt-2">MySQL</span>
                </div>

                <div className="inline-flex flex-col items-center">
                    <div className="bg-black w-20 h-20 lg:w-30 lg:h-30 rounded-full flex items-center justify-center">
                        <DiGitBranch color="white" size="50%" />
                    </div>
                    <span className="font-bold text-sm sm:text-base mt-2">Git</span>
                </div>

                <div className="inline-flex flex-col items-center">
                    <div className="bg-black w-20 h-20 lg:w-30 lg:h-30 rounded-full flex items-center justify-center">
                        <SiCocoapods color="white" size="50%" />
                    </div>
                    <span className="font-bold text-sm sm:text-base mt-2">Cocoapods</span>
                </div>
            </div>
        </motion.div>
    );
};

export default Tech_Stack;
