import React, { useState, useEffect } from "react";
import WorkCard from "../components/experience";
import { RiArrowLeftCircleFill, RiArrowRightCircleFill } from "react-icons/ri";
import { motion } from "framer-motion";

const Work = ({ setPage, pageVariants, pageTransition }) => {
    useEffect(() => {
        setPage(1);
    });

    const workList = [
        {
            head1: "Amazon",
            head2: "Incoming Software Development Engineer - June 2022",
            body1: "",
            body2: "",
        },
        {
            head1: "Beyond The Horizon Technology",
            head2: "Software Engineering Intern | January - May 2022",
            body1: "Kubernetes-native CI/CD pipeline development\n",
            body2: "Tech: Java, OpenShift, AWS, Tekton",
        },
        {
            head1: "Beyond The Horizon Technology",
            head2: "Data Engineering Intern | August - December 2021",
            body1: "Enterprise Architecture",
            body2: "Tech: Bash, Python, AWS, SQL",
        },
        {
            head1: "NCR Corporation",
            head2: "Software Engineering Intern | May - August 2021",
            body1:
                "IoT Security for in-store devices",
            body2:
                "Tech: Go, Kubernetes, Terraform, Google Cloud Platform"
        },
        {
            head1: "Autism Treatment Center",
            head2: "Software Development Intern | January - May 2021 ",
            body1:
                "API for an in-house patient management system",
            body2:
                "Tech: Node.js, Express.js, React.js, TypeScript, MongoDB",
        },
        {
            head1: "Association for Computing Machinery",
            head2: "Undergraduate Researcher | January - May 2021",
            body1:
                "Utility of temporal LiDAR data in semantic segmentation\n",
            body2:
                "Tech: Python",
            body3:"Advisor: Dr. Nicholas Ruozzi",
            body4:"Honors: Awarded First Place overall at the Research Symposium"
        },
        {
            head1: "City of Dallas - Office of Innovation",
            head2: "Software Development Intern | August - December 2020",
            body1:
                "API for a real-time Service Request dashboard",
            body2:
                "Tech: Node.js, Express.js, React.js, TypeScript",
        },
        {
            head1: "UT Dallas",
            head2: "Peer Advisor| August 2019 - May 2021",
            body1:
                "Mentored and Advised 40+ undergraduate Engineering majors for five semesters.",

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
                <RiArrowLeftCircleFill
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
                                    body1={work.body1}
                                    body2={work.body2}
                                    body3={work.body3}
                                    body4={work.body4}/>
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

export default Work;
