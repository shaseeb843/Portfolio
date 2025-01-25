import React from 'react';
import pic from "../../public/toppic.jpg"
import { BsInstagram } from "react-icons/bs";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoHtml5 } from "react-icons/io5";
import { PiFileCssThin } from "react-icons/pi";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoNodejs } from "react-icons/io";
import { ReactTyped } from "react-typed";








export default function Home() {
  return(
    <>
    <div name="Home" 
    className=' max-w-screen-2xl container mx-auto px-4 md:px-20 my-20'>
       <div className='flex flex-col md:flex-row'>
           <div className='md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1 '>
              <span className='text-xl'>Welcome In My Feed</span>
              <div className='flex space-x-1 text-2xl md:text-4xl'>
              <h1>Hello , I'm a</h1>
              {/*<span className='text-red-700 font-bold'>Developer</span>*/}
              <ReactTyped
               className='text-cyan-700 font-bold'
               strings={["Developer","Programmer","Coder"]}
               typeSpeed={40}
               backSpeed={50}
               loop={true}
        />
              </div>
              <br></br>
              <p className='text-sm md:text-md text-justify'>
              I am a passionate computer science student and tech enthusiast with a knack for turning ideas into innovative digital solutions.I am currently persuing my Bachelor's degree from "Central University of Kashmir".<br></br>
              <br>
              </br>
              My goal is to hone my technical skills, gain hands-on experience in solving complex problems, and eventually establish my own ventures. I thrive at the intersection of creativity and technology, constantly exploring emerging technologies, refining my skills, and pushing the boundaries of what I can achieve.<br></br>
              <br></br>
              
              My journey in tech is fueled by curiosity, determination, and a drive to create meaningful experiences. With every line of code, I aim to bridge the gap between imagination and reality, laying the foundation for ventures that solve real-world challenges. I am excited to collaborate with like-minded individuals and learn from their experiences.<br></br>
              <br></br>
              
              Outside of tech diving, I'm a cricket enthusiast and enjoy both playing and watching the sport.
              </p>
              <br></br>
              {/* social media icons*/}
              <div className='flex flex-col items-center md:flex-row justify-between space-6 md:space-y-0'>
              <div className='space-y-2'>
                <h1 className='font-bold '>Available on</h1>
                <ul className='flex space-x-5'>
                    <li>
                    <a href='https://www.instagram.com/shk_haseeb_/' target='_blank'>
                    <BsInstagram className='text-2xl cursor-pointer' />
                    </a>
                    </li>
                    <li>
                    <a href='https://github.com/shaseeb843' target='_blank'>
                    <FaGithub className='text-2xl cursor-pointer' />
                    </a>
                    </li>
                    <li>
                    <a href='https://www.linkedin.com/in/sheikh-haseeb-0a8738262/' target='_blank'>
                    <FaLinkedin className='text-2xl cursor-pointer' />
                    </a>
                    </li>

                </ul>
              </div>
              <div className='space-y-2'>
              <h1 className='font-bold text-center'>Currently working on</h1>
                <div className='flex space-x-5'>
            <IoLogoHtml5 className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]' />
            <PiFileCssThin className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] ' />
            <IoLogoJavascript className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]' />
            <FaReact className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]' />
            <RiTailwindCssFill className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]' />
            <IoLogoNodejs className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]' />


                </div>
              </div>
              </div>
           </div>
         <div className='md:w-1/2 md:ml-40 md:mt-40 mt-8 order-1'>
         <img src={pic} className='rounded-full md:w-[450px] md:h-[450px]' alt="" />
         </div>
       </div>
    </div>
    
    
    </>
  ) 


}
