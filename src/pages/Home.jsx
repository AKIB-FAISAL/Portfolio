import { ThemeToggle } from "../components/ThemeToggle";
import { Star} from "../components/Star";
import { Navbar } from "../components/Navbar";
import {About} from "../components/About";
import {Skills} from "../components/Skills";
import {Project} from "../components/Project";
import{Education} from "../components/Education";
import{Contact} from "../components/Contact";
import{Footer} from "../components/Footer";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden 
                    flex items-start justify-center ">
            {}
      <ThemeToggle />

      <Star />
      <Navbar />
      <main>
         <About />
         <Skills />
         <Project />
         <Education />
         <Contact />
         <Footer />
      </main>
    </div>
  );
};
