import React from 'react';
import change from "../../public/change.png";
import list from "../../public/list.png";
import react from "../../public/react.png";

function Portfolio() {
    const cardItem = [
        {
            id: 1,
            logo: change,
            name: "Color-Change",
            link: "https://color-change-chi.vercel.app/",
            sourceCode: "https://github.com/shaseeb843/color-change"
        },
        {
            id: 2,
            logo: list,
            name: "To-Doo-List",
            link: "https://to-doo.vercel.app/", // Replace with the actual link for the To-Do List
            sourceCode: "https://github.com/shaseeb843/to_doo" // Replace with the actual GitHub link
        },
        {
            id: 3,
            logo: react,
            name: "Portfolio",
            link: "https://benevolent-unicorn-8f4bb3.netlify.app/", // Replace with the actual link for the Portfolio
            sourceCode: "https://github.com/shaseeb843/Portfolio" // Replace with the actual GitHub link
        },
    ];

    return (
        <div name="Portfolio"
         className='max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10'>
            <div>
                <h1 className='text-3xl font-bold mb-5'>Portfolio</h1>
                <span className='underline semi-bold'>
                    Featured Projects
                </span>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-11 my-5'>
                    {cardItem.map(({ id, logo, name, link, sourceCode }) => (
                        <div 
                            className='md:w-[300px] md:h-[300px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300' 
                            key={id}
                        >
                            <img 
                                src={logo} 
                                className='w-[120px] h-[120px] p-1 rounded-full border-[2px]' 
                                alt={name} 
                            />
                            <div>
                                <div className='px-2 font-bold text-xl mb-2'>
                                    {name}
                                </div>
                                <div className='px-6 py-4 space-x-3 justify-around'>
                                    <a 
                                        href={link} 
                                        target='_blank' 
                                        rel="noopener noreferrer"
                                       
                                    >
                                        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded'>
                                            Open
                                        </button>
                                    </a>
                                    <a 
                                        href={sourceCode} 
                                       
                                    >
                                        <button className='bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded'>
                                            Source Code
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Portfolio;
