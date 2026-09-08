import React from 'react';
// import ReactTypingEffect from 'react-typing-effect'; // Unused, keeping it commented out
import Tilt from 'react-parallax-tilt';
import { Typewriter } from 'react-simple-typewriter';
import Profile from '../assets/Akib.jpg';
import { FaGithub, FaLinkedin } from "react-icons/fa";


export const About = () => {
    // Brand Color: #8245ec (Purple/Violet)

    return (
        <section
            id="about"
            className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32"
        >
            <div className="flex flex-col-reverse md:flex-row justify-between items-center">
                {/* Left Side */}
                <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">

                    {/* Greeting (Updated for Two Themes) */}
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground  mb-2 leading-tight">
                        Hi, I am
                    </h1>

                    {/* Name (Updated for Two Themes) */}
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-4 leading-tight">
                        <span className='text-[#8245ec]'>Akib </span>Faisal
                    </h2>

                    {/* Skills Heading with Typing Effect (Updated for Two Themes) */}
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 leading-tight">
                        {/* Light: Black, Dark: White */}
                        <span className="text-foreground">I am a </span>
                        {/* Always Brand Color */}
                        <span className="text-[#8245ec]">
                            <Typewriter
                                words={['Frontend Developer', 'Web Developer', 'MERN Stack Devloper','Meta & Google Ads Specialist', 'Programmer']}
                                loop={0}
                                cursor
                                cursorStyle="|"
                                typeSpeed={100}
                                deleteSpeed={50}
                                delaySpeed={2000}
                            />
                        </span>
                    </h3>

                    {/* Social Icons */}
                    <div className="flex items-center gap-4 justify-center md:justify-start mt-3">

                        <a
                            href="https://github.com/AKIB-FAISAL"
                            className="text-foreground text-2xl hover:text-[#8245ec] transition"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaGithub />
                        </a>

                        <a
                            href="https://www.linkedin.com/in/mdakibfaisal/"
                            className="text-foreground text-2xl hover:text-[#8245ec] transition"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaLinkedin />
                        </a>

                    </div>











                    {/* About Me Paragraph (Fixed for Two Themes) */}
                    <p className="text-base sm:text-lg md:text-lg text-foreground mb-10 mt-8 leading-relaxed">
I am a MERN stack developer specializing in front-end development, with solid experience in back-end, APIs, databases, and WordPress/CMS. I'm also a Meta &amp; Google Ads specialist, building clean, efficient web apps that drive real results.
                    </p>

                    {/* Resume Button - Remains Good (White Text on Gradient) */}
                    {/* Buttons Container */}
                    <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-6">
                        {/* Download Resume */}
                        <a
                            href="/Akib_Resume.pdf" // Replace with your resume file
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 md:flex-none text-center bg-linear-to-r from-[#8245ec] to-[#a855f7] text-white py-3 px-6 rounded-full font-semibold transition transform hover:scale-105 min-w-37.5"
                        >
                           📥Download Resume
                        </a>

                        {/* Get In Touch */}
                        <a
                            href="#contact"
                            className="flex items-center justify-center flex-1 md:flex-none text-center bg-blue-600 text-white py-3 px-6 rounded-full font-semibold transition transform hover:bg-blue-700 min-w-37.5"
                        >
                            Get In Touch
                        </a>

                        {/* View My Work */}
                        <a
                            href="#projects"
                            className="flex-1 md:flex-none text-center bg-gray-200 text-gray-800 py-3 px-6 rounded-full font-semibold transition transform hover:bg-gray-300 min-w-37.5"
                        >
                            View My Work
                        </a>
                    </div>


                </div>

                {/* Right Side */}
                <div className="md:w-1/2 flex justify-center md:justify-end">
                    <Tilt
                        className="w-48 h-48 sm:w-64 sm:h-64 md:w-120 md:h-120 border-4 border-[#8245ec] dark:border-purple-500 rounded-full" // Border color updated for dark/light contrast
                        tiltMaxAngleX={10}
                        tiltMaxAngleY={10}
                        perspective={1000}
                        scale={1.05}
                        transitionSpeed={1000}
                        gyroscope={true}
                    >
                        <img
                            src={Profile}
                            alt="Akib Faisal"
                            className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
                        />
                    </Tilt>
                </div>
            </div>
        </section>
    );
};