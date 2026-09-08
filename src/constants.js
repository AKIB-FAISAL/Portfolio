// Skills Section Logos
import cssLogo from './assets/SkillLogo/css.png';
import expressjsLogo from './assets/SkillLogo/express.png';
import figmaLogo from './assets/SkillLogo/figma.png';
import firebaseLogo from './assets/SkillLogo/firebase.png';
import htmlLogo from './assets/SkillLogo/html.png';
import javascriptLogo from './assets/SkillLogo/javascript.png';
import mongodbLogo from './assets/SkillLogo/mongodb.png';
import nextjsLogo from './assets/SkillLogo/nextjs.png';
import nodejsLogo from './assets/SkillLogo/nodejs.png';
import postmanLogo from './assets/SkillLogo/postman.png';
import reactjsLogo from './assets/SkillLogo/reactjs.png';
import reduxLogo from './assets/SkillLogo/redux.png';
import tailwindcssLogo from './assets/SkillLogo/tailwindcss.png';
import vscodeLogo from './assets/SkillLogo/vscode.png';
import gitLogo from './assets/SkillLogo/git.png';
import githubLogo from './assets/SkillLogo/github.png';
import jwt from './assets/SkillLogo/jwt.png';
import compass from './assets/SkillLogo/compass.png';
import wordpress from './assets/SkillLogo/wordpress.png';
import elementor from './assets/SkillLogo/elementor.png';
import weather from './assets/ProjectImg/weather.png';
import ToDo from './assets/ProjectImg/ToDo.png';
import movie from './assets/ProjectImg/movie.png';
import form from './assets/ProjectImg/form.png';
import euro from './assets/edu/euro.jpg';
import mun from './assets/edu/mun.jpg';
import nub from './assets/edu/nub.jpg';
import metagoogle from './assets/SkillLogo/metagoogle.jpg';
export const SkillsInfo = [
    {
        title: 'Frontend',
        skills: [
            { name: 'JavaScript', logo: javascriptLogo },
            { name: 'React JS', logo: reactjsLogo },
            { name: 'Redux', logo: reduxLogo },
            { name: 'Next JS', logo: nextjsLogo },
            { name: 'Tailwind CSS', logo: tailwindcssLogo },
        ],
    },
    {
        title: 'Backend',
        skills: [
            { name: 'Node JS', logo: nodejsLogo },
            { name: 'Express JS', logo: expressjsLogo },
            { name: 'MongoDB', logo: mongodbLogo },
            { name: 'jwt', logo: jwt },
        ],
    },
    {
        title: 'Skills & Tools',
        skills: [
            { name: 'Wordpress', logo: wordpress },
            { name: 'Elementor', logo: elementor },
            { name: 'Git', logo: gitLogo },
            { name: 'GitHub', logo: githubLogo },
            { name: 'Postman', logo: postmanLogo },
            { name: 'Compass', logo: compass },
            { name: 'Figma', logo: figmaLogo },
            { name: 'Meta & Google Ads', logo: metagoogle },
        ],
    },
];

export const projects = [
    {
        id: 1,
        title: "Weather App",
        description:
            "A full-stack Weather Forecast App helping users check accurate 3-day Weather forecasts for cities,towns, and districts in a clear and organized way.",
        image: weather,
        tags: ["React JS", "Node.js", "Express", "Api",],
        github: "https://github.com/AKIB-FAISAL/Weather.git",
        webapp: "https://weather-blue-eta.vercel.app/",
    },
    {
        id: 2,
        title: "To-Do App",
        description:
            "A full-featured React To-Do App allowing users to add, edit, update and delete tasks easily.",
        image: ToDo,
        tags: ["React JS", "Tailwind", "JavaScript"],
        github: "https://github.com/AKIB-FAISAL/To-Do-With-React.git",
        webapp: "https://todo-with-react-blush.vercel.app/",
    },
    {
        id: 3,
        title: "Movie Searching App",
        description:
            "A React app to search and discover movies by genre, popularity, and user preferences with a smooth, intuitive interface.",
        image: movie,
        tags: ["React JS", "API", "Tailwind", "JS"],
        github: "https://github.com/AKIB-FAISAL/A-Flix-Movie.git",
        webapp: "https://a-flix-movie.vercel.app/",
    },
    {
        id: 4,
        title: "Simple Form Validation",
        description:
            "Ensures user-friendly and error-free data entry through a simple form validation system built with HTML,CSS, and JavaScript.",
        image: form,
        tags: ["JavaScript", "HTML", "CSS"],
        github: "https://github.com/AKIB-FAISAL/Dom-Project.git",
        webapp: "https://akib-faisal.github.io/Dom-Project/",
    },
];


export const edu = [
    {
        id: 1,
        img: nub,
        institution: "Northern University Bangladesh",
        year: "2026 -present",
        pursuing: "pursuing B.Sc in CSE",
        desc: "Currently pursuing a Bachelor's degree in Computer Science and Engineering (CSE) at Northern University Bangladesh, gaining a solid understanding of algorithms, data structures, and software development methodologies.",

    },
    
    
    
    {
        id: 2,
        img: mun,
        institution: "Munshiganj Polytechnic Institute",
        year: "2022 – 2026",
        grade: "3.18 CGPA",
        desc: "Completed Diploma in Computer Science and Technology (CST) at Munshiganj Polytechnic Institute, building a strong foundation in programming, web development, and software engineering principles.",
    },
     {
        id: 3,
        img: euro,
        institution: "European IT Institute (intern: MERN Stack Devlopment)",
        year: "2 Sept - 2 dec 2025",
        //   grade: "73.2%",
        desc: "Completed an intensive MERN Stack development course covering Javascript, MongoDB, Express, React, and Node.js. Gained hands-on experience building full-stack web applications, working with APIs, databases, and modern web development tools."
    }];