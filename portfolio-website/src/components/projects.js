import React from "react";
import { AiOutlineLink} from "react-icons/ai";
import { RiGithubLine} from "react-icons/ri";

const ProjectCard = ({ img, title, description1, description2, github, website }) => {
    return (
        <div className="h-full flex mb-16 items-center justify-center">

            <div className="flex flex-col justify-center w-4/5 lg:w-3/5">
                <h1 className="font-bold text-3xl sm:text-3xl">{title}</h1>
                <div>
                    <p className="ml-1 font-serif text-gray-500 my-5">{description1}</p>
                </div>
                <div>
                    <p className="ml-1 font-serif text-gray-500 my-1">{description2}</p>
                </div>
                <div className="flex md:mt-4">
                    <a href={github} target="_blank" rel="noopener noreferrer">
                        <RiGithubLine size="35" className="ml-1 cursor-pointer" color = "darkgray"/>
                    </a>
                    <a href={website} target="_blank" rel="noopener noreferrer">
                        <AiOutlineLink size="35" className="ml-6 cursor-pointer" color = "darkgray"/>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
