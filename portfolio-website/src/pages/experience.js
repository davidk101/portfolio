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
            head1: "Beyond The Horizon Technology",
            head2: "Incoming Data Engineer Intern | August 2021 - December 2021 | Startup",
        },
        {
            head1: "NCR Corporation",
            head2: "Software Engineer Intern | May - August 2021 | Fortune 500",
            body1:
                "Deployed a feature being rolled out to 500+ new restaurants in North America every month starting in Q1 of 2022 to establish IoT security across the entire lifecycle of Point-Of-Sale terminal systems.",
            body2:
                "Built an API to initiate a chain of trust between handheld devices and Kubernetes clusters on-prem.",
            body3:"Reduced the time taken to bootstrap trust in clusters of newly manufactured handheld devices by 50%.",
            body4:"Tech Stack:  Go, Docker, Kubernetes, Terraform, GCP"
        },
        {
            head1: "Autism Treatment Center",
            head2: "Software Developer | January - May 2021 | Startup",
            body1:
                "Implemented a patient management system in-house to reduce expenditure by $15,000 annually.",
            body2:
                "Architected user authentication and authorization for delegation of administrative privileges while meeting HIPAA privacy standards.",
            body3: "Developed a RESTful API to manage patient, therapist and session data.",
            body4:"Tech Stack:  Node.js, Express.js, React.js, TypeScript, MongoDB"
        },
        {
            head1: "Association for Computing Machinery",
            head2: "Undergraduate Researcher | February - May 2021",
            body1:
                "Improved the utility of temporal LiDAR data in the semantic segmentation of objects on the road by an accuracy of 3-5%.",
            body2:
                "Implemented a Local Feature Aggregation model for the LiDAR point cloud.",
            body3:"Increased the density of the LiDAR point cloud by utilizing the Iterative Closest Point algorithm.",
            body4:"Tech Stack: Python, C++, TensorFlow"
        },
        {
            head1: "City of Dallas - Office of Innovation",
            head2: "Software Developer | August - December 2020",
            body1:
                "Developed an API to retrieve service request data from the Salesforce database schema in real-time.",
            body2:
                "Optimized retrieval of service request data for the preceding 60 months by 30%.",
            body3:"Automated 'Service Performance Reports' generation for Dallas' 14 City Council Members.",
            body4:"Tech Stack:  Node.js, Express.js, React.js, TypeScript, SOQL"
        },
        {
            head1: "UT Dallas",
            head2: "Peer Advisor| August 2019 - May 2021",
            body1:
                "Advised and mentored 40+ undergraduate Engineering majors for four semesters to promote academic excellence in the field of Engineering while ensuring a smooth transition from high school to college.",

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
