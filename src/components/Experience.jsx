import React from 'react';
import change from "../../public/change.png";
import list from "../../public/list.png";
import react from "../../public/react.png";
import html from "../../public/html.png";
import files from "../../public/files.png";
import javascript from "../../public/java-script.png";
import atom from "../../public/atom.png";
import figma from "../../public/figma.png";
import programing from "../../public/programing.png";
import oracle from "../../public/oracle.png";
function Experience() {
    const cardItem = [
        {
            id: 1,
            logo: html,
            name: "Html",
            
        },
        {
            id: 2,
            logo: files,
            name: "Css",
            
        },
        {
            id: 3,
            logo: javascript,
            name: "Java",
            
        },
        {
            id: 4,
            logo: atom,
            name: "React",
            
        },
        {
            id: 5,
            logo: figma,
            name: "Figma",
            
        },
        {
            id: 6,
            logo: programing,
            name: "Nodejs",
            
        },
        {
            id: 7,
            logo: oracle,
            name: "Oracle",
            
        },
    ];

    return (
        <div name="Experience"
         className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-16'>
            <div>
                <h1 className='text-3xl font-bold mb-5'>Experience</h1>
                
                <div className='grid grid-cols-2 md:grid-cols-3 gap-7 my-3'>
                    {cardItem.map(({ id, logo, name, link, sourceCode }) => (
                        <div 
                            className='flex flec-col items-center justify-center border-[2px] rounded-full md:w-[200px] md:h-[200px] shadow-md p-1 cursor-pointer hover:scale-110 duration-300' 
                            key={id}
                        >
                            <img 
                                src={logo} 
                                className='w-[120px] h-[120px]  p-1 rounded-full ' 
                                
                            />
                            <div>
                                <div className=''>
                                    {name}
                                </div>
                                
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Experience;
