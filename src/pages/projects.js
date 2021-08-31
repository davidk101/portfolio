import React, { useState, useEffect } from "react";
import ProjectsCard from "../components/projects";
import { RiArrowLeftCircleFill, RiArrowRightCircleFill } from "react-icons/ri";
import { motion } from "framer-motion";

const Projects = ({ setPage, pageVariants, pageTransition }) => {
    useEffect(() => {
        setPage(2);
    });

    const projectsList = [
        {
            image: "",
            title: "PediaTrek",
            description1:
                "iOS app in Augmented Reality to assist with inpatient mobility and provide patient discharge education",
            description2: "App Acquired by Children’s Health™ - 750,000+ annual patients",
            github: "https://github.com/davidk101",
            website:
                "https://drive.google.com/file/d/1Y0xrkMHWfP8kvtFDRLXDCM11gbhFs2fh/view?usp=sharing",
        },
        {
            image: "",
            title: "Playback Speed Control",
            description1:
                "Google Chrome extension to scrub the playback speed of Blackboard Collaborate videos.",
            description2: "60+ weekly users on the Chrome Webstore.",
            github: "https://github.com/davidk101/playback-speed-control",
            website:
                "https://chrome.google.com/webstore/detail/blackboard-collaborate-pl/llnbibipjggpeacamkhgkkebjgjaahjb",
        },
        {
            image: "",
            title: "WKWebViewGrid",
            description1:
                "Package to add grid functionality to WKWebViews to support in-app browsing for macOS.",
            description2: "10+ installs on CocoaPods",
            github: "https://github.com/davidk101/wkwebviewgrid",
            website:
                "https://chrome.google.com/webstore/detail/blackboard-collaborate-pl/llnbibipjggpeacamkhgkkebjgjaahjb",
        },
        {
            image: "",
            title: "Cryptobite",
            description1:
                "iOS App that allows users to use Proof-Of-Stake algorithms to invest in a real-time cryptocurrency market.",
            description2:"Tech Stack: React Native, AWS Amplify, GraphQL",
            github: "https://github.com/davidk101/cryptobite",
            website: "https://github.com/davidk101/cryptobite",
        },
        {
            image: "",
            title: "Cryptobite Server",
            description1:
                "Blockchain implementation for an iOS App that allows users to use Proof-Of-Stake algorithms to invest in a real-time cryptocurrency market.",
            description2:"Tech Stack: Go",
            github: "https://github.com/davidk101/cyptobite-server",
            website: "https://github.com/davidk101/cyptobite-server",
        },
        {
            image: "",
            title: "Cardstock",
            description1:"Real-time Labor-As-A-Service application that enables users to find, request and and pay for services.",
            description2:"Tech Stack: Swift, Firebase",
            github: "https://github.com/davidk101/cardstock",
            website: "https://github.com/davidk101/cardstock",
        },
        {
            image: "",
            title: "Markdown",
            description1:
                "Website to fetch student discount deals in the Dallas-Fort Worth metroplex.",
            description2:"Tech Stack: React.js, Firebase",
            github: "https://github.com/davidk101/markdown",
            website: "https://github.com/davidk101/markdown",
        },
        {
            image: "",
            title: "Hold on!",
            description1:
                "These are only a few of the projects I've worked on that are either deployed or near-deployed.",
            description2: "I have 40+ repositories with several other projects that I'd love for you to check out!",
            github: "https://github.com/davidk101",
            website:
                "https://github.com/davidk101",
        },

    ];

    const [currentPage, setCurrentPage] = useState(0);
    const length = projectsList.length;

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
                <RiArrowLeftCircleFill
                    size="50"
                    className="cursor-pointer scale-75 lg:scale-100 lg:hover:scale-90 mb-16 transition duration-400 ease-in-out transform hover:-translate-x-1 hover:scale-125"
                    onClick={prevPage}
                />

                {projectsList.map((project, index) => {
                    return (
                        <div
                            key={index}
                            className={
                                index === currentPage ? "card active w-full h-full" : "card"
                            }
                        >
                            {index === currentPage && (
                                <ProjectsCard
                                    img={project.image}
                                    title={project.title}
                                    description1={project.description1}
                                    description2={project.description2}
                                    github={project.github}
                                    website={project.website}
                                />
                            )}
                        </div>
                    );
                })}

                <RiArrowRightCircleFill
                    size="50"
                    className="cursor-pointer scale-75 lg:scale-100 lg:hover:scale-90 mb-16 transition duration-400 ease-in-out transform hover:translate-x-1 hover:scale-125"
                    onClick={nextPage}
                />
            </div>
        </motion.div>
    );
};

export default Projects;
