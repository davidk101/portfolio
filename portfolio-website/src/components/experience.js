import React from "react";

const WorkCard = ({ head1, head2, body1, body2, body3, body4 }) => {
    return (
        <div className="flex-1 h-full flex flex-col items-center justify-center mb-16">
            <div className="w-11/12 xl:w-7/12 flex flex-col">
                <h1 className="font-bold text-3xl md:text-4xl">{head1}</h1>
                <p className="ml-2 mt-4 text-sm md:text-lg text-gray-500 font-serif font-medium">
                    {head2}
                </p>
                <ul className="list-disc mt-10 ml-6 text-gray-500 font-serif text-lg">
                    <li className="text-sm md:text-base list-none">{body1}</li>
                    <li className="mt-4 text-sm md:text-base list-none">{body2}</li>
                    <li className="mt-4 text-sm md:text-base list-none">{body3}</li>
                    <li className="mt-4 text-sm md:text-base list-none">{body4}</li>
                </ul>
            </div>
        </div>
    );
};

export default WorkCard;
